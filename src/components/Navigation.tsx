import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Arsenal" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-bold text-xl text-white hover:text-primary transition-colors"
          >
            <span className="text-crimson-gradient">SP</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {label}
              </button>
            ))}
            
            {/* Resume Button */}
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/30 text-primary hover:border-primary hover:bg-primary/10 text-xs"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-3">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === id 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-primary hover:border-primary hover:bg-primary/10 text-xs w-fit"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;