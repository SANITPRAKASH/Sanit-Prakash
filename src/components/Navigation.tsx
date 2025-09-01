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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20 wakanda-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Wakandan Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-bold text-lg sm:text-xl text-white hover:text-purple-400 transition-all duration-300 group"
          >
            <span className="text-purple-gradient bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
              SP
            </span>
            <div className="w-0 group-hover:w-full h-0.5 bg-purple-500 transition-all duration-300 mt-1"></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-purple-400 group ${
                  activeSection === id 
                    ? 'text-purple-400' 
                    : 'text-gray-300'
                }`}
              >
                {label}
                {/* Wakandan active indicator */}
                <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                  activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`}></div>
                {/* Wakandan glow effect */}
                {activeSection === id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-400 blur-sm opacity-60"></div>
                )}
              </button>
            ))}
            
            {/* Wakandan Resume Button */}
            <Button 
              variant="outline" 
              size="sm"
              className="border-purple-500/40 text-purple-400 hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-300 text-xs lg:text-sm transition-all duration-300 wakanda-glow-subtle"
              onClick={() => window.open(
                "https://drive.google.com/file/d/1pETEU29LNqvUJ4qRHW20IonKuuIGeoOp/view?usp=sharing",
                "_blank"
              )}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation with Wakandan styling */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-purple-400 px-2 py-1 rounded-md relative group ${
                    activeSection === id 
                      ? 'text-purple-400 bg-purple-500/10' 
                      : 'text-gray-300 hover:bg-purple-500/5'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r"></div>
                  )}
                </button>
              ))}
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-purple-500/40 text-purple-400 hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-300 text-xs w-fit mt-3 mx-2"
                onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1pETEU29LNqvUJ4qRHW20IonKuuIGeoOp/view?usp=sharing",
                "_blank"
              )
            }
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Wakandan energy line at bottom of nav */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </nav>
  );
};

// Add Wakandan navigation styles
const wakandaNavStyles = `
  .wakanda-glow-subtle:hover {
    box-shadow: 0 0 15px rgba(139, 69, 255, 0.3);
  }

  .text-purple-gradient {
    background: linear-gradient(135deg, #8b45ff, #a855f7, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes wakanda-shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .wakanda-shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 69, 255, 0.2),
      transparent
    );
    animation: wakanda-shimmer 2s ease-in-out infinite;
  }
`;

// Inject Wakandan styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = wakandaNavStyles;
  document.head.appendChild(styleSheet);
}

export default Navigation;