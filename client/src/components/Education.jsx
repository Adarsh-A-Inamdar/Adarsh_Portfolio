import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = ({ data }) => {
    return (
        <section id="education" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Education</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </h2>

                <div className="space-y-8 max-w-3xl">
                    {data.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-accent/20 pb-8 last:pb-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-accent animate-pulse" />
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{edu.institution}</h3>
                                    <span className="text-sm font-mono text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/10">{edu.year}</span>
                                </div>
                                <p className="text-lg text-gray-300 mb-2 font-medium">{edu.degree}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                    {edu.location}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
