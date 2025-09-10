import { useEffect, useRef, useState, Component } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
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
  Settings,
  Clock,
  Cloud,
  Search,
  Brain
} from 'lucide-react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
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
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16">
        <div
          className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={0}
        >
          <Bot className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">AI Agent Development</span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } text-black font-sans animate-on-scroll`}
          data-index={0}
        >
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Intelligent AI Agents
          </span>
          <br />
          <span className="relative">
            for Enterprise Excellence
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } font-sans animate-on-scroll`}
          data-index={0}
        >
          Boost operational efficiency with enterprise-grade AI agents tailored to solve your business challenges.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={0}
        >
          <Button
            variant="hero"
            size="xl"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Consult Our AI Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
          >
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            Discover AI Agent Solutions
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
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <Bot className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our AI Agent Services</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            AI Agent Development{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Leverage cutting-edge AI agent technologies to deliver tailored solutions for enterprise applications.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {[
            { icon: Search, text: 'AI Agent Strategy Consulting: Develop tailored strategies for AI agent implementation.' },
            { icon: Settings, text: 'Custom AI Agent Development: Build agents customized to enterprise needs.' },
            { icon: MessageCircle, text: 'Conversational AI Agents: Enhance customer service with intelligent chatbots.' },
            { icon: Cloud, text: 'AI Agent Integration: Seamlessly integrate agents into existing systems.' }
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
        <div className="text-center mt-12">
          <Button
            variant="hero"
            size="lg"
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            Connect to Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
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
    { value: '180%', label: 'Growth in AI Agent Adoption (2022-2025)', source: 'Industry Report', icon: TrendingUp },
    { value: '$50B', label: 'Projected AI Agent Market by 2030', source: 'Market Analysis', icon: BarChart3 },
    { value: '75%', label: 'Enterprises Using AI Agents', source: 'Industry Insights', icon: Users },
    { value: '38%', label: 'CAGR for AI Agent Services (2024-2030)', source: 'Research Report', icon: BarChart3 },
    { value: '65%', label: 'Companies Enhancing with AI Agents', source: 'Analyst Report', icon: Bot },
    { value: '92%', label: 'Leaders Prioritizing AI Agent Security', source: 'Global Survey', icon: Shield }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">AI Agent Industry Insights</span>
          </div>
          <h2
            className={`text-3xl font-bold text-black mb-6 font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            AI Agent Industry{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Insights</span>
          </h2>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } animate-on-scroll`}
                data-index={4 + index}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-black mb-2 font-sans">{stat.value}</div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed font-sans">{stat.label}</p>
                  <div className="text-gray-500 text-xs font-semibold font-sans">– {stat.source}</div>
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
    { icon: MessageCircle, title: 'Conversational AI Agents', description: 'Enhance customer service with natural, engaging interactions.' },
    { icon: Settings, title: 'Simple Reflex Agents', description: 'Automate routine tasks with rule-based AI agents.' },
    { icon: Brain, title: 'Model-Based Agents', description: 'Intelligent agents that adapt to complex environments.' },
    { icon: Target, title: 'Goal-Based Agents', description: 'AI agents designed to achieve specific business objectives.' },
    { icon: Star, title: 'Utility-Based Agents', description: 'Optimize decision-making for maximum efficiency.' },
    { icon: CheckCircle, title: 'Learning Agents', description: 'AI agents that evolve and improve through experience.' }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">AI Agent Capabilities</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Empower Your Business with{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Agents</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Discover our range of AI agent solutions designed to optimize your operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`capability-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 ${
                  isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
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
    { icon: Target, title: 'Defining Objectives', description: 'Collaborate with clients to outline goals for AI agent development.' },
    { icon: Database, title: 'Data Preparation', description: 'Collect and process data to create high-quality datasets for training.' },
    { icon: Settings, title: 'Model Selection', description: 'Choose the optimal AI model based on use case and requirements.' },
    { icon: Cloud, title: 'Training & Deployment', description: 'Train agents for maximum performance and deploy seamlessly.' },
    { icon: Clock, title: 'Monitoring & Maintenance', description: 'Track performance and implement continuous improvements.' }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Process</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              AI Agent Development
            </span>{' '}
            Process
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Our structured and transparent process ensures high-quality AI agent solutions.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-index={4 + index}
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
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 font-sans">Case Studies</h3>
          <p className="text-lg mb-6 font-sans">Transforming Businesses with AI Agents</p>
          <p className="text-blue-100 mb-8 font-sans">Explore how our AI agent solutions have driven success across industries.</p>
          <Button
            variant="glass"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-white hover:text-blue-600 font-sans"
          >
            View Case Studies
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
    { icon: CheckCircle, title: 'Consistent Quality Delivery', description: 'Deliver high-quality AI agents on time, every time.' },
    { icon: Users, title: 'Global Client Expertise', description: 'Flexible development to meet diverse international needs.' },
    { icon: Shield, title: 'Secure AI Solutions', description: 'Robust security measures to protect your AI agent deployments.' },
    { icon: Star, title: 'Tailored Innovation', description: 'Customized AI agents designed for your unique business goals.' }
  ];

  const achievements = [
    { value: '12+', label: 'Years of AI Expertise', icon: Clock },
    { value: '850+', label: 'Satisfied Clients', icon: Users },
    { value: '400+', label: 'AI Professionals', icon: Star },
    { value: '1200+', label: 'AI Projects Delivered', icon: CheckCircle },
    { value: '8', label: 'Proprietary AI Tools', icon: Settings },
    { value: '94%', label: 'Client Retention Rate', icon: TrendingUp }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Why Infosource</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Infosource</span> for
            AI Agents
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Partner with us for innovative and reliable AI agent solutions tailored to your needs.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-index={4 + index}
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
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">
                    {feature.description}
                  </CardDescription>
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
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`}
          data-index={1}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Bot className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Partner With Us</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-black font-sans">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Transform</span> with AI
            Agents?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Partner with Infosource to build intelligent AI agents that revolutionize your business.
          </p>
        </div>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={2}
        >
          <Button
            variant="hero"
            size="xl"
            className="group bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Consult Our AI Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
          >
            <Calendar className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            Start Your AI Journey
          </Button>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {[
            {
              icon: MessageCircle,
              title: 'Get In Touch',
              description: 'Start a conversation about your AI agent project.'
            },
            {
              icon: Calendar,
              title: 'Free Consultation',
              description: 'Explore AI agent opportunities for your business.'
            },
            { icon: Clock, title: 'Rapid Response', description: 'Hear back from us within 24 hours.' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } animate-on-scroll`}
                data-index={4 + index}
              >
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-sans">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AIAgent = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

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

export default AIAgent;