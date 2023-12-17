import React from "react";
import Header from "../../components/layout/Header";
import HolidazeVenues from "../../assets/holidaze/holidaze_venues.png";
import HolidazeVenue from "../../assets/holidaze/holidaze_venue.png";
import HolidazeProfile from "../../assets/holidaze/holidaze_profile_page.png";
import HolidazeVenuesBookings from "../../assets/holidaze/profile_page_venues_bookings.png";
import "./Projects.css";
import DividingLineTop from "../../components/layout/DividingLineTop";
import DividingLineSection from "../../components/layout/DividingLineSection";
import Footer from "../../components/layout/Footer";

const Holidaze = () => {
  return (
    <>
      <Header />

      <main>
        <div>
          <h1 className="page_title holidaze_title">Holidaze</h1>
          <div className="project_brief">
            <p>
              A newly launched accommodation booking site called Holidaze has
              approached you to develop a brand new front end for their
              application. While they have a list of required features, the
              design and user experience has not been specified. Working with
              the official API documentation, plan, design and build a modern
              front end accommodation booking application.
            </p>
            <p>
              There are two aspects to this brief: the customer-facing side of
              the website where users can book holidays at a venue, and an
              admin-facing side of the website where users can register and
              manage venues and bookings at those venues.
            </p>
          </div>
        </div>
        <DividingLineTop /> {/* Dividing line top */}
        <div className="project_info_section section_1">
          <img
            src={HolidazeVenues}
            alt="a page of listed venues, with a searchbar to search for a specific venue."
            className="project_image"
          />
          <div className="project_description">
            <p>
              A user is able to see a list of created venues, search through
              them by title and click on one in order to view details on that
              specific venue.
            </p>
            <p>
              On each card you can view the venue name, price and description.
            </p>
          </div>
        </div>
        <DividingLineSection /> {/* Dividing line section*/}
        <div className="project_info_section section_2">
          <div className="project_description">
            <p>
              When clicking on a venue-card, they will get to this page where
              they can see more details.
            </p>
            <p>
              At the top they can see the price, max guests allowed and the
              rating. Below that they can view images from the venue in a
              carousel and read the description.
            </p>
            <p>
              Below this the user can view the facilities and location, and
              further down they can view a calendar that shows avaliable dates.
            </p>
          </div>
          <img
            src={HolidazeVenue}
            alt="a venue page with details on that venue. Users can create booking and venue managers can update or delete it if they are the owner of this venue."
            className="project_image"
          />
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section section_1">
          <img
            src={HolidazeProfile}
            alt="the profile page of the user."
            className="project_image"
          />
          <div className="project_description">
            <p>
              The profile page is dynamic and depending on wether you are a user
              or venue manager, it will hide or show what you are allowed to do.
            </p>
            <p>
              Everyone can update their avatar and change their venue manager
              role.
            </p>
          </div>
        </div>
        <DividingLineSection /> {/* Dividing line section */}
        <div className="project_info_section section_2">
          <div className="project_description">
            <p>
              If you are a venue manager you are able to see and use the create
              venue button, and the page will show your created venues.
            </p>
            <p>
              If you are a user you will not see that button, but you will see
              your bookings.
            </p>
          </div>
          <img
            src={HolidazeVenuesBookings}
            alt="a venue page with details on that venue. Users can create booking and venue managers can update or delete it if they are the owner of this venue."
            className="project_image"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Holidaze;
