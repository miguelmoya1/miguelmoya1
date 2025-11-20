import { motion } from 'framer-motion';
import { Code2, Globe, Users } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const cards = [
        {
            icon: <Code2 className="w-8 h-8 text-blue-400" />,
            text: t.about.p1,
            delay: 0.2,
            className: "md:col-span-2"
        },
        {
            icon: <Globe className="w-8 h-8 text-purple-400" />,
            text: t.about.p2,
            delay: 0.4,
            className: "md:col-span-1"
        },
        {
            icon: <Users className="w-8 h-8 text-pink-400" />,
            text: t.about.p3,
            delay: 0.6,
            className: "md:col-span-3"
        }
    ];

    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">
                        {t.about.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{t.about.title2}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: card.delay, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className={`glass-card p-8 flex flex-col gap-6 hover:bg-white/10 transition-colors duration-300 ${card.className}`}
                            >
                                <div className="p-3 bg-white/5 rounded-lg w-fit border border-white/10">
                                    {card.icon}
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
