import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  const { name } = session.user;
  const firstName = name.split(" ").at(0);

  return (
    <div className="font-semibold text-2xl text-accent-400 mb-7">
      <h2>Welcome {firstName}</h2>
    </div>
  );
}
