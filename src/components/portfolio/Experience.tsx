import { useReveal } from "@/hooks/useReveal";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const { ref, visible } = useReveal();

  const items = [
    {
      icon: Briefcase,
      tag: "Work",
      title: "Technical Support & IT Specialist",
      org: "Odak Technology Trade",
      period: "Hands-on experience",
      points: [
        "Provided technical support for software and hardware systems.",
        "Operated and maintained computers and printing machines.",
        "Diagnosed technical issues and troubleshot daily hardware/software problems.",
        "Installed and configured software and operating systems for optimal performance.",
      ],
    },
    {
      icon: Award,
      tag: "Training",
      title: "Machine Learning Engineer",
      org: "DEPI",
      period: "Certified",
      points: ["Practical experience in building and deploying machine learning models end-to-end."],
    },
    {
      icon: Award,
      tag: "Training",
      title: "Artificial Intelligence",
      org: "NTI (National Telecommunication Institute)",
      period: "Certified",
      points: ["Completed hands-on AI projects covering core AI concepts and applications."],
    },
    {
      icon: Award,
      tag: "Training",
      title: "Machine Learning for Data Analysis",
      org: "NTI Creativa",
      period: "Certified",
      points: ["Applied machine learning techniques to real-world datasets for analysis & prediction."],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />
          {items.map((it, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 120}ms` }}
              className={`relative mb-10 md:grid md:grid-cols-2 md:gap-12 ${visible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                <div className="p-6 rounded-2xl glass hover-lift">
                  <div className="flex items-center gap-2 mb-2 md:justify-start">
                    <span className="px-2 py-0.5 text-xs rounded-md bg-primary/15 text-primary font-semibold">
                      {it.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{it.period}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                  <p className="text-sm text-primary mb-3">{it.org}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {it.points.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
