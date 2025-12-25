import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Hero = ({ data }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
            {/* Animated Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-blob mix-blend-multiply filter" />
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter" />
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter" />
            </div>

            <div className="text-center z-10 max-w-4xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-accent text-sm font-medium mb-8">
                        Available for hire
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600 animate-pulse-slow">{data.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        {data.title}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm md:text-base mb-12"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                        <MapPin size={16} className="text-accent" />
                        <span>{data.location}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm group hover:border-accent/30 transition-colors cursor-pointer">
                        <Mail size={16} className="text-accent group-hover:text-white transition-colors" />
                        <a href={`mailto:${data.email}`} className="group-hover:text-white transition-colors">{data.email}</a>
                    </div>
                    {data.phone && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                            <Phone size={16} className="text-accent" />
                            <span>{data.phone}</span>
                        </div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href="#projects" className="relative inline-flex group">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-white/10 hover:bg-gray-900/50 backdrop-blur-xl">
                            View My Work
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
