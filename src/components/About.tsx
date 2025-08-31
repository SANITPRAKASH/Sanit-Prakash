import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Coffee, Album, FolderLock, ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const skills = {
    "Backend Technologies": [
      "Spring Boot",
      "Node.js",
      "Express",
      "REST APIs",
      "WebSocket"
    ],
    "Frontend Technologies": [
      "React",
      "Next.js",
      "Redux",
      "React Native",
      "Tailwind",
      "TypeScript"
    ],
    "Cloud & DevOps": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Supabase",
      "CI/CD Pipelines",
    ],
    "Database Technologies": ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
    "Tools & Practices": [
      "Git",
      "GitHub Actions",
      "Postman",
      "IntelliJ IDEA",
      "Jest",
      "Cypress",
      "Agile & Scrum",
    ],
  };

  const achievements = [
    {
      icon: Shield,
      title: "AWS Practitioner",
      desc: "Cloud Certified",
      link: "https://drive.google.com/file/d/1gn224IW0SI6y6eWDosvfKCefF95IQiO-/view?usp=sharing",
    },
    {
      icon: Code,
      title: "HackerRank Java",
      desc: "Top Global Rank",
      link: "https://www.hackerrank.com/certificates/77b13750f0d2",
    },
    {
      icon: Album,
      title: "JPMorgan Chase & Co. Agile",
      desc: "Participated in an Agile job simulation",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20%26%20Co._C48dhMqpSnLjBQbzo_1725668570863_completion_certificate.pdf",
    },
    {
      icon: FolderLock,
      title: "Goldman Sachs Software Engineering",
      desc: "Completed a governance analyst simulation",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_C48dhMqpSnLjBQbzo_1725665364062_completion_certificate.pdf",
    }
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
          {/* Left Column */}
          <div className="space-y-6">
            {/* Developer Profile */}
            <div className="project-card">
              <h3 className="text-2xl font-bold text-white mb-4">Developer Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm <span className="text-primary font-semibold">Sanit Prakash</span>, 
                an aspiring <span className="text-primary font-semibold">Software Engineer</span> 
                with hands-on experience building scalable web and mobile applications using
                <span className="text-primary"> Java, Spring Boot, React Native, JavaScript, and TypeScript</span>. 
                My core strength lies in <span className="text-primary font-semibold">backend development</span> 
                with Spring Boot, where I focus on designing secure and efficient
                <span className="text-primary"> RESTful APIs</span>, managing databases like
                <span className="text-primary"> PostgreSQL</span> and 
                <span className="text-primary"> MongoDB</span>, and integrating
                cloud platforms such as <span className="text-primary">AWS</span> and
                <span className="text-primary"> Supabase</span>.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                I’m also familiar with <span className="text-primary font-semibold">CI/CD pipelines, Docker, and AI-powered features</span>, 
                which helps me streamline development and ship reliable products faster. 
                Beyond the tech, I care about building <span className="text-primary">user-focused solutions</span> 
                that tackle real-world problems — especially in 
                <span className="text-primary"> social tech</span> and 
                <span className="text-primary"> healthcare</span>. 
                I thrive in <span className="text-primary">agile, cross-functional teams</span>, 
                where I can contribute to impactful features and grow as an engineer.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe good software is 
                <span className="text-crimson-gradient font-semibold"> well-architected</span> — 
                structured, scalable, and capable of making real impact.
              </p>
            </div>

            {/* Extra Card (Highlights / Interests) */}
            {/* Extra Card (Highlights / Interests) */}
<div className="project-card flex flex-col items-center">
  <h3 className="text-xl font-bold text-white mb-6">Highlights</h3>

  <div className="flex gap-6">
    <a
      href="https://www.linkedin.com/in/sanit-prakash/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-primary/20 hover:border-primary/40 transition-colors hover:bg-primary/10"
    >
      <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition-colors" />
    </a>

    <a
      href="https://github.com/SANITPRAKASH"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-primary/20 hover:border-primary/40 transition-colors hover:bg-primary/10"
    >
      <FaGithub className="text-2xl text-gray-400 hover:text-white transition-colors" />
    </a>

    <a
      href="https://leetcode.com/u/yashvvanth_1/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-primary/20 hover:border-primary/40 transition-colors hover:bg-primary/10"
    >
      <SiLeetcode className="text-2xl text-gray-400 hover:text-white transition-colors" />
    </a>
  </div>
</div>
          </div>

          {/* Right Column */}
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
                {achievements.map(({ icon: Icon, title, desc, link }) => (
                  <a
                    key={title}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center p-3 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors group"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-white text-sm flex items-center justify-center gap-1">
                      {title}
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-70 group-hover:opacity-100 transition" />
                    </h4>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </a>
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
