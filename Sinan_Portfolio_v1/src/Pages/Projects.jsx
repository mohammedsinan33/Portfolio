import { Code } from 'lucide-react';
import AnimatedSection from '../Components/AnimatedSection';
import { portfolioData } from '../Components/portfolioData';

const Projects = () => (
    <AnimatedSection id="projects">
        <div className="py-20 container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="inline-flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
                    <Code className="mr-3 text-cyan-600 dark:text-cyan-400" size={32} />
                    My Projects
                </h2>
                <div className="w-24 h-1 mx-auto mt-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="p-6 transition-all duration-300 border rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-white/20 dark:border-gray-800/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 hover:-translate-y-2">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{project.title}</h3>
                            <p className="mt-1 text-sm font-semibold text-cyan-700 dark:text-cyan-400">{project.role}</p>
                            <p className="mt-4 text-slate-600 dark:text-gray-300">{project.description}</p>
                        </div>
                        <div className="mt-6">
                            <p className="mb-3 text-sm font-semibold text-slate-500 dark:text-gray-400">Technologies Used:</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full text-cyan-800 bg-cyan-400/30 dark:text-cyan-300 dark:bg-cyan-900/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

export default Projects;