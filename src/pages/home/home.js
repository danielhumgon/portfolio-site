import React from "react";

import "./home.scss";
import profile from "../../assets/profile.jpg"

const Home = () => {
  return (
    <div className="container">
      {/* Hero section */}
      <div className="hero-grid">
        <div className="hero-content">
          <h1>Hey, I'm Daniel, a Front-end Developer</h1>
          <p>
            Hello! I'm Daniel Gonzalez, a front-end developer with a passion for
            crafting beautiful and user-friendly websites. With over 7 years of
            experience in the industry, I specialize in creating intuitive and
            engaging user experiences that drive results. Whether you need a
            simple brochure site or a complex web application, I have the skills
            and expertise to bring your vision to life. Let's work together to
            make something amazing!
          </p>
        </div>
        <div className="hero-picture">
          <img className="profile-pic" src={profile} alt="Profile" />
        </div>
      </div>

      {/* Projects section */}
      <div className="projects-grid">
        <div className="project-card">
          <h1>hey!</h1>
        </div>
        <div className="project-card">
          <h3>you!</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
