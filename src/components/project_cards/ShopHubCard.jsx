import React from "react";
import { Link } from "react-router-dom";
import ShopHubLogo from "../../assets/shophub/shophub_logo.png";
import HolidazeProjectImage from "../../assets/shophub/shophub_productsList.png";

const ShopHubCard = () => {
  return (
    <div className="project_card_2 card_background_2">
      <div className="card_header_2 shophub_card_header">
        <img src={ShopHubLogo} alt="" className="card_logo" />
        <h2 className="card_title">ShopHub</h2>
      </div>
      <div className="project_preview_2">
        <img src={HolidazeProjectImage} alt="" className="project_thumbnail" />
        <div>
          <p>
            This was the Javascript Frameworks CA. An Ecom website where users
            can search for products by title, add them to a cart and then
            checkout. It is a single page html website, created with React and
            CSS.
          </p>
          <Link to={"/projects/ShopHub"} className="view_project_link">
            view project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopHubCard;
