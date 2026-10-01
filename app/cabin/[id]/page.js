import Cabin from "@/app/_components/Cabin";
import DateSelector from "@/app/_components/DateSelector";
import LoginMessage from "@/app/_components/LoginMessage";
import ReservationForm from "@/app/_components/ReservationForm";
import { auth } from "@/app/_lib/auth";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";

// PLACEHOLDER DATA

export async function generateMetadata({ params }) {
  const { id } = params;
  const cabinData = await getCabin(id);
  return {
    title: `Cabin - ${cabinData.name}`,
    description: `Cabin ${cabinData.name} has a maximum capacity of ${cabinData.maxCapacity} and the regular price is ${cabinData.regularPrice} ${cabinData.discount === 0 ? "And has no discount" : `Has a discount of ${cabinData.discount}`}`,
    // description:
  };
}

// export async function generateStaticParams() {
//   const cabins = await getCabins();
//   const ids = cabins.map((cabin) => ({ id: String(cabin.id) }));
//   return ids;
// }

export default async function Page({ params }) {
  const cabinId = params.id;
  const [cabin, settings, cabinBookedDate] = await Promise.all([
    getCabin(cabinId),
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  const session = await auth();

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-8">
          Reserve cabin {name} today. Pay on arrival.
        </h2>
        <div className="grid grid-cols-2 items-center gap-10">
          <DateSelector cabin={cabin} />
          {session?.user ? (
            <ReservationForm session={session} cabin={cabin} />
          ) : (
            <LoginMessage />
          )}
        </div>
      </div>
    </div>
  );
}
