import Header from "../../components/layout/Header";
import profile_image from "../../assets/ar_profile_img.jpg";
import "./About.css";
import DividingLineTop from "../../components/layout/DividingLineTop";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <div className="aboutme_hero_section">
          <div>
            <p className="welcome_title">hi, I am Audun Roald...</p>
            <div className="welcome_text">
              <p>
                ...a newly educated 41 year old Front-End developer. This page
                will let you know a bit more about me.
              </p>
            </div>
          </div>
          <img
            src={profile_image}
            alt="side profile of Audun Roald looking towrds the quote"
            className="hero_image"
          />
        </div>

        <DividingLineTop />

        <div className="aboutme_section">
          <h2 className="aboutme_subheading">education and work experience</h2>
          <div>
            <p>
              I have studied a 2-year course at Noroff, to learn Front-End
              development. In this course I have learned both base concepts in
              coding.
            </p>
            <p>
              Prior to this I have studied archeology, history and early
              childhood development in Trondheim from 2003-2011. From 2011 until
              february 2020, I worked in two different kindergardens as a
              kindergarden teacher and educational leader. In february 2020 I
              was burned out and I needed to re-educate myself in order to find
              a new job.
            </p>
            <p>
              So from spring 2021 and until december 2023 I have studied
              Front-End development online at Noroff.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
