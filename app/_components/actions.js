"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut, auth } from "../_lib/auth";
import { updateGuest } from "../_lib/data-service";

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
