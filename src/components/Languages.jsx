import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LangIcon } from 'lucide-react';

const Languages = ({ data }) => {
    return (
        <section id="languages" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto bg-primary/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Languages</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {data.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="inline-flex p-4 rounded-full bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <LangIcon className="text-accent/70 group-hover:text-accent transition-colors" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{lang.name}</h3>
                            <p className="text-gray-400 font-medium group-hover:text-white transition-colors">{lang.level}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Languages;
