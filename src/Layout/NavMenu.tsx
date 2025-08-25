import { MENU } from "../data/data";

export const NavMenu = () => {
  return (
    <>
      {MENU.map((item, index) => (
        <li key={index}>
          <a href={item.url} >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}