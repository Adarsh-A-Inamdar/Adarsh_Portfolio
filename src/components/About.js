import React from "react";
import Profile from "/Users/adarshainamdar/Desktop/Development/MERN/adarsh_portfolio/src/assets/myimg.png";

function About() {
  return (
    <div>
      <div id="about" className="about">
        <div className="Sec1">
            <p className="about-text">
              <span><b>Hello! I'm Adarsh,</b></span> a passionate developer with a love for creating
              innovative solutions. With a strong background in web development and
              a keen eye for design, I strive to build user-friendly and visually
              appealing applications. I enjoy collaborating with teams and
              continuously learning new technologies to stay at the forefront of the
              industry. When I'm not coding, you can find me exploring new places,
              trying out different cuisines, or indulging in my love for
              photography.
            </p>
        </div>
        <div className="Sec2">
          <div className="imageBox">
            <img src={Profile} alt="Adarsh Inamdar" className="profile-pic" />
          </div>
        </div>
        <a className="scroll-arrow" href="#projects">↓</a>
      </div>
    </div>
    
  );
}

export default About;
