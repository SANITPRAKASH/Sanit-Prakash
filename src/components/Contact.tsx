import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  Github,
  ArrowUpRight,
  Globe
} from "lucide-react";
import { toast } from "sonner";

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const quickStats = [
    { label: "Response", value: "< 24hrs", icon: Clock },
    { label: "Location", value: "Bengaluru", icon: MapPin },
    { label: "Time Zone", value: "IST", icon: Globe },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/SANITPRAKASH", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sanit-prakash/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sanitprakash@outlook.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container relative z-10 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contact
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Let's work <span className="gradient-text">together</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Got a project in mind or just want to chat? Drop me a message!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3 card-elevated p-8"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  variant="default"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Info */}
              <div className="card-elevated p-6">
                <h3 className="font-display font-semibold mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="font-medium text-success">Available</p>
                    </div>
                  </div>
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="font-medium">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-elevated p-6">
                <h3 className="font-display font-semibold mb-4">Connect</h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div 
                className="card-elevated p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-muted-foreground mb-3">
                  Prefer a quick chat?
                </p>
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href="mailto:sanitprakash@outlook.com">
                    Schedule a Call
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;