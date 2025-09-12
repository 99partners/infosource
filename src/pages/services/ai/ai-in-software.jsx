import { useEffect, useRef, useState, Component } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Brain,
  Shield,
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
  Cloud,
  Search,
  Bot,
  Monitor,
  Settings,
  Clock,
  LineChart
} from 'lucide-react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

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
    <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <Brain className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">AI Software Development</span>
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans animate-on-scroll`} data-index={0}>
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI-Driven</span>
          <br />
          <span className="relative">Software Solutions <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">for Enterprises</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans animate-on-scroll`} data-index={0}>
          Enhance the fresh period of innovative digital tools driven by AI software development offerings.
        </p>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
            <a href="/join-us">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Set Up a Discussion with Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            </a>
          </Button>
          <a href="/blogs">
          <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />Explore AI Software Solutions
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
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
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our AI Software Services</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            AI Software Development <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Offerings</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Revamp your enterprise with our broad AI software tools.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={3}>
          {[
            { icon: Cloud, text: "AI Merging to update your current setup." },
            { icon: Search, text: "AI Advice for crafting an ideal AI plan." },
            { icon: Bot, text: "AI As A Service for on-demand solutions." },
            { icon: Settings, text: "Custom AI Software Creation for market trends." },
            { icon: Users, text: "Enterprise AI Software Tools for scalability." },
            { icon: Zap, text: "AI-Centered Product Creation for durable products." }
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={4 + index}>
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
    { value: "190%", label: "growth in AI software adoption from 2022-2025", source: "AIPRM", icon: TrendingUp },
    { value: "$150B", label: "projected AI software market revenue by 2030", source: "AIPRM", icon: BarChart3 },
    { value: "80%", label: "of enterprises using AI software for operations", source: "Forbes", icon: Users },
    { value: "42%", label: "CAGR expected for AI software 2024-2030", source: "Grand View Research", icon: LineChart },
    { value: "60%", label: "of companies enhancing AI software efficiency", source: "Gartner", icon: Bot },
    { value: "88%", label: "of leaders prioritizing AI software security", source: "World Economic Forum", icon: Shield }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Key AI Software Industry Stats</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Key <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Software Industry Stats</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={3 + index}>
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

const CapabilitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    const items = sectionRef.current?.querySelectorAll('.capability-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    { icon: Settings, title: "Frameworks & Libraries", description: "Robust frameworks for scalable AI software solutions." },
    { icon: Cloud, title: "Deployment Kits", description: "Advanced deployment tools for seamless launches." },
    { icon: Brain, title: "Neural Networks", description: "Powerful neural networks for intelligent software." },
    { icon: Bot, title: "LLM Models", description: "Leveraging large language models for enhanced functionality." },
    { icon: Database, title: "ETL", description: "Efficient ETL processes for data integration." },
    { icon: Monitor, title: "Frontend & Backend", description: "Comprehensive front and backend development." },
    { icon: CheckCircle, title: "Testing", description: "Rigorous testing for reliable AI software performance." }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our AI Software Capabilities</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Technologies Supporting Our <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Software Development</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Our current digital setup to update your activities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isCardVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`capability-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 ${isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
            Additional Details on Our Tech Stack
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
    { icon: Target, title: "Setting Goals", description: "Link with our specialist to pinpoint the AI software tools' scope and optimal creation plan." },
    { icon: Settings, title: "Selecting Tech & Models", description: "Merge the appropriate tech set and AI tools based on project details and goals." },
    { icon: CheckCircle, title: "Creation & Improvement", description: "Follow open & safe creation approach succeeded by detailed testing and improvement." },
    { icon: Cloud, title: "Launch", description: "Release the finished item for client use and gather input for upcoming enhancements." },
    { icon: Clock, title: "Support After Launch", description: "Routine oversight, improvement, and refreshing for unmatched safety and operation." }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our AI Software Process</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Our Planned <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Software Development Approach</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            We personalize innovation for clients with our unmatched abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} style={{ animationDelay: `${index * 0.2}s` }}>
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
          <p className="text-lg mb-6 font-sans">A summary of our top AI-centered software development tools</p>
          <p className="text-blue-100 mb-8 font-sans">How our creative AI software tools reshaped client’s enterprise.</p>
          <a href="/resources/case-studies">
          <Button variant="glass" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-white hover:text-white-600 font-sans">
            Access All Case Studies
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          </a>
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
    { icon: Clock, title: "Instant Evaluation", description: "We align our timetable to serve global clients, reducing interaction barriers." },
    { icon: Target, title: "Sector Skills", description: "Our domain experts ensure AI software includes all needed features and complies with regulations." }
  ];

  const achievements = [
    { value: "10+", label: "Years of Experience", icon: Clock },
    { value: "900+", label: "Happy Clients", icon: Users },
    { value: "350+", label: "Skilled AI Professionals", icon: Star },
    { value: "1300+", label: "Completed Projects", icon: CheckCircle },
    { value: "6", label: "Proprietary Products", icon: Settings },
    { value: "93%", label: "Client Retention Rate", icon: TrendingUp }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Why Choose Infosource</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Why Choose Infosource for <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Software Development</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Modern setup and talented staff are our strengths.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} style={{ animationDelay: `${index * 0.2}s` }}>
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

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Partner With Us</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-black font-sans">
            Ready to <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Transform</span> with AI Software?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Connect with Infosource to build innovative AI-driven software solutions that empower your enterprise.
          </p>
        </div>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
            <a href="/contact">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            </a>
          </Button>
          <a href="/resources/about-us">
          <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
            <Calendar className="w-5 h-5" />Why Choose Infosource?
          </Button>
          </a>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={3}>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Get In Touch</h3>
              <p className="text-sm text-gray-600 font-sans">Start a conversation about your AI software project</p>
            </CardContent>
          </Card>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
              <p className="text-sm text-gray-600 font-sans">Discover AI software opportunities for your organization</p>
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

const AIInSoftware = () => {
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
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <StatsSection />
          <CapabilitiesSection />
          <ProcessSection />
          <WhyChooseSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default AIInSoftware;