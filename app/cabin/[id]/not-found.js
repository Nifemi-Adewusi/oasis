"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

function NotFound() {
  const params = useParams();
  const { id } = params;
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This cabin with ID {id} could not be found :(
      </h1>
      <Link
        href="/cabin"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back to Cabins List
      </Link>
    </main>
  );
}

export default NotFound;
