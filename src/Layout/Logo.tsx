import logo from "../assets/developer.png";

export const Logo = () => {
  return (
    <>
      <a href="/" aria-label="Home">
        <img src={logo} alt="Logo" className="max-w-40" />
      </a>
    </>
  )
}
