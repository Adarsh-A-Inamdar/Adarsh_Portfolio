import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Projects = ({ data }) => {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-6xl mx-auto relative">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Selected Work</span>
                    <span className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow max-w-xs"></span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative h-48 w-full bg-black/20 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                        <Folder size={40} className="mb-2 opacity-50" />
                                        <span className="text-xs">Add Project Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <ExternalLink size={20} className="text-gray-500 group-hover:text-accent transition-colors cursor-pointer flex-shrink-0" />
                                </div>

                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="relative flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-gray-300 group-hover:text-white group-hover:border-white/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
