import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const stats = [
  { value: "100+", label: "LeetCode" },
  { value: "32+", label: "Repos" },
  { value: "15+", label: "Projects" },
  { value: "3+", label: "Years Coding" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs - EXACT Lovable style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[30%] w-80 h-80 bg-accent/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/photo.png"
                alt="Sanit Prakash - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Sanit</span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="inline-block ml-2"
            >
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-primary inline" />
            </motion.span>
          </motion.h1>

        {/* Subtitle */}
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-8 lg:mt-16 xl:mt-20 mb-4 md:mb-6 text-muted-foreground max-w-4xl mx-auto">
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
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-foreground/80 font-mono max-w-2xl mx-auto px-4">
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
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 border-t border-purple-500/20 bg-background/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 wakanda-pattern">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                100+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                LeetCode
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                32+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Repos
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                15+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                3+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Years Coding
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={18} />
        </motion.a>
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