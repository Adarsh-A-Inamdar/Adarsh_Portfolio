import React from 'react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">About Me</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            {/* Placeholder for User Image */}
                            <div className="text-gray-500 text-center">
                                {/* <span className="block text-4xl mb-2">📷</span> */}
                                {/* <span className="text-sm">Add Your Image Here</span> */}
                                {/* <span className="block text-xs mt-2 text-gray-600">/src/assets/profile.jpg</span> */}
                            </div>
                            {/* Uncomment below when you have an image */}
                            <img src="/path/to/image.jpg" alt="Profile" className="object-cover w-full h-full" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-300 leading-relaxed text-lg p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
                    >
                        <p className="mb-0 leading-8">
                            {data.summary.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.02 }}
                                    className="inline-block mr-1"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default About;
