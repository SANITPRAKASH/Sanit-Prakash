import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const skills = {
  backend: {
    title: "Backend Technologies",
    items: ["Spring Boot", "Node.js", "Express", "REST APIs", "WebSocket"],
  },
  frontend: {
    title: "Frontend Technologies",
    items: ["React", "Next.js", "Redux", "React Native", "Tailwind", "TypeScript"],
  },
  cloud: {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Firebase", "Supabase", "CI/CD Pipelines"],
  },
  database: {
    title: "Database Technologies",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  tools: {
    title: "Tools & Practices",
    items: ["Git", "GitHub Actions", "Postman", "IntelliJ IDEA", "Jest", "Cypress", "Agile & Scrum"],
  },
};

const achievements = [
  {
    title: "AWS Practitioner",
    subtitle: "Cloud Certified",
    link: "https://drive.google.com/file/d/1gn224IW0SI6y6eWDosvfKCefF95IQiO-/view?usp=sharing",
  },
  {
    title: "HackerRank Java",
    subtitle: "Top Global Rank",
    link: "https://www.hackerrank.com/certificates/77b13750f0d2",
  },
  {
    title: "JPMorgan Chase Agile",
    subtitle: "Agile Simulation",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20%26%20Co._C48dhMqpSnLjBQbzo_1725668570863_completion_certificate.pdf",
  },
  {
    title: "Goldman Sachs SWE",
    subtitle: "Governance Analyst",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_C48dhMqpSnLjBQbzo_1725665364062_completion_certificate.pdf",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Developer who loves to <span className="gradient-text">build</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm a software engineer passionate about creating web and mobile applications 
              that solve real problems. Currently exploring AI integrations and cloud systems.
            </p>
          </motion.div>

          {/* Profile Description */}
          <motion.div variants={itemVariants} className="card-elevated p-8 mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
              Developer Profile
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm{" "}
              <span className="text-primary font-semibold">Sanit Prakash</span>
              , an aspiring{" "}
              <span className="text-primary font-semibold">Software Engineer</span>
              {" "}who loves building web + mobile apps. I work mainly with{" "}
              <span className="text-primary">
                React, Next.js, Javascript, Spring Boot, Java, React Native, and TypeScript
              </span>
              , with a strong focus on{" "}
              <span className="text-primary font-semibold">backend development</span>
              {" "}— designing secure{" "}
              <span className="text-primary">REST APIs</span>, managing{" "}
              <span className="text-primary">PostgreSQL/MongoDB</span>, and
              deploying on <span className="text-primary">AWS</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I've also explored{" "}
              <span className="text-primary">Docker, CI/CD, and AI-driven features</span>
              {" "}to speed up dev and ship faster. What excites me most is building{" "}
              <span className="text-primary">user-focused products</span>
              {" "}that solve real problems — especially in{" "}
              <span className="text-primary">social tech</span> and{" "}
              <span className="text-primary">healthcare</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My goal: create{" "}
              <span className="gradient-text font-semibold text-lg">
                scalable, impactful software
              </span>
              {" "}that actually makes a difference.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {Object.entries(skills).map(([key, category], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-elevated p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                  }`} />
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements & Social */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Achievements */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold text-center mb-8">
                Achievements & Certs
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.a
                    key={achievement.title}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                    className="card-elevated p-5 text-center cursor-pointer group"
                  >
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <h4 className="font-display font-semibold text-sm">{achievement.title}</h4>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.subtitle}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="card-elevated p-6 flex flex-col items-center justify-center">
              <h3 className="font-display text-lg font-bold mb-6">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sanit-prakash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/SANITPRAKASH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://leetcode.com/u/Sanit_prakash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                >
                  <SiLeetcode className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;