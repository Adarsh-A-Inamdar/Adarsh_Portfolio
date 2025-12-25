import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Helper to check if we are on home page
    const isHome = location.pathname === '/';

    const NavLink = ({ to, children }) => {
        // If it's a hash link
        if (to.startsWith('#')) {
            return (
                <li className="relative group">
                    {isHome ? (
                        <a
                            href={to}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative z-10 block"
                        >
                            {children}
                            <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center -z-10"></span>
                        </a>
                    ) : (
                        <Link
                            to={`/${to}`}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative z-10 block"
                        >
                            {children}
                            <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center -z-10"></span>
                        </Link>
                    )}
                </li>
            );
        }
        return (
            <li className="relative group">
                <Link
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative z-10 block ${location.pathname === to ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    {children}
                    {(location.pathname === to) && (
                        <motion.span layoutId="nav-pill" className="absolute inset-0 bg-white/10 rounded-lg -z-10"></motion.span>
                    )}
                </Link>
            </li>
        );
    };

    return (
        <React.Fragment>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
                <div className="bg-primary/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-black/20 p-2 md:p-3">
                    <div className="flex justify-center items-center">
                        {/* <Link to="/" className="px-4 py-2 font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Adarsh 
                        </Link> */}

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-1">
                            <NavLink to="#">Home</NavLink>
                            <NavLink to="#about">About</NavLink>
                            <NavLink to="#skills">Skills</NavLink>
                            <NavLink to="#projects">Work</NavLink>
                            <NavLink to="#education">Education</NavLink>
                            <NavLink to="#contact">Contact</NavLink>
                        </ul>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden pr-2">
                            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white/70 hover:text-white transition-colors">
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, y: 0, height: "auto", display: "block" },
                        closed: { opacity: 0, y: -20, height: 0, transitionEnd: { display: "none" } }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden mt-2 bg-primary/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl"
                >
                    <ul className="flex flex-col p-2 space-y-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="#projects">Work</NavLink>
                        <NavLink to="#skills">Skills</NavLink>
                        <NavLink to="#about">About</NavLink>
                        <NavLink to="#contact">Contact</NavLink>
                    </ul>
                </motion.div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
