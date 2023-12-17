import React from "react";
import HolidazeCard from "../../components/project_cards/HolidazeCard";
import ShopHubCard from "../../components/project_cards/ShopHubCard";
import ArtAuctionsCard from "../../components/project_cards/ArtAuctionsCard";
import Header from "../../components/layout/Header";
import DividingLineSection from "../../components/layout/DividingLineSection";
import DividingLineTop from "../../components/layout/DividingLineTop";
import Footer from "../../components/layout/Footer";

const Projects = () => {
  return (
    <>
      <Header />

      <main>
        <div className="project_hero_section">
          <div className="introduction_section">
            <h1 className="page_title">projects</h1>
          </div>
        </div>
        <DividingLineTop /> {/*Dividing line */}
        <div className="project_cards_container">
          <HolidazeCard />
          <DividingLineSection /> {/*Dividing line */}
          <ShopHubCard />
          <DividingLineSection /> {/*Dividing line */}
          <ArtAuctionsCard />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
