import React from "react";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-timeline">

        <div className="education-item">
          <span className="edu-year">2022 – 2026</span>
          <h3>Bachelor of Engineering in Computer Science and Engineering</h3>
          <p>Bapuji Institute of Engineering and Technology (BIET)</p>
          <p>Davangere, India • GPA: 7.4</p>
        </div>

        <div className="education-item">
          <span className="edu-year">2020 – 2022</span>
          <h3>Pre-University Course (PCMCs)</h3>
          <p>Maganur Basappa PU Science College</p>
          <p>Percentage: 85.83%</p>
        </div>

        <div className="education-item">
          <span className="edu-year">2019 – 2020</span>
          <h3>High School (CBSE)</h3>
          <p>Maganur Basappa Public School</p>
          <p>Percentage: 77.6%</p>
        </div>

      </div>

      <a className="scroll-arrow" href="#achievements">↓</a>
    </section>
  );
}

export default Education;