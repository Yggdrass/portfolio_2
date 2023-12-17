import logo from "../../assets/ar_logo.png";
import "./Layout.css";
import "../navigation/Navigation.css";
import MobileNavigation from "../navigation/MobileNavigation";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo of letters A & R put together" />
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
