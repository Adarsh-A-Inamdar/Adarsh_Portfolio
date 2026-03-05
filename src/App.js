import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Hero /> 
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Education />
      <Achievements />
    </div>
  );
}

export default App;
