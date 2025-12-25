import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
            <p>© {new Date().getFullYear()} Adarsha Inamdar. Built with React & Tailwind.</p>
        </footer>
    );
};

export default Footer;
