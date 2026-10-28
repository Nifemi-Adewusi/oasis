import { Suspense } from "react";
import SideNavigation from "../_components/SideNavigation";
import Spinner from "../_components/Spinner";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12 -ml-40">
      <SideNavigation />
      {/* <Suspense fallback={<Spinner />}> */}
      <div>{children}</div>
      {/* </Suspense> */}
    </div>
  );
}
