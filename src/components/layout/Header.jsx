import Navlinks from "../navigation/Navlinks";
import logo from "../../assets/ar_logo.png";
import "./Layout.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo of letters A & R put together" />
      <Navlinks />
    </header>
  );
};

export default Header;
