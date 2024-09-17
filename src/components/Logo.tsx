export default function Logo() {
  return (
    <a href={`${import.meta.env.BASE_URL}`} className="logo">
      <img src={"/src/img/NicoLogo.png"} alt="logo"/>
    </a>
  );
}