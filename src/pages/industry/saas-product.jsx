import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Heart, 
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
  FileText,
  Clock,
  Cloud,
  ShoppingCart,
  DollarSign,
  Gamepad,
  Home,
  Zap as Energy,
  Tv,
  Wallet,
  Stethoscope,
  BookOpen,
  Truck,
  Settings,
  User
} from 'lucide-react';

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
  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <br /><br /><br /><br /><br /><br />
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Cloud className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500">SaaS Solutions</span>
        </div>
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>
          <span className="text-blue-500">SaaS Product</span>
          <br />
          <span className="relative">Development <span className="text-blue-500 relative">Solutions<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span></span>
        </h1>
        <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>
          Power your digital transformation with advanced SaaS solutions designed for performance, scalability, and business growth. Infosource builds innovative, cloud-native SaaS products tailored to streamline operations and accelerate growth across industries. 100% Confidential & Secure.
        </p>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Get a Quote Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />Explore Our SaaS Solutions
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="text-xs text-gray-600 font-medium font-sans">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SaaSSolutionsSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...prev, index]); 
        } 
      });
    }, { threshold: 0.2 });
    const items = sectionRef.current?.querySelectorAll('.solution-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const solutions = [
    { icon: Users, title: "CRM Solutions", description: "Create intuitive, scalable CRM systems that streamline customer interactions, automate service workflows, manage large datasets, and uncover sales opportunities. Our SaaS CRM solutions automate up to 90% of repetitive tasks for improved efficiency." },
    { icon: Settings, title: "ERP Systems", description: "Develop dynamic, secure ERP platforms with modules for finance, HR, supply chain, project tracking, risk assessment, and more. Enhance coordination and operational control for startups and enterprises alike." },
    { icon: FileText, title: "Project Management Tools", description: "Enable seamless collaboration, remote team management, and on-time project delivery with task tracking, real-time updates, budget monitoring, document sharing, and Gantt charts—all from one dashboard." },
    { icon: Shield, title: "Blockchain-Powered SaaS Apps", description: "Elevate your product with blockchain integration for enhanced security, transparency, and traceability, ensuring immutable records, encrypted communications, and data integrity." },
    { icon: DollarSign, title: "Accounting Software", description: "Access secure, cloud-based accounting software that automates invoicing, tracks transactions, maps accounts, and generates real-time financial reports—available from any device, anywhere." },
    { icon: User, title: "HRM Software", description: "Simplify HR operations including employee onboarding, leave management, performance tracking, and payroll with custom HRM SaaS platforms that empower data-driven decision-making." },
    { icon: Stethoscope, title: "Healthcare SaaS Platforms", description: "Deliver top-tier digital health services with comprehensive platforms supporting telemedicine, patient engagement, appointment scheduling, e-prescriptions, billing, and health monitoring—secure, compliant, and scalable." },
    { icon: MessageCircle, title: "Communication Software", description: "Streamline business communication through multi-channel platforms supporting audio/video calls, chat, scheduling, and file sharing—ideal for remote teams, support desks, and internal collaboration." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Cloud className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Our SaaS Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
            Build Robust SaaS Applications with <span className="text-blue-500">Infosource</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            We develop innovative, cloud-native SaaS products tailored to streamline operations, boost productivity, and accelerate growth across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <Card key={index} data-index={index} className={`solution-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''} bg-black/5`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-sans">
            Hire Dedicated SaaS Developers
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const portfolio = [
    { icon: Users, title: "Cloud CRM for Small Businesses", description: "Serwiz: A lightweight yet powerful CRM helping small businesses enhance customer service, streamline processes, and maximize resources. It’s designed to improve both backend efficiency and customer engagement." },
    { icon: FileText, title: "Project & Team Management Software", description: "A comprehensive solution for managing teams, tasks, and documents on a single platform. Features include time tracking, budgeting, task assignment, and centralized storage—boosting collaboration and reducing overheads." },
    { icon: User, title: "HRM Software for Event Businesses", description: "A complete CRM and business management suite tailored for the events industry. This tool helps business owners manage customer relationships, schedules, staff, and finances with ease—saving time and enhancing organization." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Our Work</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Enterprise SaaS Solutions That <span className="text-blue-500">Drive Growth</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black font-sans">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed font-sans">{project.description}</CardDescription>
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems((prev) => [...prev, index]);
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });
    const items = sectionRef.current?.querySelectorAll('.tech-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const technologies = [
    { icon: "☕", title: "Java", color: "from-blue-500 to-blue-700" },
    { icon: "🖥️", title: ".NET", color: "from-purple-500 to-purple-700" },
    { icon: "🐍", title: "Python", color: "from-green-500 to-green-700" },
    { icon: "⚛️", title: "MERN Stack", color: "from-cyan-500 to-cyan-700" },
    { icon: "🅰️", title: "MEAN Stack", color: "from-red-500 to-red-700" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Tech Stack</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technologies for <span className="text-blue-500">SaaS Product Development</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our robust tech stack powers scalable and innovative SaaS solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card key={index} data-index={index} className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isItemVisible ? 'animate-fade-in-up' : ''} bg-black/5`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{tech.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const achievements = [
    { value: "15+", label: "Years of Industry Expertise", icon: Clock },
    { value: "500+", label: "Skilled Engineers and SaaS Experts", icon: Users },
    { value: "1500+", label: "Products Designed, Built, and Delivered", icon: CheckCircle },
    { value: "3", label: "World-Class Development Facilities", icon: Settings },
    { value: "1000+", label: "Satisfied Clients Across the Globe", icon: Globe }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Why Choose Infosource</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            India’s Leading SaaS Product <span className="text-blue-500">Development Partner</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Your strategic partner for innovative and scalable SaaS solutions.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">Our Track Record</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 font-sans"><AnimatedCounter end={parseInt(achievement.value.replace(/[^0-9]/g, ''))} suffix={achievement.value.replace(/[0-9]/g, '')} /></div>
                  <div className="text-white/80 text-sm font-sans">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...prev, index]); 
        } 
      });
    }, { threshold: 0.2 });
    const items = sectionRef.current?.querySelectorAll('.industry-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const industries = [
    { icon: ShoppingCart, title: "Ecommerce", description: "Build scalable digital storefronts and B2B/B2C platforms." },
    { icon: DollarSign, title: "BFSI", description: "Secure SaaS solutions for banking, insurance, and finance." },
    { icon: Gamepad, title: "Sports & Gaming", description: "Feature-rich digital experiences for fans and players." },
    { icon: Home, title: "Real Estate", description: "Modern PropTech solutions for agents and developers." },
    { icon: Energy, title: "Energy & Utilities", description: "SaaS tools for smart grid, billing, and asset management." },
    { icon: Tv, title: "Media & Entertainment", description: "OTT, social media, and streaming platforms." },
    { icon: Wallet, title: "Fintech", description: "Digital wallets, lending systems, and financial analytics." },
    { icon: Stethoscope, title: "Healthcare", description: "HIPAA-compliant telemedicine and patient care platforms." },
    { icon: BookOpen, title: "Education", description: "EdTech tools for e-learning, LMS, and student engagement." },
    { icon: Truck, title: "Logistics", description: "Optimize routes, warehouses, and inventory with SaaS-based systems." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
            Custom SaaS Development for <span className="text-blue-500">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Our SaaS solutions are tailored to meet the unique needs of diverse industries, driving innovation and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <Card key={index} data-index={index} className={`industry-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''} bg-black/5`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Cloud className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Build Your SaaS Product</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">Ready to Build or Scale Your <span className="text-blue-200">SaaS Product</span>?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Partner with Infosource to unlock powerful SaaS technologies that drive business growth and operational efficiency. Let’s build something extraordinary.
          </p>
        </div>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="outline" size="xl" className="group border-white text-white hover:bg-white hover:text-blue-600 font-sans">
            <MessageCircle className="w-5 h-5" />Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="group border-white/50 text-white hover:bg-white/10 font-sans">
            <Calendar className="w-5 h-5" />Schedule Consultation
          </Button>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white font-sans">Get In Touch</h3>
            <p className="text-sm text-white/80 font-sans">Start a conversation about your SaaS project</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white font-sans">Free Consultation</h3>
            <p className="text-sm text-white/80 font-sans">Discover SaaS opportunities for your business</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white font-sans">Fast Response</h3>
            <p className="text-sm text-white/80 font-sans">We'll get back to you within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SaaSProduct = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...prev, index]); 
        } 
      });
    }, { threshold: 0.2 });
    const items = document.querySelectorAll('.tech-card, .solution-card, .industry-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <SaaSSolutionsSection />
        <PortfolioSection />
        <TechStackSection />
        <WhyChooseSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SaaSProduct;