import { useReveal } from "@/hooks/useReveal";
import { Github, ExternalLink, BarChart, Ship } from "lucide-react";
import titanicImg from "@/assets/project-titanic.jpg";
import salaryImg from "@/assets/project-salary.jpg";

const projects = [
  {
    icon: BarChart,
    image: salaryImg,
    title: "Data Science Salaries Analysis",
    subtitle: "NTI – AI for Business",
    description:
      "Analyzed a real dataset of Data Science salaries across roles, countries, and experience levels. Applied data preprocessing, visualization, and ML models to extract insights about salary trends.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
  },
  {
    icon: Ship,
    image: titanicImg,
    title: "Titanic Survival Prediction",
    subtitle: "NTI – Machine Learning for Data Analysis",
    description:
      "Predicted passenger survival on the Titanic dataset. Performed preprocessing, feature engineering, and built/evaluated Logistic Regression, Random Forest, and XGBoost models with rich visualizations.",
    tags: ["Logistic Regression", "Random Forest", "XGBoost", "Feature Engineering", "EDA"],
  },
];

export const Projects = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="projects" ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-glow animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-glow animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground">Selected projects that showcase my approach to AI & data.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <article
              key={p.title}
              style={{ animationDelay: `${i * 150}ms` }}
              className={`group relative rounded-3xl glass overflow-hidden hover-lift ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <p.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repo"
                    className="p-2 rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-primary font-semibold mb-1">{p.subtitle}</p>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-foreground border border-primary/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
