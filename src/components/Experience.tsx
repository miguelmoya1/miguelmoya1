import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '../utils/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const jobs = [
        {
            key: 'gft',
            tags: ['TypeScript', 'Angular', 'Nx', 'Jest', 'Cypress'],
        },
        {
            key: 'nax',
            tags: ['TypeScript', 'Angular', 'Nx', 'Jest', 'Cypress', 'Capacitor'],
        },
        {
            key: 'gestores',
            tags: ['TypeScript', 'Angular', 'Nx', 'Jest', 'Cypress'],
        },
        {
            key: 'ourside',
            tags: ['TypeScript', 'React', 'React Native', 'Next.JS'],
        },
        {
            key: 'conwork',
            tags: ['TypeScript', 'Angular'],
        },
    ];

    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black mb-32 text-center tracking-tight"
                >
                    {t.experience.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{t.experience.title2}</span>
                </motion.h2>

                <div ref={containerRef} className="max-w-5xl mx-auto relative">
                    {/* Vertical Line Background */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />

                    {/* Animated Fill Line */}
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 origin-top rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />

                    <div className="space-y-32">
                        {jobs.map((job, index) => {
                            // @ts-ignore
                            const jobData = t.experience[job.key];
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={job.key}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className={`relative grid md:grid-cols-2 gap-12 pl-12 md:pl-0`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-dark border-2 border-blue-500 z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,1)]" />

                                    {/* Content */}
                                    <div className={`${isEven ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                            <h3 className="text-2xl font-bold text-white mb-2">{jobData.role}</h3>
                                            <p className="text-blue-400 font-bold mb-2 uppercase tracking-widest text-sm">
                                                {job.key.toUpperCase()}
                                            </p>
                                            <p className="text-slate-500 text-sm mb-6 font-mono">{jobData.date}</p>
                                            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                                {jobData.desc}
                                            </p>
                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                {job.tags.map((tag) => (
                                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-400">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
