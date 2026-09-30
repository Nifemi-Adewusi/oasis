import Logo from "@/app/_components/Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="md:border-b relative z-10 md:border-primary-900 px-8 py-5">
      <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto mt-10 md:mt-0">
        <Logo />
        {/* <Navigation /> */}
        <Nav />
      </div>
    </header>
  );
}

export default Header;
