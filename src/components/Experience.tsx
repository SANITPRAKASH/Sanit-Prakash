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
      description:
        "Built features for an LMS platform with role-based admin dashboards and analytics integration.",
      achievements: [
        "Optimized API performance by 30% through efficient query design",
        "Integrated real-time analytics dashboards for user engagement tracking",
        "Wrote comprehensive Cypress end-to-end tests improving code coverage to 85%",
        "Worked in agile sprints with consistent delivery of features on time",
        "Collaborated with cross-functional teams on architecture decisions",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Cypress",
        "GitHub Actions",
        "Agile",
      ],
    },
  ];

  const education = {
    degree: "B.E, Computer Science & Engineering",
    school: "Don Bosco Institute of Technology, Bangalore",
    gpa: "8.5 CGPA",
    period: "2021–2025",
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

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-gradient">Professional</span>{" "}
            Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Building skills through real-world development challenges and
            collaborative projects.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Wakandan Energy Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-600 to-purple-500 pulse-wakanda"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative flex items-start mb-8 sm:mb-12"
            >
              {/* Timeline Wakandan Energy Dot */}
              <div className="absolute left-4 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full border-4 border-black wakanda-glow z-10"></div>

              {/* Content */}
              <div className="ml-12 sm:ml-16 project-card w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-purple-500" />
                        <span className="text-purple-400 font-semibold text-sm sm:text-base">
                          {exp.company}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-purple-500/30 text-purple-400 text-xs w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {exp.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/30 border-purple-500/10 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Section */}
          <div className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 bg-purple-600 rounded-full border-4 border-black wakanda-glow z-10"></div>

            <div className="ml-12 sm:ml-16 project-card w-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-gradient mb-1 sm:mb-2">
                    {education.degree}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <div className="flex items-center">
                      <Building className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="text-sm sm:text-base">
                        {education.school}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2 w-fit text-xs sm:text-sm">
                    {education.gpa}
                  </Badge>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {education.period}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {education.coursework.map((course, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary/30 border-purple-500/10 text-xs"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="project-card inline-block w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Current Status
            </h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base px-2">
              Actively seeking{" "}
              <span className="text-purple-400 font-semibold">
                full-time opportunities
              </span>{" "}
              to continue building impactful software solutions and growing as a
              developer.
            </p>
            <Badge
              variant="outline"
              className="border-purple-500 text-purple-400 pulse-wakanda"
            >
              Open to Full-Time Roles
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
