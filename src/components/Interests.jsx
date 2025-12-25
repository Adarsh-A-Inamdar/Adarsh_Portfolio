import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Interests = ({ data }) => {
    return (
        <section id="interests" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto bg-primary/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Interests</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </h2>

                <div className="flex flex-wrap gap-4">
                    {data.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-red-400/40 hover:bg-white/10 transition-all duration-300 group cursor-default"
                        >
                            <Heart className="text-red-400/70 group-hover:text-red-400 transition-colors" size={20} />
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{interest}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Interests;
