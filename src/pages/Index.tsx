import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-red-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sanit Prakash. Built with React, TypeScript & Warrior Spirit.
          </p>
          <p className="text-xs text-red-500 mt-2 font-mono">
            ⚔️ Code • Train • Conquer ⚔️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
