"use client";

import Spinner from "@/app/_components/Spinner";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  console.log(params);
  const cabinId = params?.id;
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p>Loading Cabin with Id {cabinId}</p>
    </div>
  );
}
