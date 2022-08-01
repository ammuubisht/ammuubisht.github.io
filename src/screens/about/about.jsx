import React from "react";
import AboutImage from "../../images/about-img.jpg";
import "./about.css";
import Nainital from "../../images/Nainital.jpg";
import Hand from "../../images/hand.jpg";
import Jaisalmer from "../../images/Jaisalmer.jpg";
import Tungnath from "../../images/Tungnath.jpg";

export default function About() {
  return (
    <div>
      <div className="about-cont">
        <div className="about-text">
          <p className="greeting">Hi again, </p>
          <p className="about-me-content">
            I'm Amit Bisht, a final year B.Tech (Computer Science) Student at
            Rawal Institutions, Faridabad. I love solving complex problems with
            an analytical approach and an open mind. <br />
            <br />
            I've learned Web Development and Machine Learning over my course
            years. Every project I've done has pushed me to go through the
            thinking process, proactive learning and real-world scenarios. I'm
            excited to have my career as a software engineer, leveraging
            technology to help us to live life to the fullest!
            <br />
            <br />
            Apart from being a technical person, I'm a travel enthusiast. I love
            to explore the unexplored and visit places to learn more about the
            local culture and customs.
          </p>
        </div>
        <img src={AboutImage} className="about-img" alt="my-profile" />
      </div>

      <p className="glimpse-text">Some glimpse from my trips</p>
      <div className="carousel">
        <img src={Tungnath} alt="hand" className="carousel-img" />
        <img src={Nainital} alt="hand" className="carousel-img" />
        <img src={Hand} alt="hand" className="carousel-img" />
        <img src={Jaisalmer} alt="hand" className="carousel-img" />
      </div>
    </div>
  );
}
