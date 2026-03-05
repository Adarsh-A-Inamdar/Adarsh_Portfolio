import React from "react";

function WorkExperience() {
  return (
    <section className="work" id="work">
      <h2 className="section-title">Work Experience</h2>

      <div className="work-card">
        <div className="work-header">
          <h3>Software Developer Intern</h3>
          <span className="work-duration">February 2024 – Present</span>
        </div>

        <p className="work-company">
          QSpiders • Bengaluru, India
        </p>

        <ul className="work-points">
          <li>
            Developed and optimized 5+ Java-based applications using Object-Oriented Programming, reducing code redundancy by 25% through modular design.
          </li>
          <li>
            Engineered database schemas and integrated MySQL using JDBC, ensuring 99.9% data persistence and improving query retrieval performance.
          </li>
          <li>
            Collaborated in an Agile environment, resolving 50+ critical logical bugs and improving application stability by 30% during UAT.
          </li>
          <li>
            Designed and documented RESTful APIs enabling seamless integration between React.js frontends and Java backends.
          </li>
        </ul>
      </div>

      <a className="scroll-arrow" href="#education">↓</a>
    </section>
  );
}

export default WorkExperience;