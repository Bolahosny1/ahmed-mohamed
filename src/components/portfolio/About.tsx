import { Brain, Target, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const About = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">About me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Turning <span className="gradient-text">data</span> into <span className="gradient-text">decisions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a Computer Science student specializing in Artificial Intelligence. My main interests
            include machine learning, data analysis, and solving real-world problems through technology.
            I work effectively with Python to build projects and implement AI models, backed by a solid
            foundation in databases and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "AI & Machine Learning",
              text: "Building and deploying ML models with Scikit-Learn, XGBoost, TensorFlow & Keras.",
              delay: "0ms",
            },
            {
              icon: Target,
              title: "Data-Driven Solutions",
              text: "Precise data analysis and visualization to extract actionable, real-world insights.",
              delay: "150ms",
            },
            {
              icon: Sparkles,
              title: "Continuous Learning",
              text: "Always exploring new techniques in deep learning, MLOps, and applied AI research.",
              delay: "300ms",
            },
          ].map((c, i) => (
            <div
              key={i}
              style={{ animationDelay: c.delay }}
              className={`group relative p-8 rounded-2xl glass hover-lift ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
