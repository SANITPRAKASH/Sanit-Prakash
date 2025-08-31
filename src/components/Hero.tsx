import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cosmic Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-space-deep via-space-medium to-space-deep"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--cosmic-purple) / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--cosmic-blue) / 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--cosmic-gold) / 0.2) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-silver rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Portal Image Container */}
        <div className="flex-shrink-0">
          <div className="portal-container w-80 h-80 flex items-center justify-center">
            <div className="portal-ring"></div>
            <div className="portal-inner flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-gradient-to-br from-cosmic-blue/20 to-cosmic-purple/20 backdrop-blur-sm border border-cosmic-blue/30 flex items-center justify-center">
                <div className="text-6xl text-cosmic-blue/60">👤</div>
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cosmic-gold/40 animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
            </div>
          </div>
          <p className="text-cosmic-gold/80 text-sm mt-4 font-mono">✨ Portal Ready - Image Coming Soon ✨</p>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-6 border-cosmic-blue text-cosmic-blue bg-cosmic-blue/10 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Available for Full-Time Opportunities
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground animate-fade-in">Hey, I'm</span>
            <span className="block text-cosmic-blue stellar-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>Sanit</span>
            <span className="block text-2xl md:text-3xl text-cosmic-gold/80 font-light mt-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>👋</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl mb-4 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="text-cosmic-purple font-semibold">Full-Stack Engineer</span>
            <span className="mx-2 text-cosmic-gold">•</span>
            <span className="text-cosmic-blue font-semibold">AI & Cloud Explorer</span>
            <span className="mx-2 text-cosmic-gold">•</span>
            <span className="text-cosmic-purple font-semibold">MMA Coder by Night 🥋</span>
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-foreground/80 font-mono animate-fade-in" style={{ animationDelay: '0.8s' }}>
            "Turning <span className="text-stellar-gradient font-bold">code into constellations</span>, and ideas into galaxies."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-cosmic px-6 py-3"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-ghost-cosmic px-6 py-3"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            
            <Button 
              variant="ghost" 
              className="btn-portal"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div className="glass-card rounded-2xl p-6 mx-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-blue">32+</div>
              <div className="text-xs text-muted-foreground">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-purple">15+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-gold">3+</div>
              <div className="text-xs text-muted-foreground">Years Coding</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmic-blue/50 rounded-full flex justify-center cosmic-glow">
          <div className="w-1 h-3 bg-cosmic-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;