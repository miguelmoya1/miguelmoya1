import { motion, useMotionValue } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import ScrambleText from './ScrambleText';

const Hero = () => {
    const { t } = useLanguage();
    const experienceYears = new Date().getFullYear() - 2017;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
                            {t.hero.line1} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                                <ScrambleText text={t.hero.line2} />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        {t.hero.bio1} <span className="text-white font-bold relative inline-block">
                            {experienceYears} {t.hero.bio2.split(' ')[0]}
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/50 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span> {t.hero.bio2.split(' ').slice(1).join(' ')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <MagneticButton href="https://www.linkedin.com/in/miguelmo/">
                            <Linkedin className="w-6 h-6 text-white" />
                        </MagneticButton>
                        <MagneticButton href="https://github.com/miguelmoya1">
                            <Github className="w-6 h-6 text-white" />
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="text-slate-500 w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
};

const MagneticButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 20);
        y.set(yPct * 20);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-5 rounded-full bg-white/5 border border-white/10 overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            <div className="relative z-10">
                {children}
            </div>
        </motion.a>
    );
};

export default Hero;
