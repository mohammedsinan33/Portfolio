import React from 'react';
import PropTypes from 'prop-types';

const SectionContent = ({ title, icon, children }) => (
    <div className="py-20 container mx-auto px-4">
        <div className="mb-12 text-center">
            <h2 className="inline-flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
                {React.cloneElement(icon, { className: "mr-3 text-cyan-600 dark:text-cyan-400", size: 32 })}
                {title}
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
        </div>
        {children}
    </div>
);

SectionContent.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired
};

export default SectionContent;