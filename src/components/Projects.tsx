import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, ArrowUpRight, Zap } from "lucide-react";

type ProjectCategory = "All" | "Full-Stack" | "Frontend" | "Backend" | "Mobile" | "AI & ML";

const categories: ProjectCategory[] = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "AI & ML"];

const projects = [
  // NEW FEATURED PROJECTS
  {
    id: 1,
    title: "RoomieX - Smart Room Rental",
    category: ["Full-Stack"],
    description: "Full-stack room rental platform with real-time features, enabling users to browse, list, and interact around PG, shared, and private rooms.",
    features: [
      "Real-time communication using WebSockets (Socket.IO)",
      "AWS S3 with CloudFront for scalable media delivery",
      "AI-based image analysis with Google Gemini",
      "Containerized with Docker and GitHub Actions CI/CD"
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO", "AWS S3", "CloudFront", "Google Gemini AI", "Docker"],
    github: "https://github.com/SANITPRAKASH/Roomiex",
    liveDemo: "https://roomiex.vercel.app/",
    color: "primary",
    isNew: true,
    tag: "Real-time Platform"
  },
  {
    id: 2,
    title: "SocietyNest - Society Management",
    category: ["Full-Stack"],
    description: "Comprehensive society management platform for apartment communities with complaint tracking, digital notice boards, and role-based access control.",
    features: [
      "JWT authentication with BCrypt password hashing",
      "Glassmorphism design with Framer Motion animations",
      "End-to-end complaint workflow (OPEN → RESOLVED → CLOSED)",
      "Docker containerization on Render & Vercel"
    ],
    techStack: ["Spring Boot", "Spring Security", "Hibernate", "MySQL", "React.js", "Framer Motion", "shadcn/ui", "Docker"],
    github: "https://github.com/SANITPRAKASH/societynest-frontend",
    liveDemo: "https://societynest-frontend.vercel.app/",
    color: "secondary",
    isNew: true,
    tag: "Enterprise Platform"
  },
  {
    id: 3,
    title: "Kalyani Collections - Boutique",
    category: ["Full-Stack"],
    description: "Production-ready boutique web application for product discovery and in-store appointment booking. Freelance project for local business.",
    features: [
      "JWT + Email OTP (2FA) authentication",
      "Advanced filtering and image-optimized product pages",
      "Wishlist cart with appointment booking system",
      "Automated email notifications with Nodemailer"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "JWT", "Zustand", "Nodemailer", "Docker"],
    github: "https://github.com/SANITPRAKASH/PK",
    liveDemo: "https://kalyanicollections.vercel.app/",
    color: "accent",
    isNew: true,
    tag: "Client Project"
  },

  // EXISTING FULL-STACK PROJECTS
  {
    id: 4,
    title: "AI Form Generator",
    category: ["Full-Stack", "AI & ML"],
    description: "AI-driven dynamic form builder with payment integration and clipboard-ready URLs. Automated form creation boosting efficiency by 40%.",
    features: [
      "Google Gemini AI for intelligent form generation",
      "Razorpay payment gateway integration"
    ],
    techStack: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "Google Gemini AI", "Razorpay", "Docker"],
    github: "https://github.com/SANITPRAKASH/ai-form-generator",
    liveDemo: "https://ai-form-generator-nu.vercel.app/",
    color: "primary",
    isNew: false,
    tag: "SaaS Production"
  },
  {
    id: 5,
    title: "Postify Social Media",
    category: ["Full-Stack"],
    description: "Modern social media platform with real-time features, socket connections, chat system, and live notifications.",
    features: [
      "Real-time chat with Socket.IO",
      "Live notifications and activity feeds"
    ],
    techStack: ["React", "Redux", "MongoDB", "Socket.IO", "GitHub Actions"],
    github: "https://github.com/SANITPRAKASH/Postify_socialmedia",
    liveDemo: "https://postify-wyo1.onrender.com/",
    color: "secondary",
    isNew: false,
    tag: "Real-time Platform"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: ["Full-Stack"],
    description: "TypeScript-based fitness tracking application with progress monitoring.",
    techStack: ["TypeScript", "React Native", "Local Storage"],
    github: "https://github.com/SANITPRAKASH/FitnessTracker",
    liveDemo: "https://fitness-tracker-henna.vercel.app/",
    color: "accent",
    isNew: false,
    tag: "Health & Fitness"
  },
 
  {
    id: 7,
    title: "Food Order & Delivery",
    category: ["Full-Stack"],
    description: "Complete ordering system with payment integration and delivery tracking workflow.",
    techStack: ["JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/SANITPRAKASH/Food_order_and_del_app",
    liveDemo: "https://food-order-and-del-appfront.onrender.com",
    color: "secondary",
    isNew: false,
    tag: "Delivery Platform"
  },

  // FRONTEND PROJECTS
  {
    id: 8,
    title: "Video Call App",
    category: ["Frontend"],
    description: "A simple and responsive video calling application.",
    techStack: ["React", "Tailwind CSS", "ZegoCloud API"],
    github: "https://github.com/SANITPRAKASH/Videoconference",
    liveDemo: "https://videoconference-ib87.onrender.com/",
    color: "accent",
    isNew: false,
    tag: "Video Call App"
  },
  {
    id: 9,
    title: "Nike Product Showcase",
    category: ["Frontend"],
    description: "Responsive product landing page with smooth animations and modern design patterns.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SANITPRAKASH/Nike_Front_sheet",
    liveDemo: "https://sanitprakash.github.io/Nike_Front_sheet/",
    color: "primary",
    isNew: false,
    tag: "Landing Page"
  },
  {
    id: 10,
    title: "Weather App",
    category: ["Frontend"],
    description: "Real-time weather application with API integration and location-based forecasts.",
    techStack: ["React", "JavaScript", "Weather API", "CSS3", "HTML"],
    github: "https://github.com/SANITPRAKASH/WEATHER-APP",
    liveDemo: "https://sanitprakash.github.io/WEATHER-APP/",
    color: "secondary",
    isNew: false,
    tag: "Utility App"
  },
  {
    id: 11,
    title: "Movie Search App",
    category: ["Frontend"],
    description: "OMDB API integration for movie searching with dynamic content rendering.",
    techStack: ["React", "JavaScript", "OMDB API", "HTML", "CSS"],
    github: "https://github.com/SANITPRAKASH/Movie_SEARCH_APP",
    liveDemo: "https://movie-search-app-uoit.onrender.com/",
    color: "accent",
    isNew: false,
    tag: "Entertainment"
  },
  {
    id: 12,
    title: "To-do List App",
    category: ["Frontend"],
    description: "The ToDo List App helps users manage their daily tasks by adding, removing, and marking them as complete.",
    techStack: ["React", "JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/SANITPRAKASH/to-do-list-app",
    liveDemo: "https://sanitprakash.github.io/to-do-list-app/",
    color: "primary",
    isNew: false,
    tag: "Utility Tools"
  },

  // BACKEND PROJECTS
  {
    id: 13,
    title: "Social Media Backend",
    category: ["Backend"],
    description: "Social media backend with REST APIs, JWT authentication, and user management system.",
    techStack: ["Java", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/SANITPRAKASH/javasocial",
    liveDemo: "",
    color: "secondary",
    isNew: false,
    tag: "API Service"
  },
  {
    id: 14,
    title: "Ecommerce Backend",
    category: ["Backend"],
    description: "Spring Boot practice project with complete ecommerce backend functionality.",
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    github: "https://github.com/SANITPRAKASH/MultivendorEcommerce",
    liveDemo: "",
    color: "accent",
    isNew: false,
    tag: "Practice Project"
  },
  {
    id: 15,
    title: "Food Store Backend",
    category: ["Backend"],
    description: "Spring Boot practice project a robust backend for a food ordering system.",
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT"],
    github: "https://github.com/SANITPRAKASH/Ruchi-Hub",
    liveDemo: "",
    color: "primary",
    isNew: false,
    tag: "Practice Project"
  },

  // MOBILE PROJECTS
  {
    id: 16,
    title: "React Native Restate",
    category: ["Mobile"],
    description: "Real estate mobile application built with React Native and TypeScript.",
    techStack: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/SANITPRAKASH/React_Native_restate",
    liveDemo: "",
    color: "secondary",
    isNew: false,
    tag: "Real Estate App"
  },

  // AI & ML PROJECTS
  {
    id: 17,
    title: "Fake Job Post Detection",
    category: ["AI & ML"],
    description: "Machine learning project using NLP to detect fraudulent job postings and protect job seekers.",
    techStack: ["Python", "Jupyter Notebook", "NLP", "Scikit-learn"],
    github: "https://github.com/SANITPRAKASH/fakejobpostdetection",
    liveDemo: "",
    color: "accent",
    isNew: false,
    tag: "ML Research"
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />

      <div className="container relative z-10 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Selected <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Scalable applications built with cutting-edge technologies and clean architecture.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="card-elevated overflow-hidden group"
              >
                <div className={`h-1 w-full ${
                  project.color === 'primary' ? 'bg-primary' :
                  project.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                }`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.isNew && (
                        <Badge variant="outline" className="gap-1">
                          <Sparkles className="w-3 h-3" />
                          New
                        </Badge>
                      )}
                      {project.tag && (
                        <Badge variant="outline">{project.tag}</Badge>
                      )}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      {project.liveDemo && project.liveDemo.trim() !== "" && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {project.features && (
                    <div className="mb-4 space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <p key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                            project.color === 'primary' ? 'bg-primary' :
                            project.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                          }`} />
                          <span className="line-clamp-1">{feature}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}