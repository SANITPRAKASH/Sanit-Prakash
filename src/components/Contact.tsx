import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, MapPin, Clock, User, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsSubmitting(true);
    
    // Create FormData from the form element
    const formData = new FormData(e.target);
    
    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEAwSE1tpCOccEkWP5fwZ1VJj3YOFri0jZxAHMJOTLp5hLug/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required for Google Forms
        }
      );
      console.log(formData);
      setStatus("✅ Message sent successfully!");
      e.target.reset(); // Clear the form
      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again!");
      setTimeout(() => setStatus(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickStats = [
    { label: "Response Time", value: "< 24hrs", icon: Clock },
    { label: "Location-Bengaluru", value: "Remote Ready", icon: MapPin },
    { label: "Availability", value: "Full-Time", icon: User },
    { label: "Time Zone", value: "IST (UTC+5:30)", icon: Clock }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-crimson-gradient">Build Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to create something amazing together? Drop me a message and let's build applications that make an impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - Made Wider */}
          <div className="lg:col-span-2 space-y-6">
            <div className="project-card">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Contact Me
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      name="entry.2065158738"  // Name field entry ID
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full p-4 rounded-lg bg-background/50 border border-primary/20 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      name="entry.696322737"  // Email field entry ID
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-4 rounded-lg bg-background/50 border border-primary/20 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    name="entry.1087425657"  // Subject field entry ID (using your existing subject entry)
                    type="text"
                    placeholder="What's this about?"
                    className="w-full p-4 rounded-lg bg-background/50 border border-primary/20 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message *
                  </label>
                  <textarea
                    name="entry.125199801"  // Message field entry ID (you'll need to add this field to your Google Form)
                    placeholder="Tell me about your project, ideas, or just say hi! I'd love to hear from you..."
                    rows={6}
                    required
                    className="w-full p-4 rounded-lg bg-background/50 border border-primary/20 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              
              {status && (
                <div className={`mt-6 p-4 rounded-lg text-center font-semibold transition-all ${
                  status.includes('✅') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {status}
                </div>
              )}
            </div>

            {/* Quick CTA */}
            <div className="project-card text-center flex flex-col items-center gap-3">
              <h4 className="text-lg font-bold text-white mb-3">Quick Connect</h4>
              <p className="text-muted-foreground text-sm mb-4">
                For immediate opportunities or project discussions
              </p>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open('mailto:sanitprakash@outlook.com?subject=Let\'s build something amazing together&body=Hi Sanit,\n\nI\'d like to discuss...', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:+919876543210" className="flex items-center justify-center w-full">
                  <User className="w-4 h-4 mr-2" />
                  +91 8050405797
                </a>
              </Button>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open('https://www.google.com/maps/place/Basaweshwara+Nagar,+Bengaluru,+Karnataka', '_blank')}
              >
                <MapPin className="w-4 h-4 mr-1" />
                View My Location

              </Button>
            </div>
          </div>

          {/* Status & Info - Narrower */}
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-6">Current Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <span className="text-white font-medium text-sm">Availability</span>
                  <Badge variant="outline" className="border-green-500 text-green-400 pulse-crimson text-xs">
                    ● Available
                  </Badge>
                </div>
                <div className="space-y-3">
                  {quickStats.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="text-center p-3 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                      <Icon className="w-4 h-4 text-primary mx-auto mb-2" />
                      <div className="text-primary font-semibold text-sm">{value}</div>
                      <div className="text-muted-foreground text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-4">What I'm Looking For</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Software and Full-Stack development Roles</h4>
                    <p className="text-muted-foreground text-xs">React, Node.js, Spring Boot</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">AI & SaaS Projects</h4>
                    <p className="text-muted-foreground text-xs">ML integration, Automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Collaborative Teams</h4>
                    <p className="text-muted-foreground text-xs">Agile, Growth, Impact</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Contact;