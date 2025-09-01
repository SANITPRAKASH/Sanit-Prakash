import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Zap,
  Phone,
  Globe,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEAwSE1tpCOccEkWP5fwZ1VJj3YOFri0jZxAHMJOTLp5hLug/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setStatus("Message sent successfully! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      setStatus(
        "Something went wrong. Please try again or contact me directly!"
      );
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickStats = [
    {
      label: "Response Time",
      value: "< 24hrs",
      icon: Clock,
      color: "text-purple-400",
    },
    {
      label: "Location-Bengaluru",
      value: "Remote Ready",
      icon: MapPin,
      color: "text-purple-500",
    },
    {
      label: "Availability",
      value: "Full-Time",
      icon: User,
      color: "text-purple-400",
    },
    {
      label: "Time Zone",
      value: "IST (UTC+5:30)",
      icon: Globe,
      color: "text-purple-500",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sanitprakash@outlook.com",
      action: () =>
        window.open(
          "mailto:sanitprakash@outlook.com?subject=Let's build something amazing together&body=Hi Sanit,\n\nI'd like to discuss...",
          "_blank"
        ),
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8050405797",
      action: () => window.open("tel:+918050405797"),
      gradient: "from-purple-600 to-purple-800",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka",
      action: () =>
        window.open(
          "https://www.google.com/maps/place/Basaweshwara+Nagar,+Bengaluru,+Karnataka",
          "_blank"
        ),
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Linkedin,
      title: "Linkdin",
      value: "linkedin.com/in/sanitprakash",
      action: () =>
        window.open("https://www.linkedin.com/in/sanit-prakash/", "_blank"),
      gradient: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 sm:px-6 bg-black min-h-screen relative"
    >
      {/* Wakandan Energy Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)
          `,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-purple-gradient">Build Together</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Ready to create something amazing together? Drop me a message and
            let's build applications that make an impact.
          </p>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Form - Enhanced */}
          <div className="lg:col-span-2 space-y-6">
            <div className="project-card wakanda-pattern">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      Full Name *
                    </label>
                    <input
                      name="entry.2065158738"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full p-3 md:p-4 rounded-lg bg-background/50 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      Email Address *
                    </label>
                    <input
                      name="entry.696322737"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-3 md:p-4 rounded-lg bg-background/50 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    Subject
                  </label>
                  <input
                    name="entry.1087425657"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full p-3 md:p-4 rounded-lg bg-background/50 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    Message *
                  </label>
                  <textarea
                    name="entry.125199801"
                    placeholder="Tell me about your project, ideas, or just say hi! I'd love to hear from you..."
                    rows={5}
                    required
                    className="w-full p-3 md:p-4 rounded-lg bg-background/50 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 md:py-4 text-base md:text-lg transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-purple-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {status && (
                <div
                  className={`mt-4 md:mt-6 p-3 md:p-4 rounded-lg text-center font-medium text-sm md:text-base transition-all ${
                    status.includes("successfully")
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
            {/* Quick Connect CTA - Wakandan Style */}
            <div className="project-card text-center flex flex-col items-center gap-4 wakanda-pattern bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30 p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                Quick Connect
              </h4>
              <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-sm">
                For immediate opportunities or project discussions
              </p>

              {/* Contact Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
                  onClick={() =>
                    window.open(
                      "mailto:sanitprakash@outlook.com?subject=Let's build something amazing together&body=Hi Sanit,\n\nI'd like to discuss...",
                      "_blank"
                    )
                  }
                >
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Get In Touch</span>
                </Button>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
                  onClick={() => window.open("tel:+918050405797", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Contact Me</span>
                </Button>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Basaweshwara+Nagar,+Bengaluru,+Karnataka",
                      "_blank"
                    )
                  }
                >
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">My Location</span>
                </Button>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sanit-prakash/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </Button>
              </div>

              {/* Mobile-first stacked layout fallback */}
              <div className="sm:hidden flex flex-col gap-3 w-full max-w-xs mt-4">
                <div className="text-xs text-purple-300/70 text-center">
                  📱 Tap any button above to connect
                </div>
              </div>

              {/* Wakandan energy effects around the CTA */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-ping"
                    style={{
                      top: `${15 + Math.sin((i * Math.PI) / 3) * 35}%`,
                      left: `${15 + Math.cos((i * Math.PI) / 3) * 35}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: "3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Status & Info - Enhanced */}
          <div className="space-y-6">
            {/* Current Status */}
            <div className="project-card wakanda-pattern">
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center">
                Current Status
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/30">
                  <span className="text-white font-medium text-sm md:text-base flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Availability
                  </span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/40 text-xs md:text-sm">
                    Available
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {quickStats.map(({ label, value, icon: Icon, color }) => (
                    <div
                      key={label}
                      className="text-center p-3 border border-purple-500/20 rounded-lg hover:border-purple-400/40 transition-all hover:bg-purple-500/5 group"
                    >
                      <Icon
                        className={`w-4 h-4 mx-auto mb-2 ${color} group-hover:text-purple-300 transition-colors`}
                      />
                      <div className="text-purple-400 font-semibold text-xs md:text-sm">
                        {value}
                      </div>
                      <div className="text-gray-500 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-6 text-center">
                What I'm Looking For
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 hover:border-purple-400/30 transition-all">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">
                      Software & Full-Stack Roles
                    </h4>
                    <p className="text-gray-400 text-xs">
                      React, Node.js, Spring Boot
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-gradient-to-r from-purple-600/10 to-purple-700/10 border border-purple-500/20 hover:border-purple-400/30 transition-all">
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">
                      AI & SaaS Projects
                    </h4>
                    <p className="text-gray-400 text-xs">
                      ML integration, Automation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-gradient-to-r from-purple-700/10 to-purple-800/10 border border-purple-500/20 hover:border-purple-400/30 transition-all">
                  <div
                    className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">
                      Collaborative Teams
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Agile, Growth, Impact
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wakandan Tech CTA */}
            <div className="project-card text-center bg-gradient-to-br from-purple-900/20 to-black border-purple-500/30">
              <div className="relative">
                {/* Energy particles around the CTA */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-ping"
                      style={{
                        top: `${20 + Math.sin((i * Math.PI) / 3) * 30}%`,
                        left: `${20 + Math.cos((i * Math.PI) / 3) * 60}%`,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: "3s",
                      }}
                    ></div>
                  ))}
                </div>

                <Zap className="w-8 h-8 md:w-12 md:h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
                <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                  Ready to Innovate?
                </h4>
                <p className="text-gray-400 text-sm md:text-base mb-6">
                  Let's harness technology to build something extraordinary
                </p>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-3 transition-all duration-300 group"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/uc?export=download&id=1pETEU29LNqvUJ4qRHW20IonKuuIGeoOp",
                        "_blank"
                      )
                    }
                  >
                    <User className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Energy Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
