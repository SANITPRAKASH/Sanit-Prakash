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
  const education = {
    degree: "B.E, Computer Science & Engineering",
    school: "Don Bosco Institute of Technology, Bangalore",
    gpa: "8.5 CGPA",
    period: "2021–2025",
    coursework: [
      "Data Structures and Algorithms", "System Design", "Cloud Computing", "Generative AI",
      "Mobile Native Application", "Database Management", "DevOps", "UI/UX design"
    ]
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-crimson-gradient">Professional</span> Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Building skills through real-world development challenges and collaborative projects.
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
           <div className="relative sm:pl-20">
                <div className="absolute left-2.5 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-secondary rounded-full shadow-glow-secondary hidden sm:block"></div>
                
                <div className="project-card p-4 sm:p-6  ">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-gradient-secondary mb-1 sm:mb-2">
                        {education.degree}
                      </h3>
                      <div className="flex items-center text-muted-foreground">
                        <div className="flex items-center">
                          <Building className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="text-sm sm:text-base">{education.school}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <Badge className="bg-accent/20 text-accent border-accent/30 mb-2 w-fit text-xs sm:text-sm">
                        {education.gpa}
                      </Badge>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {education.period}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gradient-gold mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {education.coursework.map((course, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="bg-secondary/30 border-primary/10 text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                   
        
                  </div>
                </div>
              </div>
            {/* End of timeline container */}
          </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="project-card inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Current Status</h3>
            <p className="text-muted-foreground mb-4">
              Actively seeking <span className="text-primary font-semibold">full-time opportunities</span> to continue 
              building impactful software solutions and growing as a developer.
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