import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Project from "../../components/project/project";

import "./home.scss";
import profile from "../../assets/profile.jpg";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Home = () => {
  return (
    <div className="container">
      {/* Hero section */}
      <div className="hero-grid">
        <div className="hero-content">
          <h1>Hey, I'm Daniel, a Front-end Developer</h1>
          <p>
            Hello! I'm Daniel Gonzalez, a front-end developer with a passion for
            crafting beautiful and user-friendly websites. With over 5 years of
            experience in the industry, I specialize in creating intuitive and
            engaging user experiences that drive results. Whether you need a
            simple brochure site or a complex web application, I have the skills
            and expertise to bring your vision to life.
          </p>
          <div className="contact-section">
            <button className="contact-btn">Contact me</button>
            <FontAwesomeIcon className="brand-icon" icon={faGithub} />
            <FontAwesomeIcon className="brand-icon" icon={faTwitter} />
            <FontAwesomeIcon className="brand-icon" icon={faLinkedin} />
          </div>
        </div>
        <div className="hero-picture">
          <img className="profile-pic" src={profile} alt="Profile" />
        </div>
      </div>

      {/* Projects section */}
      <div className="projects-grid">
        <Project
          title="Crypto Tracker & Wallet"
          description="App built using React and SCSS to track cryptocurrency prices. Connects to MetaMask using Ethers, allows easy management of your Energi tokens. "
          image={project1}
          demoLink="https://frontend-challenge-danielhumgon.vercel.app/wallet"
        />
        <Project
          title="Launchpad IP Dashboard"
          description="Dashboard app to authenticate files using the BitcoinCash blockchain, tokenize and protects digital assets. Built with Gatsby and AdminLTE."
          image={project2}
          demoLink="https://launchpadip.net/"
        />
        <Project
          title="Token Tiger"
          description="A user-friendly NFT creator built on the BitcoinCash blockchain, create and share unique digital assets with ease. Built with React and SCSS."
          image={project3}
          demoLink="https://github.com/danielhumgon"
        />
        <Project
          title="STATION 3"
          description="App built on the Avalanche Network for indie game developers to showcase and distribute their games. Built with React, SCSS and Ethers"
          image={project4}
          demoLink="https://stationthree.xyz/"
        />
      </div>
    </div>
  );
};

export default Home;
