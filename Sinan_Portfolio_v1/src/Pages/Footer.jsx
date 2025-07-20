const Footer = () => (
    <footer className="py-6 text-center text-slate-500 dark:text-gray-500 bg-transparent">
        <div className="container px-4 mx-auto">
            <p>&copy; {new Date().getFullYear()} Mohammed Sinan K. All rights reserved.</p>
            <p className="text-sm">Built with React, Tailwind CSS, and a touch of cyber-magic.</p>
        </div>
    </footer>
);

export default Footer;