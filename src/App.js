import "./css/Colors.css";
import "./css/Main.css";
import NoPage from "./pages/noPage/NoPage";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Holidaze from "./pages/projects/Holidaze";
import ArtAuctions from "./pages/projects/ArtAuctions";
import ShopHub from "./pages/projects/ShopHub";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ArtAuctions" element={<ArtAuctions />} />
        <Route path="/projects/Holidaze" element={<Holidaze />} />
        <Route path="/projects/ShopHub" element={<ShopHub />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
