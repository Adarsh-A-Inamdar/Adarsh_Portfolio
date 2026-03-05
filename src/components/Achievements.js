import React from "react";

function achievements() {
  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">
        Achievements <span className="arrow">→</span>
      </h2>

      <div className="achievement-item">
        <h3>Google Analytics for Beginners</h3>
        <p>Google • August 2026</p>
      </div>

      <div className="achievement-item">
        <h3>MongoDB Developer Path</h3>
        <p>MongoDB University</p>
      </div>

      <div className="achievement-item">
        <h3>Problem Solving Certification</h3>
        <p>HackerRank</p>
      </div>

      <div className="achievement-item">
        <h3>5-Star Gold Badge</h3>
        <p>HackerRank</p>
      </div>

      <div className="achievement-item">
        <h3>2nd Place — GMIT Hackathon</h3>
      </div>
      {/* <a className="scroll-arrow" href="/">↓</a> */}
    </section>
  );
}

export default achievements;
