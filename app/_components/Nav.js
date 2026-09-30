import { auth } from "../_lib/auth";
import Navigation from "./Navigation";

export default async function Nav() {
  const session = await auth();
  console.log(session);
  return <Navigation session={session} />;
}
