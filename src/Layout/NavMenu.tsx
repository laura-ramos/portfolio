import { MENU } from "../data/data";

export const NavMenu = () => {
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        {MENU.map((item, index) => (
          <li key={index}>
            <a href={item.url} >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}