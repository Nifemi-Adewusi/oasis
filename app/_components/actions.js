"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut, auth } from "../_lib/auth";
import { getBookings, updateGuest } from "../_lib/data-service";
import { deleteBooking } from "../_lib/data-service";
import { redirect } from "next/navigation";
import { supabase } from "../_lib/supabase";

export async function updateProfile(formData) {
  const session = await auth();
  const userId = session.user.guestId;
  if (!session) throw new Error("You must be logged in to update your profile");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{8,20}$/.test(nationalID)) {
    throw new Error("Please Provide A Valid National ID");
  }

  const updatedData = { nationality, countryFlag, nationalID };
  await updateGuest(userId, updatedData);
  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to delete a booking");
  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  console.log(formData);
  const session = await auth();
  if (!session) throw new Error("You must be logged in ");
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  console.log("guestBookingIds", guestBookingIds);
  if (!guestBookingIds.includes(Number(formData.get("bookingId"))))
    throw new Error("You can only update your own bookings");
  const updatedFields = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  const bookingId = Number(formData.get("bookingId"));
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
