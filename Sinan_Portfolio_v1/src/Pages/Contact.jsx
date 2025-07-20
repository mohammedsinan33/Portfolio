import { Mail, Github, Linkedin, PhoneCall } from 'lucide-react';
import AnimatedSection from '../Components/AnimatedSection';
import { portfolioData } from '../Components/portfolioData';

const Contact = () => (
    <AnimatedSection id="contact">
        <div className="py-20 container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="inline-flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
                    <Mail className="mr-3 text-cyan-600 dark:text-cyan-400" size={32} />
                    Get In Touch
                </h2>
                <div className="w-24 h-1 mx-auto mt-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
            </div>
            <div className="max-w-xl mx-auto p-6 transition-all duration-300 border rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-white/20 dark:border-gray-800/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10">
                <p className="mb-6 text-lg text-slate-600 dark:text-gray-300 text-center">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
                </p>
                <div className="flex justify-center">
                    <a 
                        href={`mailto:${portfolioData.email}`} 
                        className="inline-flex items-center px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-cyan-600 rounded-full dark:text-black dark:bg-cyan-400 hover:bg-cyan-700 dark:hover:bg-white hover:scale-105"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        {portfolioData.email}
                    </a>
                </div>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-3 transition-colors duration-300 rounded-full bg-slate-200/50 dark:bg-gray-800/70 text-slate-500 dark:text-gray-400 hover:text-black hover:bg-cyan-400 dark:hover:text-black dark:hover:bg-cyan-400">
                        <Github size={24} />
                    </a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 transition-colors duration-300 rounded-full bg-slate-200/50 dark:bg-gray-800/70 text-slate-500 dark:text-gray-400 hover:text-black hover:bg-cyan-400 dark:hover:text-black dark:hover:bg-cyan-400">
                        <Linkedin size={24} />
                    </a>
                    <a href={`tel:${portfolioData.phone}`} className="p-3 transition-colors duration-300 rounded-full bg-slate-200/50 dark:bg-gray-800/70 text-slate-500 dark:text-gray-400 hover:text-black hover:bg-cyan-400 dark:hover:text-black dark:hover:bg-cyan-400">
                        <PhoneCall size={24} />
                    </a>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

export default Contact;