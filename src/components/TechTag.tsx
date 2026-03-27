type TagCategory = "frontend" | "backend" | "infra" | "api" | "testing" | "default";

const TAG_CATEGORIES: Record<string, TagCategory> = {
  // Frontend
  "TypeScript": "frontend",
  "Angular": "frontend",
  "Angular SSR": "frontend",
  "React": "frontend",
  "React Native": "frontend",
  "Next.JS": "frontend",
  "Nx": "frontend",
  "Capacitor": "frontend",

  // Backend
  "NestJS": "backend",
  "Prisma": "backend",
  "Node.js": "backend",

  // Infrastructure / Cloud
  "Google Cloud": "infra",
  "Google Cloud Run": "infra",
  "GCP": "infra",
  "Firebase": "infra",
  "Firebase Auth": "infra",
  "Neon PostgreSQL": "infra",
  "AWS": "infra",
  "S3": "infra",
  "EC2": "infra",
  "Lambda": "infra",
  "Jenkins": "infra",
  "GitHub Actions": "infra",
  "CI/CD": "infra",
  "DNS": "infra",

  // APIs
  "Google Maps API": "api",

  // Testing
  "Jest": "testing",
  "Cypress": "testing",
};

const CATEGORY_STYLES: Record<TagCategory, string> = {
  frontend: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  backend: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  infra: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  api: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  testing: "bg-teal-500/10 border-teal-500/20 text-teal-300",
  default: "bg-white/5 border-white/10 text-slate-400",
};

interface TechTagProps {
  tag: string;
  size?: "sm" | "md";
}

const TechTag = ({ tag, size = "md" }: TechTagProps) => {
  const category = TAG_CATEGORIES[tag] || "default";
  const style = CATEGORY_STYLES[category];
  const sizeClass = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-4 py-1.5 text-sm";

  return (
    <span
      className={`${sizeClass} font-medium rounded-full border ${style}`}
    >
      {tag}
    </span>
  );
};

export default TechTag;
