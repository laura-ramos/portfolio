import { ThemeButtom } from "../componets/ThemeButtom";
import { NavMenu } from "./NavMenu";
import { Logo } from "./Logo";

export const Header = () => {

  return (
    <>
      <header className="sticky top-0 z-50 bg-base-100">
        <nav className="navbar shadow-md violet:bg-white md:px-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <NavMenu />
              </ul>
            </div>
            <Logo />
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <NavMenu />
            </ul>
          </div>
          <div className="navbar-end">
            <ThemeButtom />
          </div>
        </nav>
      </header>
    </>
  );
}
