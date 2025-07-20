import React from 'react';
import { BrainCircuit, Code, Zap, Star, Briefcase, Cpu } from 'lucide-react';
import AnimatedSection from '../Components/AnimatedSection';
import { useTheme } from '../Components/ThemeContext';
import Card from './Card';
import SectionContent from './SectionContent';
import { portfolioData } from '../Components/portfolioData';
import profileImage from '../assets/WhatsApp Image 2025-07-20 at 06.08.58_ca7fb0c2.jpg';

const About = () => {
    const { theme } = useTheme();

    const SkillCard = ({ title, skills }) => (
        <Card>
            <h3 className="mb-4 text-xl font-bold text-cyan-700 dark:text-cyan-400">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                    <div key={skill.name} className="flex items-center px-3 py-1 text-sm rounded-full bg-slate-200/50 dark:bg-gray-800/70 text-slate-700 dark:text-white">
                        {React.cloneElement(skill.icon, { className: "mr-2 text-cyan-600 dark:text-cyan-400" })}
                        {skill.name}
                    </div>
                ))}
            </div>
        </Card>
    );

    return (
        <AnimatedSection id="about">
            <SectionContent title="About Me & Skills" icon={<BrainCircuit />}>
                <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="flex justify-center md:col-span-1">
                        <div className="relative w-64 h-64">
                             <img 
                                key={theme}
                                src={profileImage} 
                                alt="Mohammed Sinan K" 
                                className="object-cover w-full h-full rounded-full shadow-lg transition-opacity duration-500 shadow-cyan-500/20 dark:shadow-cyan-400/20"
                             />
                             <div className="absolute inset-0 border-4 rounded-full border-cyan-400 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="text-lg text-center md:text-left md:col-span-2 text-slate-600 dark:text-gray-300">
                        <p>
                            I'm a passionate developer with a strong foundation in full-stack technologies and a keen interest in leveraging AI to build innovative solutions. I thrive in collaborative environments, enjoy tackling complex problems, and I'm always eager to learn and grow.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
                    <SkillCard title="Technical Skills" skills={portfolioData.skills.technical} />
                    <SkillCard title="Soft Skills" skills={portfolioData.skills.soft} />
                    <SkillCard title="Interests" skills={portfolioData.skills.interests} />
                </div>
            </SectionContent>
        </AnimatedSection>
    );
};

export default About;