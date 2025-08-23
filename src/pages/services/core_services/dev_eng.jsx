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
  Brain,
  Activity,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
  Target,
  Globe,
  Award,
  MessageCircle,
  Bot,
  Monitor,
  Settings,
  Database,
  Eye,
  Smartphone,
  LineChart,
  FileText,
  Clock,
  Search,
  Cloud,
  Code,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div
          className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Code className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">
            Software Development Services
          </span>
        </div>
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } text-black font-sans`}
        >
          Empower Your{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Digital Transformation
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } font-sans`}
        >
          Next-generation software development solutions to drive efficiency, innovation, and growth.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            variant="hero"
            size="xl"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white font-sans"
            asChild
          >
            <a href="/contact" aria-label="Get a free consultation">
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 font-sans"
            asChild
          >
            <a href="/software-solutions" aria-label="Explore software solutions">
              <Code className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Explore Software Solutions
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
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

  const stats = [
    { value: "60%", label: "Of data used for AI will be artificially generated", source: "Gartner", icon: Database },
    { value: "90%", label: "Of consumers expect online customer service portals", source: "Microsoft", icon: Users },
    { value: "56%", label: "Of CEOs believe digital transformation drives revenue", source: "Gartner", icon: TrendingUp },
    { value: "$1.03T", label: "Expected software market size by 2027", source: "Tech Report", icon: LineChart },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <LineChart className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white font-sans">
              Software Development Trends
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Driving <span className="text-blue-200">Competitive Advantage</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 font-sans">
                    <AnimatedCounter end={stat.value.replace(/[^0-9.]/g, "")} suffix={stat.value.replace(/[0-9.]/g, "")} />
                  </div>
                  <p className="text-white/80 text-sm mb eisenreliefert mb-3 leading-relaxed font-sans">{stat.label}</p>
                  <div className="text-white/60 text-xs font-semibold">– {stat.source}</div>
                </CardContent>
              </Card>
            );
          })}
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our Software Services
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Code Your{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            End-to-end custom software development to modernize your business.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              icon: Globe,
              text: "Enterprise Software Development: Scalable, secure solutions to streamline operations and enhance growth.",
            },
            {
              icon: Code,
              text: "API Development: Seamless, high-performance APIs for smooth integrations.",
            },
            {
              icon: Star,
              text: "Product Engineering: Turn ideas into market-ready products with agile methods.",
            },
            {
              icon: Target,
              text: "MVP Development: Validate ideas with agile Minimum Viable Products.",
            },
            {
              icon: Smartphone,
              text: "Mobile App Development: Robust iOS and Android apps for enhanced engagement.",
            },
            {
              icon: Monitor,
              text: "Web Development: Scalable, high-performance web solutions for all needs.",
            },
            {
              icon: FileText,
              text: "eCommerce Development: Customer-focused online stores with advanced functionality.",
            },
            {
              icon: Settings,
              text: "Software Integration: Boost productivity with seamless API and cloud integrations.",
            },
            {
              icon: Users,
              text: "Staff Augmentation: Expand your team with top IT specialists to scale effectively.",
            },
            {
              icon: Search,
              text: "Software Consulting: Expert guidance to align technology with business goals.",
            },
            {
              icon: Eye,
              text: "Software Testing: Rigorous QA to ensure reliability and performance.",
            },
            {
              icon: Database,
              text: "Maintenance & Support: Ongoing monitoring and optimization for long-term success.",
            },
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-black/5"
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
        <div className="text-center mt-12">
          <Button
            variant="hero"
            size="lg"
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white font-sans"
            asChild
          >
            <a href="/contact" aria-label="Talk to our experts">
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
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
      icon: Smartphone,
      title: "Mobile",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Monitor,
      title: "Front-End",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Code,
      title: "Back-End",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Database,
      title: "Database",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: FileText,
      title: "CMS & eCommerce",
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Tech Stack
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Modern{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Leveraging cutting-edge technologies like React, Node.js, AWS, and more to deliver scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isItemVisible ? "animate-fade-in-up" : ""
                } bg-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors font-sans">
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
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white font-sans"
            asChild
          >
            <a href="/tech-stack" aria-label="Explore our tech stack">
              Explore Our Tech Stack
              <ArrowRight className="w-5 h-5 ml-2" />
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
      icon: Search,
      title: "Research",
      description: "Gather business requirements through detailed consultation.",
    },
    {
      icon: Code,
      title: "Design & Development",
      description: "Create architectures, prototypes, and full solutions.",
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Conduct quality assurance and debugging for reliability.",
    },
    {
      icon: Cloud,
      title: "Deployment",
      description: "Smooth rollout from beta to live release.",
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Ongoing monitoring, support, and optimization.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={"inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
          >
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our Development Process
            </span>
          </div>
          <h2
            className={"text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
          >
            Structured{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p
            className={"text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
          >
            A well-defined approach to deliver high-quality software solutions.
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className={"hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 " + (isVisible ? "animate-fade-in-up" : "")}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black font-sans">{process.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed font-sans">{process.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 font-sans">Case Studies</h3>
          <p className="text-lg mb-6 font-sans">Explore our software-driven success stories.</p>
          <p className="text-blue-100 mb-8 font-sans">Driving innovation across industries with custom software.</p>
          <Button
            variant="outline"
            className="border-white hover:bg-white hover:text-blue-600 font-sans"
            asChild
          >
            <a href="/case-studies" aria-label="View software case studies">
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                View Our Case Studies
              </span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
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

  const useCases = [
    {
      icon: Zap,
      title: "Automation Software",
      description: "Streamline repetitive workflows with intelligent automation.",
    },
    {
      icon: Shield,
      title: "Blockchain Solutions",
      description: "Enhance security and transparency with blockchain technology.",
    },
    {
      icon: LineChart,
      title: "Data Analytics Tools",
      description: "Gain deeper strategic insights with advanced analytics.",
    },
    {
      icon: Users,
      title: "Cloud Collaboration",
      description: "Boost teamwork and productivity with cloud-based tools.",
    },
    {
      icon: Globe,
      title: "IoT Solutions",
      description: "Enable smart, connected devices for innovative applications.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Star className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Trending Use Cases
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Optimizing with{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Emerging Tech
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Leveraging innovative technologies to create smarter, efficient systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black font-sans">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed font-sans">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white font-sans"
            asChild
          >
            <a href="/use-cases" aria-label="Explore use cases">
              Explore More Use Cases
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
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
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Heart className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white font-sans">
              Our Software Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">
            Transforming <span className="text-blue-200">Businesses</span> with Software
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Discover how our custom software solutions drive innovation and growth.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              icon: Star,
              title: "Case Studies",
              description: "Explore our software-driven success stories across industries.",
              buttonText: "View Our Case Studies",
              href: "/case-studies",
            },
            {
              icon: TrendingUp,
              title: "Industries",
              description: "Tailored software solutions for diverse sectors.",
              buttonText: "Discover Industry Solutions",
              href: "/industries",
            },
            {
              icon: Users,
              title: "Testimonials",
              description: "Hear how our software transformed client businesses.",
              buttonText: "Read Testimonials",
              href: "/testimonials",
            },
            {
              icon: FileText,
              title: "Resources",
              description: "Access insights, trends, and guides on software development.",
              buttonText: "Explore Software Resources",
              href: "/resources",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white font-sans">{item.title}</h3>
                  <p className="text-sm text-white/80 font-sans">{item.description}</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-4 border-white hover:bg-white hover:text-blue-600 font-sans"
                    asChild
                  >
                    <a href={item.href}>
                      <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                        {item.buttonText}
                      </span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DevEng = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );
    const items = document.querySelectorAll(".tech-card");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <UseCasesSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default DevEng;