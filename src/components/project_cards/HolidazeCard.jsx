import React from "react";
import { Link } from "react-router-dom";
import HolidazeLogo from "../../assets/holidaze/holidaze_logo_black.png";
import HolidazeThumbnail from "../../assets/holidaze/holidaze_venues.png";
import "./Cards.css";

const HolidazeCard = () => {
  return (
    <div className="project_card_1 card_background_1">
      <div className="card_header_1 holidaze_card_header">
        <img src={HolidazeLogo} alt="" className="card_logo" />
        <h2 className="card_title">Holidaze</h2>
      </div>
      <div className="project_preview_1">
        <img src={HolidazeThumbnail} alt="" className="project_thumbnail" />
        <div>
          <p>
            A booking site called Holidaze, where users can book at venues
            created by venue managers. This project was "Project Exam 2" and is
            supposed to show what we have learned from the two years we have
            studied. It is a single html page website created with React and
            CSS.
          </p>
          <Link to={"/projects/Holidaze"} className="view_project_link">
            view project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HolidazeCard;
