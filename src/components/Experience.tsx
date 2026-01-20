import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, CheckCircle2, MapPin } from "lucide-react";

const experience = {
  title: "Full-Stack Developer Intern",
  company: "Rooman Technologies",
  period: "2024 - 2025",
  location: "Remote",
  type: "Internship",
  description: "Built features for an LMS platform with role-based admin dashboards and analytics integration.",
  achievements: [
    "Optimized API performance by 30% through efficient query design",
    "Integrated real-time analytics dashboards for user engagement tracking",
    "Wrote comprehensive Cypress end-to-end tests improving code coverage to 85%",
    "Worked in agile sprints with consistent delivery of features on time",
    "Collaborated with cross-functional teams on architecture decisions",
  ],
  techStack: ["React", "Node.js", "MongoDB", "Cypress", "GitHub Actions", "Agile"],
};

const education = {
  degree: "B.E, Computer Science & Engineering",
  institution: "Don Bosco Institute of Technology, Bangalore",
  cgpa: "8.5 CGPA",
  period: "2021–2025",
  location: "Bangalore, India",
  coursework: [
    "Data Structures and Algorithms",
    "System Design",
    "Cloud Computing",
    "Generative AI",
    "Mobile Native Application",
    "Database Management",
    "DevOps",
    "UI/UX design",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Journey
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              Experience & <span className="gradient-text">Education</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Experience Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card-elevated p-8 relative overflow-hidden"
            >
              {/* Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl">{experience.title}</h3>
                    <Badge variant="secondary">{experience.period}</Badge>
                  </div>
                  
                  <p className="text-primary font-medium mb-4">{experience.company}</p>
                  <p className="text-muted-foreground mb-6">{experience.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card-elevated p-8 relative overflow-hidden"
            >
              {/* Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-secondary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl">{education.degree}</h3>
                    <Badge variant="default" className="bg-success">{education.cgpa}</Badge>
                  </div>
                  
                  <p className="text-secondary font-medium mb-1">{education.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {education.location}
                    </span>
                    <span>{education.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Current Status */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="card-elevated inline-block p-6">
              <h3 className="font-display text-xl font-bold mb-2">Current Status</h3>
              <p className="text-muted-foreground mb-4">
                Actively seeking{" "}
                <span className="text-primary font-semibold">full-time opportunities</span>{" "}
                to continue building impactful software solutions.
              </p>
              <Badge variant="outline" className="border-success text-success">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                Open to Full-Time Roles
              </Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;