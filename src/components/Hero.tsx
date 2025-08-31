import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Mail } from "lucide-react";
import PortalPhotoFrame from "./PortalPhotoFrame";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Dark Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        

        {/* Main Heading with Portal */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="block text-white">Hey, I'm</span>
            <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Sanit Prakash
            </span>
          </h1>

          {/* Portal Photo positioned next to name - moved more to the right */}
          {/* To adjust position: change 'ml-8' to 'ml-4' (less right) or 'ml-12' (more right) */}
          <div className="flex-shrink-0 ml-12 lg:ml-20">
            <PortalPhotoFrame />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-lg md:text-xl lg:text-2xl mt-20 mb-5 text-gray-300">
          <span className="text-red-400 font-semibold">Software Engineer</span>
          <span className="mx-2 text-red-500">•</span>
          <span className="text-red-400 font-semibold">
            Building Web Platforms & React-Native Apps
          </span>
          <span className="mx-2 text-red-500">•</span>
          <span className="text-red-400 font-semibold">
            Exploring AI & Cloud Systems
          </span>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg lg:text-xl mb-10 text-white/80 font-mono max-w-2xl mx-auto">
          "Building{" "}
          <span className="text-red-500 font-bold">scalable applications</span>{" "}
          that make an impact"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 transform hover:scale-105 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View My Work
          </Button>

          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 transform hover:scale-105 transition-all duration-200"
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1pETEU29LNqvUJ4qRHW20IonKuuIGeoOp",
                "_blank"
              )
            }
          >
            <FileText className="w-4 h-4 mr-2" />
            Download Resume
          </Button>

          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-400 hover:bg-red-500/10 transform hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
      </div>

      {/* Stats Section - Full Width */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-red-500/20 bg-black/40 backdrop-blur-sm rounded-lg p-6">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-red-500">
                32+
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Repositories
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-red-500">
                15+
              </div>
              <div className="text-xs md:text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-red-500">
                3+
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Years Coding
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Add custom CSS
const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Hero;
