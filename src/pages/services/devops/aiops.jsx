import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Target,
  AlertTriangle,
  Globe,
  Search,
  LineChart,
  Cloud,
  Database,
  Microscope,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Settings,
  Bot,
  Eye,
  Clock,
  MessageCircle,
  Shield,
} from "lucide-react";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const timer = setTimeout(() => requestAnimationFrame(animate), 500);
    return () => clearTimeout(timer);
  }, [end, duration]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">
        <div
          className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-on-scroll`}
          data-index={0}
        >
          <Target className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">
            AIOps Solutions
          </span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } text-black font-sans animate-on-scroll`}
          data-index={0}
        >
          Empower Your{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            AIOps Transformation
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } font-sans animate-on-scroll`}
          data-index={0}
        >
          Revolutionize your IT management with Infosource’s AI-powered AIOps solutions, delivering intelligent automation and proactive insights.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-on-scroll`}
          data-index={0}
        >
          <Button
            variant="hero"
            size="xl"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
            asChild
          >
            <a href="/contact" aria-label="Set up a discussion">
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Set Up a Discussion
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
            asChild
          >
            <a href="/contact" aria-label="Discover more on AIOps">
              <Zap className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              Discover More on AIOps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={1}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our AIOps Services
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Begin Your{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              AIOps Journey
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Unlock the potential of AIOps to enhance IT efficiency and agility.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-on-scroll`}
          data-index={3}
        >
          {[
            {
              icon: AlertTriangle,
              text: "Anomaly Detection: Spot and analyze irregularities in real-time to preemptively resolve issues, optimize performance, and accelerate incident response.",
            },
            {
              icon: Globe,
              text: "Event Correlation: Integrate data from diverse sources to pinpoint and understand complex IT events, enabling rapid root cause identification.",
            },
            {
              icon: Search,
              text: "Root Cause Analysis: Identify the core reasons behind IT incidents using sophisticated AI algorithms, minimizing downtime and boosting efficiency.",
            },
            {
              icon: LineChart,
              text: "Predictive Analytics: Forecast IT trends and potential challenges using historical data and machine learning for proactive management.",
            },
            {
              icon: Cloud,
              text: "Migration & Automation: Transition smoothly to advanced AIOps platforms and automate routine tasks to streamline operations and enhance performance.",
            },
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } animate-on-scroll`}
                data-index={4 + index}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">{point.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...prev, index]);
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    const items = sectionRef.current?.querySelectorAll(".tech-card");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      icon: Database,
      title: "Data Collection and Processing",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection and Prediction",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Bot,
      title: "AIOps Platforms",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Search,
      title: "Root Cause Analysis",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Settings,
      title: "Automated Remediation",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Globe,
      title: "Event Correlation",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Eye,
      title: "Visualization and Dashboards",
      color: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={1}
          >
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Tech Stack
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Discover Our{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Technical Capabilities
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Our cutting-edge tools power innovative AIOps solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isItemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } animate-on-scroll bg-black/5`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-6 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">
                    {tech.title}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="group bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
            asChild
          >
            <a href="/contact" aria-label="Uncover our tech">
              Uncover Our Tech
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      icon: Database,
      title: "Data Ingestion and Collection",
      description:
        "Aggregate data from various IT sources, including metrics, logs, and events.",
    },
    {
      icon: Microscope,
      title: "Data Analysis and Enrichment",
      description:
        "Process and enhance data to uncover actionable insights and detect anomalies.",
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection and Correlation",
      description:
        "Identify unusual patterns and link related events to understand incident causes.",
    },
    {
      icon: Search,
      title: "Root Cause Analysis and Prediction",
      description:
        "Pinpoint issue origins and predict future challenges using advanced analytics.",
    },
    {
      icon: CheckCircle,
      title: "Automated Remediation and Response",
      description:
        "Execute automated actions to resolve issues and optimize performance.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={1}
          >
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our AIOps Process
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Structured{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              AIOps Excellence
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Simplify IT workflows with our intelligent automation approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-index={3 + index}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-black font-sans">{process.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{process.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 font-sans">Case Studies</h3>
          <p className="text-lg mb-6 font-sans">Discover how our AIOps solutions have transformed IT operations.</p>
          <p className="text-blue-100 mb-8 font-sans">Observe how we promote enterprise efficiency across industries.</p>
          <Button
            variant="glass"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-white hover:text-white-600 font-sans"
            asChild
          >
            <a href="/resources/case-studies" aria-label="Explore our case studies">
              Explore Our Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Settings,
      title: "Improved Operational Efficiency",
      description:
        "Automate repetitive tasks, allowing IT teams to focus on strategic priorities.",
    },
    {
      icon: Shield,
      title: "Proactive Maintenance",
      description:
        "Detect potential issues early, reducing downtime and enhancing system reliability.",
    },
  ];

  const achievements = [
    { value: "10+", label: "Years of Experience", icon: Clock },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "200+", label: "Skilled Professionals", icon: Star },
    { value: "1000+", label: "Completed Projects", icon: CheckCircle },
    { value: "95%", label: "Client Retention Rate", icon: TrendingUp },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={1}
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Why Infosource
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Infosource?
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Partner with us for unparalleled AIOps expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-index={3 + index}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-black font-sans">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } animate-on-scroll`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-index={5 + index}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 font-sans">
                    <AnimatedCounter end={parseFloat(achievement.value.replace(/[^0-9.]/g, ""))} suffix={achievement.value.replace(/[0-9.]/g, "")} />
                  </div>
                  <div className="text-white/80 text-sm font-sans">{achievement.label}</div>
                </div>
              );
            })}
          </div>
          <Button
            variant="hero"
            size="lg"
            className="mt-8 group bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
            asChild
          >
            <a href="/contact" aria-label="Connect with us today">
              Connect with Us Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const AIOps = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );
    const items = document.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default AIOps;