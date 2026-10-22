"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { deleteBooking } from "../_lib/data-service";
import { revalidatePath } from "next/cache";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
  const [pending, startTransition] = useTransition();

  // function handleDeleteReservation (bookingId) => {
  //   startTransition((async) => {
  //     await deleteBooking(bookingId)
  //   });
  // };
  const handleDeleteReservation = () => {
    if (confirm("Are you sure you want to delete this booking?"))
      startTransition(async () => {
        await deleteBooking(bookingId);
      });
    revalidatePath("/account/reservations");
  };
  return (
    <button
      onClick={handleDeleteReservation}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">
        {pending ? (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        ) : (
          "Delete"
        )}
      </span>
    </button>
  );
}

export default DeleteReservation;
