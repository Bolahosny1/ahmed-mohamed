import { useReveal } from "@/hooks/useReveal";
import dataImg from "@/assets/ai-data.jpg";
import codeImg from "@/assets/ai-code.jpg";
import robotImg from "@/assets/ai-robot.jpg";
import { Cpu, LineChart, Network } from "lucide-react";

const tiles = [
  {
    img: dataImg,
    icon: LineChart,
    label: "Data Intelligence",
    caption: "Transforming raw datasets into clear, decision-ready insight.",
  },
  {
    img: robotImg,
    icon: Network,
    label: "Human × Machine",
    caption: "Bridging human intuition with machine precision through AI.",
  },
  {
    img: codeImg,
    icon: Cpu,
    label: "Engineered with Python",
    caption: "Crafting reliable ML pipelines with modern Python tooling.",
  },
];

export const AIShowcase = () => {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow animate-glow-pulse opacity-40" />
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-2xl mx-auto mb-14 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">In Motion</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Where <span className="gradient-text">AI meets craft</span>
          </h2>
          <p className="text-muted-foreground">
            A glimpse into the disciplines I obsess over — data, models, and the code that connects them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiles.map((t, i) => (
            <article
              key={t.label}
              style={{ animationDelay: `${i * 150}ms` }}
              className={`group relative rounded-3xl overflow-hidden border border-primary/20 hover-lift ${visible ? "animate-scale-in" : "opacity-0"}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.label}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shadow-glow">
                    <t.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">// 0{i + 1}</p>
                  <h3 className="font-display text-2xl font-bold mb-2">{t.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
