import { Brain, Target, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import neuralImg from "@/assets/ai-neural.jpg";

export const About = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-glow animate-glow-pulse opacity-60" />
      <div className="container mx-auto px-4 relative">
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

        <div className="grid lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          {/* Neural image */}
          <div className={`lg:col-span-2 relative ${visible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="absolute -inset-6 bg-gradient-glow animate-glow-pulse" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-elegant group">
              <img
                src={neuralImg}
                alt="Neural network visualization"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs font-mono text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                neural.network.active
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid gap-5">
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
                className={`group relative p-6 rounded-2xl glass hover-lift flex gap-5 items-start ${visible ? "animate-fade-in-right" : "opacity-0"}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <c.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
