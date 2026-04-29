import { useReveal } from "@/hooks/useReveal";
import { Code2, Brain, BarChart3, Database, Users, Cpu } from "lucide-react";

type Skill = { name: string; icon: string };

const sIcon = (slug: string, color = "06B6D4") =>
  `https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${slug}.svg`;

const groups: { icon: any; title: string; skills: Skill[] }[] = [
  {
    icon: Code2,
    title: "Programming & Tools",
    skills: [
      { name: "Python", icon: sIcon("python") },
      { name: "SQL", icon: sIcon("mysql") },
      { name: "MySQL", icon: sIcon("mysql") },
      { name: "GitHub", icon: sIcon("github") },
      { name: "Jupyter", icon: sIcon("jupyter") },
      { name: "Google Colab", icon: sIcon("googlecolab") },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", icon: sIcon("scikitlearn") },
      { name: "XGBoost", icon: sIcon("scikitlearn") },
      { name: "GridSearchCV", icon: sIcon("scikitlearn") },
      { name: "Feature Eng.", icon: sIcon("scikitlearn") },
      { name: "MLFlow", icon: sIcon("mlflow") },
    ],
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    skills: [
      { name: "TensorFlow", icon: sIcon("tensorflow") },
      { name: "Keras", icon: sIcon("keras") },
      { name: "ANN", icon: sIcon("tensorflow") },
      { name: "CNN", icon: sIcon("tensorflow") },
      { name: "Transfer Learning", icon: sIcon("tensorflow") },
      { name: "Object Detection", icon: sIcon("opencv") },
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Viz",
    skills: [
      { name: "Pandas", icon: sIcon("pandas") },
      { name: "NumPy", icon: sIcon("numpy") },
      { name: "Matplotlib", icon: sIcon("python") },
      { name: "Seaborn", icon: sIcon("python") },
      { name: "Plotly", icon: sIcon("plotly") },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "MySQL", icon: sIcon("mysql") },
      { name: "SQL", icon: sIcon("mysql") },
      { name: "Data Modeling", icon: sIcon("mysql") },
      { name: "Query Opt.", icon: sIcon("mysql") },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: sIcon("leetcode") },
      { name: "Communication", icon: sIcon("googlemeet") },
      { name: "Teamwork", icon: sIcon("slack") },
      { name: "Organization", icon: sIcon("notion") },
      { name: "Management", icon: sIcon("trello") },
    ],
  },
];

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
              className={`p-6 rounded-2xl glass hover-lift group ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:rotate-6 transition-transform shadow-glow">
                  <g.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {g.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-background/60 flex items-center justify-center p-1.5">
                      <img
                        src={s.icon}
                        alt={s.name}
                        loading="lazy"
                        className="w-full h-full object-contain dark:invert-0"
                        style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.4))" }}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-center leading-tight">{s.name}</span>
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
