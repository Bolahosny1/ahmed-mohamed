import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ai.jpg";

const roles = ["AI Engineer", "Machine Learning", "Data Analyst", "Python Developer"];

export const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-glow animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-glow animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-glow-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm <span className="gradient-text">Ahmed</span>
            <br />
            Mohamed
          </h1>

          <div className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground mb-6 h-10">
            <span className="gradient-text">{text}</span>
            <span className="animate-blink text-primary">|</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Computer Science student specializing in Artificial Intelligence. I build practical
            AI & ML solutions through precise data analysis, Python, and modern deep learning frameworks.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Get in touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/30 hover:bg-primary/10" asChild>
              <a href="#projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/30 hover:bg-primary/10" asChild>
              <a href="/Ahmed-Mohamed-CV.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ahmedmohamedfathy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full glass hover:shadow-glow hover:scale-110 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ahmedmohamedamf636@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full glass hover:shadow-glow hover:scale-110 transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden lg:flex justify-center items-center animate-scale-in">
          <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/30 animate-spin-slow" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-accent/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-50 rounded-full" />
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/40 shadow-elegant">
              <img src="/placeholder.svg" alt="" className="hidden" />
              {/* Use generated avatar */}
              <AvatarImage />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

import avatar from "@/assets/profile-avatar.jpg";
const AvatarImage = () => (
  <img src={avatar} alt="Ahmed Mohamed" className="w-full h-full object-cover" width={800} height={800} />
);
