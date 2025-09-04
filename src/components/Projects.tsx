import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Mobile",
    "AI & ML",
  ];

  const projects = [
    // Full-Stack Projects
    {
      id: 1,
      title: "AI Form Generator",
      category: "Full-Stack",
      description:
        "AI-driven dynamic form builder with payment integration and clipboard-ready URLs. Automated form creation boosting efficiency by 40%.",
      tech: [
        "Next.js",
        "Prisma",
        "Supabase",
        "PostgreSQL",
        "Google Gemini AI",
        "Razorpay",
        "Docker",
      ],
      github: "https://github.com/SANITPRAKASH/ai-form-generator",
      live: "https://ai-form-generator-nu.vercel.app/",
      featured: true,
      status: "SaaS Production",
    },
    {
      id: 2,
      title: "Postify Social Media",
      category: "Full-Stack",
      description:
        "Modern social media platform with real-time features, socket connections, chat system, and live notifications.",
      tech: ["React", "Redux", "MongoDB", "Socket.IO", "GitHub Actions"],
      github: "https://github.com/SANITPRAKASH/Postify_socialmedia",
      live: "https://postify-wyo1.onrender.com/",
      featured: true,
      status: "Real-time Platform",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      category: "Full-Stack",
      description:
        "TypeScript-based fitness tracking application with progress monitoring.",
      tech: ["TypeScript", "React Native", "Local Storage"],
      github: "https://github.com/SANITPRAKASH/FitnessTracker",
      live: "https://fitness-tracker-henna.vercel.app/",
      featured: false,
      status: "Health & Fitness",
    },
    {
      id: 4,
      title: "Pushkara Expressions",
      category: "Full-Stack",
      description:
        "Boutique e-commerce store with glassmorphism UI and smooth user experience. Freelance project for local business.",
      tech: ["JavaScript", "Node.js", "Payment Gateway"],
      github: "https://github.com/SANITPRAKASH/Pushkara_Expressions",
      live: "",
      featured: false,
      status: "Client Project - Ongoing",
    },
    {
      id: 5,
      title: "Food Order & Delivery",
      category: "Full-Stack",
      description:
        "Complete ordering system with payment integration and delivery tracking workflow.",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/SANITPRAKASH/Food_order_and_del_app",
      live: "https://food-order-and-del-appfront.onrender.com",
      featured: false,
      status: "Delivery Platform",
    },

    // Frontend Projects
    {
      id: 6,
      title: "Video Call App",
      category: "Frontend",
      description: "A simple and responsive video calling application.",
      tech: ["React", "Tailwind CSS", "ZegoCloud_api"],
      github: "https://github.com/SANITPRAKASH/Videoconference",
      live: "https://videoconference-ib87.onrender.com/",
      featured: false,
      status: "Video Call App",
    },
    {
      id: 7,
      title: "Nike Product Showcase",
      category: "Frontend",
      description:
        "Responsive product landing page with smooth animations and modern design patterns.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/SANITPRAKASH/Nike_Front_sheet",
      live: "https://sanitprakash.github.io/Nike_Front_sheet/",
      featured: false,
      status: "Landing Page",
    },
    {
      id: 8,
      title: "Weather App",
      category: "Frontend",
      description:
        "Real-time weather application with API integration and location-based forecasts.",
      tech: ["React", "JavaScript", "HTML", "Weather API", "CSS3"],
      github: "https://github.com/SANITPRAKASH/WEATHER-APP",
      live: "https://sanitprakash.github.io/WEATHER-APP/",
      featured: false,
      status: "Utility App",
    },
    {
      id: 9,
      title: "Movie Search App",
      category: "Frontend",
      description:
        "OMDB API integration for movie searching with dynamic content rendering.",
      tech: ["HTML", "CSS", "JavaScript", "React", "OMDB API"],
      github: "https://github.com/SANITPRAKASH/Movie_SEARCH_APP",
      live: "https://movie-search-app-uoit.onrender.com/",
      featured: false,
      status: "Entertainment",
    },
    {
      id: 10,
      title: "To-do List app",
      category: "Frontend",
      description:
        "The ToDo List App helps users manage their daily tasks by adding, removing, and marking them as complete",
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/SANITPRAKASH/to-do-list-app",
      live: "https://sanitprakash.github.io/to-do-list-app/",
      featured: false,
      status: "Utility Tools",
    },

    // Backend Projects
    {
      id: 11,
      title: "Social Media Backend",
      category: "Backend",
      description:
        "Social media backend with REST APIs, JWT authentication, and user management system.",
      tech: ["Java", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com/SANITPRAKASH/javasocial",
      live: "",
      featured: false,
      status: "API Service",
    },
    {
      id: 12,
      title: "Ecommerce Backend",
      category: "Backend",
      description:
        "Spring Boot practice project with complete ecommerce backend functionality.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/SANITPRAKASH/MultivendorEcommerce",
      live: "",
      featured: false,
      status: "Practice Project",
    },
    {
      id: 13,
      title: "Food Store Backend",
      category: "Backend",
      description:
        "Spring Boot practice project a robust backend for a food ordering system.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT"],
      github: "https://github.com/SANITPRAKASH/Ruchi-Hub",
      live: "",
      featured: false,
      status: "Practice Project",
    },

    // Mobile Projects
    {
      id: 14,
      title: "React Native Restate",
      category: "Mobile",
      description:
        "Real estate mobile application built with React Native and TypeScript.",
      tech: ["React Native", "TypeScript", "Expo"],
      github: "https://github.com/SANITPRAKASH/React_Native_restate",
      live: "",
      featured: false,
      status: "Real Estate App",
    },

    // AI & Machine Learning
    {
      id: 15,
      title: "Fake Job Post Detection",
      category: "AI & ML",
      description:
        "Machine learning project using NLP to detect fraudulent job postings and protect job seekers.",
      tech: ["Python", "Jupyter Notebook", "NLP", "Scikit-learn"],
      github: "https://github.com/SANITPRAKASH/fakejobpostdetection",
      live: "",
      featured: false,
      status: "ML Research",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-gradient">My</span> Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Scalable applications built with cutting-edge technologies and clean
            architecture.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Category Filter - Enhanced Vibranium Style */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "btn-vibranium bg-gradient-to-r from-primary to-wakanda text-primary-foreground wakanda-glow"
                  : "btn-wakanda border-primary/30 hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid - Enhanced Vibranium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card vibranium-card group wakanda-pattern relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary text-xs bg-primary/5"
                  >
                    {project.category}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-silver-accent text-foreground"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 h-7 w-7 sm:h-8 sm:w-8 hover:bg-primary/10 metallic-glow"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-primary hover:text-primary/80" />
                    </a>
                  </Button>
                  {/* Only show live link button if project has a live URL */}
                  {project.live && project.live.trim() !== "" && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 h-7 w-7 sm:h-8 sm:w-8 hover:bg-primary/10 metallic-glow"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-primary hover:text-primary/80" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.tech.slice(0, 10).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-vibranium border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 10 && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-vibranium border-border/50 text-muted-foreground"
                  >
                    +{project.tech.length - 10}
                  </Badge>
                )}
              </div>

              {/* Enhanced Wakandan Energy Effect on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-wakanda/5 transition-all duration-500 pointer-events-none"></div>
              
              {/* Vibranium shimmer effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 vibranium-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="vibranium-card inline-block">
              <Zap className="w-12 h-12 text-primary/50 mx-auto mb-4 metallic-pulse" />
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;