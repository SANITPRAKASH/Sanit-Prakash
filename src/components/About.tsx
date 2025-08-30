import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Coffee } from "lucide-react";

const About = () => {
  const skills = {
    "Backend Technologies": ["Spring Boot", "Node.js", "Express", "REST APIs", "WebSocket"],
    "Frontend Technologies": ["React", "Next.js", "React Native", "Tailwind", "TypeScript"],
    "Cloud Platforms": ["AWS", "Docker", "Kubernetes", "Supabase", "Firebase"],
    "Database Technologies": ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
    "DevOps Tools": ["GitHub Actions", "CI/CD", "Jest", "Cypress"]
  };

  const achievements = [
    { icon: Shield, title: "AWS Practitioner", desc: "Cloud Certified" },
    { icon: Code, title: "HackerRank Java", desc: "Top Global Rank" },
    { icon: Zap, title: "GitHub Achievements", desc: "Pull Shark • YOLO • Quickdraw" },
    { icon: Coffee, title: "MMA Training", desc: "Discipline & Focus" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-crimson-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blood mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-2xl font-bold text-white mb-4">Developer Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm <span className="text-primary font-semibold">Sanit Prakash</span>, a software engineer who builds scalable, 
                impactful applications. By day, I'm shipping features in web & mobile apps using 
                <span className="text-primary"> Java, Spring Boot, React, and Next.js</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By night, I'm either training <span className="text-primary font-semibold">MMA</span> for focus & discipline 
                or experimenting with <span className="text-primary font-semibold">AI & cloud projects</span> that push 
                technological boundaries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe good software is <span className="text-crimson-gradient font-semibold">well-architected</span>—
                structured, scalable, and capable of making real impact.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="project-card">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Facts</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🥋 Trains MMA for focus + discipline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">☁️ Loves automating workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🤖 Currently exploring AI-powered SaaS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">⚡ Full-stack dev for 3+ years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Achievements */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-primary font-semibold text-sm mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-secondary/50 text-white border-primary/20 hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center p-3 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-white text-sm">{title}</h4>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;