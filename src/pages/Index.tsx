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

      {/* Wakandan Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sanit Prakash. Built with React, TypeScript & Wakandan Tech.
          </p>
          <p className="text-xs text-purple-400 mt-2 font-mono">
            Code • Innovate • Excel
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
