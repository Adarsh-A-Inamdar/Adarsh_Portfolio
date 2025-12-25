import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate sending
        setTimeout(() => {
            setStatus('Message Sent! (Simulation)');
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-4xl mx-auto text-center mb-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-accent font-medium mb-4">What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Get In Touch</h2>
                <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                    Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all duration-300 resize-none"
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-accent to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                    >
                        <Send size={18} />
                        Send Message
                    </motion.button>
                    {status && <p className="text-center text-accent mt-4 text-sm font-medium animate-pulse">{status}</p>}
                </form>

            </motion.div>
        </section>
    );
};

export default Contact;
