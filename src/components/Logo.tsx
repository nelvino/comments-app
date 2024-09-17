import logo from "../img/NicoLogo.png";

export default function Logo() {
  return (
    <a href={`${import.meta.env.BASE_URL}`} className="logo">
      <img src={logo} alt="logo"/>
    </a>
  );
}