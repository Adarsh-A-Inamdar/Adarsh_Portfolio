import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Languages from '../components/Languages';
import Hackathons from '../components/Hackathons';
import Interests from '../components/Interests';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import portfolioData from '../data/portfolio.json';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure render
            }
        }
    }, [location]);

    return (
        <>
            <Hero data={portfolioData.personalInfo} />
            <About data={portfolioData} />
            <Skills data={portfolioData.skills} />
            <Projects data={portfolioData.projects} />
            <Education data={portfolioData.personalInfo.education} />
            <Certifications data={portfolioData.certifications} />
            {/* <Languages data={portfolioData.languages} /> */}
            <Hackathons data={portfolioData.hackathons} />
            {/* <Interests data={portfolioData.interests} /> */}
            <Contact />
        </>
    );
};

export default Home;
