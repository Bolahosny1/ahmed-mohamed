import { useReveal } from "@/hooks/useReveal";
import { GraduationCap, BookOpen } from "lucide-react";

export const Education = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="education" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Education</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Academic <span className="gradient-text">background</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className={`p-8 rounded-2xl glass hover-lift ${visible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-xs text-primary font-semibold mb-1">2022 – Present</p>
            <h3 className="font-display text-xl font-bold mb-1">Bachelor's in Computer Science</h3>
            <p className="text-muted-foreground">October University — Faculty of Computer Science</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Specializing in Artificial Intelligence with coursework in Data Science, C++, Arduino,
              and Software Testing — applied through practical projects.
            </p>
          </div>

          <div className={`p-8 rounded-2xl glass hover-lift ${visible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <BookOpen className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-xs text-primary font-semibold mb-1">Certifications</p>
            <h3 className="font-display text-xl font-bold mb-3">Training & Courses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Artificial Intelligence</strong> — NTI</li>
              <li><strong className="text-foreground">Machine Learning for Data Analysis</strong> — NTI Creativa</li>
              <li><strong className="text-foreground">Machine Learning Engineer</strong> — DEPI</li>
              <li><strong className="text-foreground">University Training</strong> — Data Science, C++, Arduino, Software Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
