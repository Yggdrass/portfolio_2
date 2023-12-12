import QuoteContainer from "../../components/QuoteContainer";
import Header from "../../components/layout/Header";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="home_hero_section">
          <QuoteContainer />
          <img
            src="../../public/ar_profile_img.jpg"
            alt=""
            className="hero_image"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
