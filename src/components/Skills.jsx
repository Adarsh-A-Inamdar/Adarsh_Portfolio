import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Technologies & Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {data.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl text-base md:text-lg text-gray-300 font-medium hover:text-white hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all cursor-default relative overflow-hidden group"
                        >
                            <span className="relative z-10">{skill}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
