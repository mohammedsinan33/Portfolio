import { Award, Star } from 'lucide-react';
import AnimatedSection from '../Components/AnimatedSection';
import SectionContent from './SectionContent';
import Card from './Card';
import { portfolioData } from '../Components/portfolioData';

const Achievements = () => (
    <AnimatedSection id="achievements">
        <SectionContent title="Achievements" icon={<Award />}>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-slate-300 dark:border-gray-700">
                    {portfolioData.achievements.map((item, index) => (
                        <div key={index} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 bg-slate-200 dark:bg-gray-800 ring-white dark:ring-black">
                                <Star className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                            </span>
                            <Card>
                                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">{item.title}</h3>
                                <p className="mt-1 text-xl text-slate-500 dark:text-gray-400">{item.description}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </SectionContent>
    </AnimatedSection>
);

export default Achievements;