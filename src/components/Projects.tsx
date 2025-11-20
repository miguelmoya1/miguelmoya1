import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black mb-24 text-center tracking-tight"
                >
                    {t.projects.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{t.projects.title2}</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto perspective-1000">
                    <TiltCard>
                        <div className="p-10 h-full flex flex-col bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-blue-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-8">
                                <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {t.projects.pawdar.title}
                                </h3>
                                <a
                                    href="https://pawdar.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-all hover:scale-110"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            </div>

                            <p className="text-slate-300 mb-10 flex-grow leading-relaxed text-lg">
                                {t.projects.pawdar.desc}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {['Angular', 'Firebase', 'Angular SSR', 'Google Maps API'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
};

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="h-full"
            >
                {children}
            </div>
        </motion.div>
    );
};

export default Projects;
