import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "AI & ML"];

  const projects = [
    // Full-Stack Projects
    {
      id: 1,
      title: "AI Form Generator",
      category: "Full-Stack",
      description: "AI-driven dynamic form builder with payment integration and clipboard-ready URLs. Automated form creation boosting efficiency by 40%.",
      tech: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "Google Gemini AI", "Razorpay", "Docker"],
      github: "https://github.com/SANITPRAKASH/ai-form-generator",
      live: "https://github.com/SANITPRAKASH",
      featured: true,
      status: "SaaS Production"
    },
    {
      id: 2,
      title: "Postify Social Media",
      category: "Full-Stack",
      description: "Modern social media platform with real-time features, socket connections, chat system, and live notifications.",
      tech: ["React", "Redux", "MongoDB", "Socket.IO", "GitHub Actions"],
      github: "https://github.com/SANITPRAKASH/Postify_socialmedia",
      live: "#",
      featured: true,
      status: "Real-time Platform"
    },
     {
      id: 3,
      title: "Fitness Tracker",
      category: "Full-Stack",
      description: "TypeScript-based fitness tracking application with progress monitoring.",
      tech: ["TypeScript", "React Native", "Local Storage"],
      github: "https://github.com/SANITPRAKASH/FitnessTracker",
      live: "#",
      featured: false,
      status: "Health & Fitness"
    },
    {
      id: 4,
      title: "Pushkara Expressions",
      category: "Full-Stack",
      description: "Boutique e-commerce store with glassmorphism UI and smooth user experience. Freelance project for local business.",
      tech: ["JavaScript", "Node.js", "Payment Gateway"],
      github: "#",
      live: "#",
      featured: false,
      status: "Client Project"
    },
    {
      id: 5,
      title: "Food Order & Delivery",
      category: "Full-Stack",
      description: "Complete ordering system with payment integration and delivery tracking workflow.",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/SANITPRAKASH/Food_order_and_del_app",
      live: "#",
      featured: false,
      status: "Delivery Platform"
    },
    
   

    // Frontend Projects
     {
      id: 6,
      title: "Video Call App",
      category: "Frontend",
      description: "A simple and responsive video calling application.",
      tech: ["React", "Tailwind CSS", "ZegoCloud_api"],
      github: "https://github.com/SANITPRAKASH/Videoconference",
      live: "#",
      featured: false,
      status: "Video Call App"
    },
    {
      id: 7,
      title: "Nike Product Showcase",
      category: "Frontend",
      description: "Responsive product landing page with smooth animations and modern design patterns.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/SANITPRAKASH/Nike_Front_sheet",
      live: "#",
      featured: false,
      status: "Landing Page"
    },
    {
      id: 8,
      title: "Weather App",
      category: "Frontend",
      description: "Real-time weather application with API integration and location-based forecasts.",
      tech: ["JavaScript", "Weather API", "CSS3"],
      github: "https://github.com/SANITPRAKASH/WEATHER-APP",
      live: "#",
      featured: false,
      status: "Utility App"
    },
    {
      id: 9,
      title: "Movie Search App",
      category: "Frontend",
      description: "OMDB API integration for movie searching with dynamic content rendering.",
      tech: ["HTML", "CSS", "JavaScript", "OMDB API"],
      github: "https://github.com/SANITPRAKASH/Movie_SEARCH_APP",
      live: "#",
      featured: false,
      status: "Entertainment"
    },
    {
      id: 10,
      title: "Digital Clock & Stopwatch",
      category: "Frontend",
      description: "Clean UI utility apps showcasing JavaScript timing functions and CSS animations.",
      tech: ["JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/SANITPRAKASH/DigitalClock",
      live: "#",
      featured: false,
      status: "Utility Tools"
    },

    // Backend Projects
    {
      id: 11,
      title: "Social Media Backend",
      category: "Backend",
      description: "Social media backend with REST APIs, JWT authentication, and user management system.",
      tech: ["Java", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com/SANITPRAKASH/javasocial",
      live: "#",
      featured: false,
      status: "API Service"
    },
    {
      id: 12,
      title: "Ecommerce Backend",
      category: "Backend",
      description: "Spring Boot practice project with complete ecommerce backend functionality.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/SANITPRAKASH/Ecommerce_Practice",
      live: "#",
      featured: false,
      status: "Practice Project"
    },{
      id: 13,
      title: "Food Store Backend",
      category: "Backend",
      description: "Spring Boot practice project a robust backend for a food ordering system.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs","JWT"],
      github: "https://github.com/SANITPRAKASH/Ruchi-Hub",
      live: "#",
      featured: false,
      status: "Practice Project"
    },

    // Mobile Projects
    {
      id: 14,
      title: "React Native Restate",
      category: "Mobile",
      description: "Real estate mobile application built with React Native and TypeScript.",
      tech: ["React Native", "TypeScript", "Expo"],
      github: "https://github.com/SANITPRAKASH/React_Native_restate",
      live: "https://github.com/SANITPRAKASH/React_Native_restate",
      featured: false,
      status: "Real Estate App"
    },
   

    // AI & Machine Learning
    {
      id: 15,
      title: "Fake Job Post Detection",
      category: "AI & ML",
      description: "Machine learning project using NLP to detect fraudulent job postings and protect job seekers.",
      tech: ["Python", "Jupyter Notebook", "NLP", "Scikit-learn"],
      github: "https://github.com/SANITPRAKASH/fakejobpostdetection",
      live: "https://github.com/SANITPRAKASH/fakejobpostdetection",
      featured: false,
      status: "ML Research"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-gradient">My</span> Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Scalable applications built with cutting-edge technologies and clean architecture.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Category Filter - Fully Responsive */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-500 wakanda-glow" 
                  : "border-purple-500/30 text-purple-400 hover:border-purple-400/50 hover:bg-purple-500/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group wakanda-pattern">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                    {project.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary/20 text-gray-300">
                    {project.status}
                  </Badge>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button size="sm" variant="ghost" className="p-2 h-7 w-7 sm:h-8 sm:w-8 hover:bg-purple-500/10" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 hover:text-purple-300" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 h-7 w-7 sm:h-8 sm:w-8 hover:bg-purple-500/10" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 hover:text-purple-300" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs bg-secondary/30 border-purple-500/10 text-gray-300">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="text-xs bg-secondary/30 border-purple-500/10 text-gray-300">
                    +{project.tech.length - 3}
                  </Badge>
                )}
              </div>

              {/* Wakandan Energy Effect on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Zap className="w-12 h-12 text-purple-400/50 mx-auto mb-4" />
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;