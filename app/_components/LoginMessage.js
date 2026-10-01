"use client";

import Link from "next/link";
import { useReservationContext } from "./ReservationContext";

function LoginMessage() {
  const { selectedCabin } = useReservationContext();
  console.log(selectedCabin);
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve
        <br /> cabin {selectedCabin} right now
      </p>
    </div>
  );
}

export default LoginMessage;
