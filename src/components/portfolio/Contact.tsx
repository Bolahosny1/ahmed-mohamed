import { useReveal } from "@/hooks/useReveal";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmedmohamedamf636@gmail.com",
    href: "mailto:ahmedmohamedamf636@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 102 929 2135",
    href: "tel:+201029292135",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ahmedmohamedfathy",
    href: "https://www.linkedin.com/in/ahmedmohamedfathy/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egypt",
    href: "#",
  },
];

export const Contact = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-3xl mx-auto text-center mb-12 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's build something <span className="gradient-text">intelligent</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Interested in collaborating or need a professional AI solution? Let's bring your ideas to life.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass hover-lift text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-glow">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</p>
              <p className="text-sm font-medium break-all">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow rounded-full" asChild>
            <a href="mailto:ahmedmohamedamf636@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Send me an email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ahmed Mohamed. Crafted with passion for AI.
      </p>
      <div className="flex items-center gap-3">
        <a href="https://www.linkedin.com/in/ahmedmohamedfathy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:ahmedmohamedamf636@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);
