import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Status Badge */}
        <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
          Available for Full-Time Opportunities
        </Badge>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-white">Hey, I'm</span>
          <span className="block text-gradient glitch">Sanit ⚔️</span>
        </h1>
        
        {/* Subtitle */}
        <div className="text-xl md:text-2xl mb-4 text-muted-foreground">
          <span className="text-crimson-gradient font-semibold">Full-Stack Engineer</span>
          <span className="mx-2">•</span>
          <span className="text-crimson-gradient font-semibold">AI & Cloud Explorer</span>
          <span className="mx-2">•</span>
          <span className="text-crimson-gradient font-semibold">MMA Coder 🥋</span>
        </div>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl mb-8 text-white/80 font-mono">
          "I don't just code apps, I <span className="text-primary font-bold">forge weapons of impact</span>"
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('projects')}
            variant="warrior"
            className="group"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            View My Arsenal
          </Button>
          
          <Button 
            variant="blood"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Battle Resume
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/80 hover:bg-primary/10"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">32+</div>
            <div className="text-sm text-muted-foreground">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Years Coding</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;