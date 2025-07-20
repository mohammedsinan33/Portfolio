import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../Components/ThemeContext';
import { portfolioData } from '../Components/portfolioData';

const Header = ({ onNavClick, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();  // Change this line to get toggleTheme from context
    const navItems = ["About", "Projects", "Achievements", "Contact"];

    const NavLink = ({ item }) => {
        const isActive = item.toLowerCase() === activeSection;
        const activeClasses = 'text-cyan-600 dark:text-cyan-400 font-bold';
        const inactiveClasses = 'text-slate-800 dark:text-gray-300';
        return (
            <button 
                onClick={() => { onNavClick(item.toLowerCase()); setIsOpen(false); }} 
                className={`px-3 py-2 transition-all duration-300 rounded-md hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-200/50 dark:hover:bg-gray-800/50 ${isActive ? activeClasses : inactiveClasses}`}
            >
                {item}
            </button>
        );
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-lg border-b border-white/20 dark:border-black/20">
            <div className="container px-4 py-3 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-slate-800 dark:text-white">{portfolioData.name}</span>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-1">
                        {navItems.map(item => <NavLink key={item} item={item} />)}
                        <button 
                            onClick={toggleTheme} 
                            className="p-2 ml-2 transition-colors duration-300 rounded-full text-slate-500 dark:text-gray-400 hover:bg-slate-200/50 dark:hover:bg-gray-800/50"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </nav>
                    <div className="flex items-center md:hidden">
                        <button 
                            onClick={toggleTheme} 
                            className="p-2 mr-2 transition-colors duration-300 rounded-full text-slate-500 dark:text-gray-400 hover:bg-slate-200/50 dark:hover:bg-gray-800/50"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-white focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="flex flex-col items-center mt-4 space-y-2 md:hidden">
                        {navItems.map(item => <NavLink key={item} item={item} />)}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;