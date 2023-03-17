import React from "react";
import aboutPicture from "./imgs/myPhoto1.jpg";

const About = () => {
  return (
    <>
      <hr />
      <div className="homepage-title" name="about">
        <h1>
          <strong>About</strong> Me
        </h1>
      </div>
      <section className="about">
        <img src={aboutPicture} alt="" />

        <div className="about-me">
          <p className="about-text">I am from a small town called Nová Baňa and right now I'm based in Bratislava. I am a man, who learned to code at home in my free time and I'm currently gaining more experience in the field. I've taken a course in web development and I'm currently focusing on front-end technologies and I love new technologies. When I'm not currently coding, which means that I'm offline, I'm playing on a guitar, exploring new places, reading books and going out with my friends on a homebrew beer or good food.</p>
          <div className="about-text-1">
            <p>
              <strong>Residence:</strong> Bratislava and Nová Baňa
            </p>
            <p>
              <strong>Currently:</strong> Freelancing/Looking for a job
            </p>
          </div>
          <div className="about-text-2">
            <p>
              <strong>Email:</strong> b.saly84@gmail.com
            </p>
            <p>
              <strong>Age:</strong> 24
            </p>
          </div>
          <div className="green-button">
            <a href="CV_Branislav_Saly.pdf" download className="download-btn">
              <strong>Download my CV</strong>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
