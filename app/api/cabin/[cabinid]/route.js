import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinid } = params;
  try {
    const [cabin, bookedCabinDates] = await Promise.all([
      getCabin(cabinid),
      getBookedDatesByCabinId(cabinid),
    ]);
    return Response.json({ cabin, bookedCabinDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
