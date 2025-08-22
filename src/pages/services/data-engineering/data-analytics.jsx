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
  Calendar,
  Play,
  BarChart3,
  Database,
  Eye,
  Bot,
  Monitor,
  Settings,
  User,
  Smartphone,
  LineChart,
  Microscope,
  Pill,
  FlaskConical,
  FileText,
  Clock,
  AlertTriangle,
  Search,
  Cloud,
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
          <Target className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">
            Data Analytics Services
          </span>
        </div>
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } text-black font-sans`}
        >
          Harness{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Data Analytics
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } font-sans`}
        >
          Harness the strength of Data Analytics to convert knowledge into
          planned expansion. Our offerings streamline activities, improve client
          interactions, and increase income.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            variant="hero"
            size="xl"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Set Up a Discussion
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans"
          >
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            Discover More on Data Analytics
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our Services
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Data Analytics
            </span>{" "}
            Offerings
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our Data and Analytics offerings transform unprocessed data into
            concrete enterprise worth, streamlining activities and driving
            growth.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              icon: BarChart3,
              text: "Data Evaluation and Reporting: Convert data into practical views via sophisticated analytics and enterprise patterns.",
            },
            {
              icon: LineChart,
              text: "Predictive Analytics: Employ advanced formulas and machine learning to predict upcoming patterns and actions.",
            },
            {
              icon: Database,
              text: "Descriptive Analytics: Review past data to grasp performance and reveal patterns, offering a distinct business perspective.",
            },
            {
              icon: Settings,
              text: "Prescriptive Analytics: Suggest ideal actions drawn from data-based forecasts, refining choices and processes.",
            },
            {
              icon: Search,
              text: "Diagnostic Analytics: Reveal causes of problems and patterns, supporting resolution and choice making.",
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
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {point.text}
                  </p>
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
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
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
      title: "Data Gathering and Merging",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Settings,
      title: "Data Handling and Change",
      color: "from-green-500 to-green-700",
    },
    {
      icon: BarChart3,
      title: "Data Evaluation and Modeling",
      color: "from-purple-500 to-purple-700",
    },
    { icon: Eye, title: "Data Display", color: "from-red-500 to-red-700" },
    {
      icon: FileText,
      title: "Reporting and Panels",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Shield,
      title: "Data Handling and Oversight",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Cloud,
      title: "Data Merging and APIs",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Zap,
      title: "Data Automation",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Tech Stack
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Empowering{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Data Analytics
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our sophisticated tech collection provides precise, practical, and
            data-oriented Data Analytics offerings.
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
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            Uncover Our Tech
            <ArrowRight className="w-5 h-5 ml-2" />
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
      icon: Target,
      title: "Outlining Aims",
      description:
        "Distinctly define the particular queries or aims to examine the goals to resolve.",
    },
    {
      icon: Database,
      title: "Gathering Data",
      description:
        "Collect pertinent data from diverse origins in an organized form.",
    },
    {
      icon: AlertTriangle,
      title: "Purifying Data",
      description:
        "Spot and fix mistakes, absent values, and discrepancies in the data sheet.",
    },
    {
      icon: BarChart3,
      title: "Evaluating Data",
      description:
        "Use statistical and machine learning methods to spot patterns and trends.",
    },
    {
      icon: CheckCircle,
      title: "Interpreting Data",
      description:
        "Change understanding into applicable suggestions based on results.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our Process
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Effective <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
Data Analytics</span>{" "}
            Process
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our optimized Data Analytics method delivers knowledge quicker.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black font-sans">
                      {process.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed font-sans">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 font-sans">Case Studies</h3>
          <p className="text-lg mb-6 font-sans">
            Review our notable Data Analytics case studies
          </p>
          <p className="text-blue-100 mb-8 font-sans">
            Observe how we promote enterprise expansion across industries.
          </p>
          <Button
            variant="outline"
            className="border-white text-blue-600 hover:bg-white hover:text-blue-600 font-sans"
          >
            View Our Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
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
      icon: Target,
      title: "Sophisticated Data Modeling",
      description:
        "Sophisticated formulas and statistical methods to forecast patterns and form knowledgeable choices.",
    },
    {
      icon: Eye,
      title: "Thorough Data Display",
      description:
        "Change intricate data into clear visual form for improved planned preparation.",
    },
    {
      icon: Shield,
      title: "Data-Driven Results",
      description:
        "Unlock data's complete potential with precise and actionable insights.",
    },
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description:
        "Your data, our skills, and outstanding results as your trusted partner.",
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Why Infosource
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
Infosource?</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Unlock data's complete potential with Infosource, your trusted Data
            Analytics firm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                    <CardTitle className="text-xl font-bold text-black font-sans">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed font-sans">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 font-sans">
                    {achievement.value}
                  </div>
                  <div className="text-white/80 text-sm font-sans">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            variant="hero"
            size="lg"
            className="mt-8 bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            Discuss with a Specialist
            <ArrowRight className="w-5 h-5 ml-2" />
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
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">
            Transforming <span className="text-blue-200">Businesses</span> with
            Data
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Discover how Infosource’s Data Analytics solutions drive enterprise
            expansion across industries.
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
              description:
                "Review our notable Data Analytics case studies and observe how we promote enterprise expansion.",
              buttonText: "View Our Case Studies",
            },
            {
              icon: TrendingUp,
              title: "Industries",
              description:
                "Data Analytics achievements across sectors, transforming enterprises with knowledge.",
              buttonText: "Arrange a Complimentary AI Discussion",
            },
            {
              icon: Users,
              title: "Testimonials",
              description:
                "Our clients express how Infosource’s Data Analytics offerings have changed enterprises.",
              buttonText: "Our Clients Express for Us",
            },
            {
              icon: CheckCircle,
              title: "Resources",
              description:
                "Review specialist pieces, patterns, and advice to master Data Analytics.",
              buttonText: "Access Data Analytics Blogs",
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
                  <h3 className="font-semibold mb-2 text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 font-sans">
                    {item.description}
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-4 border-white text-blue-600 hover:bg-white hover:text-blue-600 font-sans"
                  >
                    {item.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
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

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <WhyChooseSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default DataAnalytics;
