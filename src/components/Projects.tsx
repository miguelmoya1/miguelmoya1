import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Construction, Sparkles } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";
import TechTag from "./TechTag";

const Projects = () => {
  const { t } = useLanguage();

  const pawdarTags = [
    "Angular", "Angular SSR", "TypeScript",
    "NestJS", "Prisma",
    "Google Cloud Run", "Neon PostgreSQL", "Firebase Auth", "DNS",
    "Google Maps API", "GitHub Actions", "CI/CD",
  ];

  const coasterTags = [
    "Angular", "TypeScript", "Nx",
    "NestJS", "Prisma",
    "Google Cloud", "Neon PostgreSQL", "Firebase Auth",
    "GitHub Actions", "CI/CD",
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-24 text-center tracking-tight"
        >
          {t.projects.title1}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">
            {t.projects.title2}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto perspective-1000">
          {/* Pawdar */}
          <TiltCard>
            <div className="p-10 h-full flex flex-col bg-linear-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-blue-500/30 transition-colors">
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

              <p className="text-slate-300 mb-8 grow leading-relaxed text-lg">
                {t.projects.pawdar.desc}
              </p>

              {/* Tech Stack Summary */}
              {'stack' in t.projects.pawdar && (
                <p className="text-slate-500 text-xs font-mono mb-6 tracking-wide">
                  {(t.projects.pawdar as { stack: string }).stack}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {pawdarTags.map((tag) => (
                  <TechTag key={tag} tag={tag} />
                ))}
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  <Sparkles className="w-4 h-4" />
                  {t.projects.aiBadge}
                </span>
              </div>
            </div>
          </TiltCard>

          {/* Coaster */}
          <TiltCard>
            <div className="p-10 h-full flex flex-col bg-linear-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-purple-500/30 transition-colors relative overflow-hidden">
              {/* In Development Badge */}
              <div className="absolute top-5 right-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  {'inDevBadge' in t.projects ? (t.projects as { inDevBadge: string }).inDevBadge : 'In Development'}
                </span>
              </div>

              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {'coaster' in t.projects ? (t.projects.coaster as { title: string }).title : 'Coaster'}
                </h3>
                <button
                  disabled
                  className="p-3 rounded-full bg-white/5 opacity-40 cursor-not-allowed"
                  title={'comingSoon' in t.projects ? (t.projects as { comingSoon: string }).comingSoon : 'Coming Soon'}
                >
                  <Construction size={24} />
                </button>
              </div>

              <p className="text-slate-300 mb-8 grow leading-relaxed text-lg">
                {'coaster' in t.projects ? (t.projects.coaster as { desc: string }).desc : ''}
              </p>

              {/* Tech Stack Summary */}
              {'coaster' in t.projects && 'stack' in (t.projects.coaster as Record<string, string>) && (
                <p className="text-slate-500 text-xs font-mono mb-6 tracking-wide">
                  {(t.projects.coaster as { stack: string }).stack}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {coasterTags.map((tag) => (
                  <TechTag key={tag} tag={tag} />
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

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

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
