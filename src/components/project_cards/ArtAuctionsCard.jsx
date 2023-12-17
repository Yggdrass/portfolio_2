import React from "react";
import { Link } from "react-router-dom";
import ArtAuctionsLogo from "../../assets/art_auctions/art_auctions_logo.png";
import ArtAuctionsThumbnail from "../../assets/art_auctions/art_listings.png";

const ArtAuctionsCard = () => {
  return (
    <div className="project_card_1 card_background_1">
      <div className="card_header_1 art auctions_card_header">
        <img src={ArtAuctionsLogo} alt="" className="card_logo" />
        <h2 className="card_title">Art Auctions</h2>
      </div>
      <div className="project_preview_1">
        <img src={ArtAuctionsThumbnail} alt="" className="project_thumbnail" />
        <div>
          <p>
            An auction website for users to buy art posted by others, or sell
            their own art by creating a post themselves. They also can browse a
            list of posts for art to bid on. It was created with Javascript,
            HTML and CSS. The pages are different HTML pages and this was before
            we had learned React.
          </p>
          <Link to={"/projects/ArtAuctions"} className="view_project_link">
            view project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtAuctionsCard;
