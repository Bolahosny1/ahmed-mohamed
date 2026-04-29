import { useReveal } from "@/hooks/useReveal";
import { ShieldCheck, Database, Sparkles, Target } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Practical & Effective",
    text: "Solutions grounded in precise data analysis and skilled application of AI models.",
  },
  {
    icon: Sparkles,
    title: "Hands-on Experience",
    text: "Practical and training experience translated into reliable, production-ready work.",
  },
  {
    icon: Database,
    title: "Database Expertise",
    text: "In-depth knowledge of databases ensures comprehensive, efficient solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Committed to Quality",
    text: "Reliable, committed, and consistently focused on achieving high-quality results.",
  },
];

export const WhyMe = () => {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-gradient-glow animate-glow-pulse opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-2xl mx-auto text-center mb-14 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Why choose me?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Reliable. <span className="gradient-text">Committed.</span> Results-driven.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I deliver practical and effective solutions based on precise data analysis and skilled
            application of AI models — always focused on quality outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {points.map((p, i) => (
            <div
              key={p.title}
              style={{ animationDelay: `${i * 100}ms` }}
              className={`group relative p-6 rounded-2xl glass hover-lift ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
