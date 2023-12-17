import { Link } from "react-router-dom";
import lama from "../../assets/lama_noPage_bubble.png";

import "./NoPage.css";

const NoPage = () => {
  return (
    <main className="main_noPage">
      <h1 className="noPage_title">
        404 Error Lama: Says it did not find that page!
      </h1>
      <div className="lama_container">
        <img src={lama} alt="a lama looking at you with ?! in a speechbubble" />
        <p>It will guide you</p>
        <Link to="/home" className="lama_container_Link">
          home
        </Link>
      </div>
    </main>
  );
};

export default NoPage;
