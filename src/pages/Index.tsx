import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Sanit Prakash. Built with React, TypeScript & Warrior Spirit.
          </p>
          <p className="text-xs text-primary mt-2 font-mono">
            ⚔️ Code • Train • Conquer ⚔️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
