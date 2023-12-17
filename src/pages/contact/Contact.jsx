import DividingLineTop from "../../components/layout/DividingLineTop";
import Header from "../../components/layout/Header";
import email_image from "../../assets/email_image.jpg";
import "./Contact.css";
import Footer from "../../components/layout/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="contactme_hero_section">
          <div>
            <p className="welcome_title">Don't be afraid...</p>
            <div className="welcome_text">
              <p>...get in touch. ;D</p>
            </div>
          </div>
          <img
            src={email_image}
            alt="Smiling woman typing on a laptop."
            className="hero_image"
          />
        </div>

        <DividingLineTop />

        <div className="contactme_section">
          <h2 className="contactme_subheading">how to get in touch</h2>
          <div>
            <p>You can reach me by email: audunroald@gmail.com</p>
            <p>By phone on: 12345678</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
