
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("2200032973cseh@gmail.com");
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 scroll-snap-align-start">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Kamal Mannava"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl md:text-3xl font-bold bg-primary text-primary-foreground">
                KM
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name with typewriter effect */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4 overflow-hidden whitespace-nowrap animate-typewriter">
              Kamal Mannava
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer | Cloud Enthusiast | Problem Solver
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Karlapudi, Guntur, Andhra Pradesh</span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            {/* Email */}
            <Button
              variant="outline"
              onClick={copyEmail}
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-4 w-4 mr-2" />
              2200032973cseh@gmail.com
              {copied ? (
                <Check className="h-4 w-4 ml-2 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 ml-2 opacity-50 group-hover:opacity-100" />
              )}
            </Button>

            {/* Phone */}
            <Button
              variant="outline"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+919666917545">
                <Phone className="h-4 w-4 mr-2" />
                +91 9666917545
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 pt-12">
            <a
              href="https://linkedin.com/in/kamal-mannava"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:animate-swing"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/kamal-mannava"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 hover:animate-swing"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
