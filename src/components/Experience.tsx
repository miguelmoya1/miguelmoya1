import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";
import TechTag from "./TechTag";

interface Subcategory {
  client: string;
  role: string;
  date: string;
  desc: string;
}

interface JobData {
  role: string;
  date: string;
  desc: string;
  subcategories?: Subcategory[];
}

const Experience = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const jobs = [
    {
      key: "gft",
      tags: ["TypeScript", "Angular", "NestJS", "Nx", "Jest", "Cypress", "Google Cloud", "Firebase", "GitHub Actions", "CI/CD"],
      hasAI: true,
    },
    {
      key: "nax",
      tags: ["TypeScript", "Angular", "NestJS", "Nx", "Jest", "Cypress", "Capacitor", "Google Cloud", "Firebase", "GCP", "GitHub Actions", "CI/CD"],
      hasAI: true,
    },
    {
      key: "gestores",
      tags: ["TypeScript", "Angular", "Nx", "Jest", "Cypress", "Jenkins", "GitHub Actions", "CI/CD"],
    },
    {
      key: "ourside",
      tags: ["TypeScript", "React", "React Native", "Next.JS", "AWS", "S3", "EC2", "Lambda"],
    },
    {
      key: "conwork",
      tags: ["TypeScript", "Angular", "AWS", "S3", "EC2"],
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
          {t.experience.title1}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">
            {t.experience.title2}
          </span>
        </motion.h2>

        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          {/* Vertical Line Background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />

          {/* Animated Fill Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 origin-top rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          />

          <div className="space-y-32">
            {jobs.map((job, index) => {
              const jobData = (t.experience as unknown as Record<string, JobData>)[job.key];
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
                  <div
                    className={`${isEven ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {jobData.role}
                      </h3>
                      <p className="text-blue-400 font-bold mb-2 uppercase tracking-widest text-sm">
                        {job.key.toUpperCase()}
                      </p>
                      <p className="text-slate-500 text-sm mb-6 font-mono">
                        {jobData.date}
                      </p>
                      <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                        {jobData.desc}
                      </p>

                      {/* Subcategories (Client Projects) */}
                      {jobData.subcategories && (
                        <div className="mt-6 space-y-4 relative">
                          {/* Connecting line */}
                          <div
                            className={`absolute top-0 bottom-0 w-px bg-linear-to-b from-blue-500/40 to-purple-500/40 ${isEven ? "md:right-0 left-4 md:left-auto" : "left-4"}`}
                          />
                          {jobData.subcategories.map((sub, subIndex) => (
                            <motion.div
                              key={sub.client}
                              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.3 + subIndex * 0.15,
                              }}
                              className="relative"
                            >
                              {/* Sub-dot */}
                              <div
                                className={`absolute top-4 w-2.5 h-2.5 rounded-full border-2 border-purple-400 bg-dark z-10 ${isEven ? "md:-right-1.25 left-2.75 md:left-auto" : "left-2.75"}`}
                              />
                              <div
                                className={`bg-white/3 border border-white/[0.07] rounded-xl p-5 text-left transition-all duration-300 hover:bg-white/6 hover:border-white/12 ${isEven ? "md:mr-5 ml-10 md:ml-0" : "ml-10"}`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                                    {sub.client}
                                  </span>
                                </div>
                                <h4 className="text-base font-semibold text-white/90 mb-1">
                                  {sub.role}
                                </h4>
                                <p className="text-slate-500 text-xs mb-3 font-mono">
                                  {sub.date}
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                  {sub.desc}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      <div
                        className={`flex flex-wrap gap-2 mt-6 ${isEven ? "md:justify-end" : "justify-start"}`}
                      >
                        {job.tags.map((tag) => (
                          <TechTag key={tag} tag={tag} size="sm" />
                        ))}
                        {job.hasAI && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <Sparkles className="w-3.5 h-3.5" />
                            {t.projects.aiBadge}
                          </span>
                        )}
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
