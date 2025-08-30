import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Status Badge */}
        <Badge variant="outline" className="mb-6 border-red-500 text-red-500">
          Available for Full-Time Opportunities
        </Badge>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-white">Hey, I'm</span>
          <span className="block text-red-500">Sanit ⚔️</span>
        </h1>
        
        {/* Subtitle */}
        <div className="text-xl md:text-2xl mb-4 text-gray-300">
          <span className="text-red-400 font-semibold">Full-Stack Engineer</span>
          <span className="mx-2">•</span>
          <span className="text-red-400 font-semibold">AI & Cloud Explorer</span>
          <span className="mx-2">•</span>
          <span className="text-red-400 font-semibold">MMA Coder 🥋</span>
        </div>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl mb-8 text-white/80 font-mono">
          "I don't just code apps, I <span className="text-red-500 font-bold">forge weapons of impact</span>"
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View My Arsenal
          </Button>
          
          <Button 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Battle Resume
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-red-500/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">32+</div>
            <div className="text-sm text-gray-400">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">15+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">3+</div>
            <div className="text-sm text-gray-400">Years Coding</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;