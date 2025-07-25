import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

const navLinks = [
    {name: 'Home', href: '#hero'},
    {name: 'Features', href: '#features'},
    {name: 'Showcase', href: '#showcase'},
    {name: 'Reviews', href: '#testimonials'},
    {name: 'Pre-Order', href: '#cta'},
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
            initial={{y: -80}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold text-white">
                    Aurora X1
                </a>
                <div className="space-x-6">
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
            </div>
        </motion.nav>
    );
}
