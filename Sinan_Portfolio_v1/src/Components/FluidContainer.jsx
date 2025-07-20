import { useState, useEffect } from 'react';

const FluidContainer = ({ children }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;
            setOffset({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const style = {
        transition: 'transform 0.2s ease-out',
        transform: `perspective(2000px) rotateY(${offset.x * 3}deg) rotateX(${-offset.y * 3}deg)`
    };

    return <div style={style}>{children}</div>;
};

export default FluidContainer;