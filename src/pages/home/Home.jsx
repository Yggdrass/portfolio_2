import QuoteContainer from "../../components/QuoteContainer";
import Header from "../../components/layout/Header";
import HolidazeCard from "../../components/project_cards/HolidazeCard";
import profile_image from "../../assets/ar_profile_img.jpg";
import ArtAuctionsCard from "../../components/project_cards/ArtAuctionsCard";
import ShopHubCard from "../../components/project_cards/ShopHubCard";
import "./Home.css";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="home_hero_section">
          <div>
            <p className="aboutme_title">hi, I am Audun Roald...</p>
            <div className="aboutme_hero_text">
              <p>Newly graduated front end developer from Noroff.</p>
              <p>See my projects below.</p>
            </div>
          </div>
          <img
            src={profile_image}
            alt="side profile of Audun Roald looking towards the quote"
            className="hero_image"
          />
        </div>
        <QuoteContainer />
        <div className="dividing_line_1">{""}</div>
        <div className="project_cards_container">
          <HolidazeCard />
          <div className="dividing_line_2">{""}</div>
          <ShopHubCard />
          <div className="dividing_line_2">{""}</div>
          <ArtAuctionsCard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
