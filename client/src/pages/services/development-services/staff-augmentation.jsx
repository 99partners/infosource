import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  Smartphone,
  Zap,
  Target,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,
  Settings,
} from "lucide-react";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
        <div
          className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-on-scroll`}
          data-index={0}
        >
          <Users className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">
            Staff Augmentation Services
          </span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } text-black font-sans animate-on-scroll`}
          data-index={0}
        >
          Build Your{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Ideal Team
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } font-sans animate-on-scroll`}
          data-index={0}
        >
          Access top-tier talent from Infosource’s rigorously vetted pool of over 500 developers, seamlessly integrating with your team to drive project success.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-on-scroll`}
          data-index={0}
        >
          <Button
            asChild
            variant="hero"
            size="xl"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            <Link to="/connect-us">
              <span className="relative z-10 flex items-center gap-3">
                <Users className="w-5 h-5" />
                Request a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
          >
            <Users className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            Hire Your Team Now
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
              Why Choose Infosource
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Infosource
            </span>{" "}
            for Staff Augmentation
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Select from the top 1% of developers with specialized skills, full transparency, and 24/7 support to ensure project success.
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
              icon: Star,
              text: "Elite Talent Pool: Select from the top 1% of developers with specialized skills.",
            },
            {
              icon: CheckCircle,
              text: "Full Transparency: Enjoy open communication and complete project visibility.",
            },
            {
              icon: Clock,
              text: "24/7 Support: Benefit from round-the-clock technical assistance.",
            },
            {
              icon: Target,
              text: "Code Ownership: Retain full control over your project’s source code and IP.",
            },
            {
              icon: Users,
              text: "Industry Expertise: Access developers with domain-specific knowledge.",
            },
            {
              icon: Heart,
              text: "Cultural Alignment: Work with professionals who fit your team’s culture.",
            },
            {
              icon: Zap,
              text: "Rapid Onboarding: Quickly scale your team to meet project demands.",
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

const RolesAndSkillsSection = () => {
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

  const roles = [
    "Web Developer",
    "Software Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Team Lead",
    "Business Analyst",
    "Product Manager",
    "Project Manager",
    "Software Team Lead",
    "DevOps Engineer",
    "Big Data Engineer",
    "Full Stack Developer",
  ];

  const skills = [
    "Android Developer",
    "iOS Developer",
    "Java Developer",
    "Laravel Developer",
    "Next.js Developer",
    ".NET Developer",
    "ReactJS Developer",
    "NodeJS Developer",
    "Flutter Developer",
    "React Native Developer",
    "VueJS Developer",
    "Shopify Developer",
    "WooCommerce Developer",
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
              Hire by Roles & Skills
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Hire by{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Roles & Skills
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Maximize ROI with our flexible hiring options tailored to your project needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card
            className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={3}
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold text-black font-sans">
                Hire by Roles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 text-sm leading-relaxed font-sans">
                {roles.map((role, index) => (
                  <li key={index} className="mb-2">
                    • {role}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card
            className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            style={{ animationDelay: "0.2s" }}
            data-index={4}
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold text-black font-sans">
                Hire by Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 text-sm leading-relaxed font-sans">
                {skills.map((skill, index) => (
                  <li key={index} className="mb-2">
                    • {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="group bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            Hire Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
      title: "Inquire",
      description: "Share your project’s technical requirements with us.",
    },
    {
      icon: CheckCircle,
      title: "Select CV",
      description: "Review and shortlist candidates best suited to your needs.",
    },
    {
      icon: Users,
      title: "Interview",
      description: "Conduct video or phone interviews with selected candidates.",
    },
    {
      icon: Zap,
      title: "Onboard",
      description: "Add the chosen developers to your team for immediate impact.",
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
              Our Process
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            How to Hire{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Dedicated Developers
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Our streamlined 4-step process ensures you get the right talent quickly.
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
                    <CardTitle className="text-lg font-bold text-black font-sans">
                      {process.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 font-sans">Engagement Models</h3>
          <p className="text-lg mb-6 font-sans">
            Flexible models tailored to your project requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-black/5 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white font-sans">
                  Dedicated Resource Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-sm font-sans">
                  Ideal for long-term projects, with a fully dedicated, scalable team. Monthly billing, minimum 1 month.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-black/5 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white font-sans">
                  Hourly Costing Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-sm font-sans">
                  Perfect for short-term projects or ongoing support. Weekly/monthly billing, minimum 40 hours, shared resources.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <Button
            variant="glass"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-white hover:text-blue-600 font-sans"
          >
            Enquire Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
      title: "Domain Expertise",
      description: "Access developers with deep industry knowledge.",
    },
    {
      icon: Users,
      title: "Vetted Talent",
      description: "Rigorous selection ensures top-tier professionals.",
    },
    {
      icon: CheckCircle,
      title: "Cultural Alignment",
      description: "Work with developers who fit your team’s culture.",
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Flexible team scaling to meet project demands.",
    },
  ];

  const achievements = [
    { value: "14+", label: "Years of Experience", icon: Clock },
    { value: "1000+", label: "Satisfied Clients", icon: Users },
    { value: "500+", label: "Skilled Engineers", icon: Star },
    { value: "1500+", label: "Projects Delivered", icon: CheckCircle },
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
            <Star className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">
              Our Commitment
            </span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            Our Commitment to{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Client Satisfaction
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-on-scroll`}
            data-index={2}
          >
            We prioritize your success, delivering exceptional talent and support.
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
                    <CardTitle className="text-lg font-bold text-black font-sans">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 font-sans">
                    <AnimatedCounter end={parseInt(achievement.value)} suffix={achievement.value.replace(/[0-9]+/, "")} />
                  </div>
                  <div className="text-white/80 text-sm font-sans">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            asChild
            variant="hero"
            size="lg"
            className="mt-8 group bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            <Link to="/connect-us">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const StaffAugmentation = () => {
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
        <RolesAndSkillsSection />
        <ProcessSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default StaffAugmentation;
