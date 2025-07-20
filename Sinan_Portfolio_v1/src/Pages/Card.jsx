import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => (
    <div className={`p-6 transition-all duration-300 border rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-white/20 dark:border-gray-800/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 hover:-translate-y-2 ${className}`}>
        {children}
    </div>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.defaultProps = {
    className: ''
};

export default Card;