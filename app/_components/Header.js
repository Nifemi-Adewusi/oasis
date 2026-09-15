import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="md:border-b relative z-10 md:border-primary-900 px-8 py-5">
      <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto mt-10 md:mt-0">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
