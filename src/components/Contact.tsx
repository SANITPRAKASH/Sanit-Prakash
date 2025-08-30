import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sanitprakash@outlook.com",
      href: "mailto:sanitprakash@outlook.com",
      description: "Direct communication channel"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/sanit-prakash",
      href: "https://linkedin.com/in/sanit-prakash",
      description: "Professional network"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SANITPRAKASH",
      href: "https://github.com/SANITPRAKASH",
      description: "Code repositories & contributions"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24hrs" },
    { label: "Location", value: "Remote Ready" },
    { label: "Availability", value: "Full-Time" },
    { label: "Time Zone", value: "IST (UTC+5:30)" }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-crimson-gradient">Code in Crimson</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to forge something powerful together? Reach out and let's build digital weapons that make an impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blood mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-6">Battle Communication Channels</h3>
              <div className="space-y-4">
                {contactMethods.map(({ icon: Icon, label, value, href, description }) => (
                  <a 
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-primary/20 rounded-lg hover:border-primary/40 transition-all group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-white">{label}</h4>
                        <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-primary text-sm font-mono">{value}</p>
                      <p className="text-muted-foreground text-xs">{description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="project-card text-center">
              <h4 className="text-lg font-bold text-white mb-3">Quick Connect</h4>
              <p className="text-muted-foreground text-sm mb-4">
                For immediate opportunities or project discussions
              </p>
              <Button 
                variant="warrior"
                className="w-full"
                onClick={() => window.open('mailto:sanitprakash@outlook.com?subject=Let\'s build something powerful together&body=Hi Sanit,\n\nI\'d like to discuss...', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Battle Invitation
              </Button>
            </div>
          </div>

          {/* Status & Availability */}
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-6">Current Battle Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <span className="text-white">Status</span>
                  <Badge variant="outline" className="border-green-500 text-green-400 pulse-crimson">
                    ● Available for Hire
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {quickStats.map(({ label, value }) => (
                    <div key={label} className="text-center p-3 border border-primary/20 rounded-lg">
                      <div className="text-primary font-semibold text-sm">{value}</div>
                      <div className="text-muted-foreground text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-4">What I'm Looking For</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Full-Stack Development Roles</h4>
                    <p className="text-muted-foreground text-xs">React, Node.js, Spring Boot, Cloud</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">AI & SaaS Projects</h4>
                    <p className="text-muted-foreground text-xs">Machine Learning integration, Automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Collaborative Teams</h4>
                    <p className="text-muted-foreground text-xs">Agile environment, Growth opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card text-center">
              <h4 className="text-lg font-bold text-white mb-2">Warrior's Promise</h4>
              <p className="text-muted-foreground text-sm italic">
                "Every line of code is forged with purpose, every project built with passion, 
                and every challenge faced with the discipline of a warrior."
              </p>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-primary text-xs font-mono">⚔️ Code • Train • Conquer ⚔️</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;