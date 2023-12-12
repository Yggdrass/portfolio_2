import Navlinks from "../navigation/Navlinks";
import "./layout.css";

const Header = () => {
  return (
    <header>
      <img
        src="../../../public/ar_logo.png"
        alt="logo of letters A & R put together"
      />
      <Navlinks />
    </header>
  );
};

export default Header;
