import React from "react";
import {
  SiC,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiMysql,
  SiExpress,
//   SiNextdotjs,
  SiNodedotjs,
  SiPytorch,
  SiReact,
  SiDocker,
  SiGit,
  SiMongodb
} from "react-icons/si";
// import { FaArrowDown, FaLinux } from "react-icons/fa";
import { FaAmazon, FaJava,FaLinux } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Languages */}
        <div className="skills-section">
          <h3>Languages</h3>
          <div className="skills-grid">
            <div><SiC /> C</div>
            <div><SiCss /> CSS</div>
            <div><SiHtml5 /> HTML</div>
            <div><FaJava /> Java</div>
            <div><SiJavascript /> JavaScript</div>
            <div><SiPython /> Python</div>
            <div><SiMysql /> SQL</div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="skills-section">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-grid">
            <div><SiExpress /> Express.js</div>
            <div>Handlebars</div>
            <div>J2EE</div>
            <div>JDBC</div>
            {/* <div><SiNextdotjs /> Next.js</div> */}
            <div><SiNodedotjs /> Node.js</div>
            <div><SiPytorch /> PyTorch</div>
            <div><SiReact /> React.js</div>
          </div>
        </div>

        {/* Databases & Cloud */}
        <div className="skills-section">
          <h3>Databases & Cloud</h3>
          <div className="skills-grid">
            <div><FaAmazon /> AWS</div>
            <div><SiDocker /> Docker</div>
            <div><SiGit /> Git</div>
            <div><FaLinux /> Linux</div>
            <div><SiMongodb /> MongoDB</div>
            <div><SiMysql /> MySQL</div>
          </div>
        </div>

        {/* Core */}
        <div className="skills-section">
          <h3>Core Competencies</h3>
          <div className="skills-grid">
            <div>Algorithms</div>
            <div>Computer Networks</div>
            <div>Data Structures</div>
            <div>DBMS</div>
            <div>MVC Architecture</div>
            <div>Operating Systems</div>
          </div>
        </div>

      </div>
      <a className="scroll-arrow" href="#work">↓</a>
    </div>
  );
}

export default Skills;