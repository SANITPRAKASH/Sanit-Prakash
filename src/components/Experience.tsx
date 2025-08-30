import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
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
        "Collaborated with cross-functional teams on architecture decisions"
      ],
      tech: ["React", "Node.js", "MongoDB", "Cypress", "GitHub Actions", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-crimson-gradient">Battle</span> Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Forging skills in the fires of real-world development challenges.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blood mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-blood to-primary pulse-crimson"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-black crimson-glow z-10"></div>
              
              {/* Content */}
              <div className="ml-16 project-card w-full">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">{exp.company}</span>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/30 border-primary/10 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="project-card inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Current Status</h3>
            <p className="text-muted-foreground mb-4">
              Actively seeking <span className="text-primary font-semibold">full-time opportunities</span> to continue 
              forging impactful software solutions and growing as a code warrior.
            </p>
            <Badge variant="outline" className="border-primary text-primary pulse-crimson">
              Open to Full-Time Roles
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;