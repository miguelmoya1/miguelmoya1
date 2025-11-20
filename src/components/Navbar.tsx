import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../utils/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.experience, href: '#experience' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter">
                    Miguel<span className="text-blue-500">mo</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
                        <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                            <button
                                onClick={() => setLanguage('es')}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === 'es' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-6 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-slate-300 hover:text-white font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-4 pt-4 border-t border-white/10">
                                <button
                                    onClick={() => { setLanguage('es'); setIsOpen(false); }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${language === 'es'
                                        ? 'bg-blue-600 border-blue-600 text-white'
                                        : 'border-white/10 text-slate-400'
                                        }`}
                                >
                                    ES
                                </button>
                                <button
                                    onClick={() => { setLanguage('en'); setIsOpen(false); }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${language === 'en'
                                        ? 'bg-blue-600 border-blue-600 text-white'
                                        : 'border-white/10 text-slate-400'
                                        }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
