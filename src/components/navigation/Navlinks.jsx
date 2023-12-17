import { Link } from "react-router-dom";
import "./Navigation.css";

const Navlinks = () => {
  return (
    <nav>
      <ul>
        <Link to="/home" className="Link">
          home
        </Link>
        <Link to="/projects" className="Link">
          projects
        </Link>
        <Link to="/about" className="Link">
          about
        </Link>
        <Link to="/contact" className="Link">
          contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navlinks;
