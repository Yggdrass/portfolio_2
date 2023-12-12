import { Link } from "react-router-dom";

import "./NoPage.css";

const NoPage = () => {
  return (
    <main className="main_noPage">
      <h1 className="noPage_title">
        404 Error Lama: Says it did not find that page!
      </h1>
      <div className="lama_container">
        <img src="../../public/lama_noPage_bubble.png" alt="" />
        <p>It will guide you</p>
        <Link to="/home" className="lama_container_Link">
          home
        </Link>
      </div>
    </main>
  );
};

export default NoPage;
