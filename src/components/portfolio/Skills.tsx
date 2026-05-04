import { useReveal } from "@/hooks/useReveal";
import { Code2, Brain, BarChart3, Database, Users, Cpu } from "lucide-react";

type Skill = { name: string; icon: string };

// Devicon CDN — high-quality colored tech icons
const dIcon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const groups: { icon: any; title: string; skills: Skill[] }[] = [
  {
    icon: Code2,
    title: "Programming & Tools",
    skills: [
      { name: "Python", icon: dIcon("python") },
      { name: "MySQL", icon: dIcon("mysql") },
      { name: "Jupyter", icon: dIcon("jupyter") },
      { name: "Google Colab", icon: dIcon("googlecolab") },
      { name: "VS Code", icon: dIcon("vscode") },
      { name: "Anaconda", icon: dIcon("anaconda") },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", icon: dIcon("scikitlearn") },
      { name: "XGBoost", icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
      { name: "Pandas", icon: dIcon("pandas") },
      { name: "NumPy", icon: dIcon("numpy") },
    ],
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    skills: [
      { name: "TensorFlow", icon: dIcon("tensorflow") },
      { name: "Keras", icon: dIcon("keras") },
      { name: "PyTorch", icon: dIcon("pytorch") },
      { name: "OpenCV", icon: dIcon("opencv") },
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Viz",
    skills: [
      { name: "Pandas", icon: dIcon("pandas") },
      { name: "NumPy", icon: dIcon("numpy") },
      { name: "Matplotlib", icon: dIcon("matplotlib") },
      { name: "Plotly", icon: dIcon("plotly") },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "MySQL", icon: dIcon("mysql") },
      { name: "PostgreSQL", icon: dIcon("postgresql") },
      { name: "SQLite", icon: dIcon("sqlite") },
      { name: "MongoDB", icon: dIcon("mongodb") },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "" },
      { name: "Communication", icon: "" },
      { name: "Teamwork", icon: "" },
      { name: "Organization", icon: "" },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const Skills = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-glow animate-glow-pulse opacity-40" />
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">technical stack</span>
          </h2>
          <p className="text-muted-foreground">A toolkit built through coursework, training, and hands-on projects.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              style={{ animationDelay: `${i * 100}ms` }}
              className={`relative p-6 rounded-2xl glass hover-lift group overflow-hidden ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:rotate-6 transition-transform shadow-glow">
                  <g.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="relative grid grid-cols-2 gap-3">
                {g.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/40 backdrop-blur border border-primary/10 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/90 dark:bg-white/95 flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                      {s.icon ? (
                        <img
                          src={s.icon}
                          alt={s.name}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xs font-bold text-primary">{initials(s.name)}</span>
                      )}
                    </div>
                    <span className="text-sm font-medium leading-tight">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
