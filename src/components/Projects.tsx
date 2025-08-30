import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "AI & ML"];

  const projects = [
    // Full-Stack Bloodlines
    {
      id: 1,
      title: "AI Form Generator",
      category: "Full-Stack",
      description: "AI-driven dynamic form builder with payment integration and clipboard-ready URLs. Automated form creation boosting efficiency by 40%.",
      tech: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "Google Gemini AI", "Razorpay", "Docker"],
      github: "https://github.com/SANITPRAKASH/ai-form-generator",
      live: "#",
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
      title: "Multi-Vendor Ecommerce",
      category: "Full-Stack",
      description: "Full-stack marketplace with secure payments, seller dashboards, chatbot support, and real-time analytics.",
      tech: ["Spring Boot", "React", "MySQL", "Razorpay", "JWT"],
      github: "https://github.com/SANITPRAKASH/MultivendorEcommerce",
      live: "#",
      featured: true,
      status: "Marketplace"
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
    {
      id: 6,
      title: "Learning Management System",
      category: "Full-Stack",
      description: "MERN stack LMS with dashboards, analytics, and progress tracking. Fork with significant contributions.",
      tech: ["TypeScript", "React", "Node.js", "MongoDB"],
      github: "https://github.com/SANITPRAKASH/learning-management",
      live: "#",
      featured: false,
      status: "Educational Platform"
    },

    // Frontend Edge
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

    // Backend Core
    {
      id: 11,
      title: "Java Social Backend",
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
      title: "Ecommerce Practice API",
      category: "Backend",
      description: "Spring Boot practice project with complete ecommerce backend functionality.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/SANITPRAKASH/Ecommerce_Practice",
      live: "#",
      featured: false,
      status: "Practice Project"
    },

    // Mobile Hunt
    {
      id: 13,
      title: "React Native Restate",
      category: "Mobile",
      description: "Real estate mobile application built with React Native and TypeScript.",
      tech: ["React Native", "TypeScript", "Expo"],
      github: "https://github.com/SANITPRAKASH/React_Native_restate",
      live: "#",
      featured: false,
      status: "Real Estate App"
    },
    {
      id: 14,
      title: "Fitness Tracker",
      category: "Mobile",
      description: "TypeScript-based fitness tracking application with progress monitoring.",
      tech: ["TypeScript", "React Native", "Local Storage"],
      github: "https://github.com/SANITPRAKASH/FitnessTracker",
      live: "#",
      featured: false,
      status: "Health & Fitness"
    },

    // AI & Dark Arts
    {
      id: 15,
      title: "Fake Job Post Detection",
      category: "AI & ML",
      description: "Machine learning project using NLP to detect fraudulent job postings and protect job seekers.",
      tech: ["Python", "Jupyter Notebook", "NLP", "Scikit-learn"],
      github: "https://github.com/SANITPRAKASH/fakejobpostdetection",
      live: "#",
      featured: false,
      status: "ML Research"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-crimson-gradient">Project</span> Bloodlines
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Battle-tested applications forged with cutting-edge technologies and warrior precision.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blood mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Elite Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card group">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {project.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-2 h-8 w-8" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 h-8 w-8" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-secondary/30 border-primary/10">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/30 border-primary/10">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "warrior" : "blood"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {project.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary/20">
                    {project.status}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="p-2 h-8 w-8" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 h-8 w-8" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs bg-secondary/30 border-primary/10">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="text-xs bg-secondary/30 border-primary/10">
                    +{project.tech.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;