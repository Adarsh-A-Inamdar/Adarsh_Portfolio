import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Hackathons = ({ data }) => {
    return (
        <section id="hackathons" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Hackathons</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <Trophy className="text-accent/70 group-hover:text-accent mb-6 transition-colors" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                            <p className="text-sm text-gray-400 font-mono bg-white/5 inline-block px-3 py-1 rounded-full border border-white/5 group-hover:border-accent/20 transition-colors">{item.role}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hackathons;
