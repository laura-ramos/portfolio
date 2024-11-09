import { useState } from "react";
import ThemeButtom from "../componets/ThemeButtom";
import { Link, NavLink } from "react-router-dom";
import { MENU } from "../data/data";
function Header() {
  return (
    <>
      <nav className=" w-full top-0 z-50">
        <div className="navbar shadow-xl violet:bg-withe">
          <div className="navbar-start w-auto">
            <div className="drawer z-10">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
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
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
            </div>
            <a className="btn text-xl">Portfolio</a>
          </div>
          <div className="navbar-center  ">
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
