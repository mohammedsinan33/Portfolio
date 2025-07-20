import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        // Remove both classes first
        root.classList.remove('dark', 'light');
        // Add new theme class
        root.classList.add(theme);
        // Save to localStorage
        localStorage.setItem('theme', theme);

        // Update background colors
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#000000';
            root.style.backgroundColor = '#000000';
        } else {
            document.body.style.backgroundColor = '#ffffff';
            root.style.backgroundColor = '#ffffff';
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;