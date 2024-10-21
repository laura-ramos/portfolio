import { useState } from "react";
import ThemeButtom from "../componets/ThemeButtom";
import { Link, NavLink } from "react-router-dom";
import { MENU } from "../data/data";
function Header() {
  return (
    <>
      <nav className=" w-full top-0 z-50">
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Portfolio</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {MENU.map((itme, index) => (
                <li key={index}>
                  <NavLink
                    to={itme.url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {itme.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <ThemeButtom />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
