import { useReveal } from "@/hooks/useReveal";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV_URL = "/Ahmed-Mohamed-CV.pdf";

export const Resume = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="resume" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-glow animate-glow-pulse opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-4xl mx-auto rounded-3xl glass p-10 md:p-14 text-center relative overflow-hidden ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-30" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5">
              <FileText className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">My Resume</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Want the <span className="gradient-text">full story?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              View my complete CV with all the details about my education, training, and projects — or download a copy for later.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full" asChild>
                <a href={CV_URL} download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
