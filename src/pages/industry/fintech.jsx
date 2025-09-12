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

const HeroSection = ({ visibleItems }) => {
  return (
    <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <DollarSign className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">Fintech AI Solutions</span>
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans animate-on-scroll`} data-index={0}>
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI-Powered Fintech Solutions</span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
        </h1>
        <p className={`text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans animate-on-scroll`} data-index={0}>
          Deliver cutting-edge AI innovations designed to elevate your fintech business. Lead the financial sector with Infosource’s expert fintech AI development services.
        </p>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
            <a href="/contact">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            </a>
          </Button>
          <a href="/services">
          <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />Explore Our Services
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const AIForFintechSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [setVisibleItems]);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">AI for Smarter Fintech</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Infosource Fintech <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Development Services</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Artificial intelligence is revolutionizing industries worldwide, and fintech is no exception. From automating fraud detection to enhancing customer service through digital channels, AI is reshaping every facet of financial services. At Infosource, we don’t just support this transformation — we drive it. Our expertise covers everything from digital banking solutions to secure financial management systems. We turn your visionary ideas into practical, impactful realities.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={3}>
          {[
            { icon: Bot, text: "Chatbots provide round-the-clock customer assistance." },
            { icon: Settings, text: "Robotic Process Automation (RPA) cuts down operational expenses." },
            { icon: LineChart, text: "Predictive analytics enables smarter, data-driven decisions." },
            { icon: User, text: "Tailored financial recommendations suited to individual profiles." }
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${visibleItems.includes(4 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={4 + index}>
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

const StatsSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [setVisibleItems]);

  const stats = [
    { value: "$50B", label: "Estimated global generative AI market size by 2029", source: "Statista", icon: BarChart3 },
    { value: "29%", label: "CAGR expected in fintech AI from 2024 to 2033", source: "The Business Research Company", icon: LineChart },
    { value: "66%", label: "Organizations appointing AI/ML ethics managers", source: "IIF Survey", icon: ShieldCheck },
    { value: "$4T", label: "Projected fintech market size in Asia-Pacific by 2030", source: "Boston Consulting Group", icon: TrendingUp },
    { value: "$2T", label: "Potential profit increase from AI adoption in fintech", source: "Citi Group", icon: DollarSign },
    { value: "3x", label: "Fintech growth compared to traditional systems", source: "McKinsey", icon: Activity }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={10}>
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Market Insights</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(11) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={11}>
            Key <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Fintech Market Insights</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${visibleItems.includes(12 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={12 + index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2 font-sans">{stat.value}</div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed font-sans">{stat.label}</p>
                  <div className="text-gray-600 text-xs font-semibold font-sans">– {stat.source}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    const items = sectionRef.current?.querySelectorAll('.service-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [setVisibleItems]);

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
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(20) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={20}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Services</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(21) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={21}>
            Infosource's AI <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Fintech Services</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(21) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={21}>
            We provide a broad range of AI-powered solutions tailored to fintech.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                data-index={22 + index} 
                className={`service-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 rounded-xl ${visibleItems.includes(22 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
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

const ApplicationsSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    const items = sectionRef.current?.querySelectorAll('.application-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [setVisibleItems]);

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
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(30) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={30}>
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">AI Applications</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(31) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={31}>
            AI Applications in <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Fintech</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(31) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={31}>
            Areas where AI drives fintech innovation to transform financial services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((application, index) => {
            const Icon = application.icon;
            return (
              <Card 
                key={index} 
                data-index={32 + index} 
                className={`application-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 rounded-xl ${visibleItems.includes(32 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
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

const TechnologiesSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    const items = sectionRef.current?.querySelectorAll('.tech-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [setVisibleItems]);

  const technologies = [
    { icon: "🧠", title: "Mistral AI", color: "from-blue-500 to-blue-700" },
    { icon: "🔗", title: "LangChain", color: "from-blue-500 to-blue-700" },
    { icon: "📡", title: "Airbyte", color: "from-blue-500 to-blue-700" },
    { icon: "📍", title: "Pinecone", color: "from-blue-500 to-blue-700" },
    { icon: "📊", title: "TensorFlow", color: "from-blue-500 to-blue-700" }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(40) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={40}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Technologies</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(41) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={41}>
            Technologies Powering <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI in Fintech</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(41) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={41}>
            Our solutions leverage leading-edge technologies to transform financial services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            return (
              <Card
                key={index}
                data-index={42 + index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 rounded-xl ${visibleItems.includes(42 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-12 h-12 mx-auto mb-6 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{tech.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [setVisibleItems]);

  const processes = [
    { icon: ShieldCheck, title: "Ethical Development", description: "We adhere to industry best practices and ethical guidelines." },
    { icon: Database, title: "Robust Solutions", description: "Our AI systems have secure backends and user-friendly interfaces." },
    { icon: ShieldCheck, title: "Multi-layered Security", description: "Encryption, rigorous testing, and audits protect your data." },
    { icon: CheckCircle, title: "Transparent Process", description: "We keep you informed at every stage for smooth collaboration." }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(50) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={50}>
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Process</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(51) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={51}>
            Secure and Reliable <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Development</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(51) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={51}>
            Infosource ensures all fintech AI projects are developed with stringent security standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 rounded-xl ${visibleItems.includes(52 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={52 + index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
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
          <p className="text-lg mb-6 font-sans">Our Impactful AI Projects in Action</p>
          <p className="text-blue-100 mb-8 font-sans">Explore our portfolio of customized AI solutions, crafted to meet specific client needs.</p>
          <Button variant="glass" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-white hover:text-white-600 font-sans">
          <a href="/resources/case-studies" className="flex items-center">
            Read All Case Studies
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = ({ visibleItems, setVisibleItems }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [setVisibleItems]);

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
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(60) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={60}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Why Choose Infosource</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(61) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={61}>
            Why Choose Infosource for <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI in Fintech</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(61) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={61}>
            Your Strategic Partner for Intelligent Fintech Transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 rounded-xl ${visibleItems.includes(62 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={62 + index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
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
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
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

const CTASection = ({ visibleItems }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${visibleItems.includes(70) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={70}>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <DollarSign className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Partner With Us</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-black font-sans">
            Ready to <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Transform</span> Fintech?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            The fintech industry is evolving rapidly with AI innovations. Partner with Infosource to unlock powerful AI technologies that enhance financial services and drive business growth.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${visibleItems.includes(72) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={72}>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Get In Touch</h3>
              <p className="text-sm text-gray-600 font-sans">Start a conversation about your fintech AI project</p>
            </CardContent>
          </Card>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
              <p className="text-sm text-gray-600 font-sans">Discover AI opportunities for your fintech organization</p>
            </CardContent>
          </Card>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Fast Response</h3>
              <p className="text-sm text-gray-600 font-sans">We'll get back to you within 24 hours</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Fintech = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
          setVisibleItems((prev) => [...new Set([...prev, index])]); 
        } 
      });
    }, { threshold: 0.2 });
    
    const items = document.querySelectorAll('.animate-on-scroll');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection visibleItems={visibleItems} />
        <AIForFintechSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <StatsSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <ServicesSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <ApplicationsSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <TechnologiesSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <ProcessSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <WhyChooseSection visibleItems={visibleItems} setVisibleItems={setVisibleItems} />
        <CTASection visibleItems={visibleItems} />
      </main>
      <Footer />
    </div>
  );
};

export default Fintech;