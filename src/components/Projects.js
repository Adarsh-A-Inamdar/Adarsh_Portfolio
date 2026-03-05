import React from "react";

function Projects() {
  return (
<div className="projects" id="projects">
  <h2 className="projects-heading">My Projects</h2>
  <p className="projects-subtext">
    Here are some of the projects I've worked on:
  </p>

  <div className="projects-grid">

    <div className="project-card">
      <h3>Leukemia Classification (Vision Transformer)</h3>
      <ul>
        <li>Built a Vision Transformer model achieving 89% validation accuracy on blood smear datasets.</li>
        <li>Optimized data pipelines with augmentation and normalization, reducing training time by 15%.</li>
      </ul>
    </div>

    <div className="project-card">
      <h3>Fake News Detection System</h3>
      <ul>
        <li>Developed an NLP pipeline using BERT with 88–92% accuracy.</li>
        <li>Performed advanced tokenization and feature extraction to reduce false positives.</li>
      </ul>
    </div>

    <div className="project-card">
      <h3>Learning Management System (LMS)</h3>
      <ul>
        <li>Built a full-stack LMS using MVC architecture.</li>
        <li>Supported secure authentication and 100+ concurrent users.</li>
      </ul>
    </div>

    <div className="project-card">
      <h3>Voice-to-Code Assistant</h3>
      <ul>
        <li>Created a speech-recognition tool for hands-free coding.</li>
        <li>Achieved 85% command accuracy using custom intent models.</li>
      </ul>
    </div>

    <div className="project-card">
      <h3>AI Smart Mirror</h3>
      <ul>
        <li>Designed an AI-powered smart mirror with speech recognition.</li>
        <li>Built backend services and a responsive UI for dynamic display.</li>
      </ul>
    </div>

  </div>
  <a className="scroll-arrow" href="#skills">↓</a>
</div>
  );
}

export default Projects;
