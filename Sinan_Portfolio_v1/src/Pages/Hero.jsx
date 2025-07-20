import { Github, Linkedin, Mail, PhoneCall } from 'lucide-react';
import AnimatedSection from '../Components/AnimatedSection';
import { portfolioData } from '../Components/portfolioData';
import ResumePdf from '../assets/MOHAMMED SINAN - K Resume.pdf';

const handleDownload = () => {
  // Create a new anchor element
  const link = document.createElement('a');
  
  // Set the href and download attributes
  link.href = ResumePdf;
  link.download = 'Mohammed-Sinan-Resume.pdf';
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Programmatically click the link to trigger the download
  link.click();
  
  // Remove the link from the body
  document.body.removeChild(link);
};

const Hero = ({ onNavClick }) => (
    <AnimatedSection id="hero">
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="text-center">
                <p className="text-2xl md:text-3xl mb-2 text-slate-600 dark:text-gray-300">Hi, I'm</p>
                <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-cyan-600 dark:from-white dark:to-cyan-400">
                    {portfolioData.name}
                </h1>
                <p className="mt-4 text-xl text-slate-600 dark:text-gray-300 md:text-2xl">{portfolioData.title}</p>
                <div className="flex justify-center mt-8 space-x-6">
                    <div className="flex justify-center mt-8 space-x-6">
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-400"><Github size={28} /></a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-400"><Linkedin size={28} /></a>
                    <a href={`mailto:${portfolioData.email}`} className="text-slate-500 dark:text-gray-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-400"><Mail size={28} /></a>
                    <a href={`tel:${portfolioData.phone}`} className="text-slate-500 dark:text-gray-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-400"><PhoneCall size={28} /></a>
                </div>
                </div>
                <button 
  onClick={handleDownload} 
  className="px-8 py-3 mt-12 font-semibold text-white transition-all duration-300 transform bg-cyan-600 rounded-full dark:text-black dark:bg-cyan-400 hover:bg-cyan-700 dark:hover:bg-white hover:scale-105"
>
  Download CV
</button>
            </div>
        </div>
    </AnimatedSection>
);

export default Hero;