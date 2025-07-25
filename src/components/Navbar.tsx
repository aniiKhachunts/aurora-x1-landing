import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Pre-Order', href: '#cta' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                scrolled ? 'bg-black/60 backdrop-blur-lg' : 'bg-transparent'
            }`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold text-white">
                    Aurora X1
                </a>
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-lg py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300 py-2 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </motion.nav>
    );
}
