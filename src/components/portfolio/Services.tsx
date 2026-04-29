import { useReveal } from "@/hooks/useReveal";
import { Brain, LineChart, Database, Code2, Eye, Workflow } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    text: "Build, train and tune ML models with Scikit-Learn, XGBoost & GridSearchCV for real business problems.",
  },
  {
    icon: Eye,
    title: "Deep Learning & Vision",
    text: "Image classification, CNNs, transfer learning and object detection with TensorFlow / Keras.",
  },
  {
    icon: LineChart,
    title: "Data Analysis & Visualization",
    text: "Turn raw data into clear insights using Pandas, NumPy, Matplotlib, Seaborn and Plotly.",
  },
  {
    icon: Database,
    title: "Database Design & SQL",
    text: "Design efficient MySQL schemas, write optimized queries and model data for analytics.",
  },
  {
    icon: Code2,
    title: "Python Automation",
    text: "Automate workflows, data cleaning, scraping and reporting pipelines with clean Python code.",
  },
  {
    icon: Workflow,
    title: "End-to-End AI Solutions",
    text: "From data preprocessing & feature engineering to evaluation and MLFlow tracking.",
  },
];

export const Services = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-2xl mx-auto text-center mb-16 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">services /</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What I Can <span className="gradient-text">Do For You</span>
          </h2>
          <p className="text-muted-foreground">
            As an AI & Data enthusiast, here are the services I can deliver to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: `${i * 80}ms` }}
              className={`group relative p-7 rounded-2xl glass hover-lift overflow-hidden ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
