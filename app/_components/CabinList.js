import CabinCard from "@/app/_components/CabinCard";
import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";

export default async function CabinList({ filter }) {
  noStore();
  const cabins = await getCabins();
  if (cabins.length === 0) return null;
  let filteredCabin;
  if (filter === "all") {
    filteredCabin = cabins;
  }
  if (filter === "small") {
    filteredCabin = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    filteredCabin = cabins.filter(
      (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity <= 6,
    );
  }
  if (filter === "large") {
    filteredCabin = cabins.filter((cabin) => cabin.maxCapacity >= 7);
  }
  // console.log(filteredCabin);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabin.length === 0 && (
        <div className="text-2xl text-red-400">
          <p>
            {" "}
            There are no {filter} cabins, please search for other available
            cabins!
          </p>
        </div>
      )}
      {filteredCabin.length > 0 &&
        filteredCabin.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
    </div>
  );
}
