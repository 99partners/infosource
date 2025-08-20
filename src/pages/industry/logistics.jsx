import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Brain, 
  Activity, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Zap,
  Target,
  Award,
  MessageCircle,
  Calendar,
  Play,
  BarChart3,
  Database,
  Bot,
  Settings,
  Clock,
  Truck,
  Map,
  Package,
  Globe,
  Leaf,
  Warehouse,
  Eye,
  Cpu
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
        
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Truck className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500">Logistics AI Solutions</span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>
          <span className="text-blue-500">Logistics</span>
          <br />
          <span className="relative">AI-Powered Supply Chain <span className="text-blue-500 relative">Solutions<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span></span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>
          Revolutionize your logistics operations with cutting-edge AI technology. Experience tailor-made AI 
          solutions designed to optimize and simplify your logistics workflows.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Connect With Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />See How AI is Transforming Logistics
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs text-gray-600 font-medium font-sans">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AIForLogisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">AI for Smarter Logistics</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Next-Gen AI <span className="text-blue-500">Solutions for Logistics</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Artificial intelligence has fundamentally transformed logistics and supply chain management. The 
            days of unreliable legacy systems causing delays and complexities are over. Real-time automation 
            now drives efficiency and accuracy. At Infosource, we recognize the crucial role AI plays in modern 
            logistics. Our expert team is dedicated to delivering powerful AI-driven solutions that streamline 
            supply chain operations and boost productivity using the latest technologies.
          </p>
        </div>

        {/* Key Points */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: Users, text: "Enhances customer satisfaction with reliable service." },
            { icon: Leaf, text: "Supports sustainable and eco-friendly logistics practices." },
            { icon: Settings, text: "Enables fully automated, end-to-end order processing." },
            { icon: Truck, text: "Provides intelligent fleet management with transparent data access." }
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-black/5">
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

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "$18B", label: "Forecasted global AI logistics market size by 2030", source: "Statista", icon: BarChart3 },
    { value: "10-20%", label: "Portion of eCommerce spending devoted to logistics", source: "McKinsey", icon: Package },
    { value: "47%", label: "CAGR projected for AI in logistics from 2024 to 2033", source: "Market.us", icon: TrendingUp },
    { value: "55%", label: "Logistics businesses expected to be AI-powered by 2025", source: "Logistics Insider", icon: Cpu },
    { value: "1-3%", label: "AI-driven planning efficiency improvements", source: "KPMG", icon: CheckCircle },
    { value: "15-20%", label: "Decrease in customer service calls due to AI chatbots", source: "McKinsey", icon: Bot }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <BarChart3 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Industry Stats</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Key Logistics Market Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 font-sans">{stat.value}</div>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed font-sans">{stat.label}</p>
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
    const items = sectionRef.current?.querySelectorAll('.service-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Eye, title: "Smart Goods & Vehicle Tracking", description: "AI-powered tracking using computer vision and machine learning." },
    { icon: Truck, title: "Automated Fleet Management", description: "Intelligent systems for efficient fleet operations." },
    { icon: Database, title: "AI-Driven Documentation & Processing", description: "Streamlined documentation with AI automation." },
    { icon: TrendingUp, title: "Demand Forecasting", description: "Predictive models for accurate demand planning." },
    { icon: Globe, title: "Real-Time Supply Chain Simulation", description: "Simulate and optimize supply chain processes." },
    { icon: Settings, title: "Predictive Maintenance", description: "AI-driven maintenance to reduce downtime." },
    { icon: Warehouse, title: "Large-Scale Warehouse Automation", description: "Automated solutions for warehouse efficiency." },
    { icon: Users, title: "Customer Insights & Analytics", description: "Data-driven insights to enhance customer experience." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
            Infosource's AI <span className="text-blue-500">Logistics Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            We craft intelligent AI solutions designed to maximize efficiency across your logistics operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <Card key={index} data-index={index} className={`service-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''} bg-black/5`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ApplicationsSection = () => {
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
    const items = sectionRef.current?.querySelectorAll('.application-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const applications = [
    { icon: Truck, title: "Efficient Transportation", description: "Boosts visibility and early detection of package damage." },
    { icon: Map, title: "Optimal Route Planning", description: "Real-time route adjustments to reduce delays." },
    { icon: Package, title: "Enhanced Dispatch & Delivery", description: "Automates billing, tracking, and verification." },
    { icon: ShieldCheck, title: "Safety Measures", description: "Instant alerts for potential hazards." },
    { icon: Leaf, title: "Green Logistics", description: "Reduces carbon footprint through smarter planning." },
    { icon: Warehouse, title: "Warehouse Maintenance", description: "Automates inventory and packing for productivity." },
    { icon: Globe, title: "Innovative Supply Chain Management", description: "Comprehensive tools for competitive advantages." },
    { icon: Users, title: "Cross-Department Collaboration", description: "Centralized systems to connect offices." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">AI Applications</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
            AI Applications in <span className="text-blue-500">Logistics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Key areas where our AI solutions enhance logistics performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((application, index) => {
            const Icon = application.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <Card key={index} data-index={index} className={`application-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''} bg-black/5`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{application.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{application.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TechnologiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    const items = sectionRef.current?.querySelectorAll('.tech-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const technologies = [
    { icon: "👁️", title: "Computer Vision", color: "from-blue-500 to-blue-700" },
    { icon: "🔥", title: "PyTorch", color: "from-red-500 to-red-700" },
    { icon: "🤖", title: "Robotic Process Automation", color: "from-green-500 to-green-700" },
    { icon: "📡", title: "Internet of Things (IoT)", color: "from-purple-500 to-purple-700" },
    { icon: "🗣️", title: "Natural Language Processing", color: "from-indigo-500 to-indigo-700" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Technologies</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technologies Powering <span className="text-blue-500">AI in Logistics</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We employ best-in-class technologies to redefine your logistics capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isItemVisible ? 'animate-fade-in-up' : ''} bg-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

        <div className="text-center">
          <Button variant="hero" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-sans">
            Transform Logistics with AI
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Cpu, title: "Complete Infrastructure Modernization", description: "Transform your legacy systems with our advanced AI software development." },
    { icon: Database, title: "Intelligent Data Management", description: "Unlock the full potential of your data with insights that power automation." },
    { icon: Settings, title: "Seamless Integration", description: "Our AI solutions fit smoothly into your current systems, minimizing disruption." },
    { icon: Globe, title: "Cross-Platform Support", description: "Consistent and intuitive interfaces across all platforms and devices." }
  ];

  const achievements = [
    { value: "15+", label: "Years of Industry Experience", icon: Clock },
    { value: "1000+", label: "Happy Clients", icon: Users },
    { value: "400+", label: "AI Experts", icon: Star },
    { value: "1500+", label: "Projects Delivered", icon: CheckCircle },
    { value: "4", label: "Proprietary AI Products", icon: Settings },
    { value: "95%", label: "Client Retention Rate", icon: TrendingUp }
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
            Why Partner with Infosource for <span className="text-blue-500">AI in Logistics</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our secure, forward-thinking development approach differentiates us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black font-sans">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed font-sans">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 font-sans">{achievement.value}</div>
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

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Truck className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Partner With Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">Ready to <span className="text-blue-200">Elevate</span> Your Logistics?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Connect with our specialists to unlock powerful AI technologies that enhance logistics operations and drive efficiency.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="outline" size="xl" className="group border-white text-white hover:bg-white hover:text-blue-600 font-sans">
            <MessageCircle className="w-5 h-5" />Connect With Our Team
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
            <p className="text-sm text-white/80 font-sans">Start a conversation about your logistics AI project</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white font-sans">Free Consultation</h3>
            <p className="text-sm text-white/80 font-sans">Discover AI opportunities for your logistics operations</p>
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

const Logistics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AIForLogisticsSection />
        <StatsSection />
        <ServicesSection />
        <ApplicationsSection />
        <TechnologiesSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Logistics;