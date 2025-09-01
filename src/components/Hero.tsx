import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Mail } from "lucide-react";
import WakandaKineticFrame from "./WakandaKineticFrame";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Wakandan Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      {/* Floating vibranium particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Wakandan Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(139, 69, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading with Kinetic Frame */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20 mb-8">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20 mb-8">
            <div className="order-2 xl:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-serif">
                <span className="block text-white mb-2 sm:mb-4 font-light italic">
                  Hey, I'm
                </span>
                <span className="block text-purple-400 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-bold">
                  Sanit Prakash
                </span>
              </h1>
            </div>
          </div>

          {/* Wakandan Kinetic Energy Frame positioned next to name */}
          <div className="flex-shrink-0 order-1 xl:order-2">
            <WakandaKineticFrame />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-8 lg:mt-16 xl:mt-20 mb-4 md:mb-6 text-gray-300 max-w-4xl mx-auto">
          <span className="text-purple-400 font-semibold">
            Software Engineer
          </span>
          <span className="mx-1 md:mx-2 text-purple-500">•</span>
          <span className="text-purple-400 font-semibold">
            Building Web Platforms & React-Native Apps
          </span>
          <span className="mx-1 md:mx-2 text-purple-500">•</span>
          <span className="text-purple-400 font-semibold">
            Exploring AI & Cloud Systems
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-white/80 font-mono max-w-2xl mx-auto px-4">
          "Building{" "}
          <span className="text-purple-400 font-bold">
            scalable applications
          </span>{" "}
          that make an impact"
        </p>

       
      </div>
      {/* Stats Section - Fully Responsive */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 border-t border-purple-500/20 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 wakanda-pattern">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                100+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">
                LeetCode
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                32+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">
                Repositories
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                15+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                3+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">
                Years Coding
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wakandan Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-purple-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Add Wakandan custom CSS
const wakandaStyles = `
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

  @keyframes wakanda-pulse {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(139, 69, 255, 0.3);
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 0 40px rgba(139, 69, 255, 0.6);
      transform: scale(1.02);
    }
  }

  .wakanda-glow:hover {
    animation: wakanda-pulse 1.5s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = wakandaStyles;
  document.head.appendChild(styleSheet);
}

export default Hero;
