import { useReveal } from "@/hooks/useReveal";
import { Code2, Brain, BarChart3, Database, Users, Cpu } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming & Tools",
    skills: ["Python", "SQL", "MySQL", "GitHub", "Jupyter", "Google Colab"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Scikit-Learn", "XGBoost", "GridSearchCV", "Feature Engineering", "MLFlow"],
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    skills: ["TensorFlow", "Keras", "ANN", "CNN", "Transfer Learning", "Image Classification", "Object Detection"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Data Preprocessing"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "SQL", "Data Modeling", "Query Optimization"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Teamwork", "Organization", "Management"],
  },
];

export const Skills = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="skills" ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <g.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
