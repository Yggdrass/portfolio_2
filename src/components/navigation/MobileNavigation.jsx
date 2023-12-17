import React from "react";
import Navlinks from "./Navlinks";
import "./Navigation.css";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="Hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const hamburgerIconClosed = (
    <FontAwesomeIcon
      icon={faX}
      className="Hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(!open);

  return (
    <nav className="MobileNavigation">
      {open ? hamburgerIconClosed : hamburgerIcon}
      {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
