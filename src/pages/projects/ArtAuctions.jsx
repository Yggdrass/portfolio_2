import React from "react";
import Header from "../../components/layout/Header";
import ArtListings from "../../assets/art_auctions/art_listings.png";
import ArtAuctionsProfile_1 from "../../assets/art_auctions/profile_page_1.png";
import ArtAuctionsProfile_2 from "../../assets/art_auctions/profile_page_2.png";
import DividingLineTop from "../../components/layout/DividingLineTop";
import DividingLineSection from "../../components/layout/DividingLineSection";

const ArtAuctions = () => {
  return (
    <>
      <Header />

      <main>
        <div>
          <h1 className="page_title art_auctions_title">Art Auctions</h1>
          <div className="project_brief">
            <p>
              An auction site is looking to launch a website where users can add
              items to be bid on and bid on items other users have put up for
              auction.
            </p>
            <p>
              When a new user joins the website, they are given 1000 credits to
              use on the site. They can get credits by selling items and use
              credit by buying items. Non-registered users can search through
              the listings, but only registered users can make bids on listings.
            </p>
          </div>
        </div>
        <DividingLineTop /> {/* Dividing line top */}
        <div className="project_info_section artAuctions_page_section_1">
          <img
            src={ArtListings}
            alt="a page of listed venues, with a searchbar to search for a specific venue."
            className="project_image"
          />
          <div className="project_description">
            <p>
              A user is able to see a list of art items that other users have
              submitted for sale.
            </p>
            <p>
              On each card you can view the product name, description, how many
              bids are made on it, when the post was created and when the post
              ends.
            </p>
          </div>
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section artAuctions_page_section_2">
          <div className="project_description">
            <p>
              The profile page will display the users information, avatar and
              how many tokens they have to use to bid on others posts.
            </p>
            <p>
              They can also create a post, to sell an art item by using a form
              on this page and submitting it.
            </p>
          </div>
          <img
            src={ArtAuctionsProfile_1}
            alt="a venue page with details on that venue. Users can create booking and venue managers can update or delete it if they are the owner of this venue."
            className="project_image"
          />
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section artAuctions_page_section_1">
          <img
            src={ArtAuctionsProfile_2}
            alt="a page of listed venues, with a searchbar to search for a specific venue."
            className="project_image"
          />
          <div className="project_description">
            <p>
              They can also create a post, to sell an art item by using a form
              on this page and submitting it.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ArtAuctions;
