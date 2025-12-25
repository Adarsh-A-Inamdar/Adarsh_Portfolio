import React from 'react';
import About from '../components/About';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="pt-20 min-h-screen">
            <About data={portfolioData} />
        </div>
    );
};

export default AboutPage;
