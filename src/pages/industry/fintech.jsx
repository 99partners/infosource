
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Heart, 
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
  Monitor,
  Settings,
  User,
  Smartphone,
  LineChart,
  FileText,
  Clock,
  Search,
  DollarSign,
  PieChart,
  CreditCard
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
          <DollarSign className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500">Fintech AI Solutions</span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>
          <span className="text-blue-500">Fintech</span>
          <br />
          <span className="relative">AI-Powered Financial <span className="text-blue-500 relative">Solutions<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span></span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>
          Deliver cutting-edge AI innovations designed to elevate your fintech business. Lead the financial 
          sector with Infosource’s expert fintech AI development services.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />See How AI is Transforming Fintech
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

const AIForFintechSection = () => {
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
            <span className="text-sm font-medium text-blue-500">AI for Smarter Fintech</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Infosource Fintech <span className="text-blue-500">AI Development Services</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Artificial intelligence is revolutionizing industries worldwide, and fintech is no exception. From 
            automating fraud detection to enhancing customer service through digital channels, AI is reshaping 
            every facet of financial services. At Infosource, we don’t just support this transformation — we drive 
            it. Our expertise covers everything from digital banking solutions to secure financial management 
            systems. We turn your visionary ideas into practical, impactful realities.
          </p>
        </div>

        {/* Key Points */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: Bot, text: "Chatbots provide round-the-clock customer assistance." },
            { icon: Settings, text: "Robotic Process Automation (RPA) cuts down operational expenses." },
            { icon: LineChart, text: "Predictive analytics enables smarter, data-driven decisions." },
            { icon: User, text: "Tailored financial recommendations suited to individual profiles." }
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
    { value: "$50B", label: "Estimated global generative AI market size by 2029", source: "Statista", icon: BarChart3 },
    { value: "29%", label: "CAGR expected in fintech AI from 2024 to 2033", source: "The Business Research Company", icon: LineChart },
    { value: "66%", label: "Organizations appointing AI/ML ethics managers", source: "IIF Survey", icon: ShieldCheck },
    { value: "$4T", label: "Projected fintech market size in Asia-Pacific by 2030", source: "Boston Consulting Group", icon: TrendingUp },
    { value: "$2T", label: "Potential profit increase from AI adoption in fintech", source: "Citi Group", icon: DollarSign },
    { value: "3x", label: "Fintech growth compared to traditional systems", source: "McKinsey", icon: Activity }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <BarChart3 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Market Insights</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Key Fintech Market Insights
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
    { icon: ShieldCheck, title: "Fraud Detection Systems", description: "AI-powered tools to analyze transaction patterns and detect anomalies." },
    { icon: TrendingUp, title: "Algorithmic Trading Platforms", description: "Automated platforms for optimized trading strategies." },
    { icon: Database, title: "Big Data Analytics", description: "Advanced analytics to process and derive insights from large datasets." },
    { icon: FileText, title: "Automated Loan Processing", description: "Streamlined loan processing with AI-driven automation." },
    { icon: Bot, title: "Generative AI Chatbots & Assistants", description: "Intelligent assistants for 24/7 customer support." },
    { icon: PieChart, title: "AI-Based Credit Scoring Models", description: "Accurate credit scoring using AI-driven insights." },
    { icon: Search, title: "Market Insight Collectors", description: "AI tools to gather and analyze market trends." }
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
            Infosource's AI <span className="text-blue-500">Fintech Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            We provide a broad range of AI-powered solutions tailored to fintech.
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
    { icon: CreditCard, title: "Digital Payments", description: "AI enhances payment processes with fraud prevention and autopay features." },
    { icon: PieChart, title: "Wealth Management", description: "Predictive analytics to optimize investment strategies." },
    { icon: User, title: "Personal Banking", description: "AI assistants recommend personalized saving plans." },
    { icon: Users, title: "P2P Lending & Crowdfunding", description: "Improved risk assessments and fraud detection." },
    { icon: ShieldCheck, title: "Customized Insurance", description: "Tailored recommendations and automated claims processing." },
    { icon: Search, title: "Risk Management", description: "Intelligent compliance monitoring and authentication." },
    { icon: BarChart3, title: "Enterprise Budgeting", description: "Accurate budget forecasts for better planning." },
    { icon: Smartphone, title: "Neobank Operations", description: "Smooth onboarding and customized service delivery." }
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
            AI Applications in <span className="text-blue-500">Fintech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Areas where AI drives fintech innovation to transform financial services.
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
    { icon: "🧠", title: "Mistral AI", color: "from-blue-500 to-blue-700" },
    { icon: "🔗", title: "LangChain", color: "from-green-500 to-green-700" },
    { icon: "📡", title: "Airbyte", color: "from-purple-500 to-purple-700" },
    { icon: "📍", title: "Pinecone", color: "from-red-500 to-red-700" },
    { icon: "📊", title: "TensorFlow", color: "from-indigo-500 to-indigo-700" }
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
            Technologies Powering <span className="text-blue-500">AI in Fintech</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our solutions leverage leading-edge technologies to transform financial services.
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
            Revolutionize Finance with Smart AI Systems
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const processes = [
    { icon: ShieldCheck, title: "Ethical Development", description: "We adhere to industry best practices and ethical guidelines." },
    { icon: Database, title: "Robust Solutions", description: "Our AI systems have secure backends and user-friendly interfaces." },
    { icon: ShieldCheck, title: "Multi-layered Security", description: "Encryption, rigorous testing, and audits protect your data." },
    { icon: CheckCircle, title: "Transparent Process", description: "We keep you informed at every stage for smooth collaboration." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Our Process</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Secure and Reliable <span className="text-blue-500">AI Development</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Infosource ensures all fintech AI projects are developed with stringent security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
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
          <p className="text-lg mb-6 font-sans">Our Impactful AI Projects in Action</p>
          <p className="text-blue-100 mb-8 font-sans">Explore our portfolio of customized AI solutions, crafted to meet specific client needs.</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-sans">
            Read All Case Studies
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
    { icon: Target, title: "Industry Expertise", description: "We deliver AI solutions tailored to your unique business demands while ensuring compliance and security." },
    { icon: Users, title: "Client-Focused Approach", description: "We partner closely with you, maintaining open communication and delivering beyond expectations." }
  ];

  const achievements = [
    { value: "15+", label: "Years in the Industry", icon: Clock },
    { value: "1000+", label: "Satisfied Clients", icon: Users },
    { value: "400+", label: "Skilled Professionals", icon: Star },
    { value: "1500+", label: "Successful Projects", icon: CheckCircle },
    { value: "4", label: "Proprietary Products", icon: Settings },
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
            Why Choose Infosource for <span className="text-blue-500">AI in Fintech</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Your Strategic Partner for Intelligent Fintech Transformation
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
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">Our Achievements</h3>
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
            <DollarSign className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Partner With Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">Ready to <span className="text-blue-200">Transform</span> Fintech?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            The fintech industry is evolving rapidly with AI innovations. Partner with Infosource to unlock 
            powerful AI technologies that enhance financial services and drive business growth.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="outline" size="xl" className="group border-white text-white hover:bg-white hover:text-blue-600 font-sans">
            <MessageCircle className="w-5 h-5" />Contact Us Today
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
            <p className="text-sm text-white/80 font-sans">Start a conversation about your fintech AI project</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white font-sans">Free Consultation</h3>
            <p className="text-sm text-white/80 font-sans">Discover AI opportunities for your fintech organization</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 three">
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

const Fintech = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AIForFintechSection />
        <StatsSection />
        <ServicesSection />
        <ApplicationsSection />
        <TechnologiesSection />
        <ProcessSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Fintech;
