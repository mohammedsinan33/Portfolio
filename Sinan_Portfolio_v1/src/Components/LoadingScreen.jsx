import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoaded }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoaded, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onLoaded]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center text-white">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-2xl font-mono">{progress}%</p>
            </div>
        </div>
    );
};

export default LoadingScreen;