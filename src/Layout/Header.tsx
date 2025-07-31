import { ThemeButtom } from "../componets/ThemeButtom";
import logo from "../assets/developer.png";
import { NavMenu } from "./NavMenu";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {

  return (
    <>
      <header className="sticky top-0 z-50 bg-base-100">
        <nav className="navbar shadow-xl violet:bg-withe w-full justify-between">
          <div>
            <MobileMenu/>
            <a href="/" aria-label="Home"><img src={logo} alt="Logo" /></a>
          </div>
          <div className="navbar-center hidden md:flex">
            <NavMenu/>
          </div>
          <div>
            <ThemeButtom />
          </div>
        </nav>
      </header>
    </>
  );
}
