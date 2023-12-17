import React from "react";
import ar_logo from "../../assets/ar_logo.png";
import "./Layout.css";

const Footer = () => {
  return (
    <footer>
      <img src={ar_logo} alt="logo of letters A & R put together" />

      <p> &#169; Audun Roald 2023</p>
    </footer>
  );
};

export default Footer;
