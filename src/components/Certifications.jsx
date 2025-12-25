import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = ({ data }) => {
    return (
        <section id="certifications" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto bg-primary/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Certifications</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {data.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <Award className="text-accent/70 group-hover:text-accent flex-shrink-0 mt-1 transition-colors" size={24} />
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
