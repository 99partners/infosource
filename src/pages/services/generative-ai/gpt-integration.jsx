import { useEffect, useRef, useState, Component } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Brain,
  Settings,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Target,
  Award,
  MessageCircle,
  Calendar,
  Play,
  BarChart3,
  Database,
  Clock,
  Search,
  Cloud,
  Code,
  Layers,
  Server,
  Globe,
} from 'lucide-react';

// ErrorBoundary component from AIAgent
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
          className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={0}
        >
          <Brain className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">ChatGPT Integration Services</span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } text-black font-sans`}
          data-index={0}
        >
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            ChatGPT Integration
          </span>
          <br />
          <span className="relative">
            for Enterprise Excellence
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } font-sans`}
          data-index={0}
        >
          Elevate your operations with Infosource’s end-to-end ChatGPT integration services, designed to address your unique business needs.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
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
            Discover AI Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

const AIServicesSection = () => {
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
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={1}
          >
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Services</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Unlock the Potential of{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              ChatGPT Integration
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Unlock the potential of ChatGPT with our comprehensive integration solutions.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={3}
        >
          {[
            { icon: Search, text: 'ChatGPT Consulting Services to navigate complex digital integration.' },
            { icon: Settings, text: 'GPT API Integration Services to maximize AI integration benefits.' },
            { icon: Zap, text: 'GPT-Powered Development for innovative web and app solutions.' },
            { icon: MessageCircle, text: 'Chatbot Integration with human-like GPT-based chatbots.' },
            { icon: Cloud, text: 'Voice Assistant Integration for accessible voice command functionality.' },
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 animate-on-scroll ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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
    { value: '200%', label: 'Growth in AI Adoption (2020-2023)', source: 'AIPRM', icon: TrendingUp },
    { value: '$150B', label: 'Projected AI Market by 2030', source: 'AIPRM', icon: BarChart3 },
    { value: '85%', label: 'Businesses Implementing AI Strategies', source: 'Forbes', icon: Users },
    { value: '40%', label: 'CAGR for AI Services (2024-2030)', source: 'Grand View Research', icon: BarChart3 },
    { value: '65%', label: 'Companies Using AI for Engagement', source: 'Gartner', icon: MessageCircle },
    { value: '70%', label: 'Leaders Prioritizing AI Governance', source: 'World Economic Forum', icon: Shield },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={1}
          >
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">AI Industry Insights</span>
          </div>
          <h2
            className={`text-3xl font-bold text-black mb-6 font-sans transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            AI Industry{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Insights</span>
          </h2>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={3}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 animate-on-scroll ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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
    {
      icon: Search,
      title: 'ChatGPT Consulting Services',
      description: 'Navigate complex digital integration with our expert guidance.',
    },
    {
      icon: Settings,
      title: 'GPT API Integration',
      description: 'Select optimal GPT APIs to maximize the benefits of AI integration.',
    },
    {
      icon: Zap,
      title: 'GPT-Powered Development',
      description: 'Create innovative web and app solutions with advanced GPT capabilities.',
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Integration',
      description: 'Enhance services and operations with human-like GPT-based chatbots.',
    },
    {
      icon: Cloud,
      title: 'Voice Assistant Integration',
      description: 'Add voice command functionality to make your solutions more accessible.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={1}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">ChatGPT Capabilities</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Infosource’s{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              ChatGPT Integration
            </span>{' '}
            Capabilities
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Driving enterprise transformation with innovative ChatGPT integration services.
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
                className={`capability-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 animate-on-scroll ${
                  isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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
    const items = sectionRef.current?.querySelectorAll('.tech-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const technologies = [
    { icon: Brain, title: 'AI Models', description: 'Leveraging advanced AI models for optimal performance.' },
    { icon: Layers, title: 'Deep Learning Frameworks', description: 'Utilizing frameworks like TensorFlow and PyTorch.' },
    { icon: Database, title: 'Web Frameworks & Databases', description: 'Integrating with modern web and database technologies.' },
    { icon: Code, title: 'Software Development Kits', description: 'Using SDKs for seamless integration.' },
    { icon: Globe, title: 'APIs', description: 'Connecting systems with robust API integrations.' },
    { icon: Server, title: 'Programming Languages', description: 'Supporting Python, JavaScript, and more.' },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={1}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Technology Stack</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Our Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Our cutting-edge technology stack ensures seamless ChatGPT integration.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={3}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 animate-on-scroll ${
                  isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">
                    {tech.description}
                  </CardDescription>
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
            Explore Our Tech Expertise
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
      icon: Search,
      title: 'Consultation & Planning',
      description: 'Assess client needs to define project scope, complexity, and timeline.',
    },
    {
      icon: Settings,
      title: 'Model Selection & Configuration',
      description: 'Choose an appropriate AI model and configure APIs for seamless integration.',
    },
    {
      icon: Play,
      title: 'Training & Integration',
      description: 'Train the model on custom datasets and fine-tune for accurate responses.',
    },
    {
      icon: CheckCircle,
      title: 'Testing & Deployment',
      description: 'Conduct rigorous testing across environments to deliver a bug-free solution.',
    },
    {
      icon: Clock,
      title: 'Ongoing Maintenance',
      description: 'Provide regular updates and maintenance for sustained performance.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={1}
          >
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Integration Process</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              ChatGPT Integration
            </span>{' '}
            Process
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            We simplify ChatGPT integration with a streamlined, high-quality approach.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={3}
        >
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 animate-on-scroll ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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
          <p className="text-lg mb-6 font-sans">Explore our portfolio of successful AI integration projects.</p>
          <p className="text-blue-100 mb-8 font-sans">We’ve aided clients globally in revamping their enterprise procedures.</p>
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
    {
      icon: Shield,
      title: 'Ethical & Transparent Processes',
      description: 'Adhere to regulations for ethical, bias-free training and maintain transparency with regular client updates.',
    },
    {
      icon: Target,
      title: 'Customized & Secure Solutions',
      description: 'Deliver tailored solutions in a secure environment with robust multi-layered protection.',
    },
  ];

  const achievements = [
    { value: '10+', label: 'Years of Experience', icon: Clock },
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '200+', label: 'Skilled AI Professionals', icon: Star },
    { value: '1000+', label: 'Completed Projects', icon: CheckCircle },
    { value: '3', label: 'Proprietary Products', icon: Settings },
    { value: '90%', label: 'Client Retention Rate', icon: TrendingUp },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={1}
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Why Choose Infosource</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Infosource</span> for
            ChatGPT Integration
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 animate-on-scroll ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index={2}
          >
            Our innovative GPT-powered solutions make us the ideal ChatGPT integration partner.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={3}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 animate-on-scroll ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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
          className={`transition-all duration-1000 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={1}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Partner With Us</span>
          </div>
          <h2
            className="text-3xl font-bold mb-6 text-black font-sans"
            data-index={1}
          >
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Transform</span> with
            ChatGPT Integration?
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans"
            data-index={1}
          >
            Design your custom ChatGPT solution with Infosource to enhance efficiency and customer interactions.
          </p>
        </div>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
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
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 animate-on-scroll ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-index={3}
        >
          {[
            {
              icon: MessageCircle,
              title: 'Get In Touch',
              description: 'Start a conversation about your ChatGPT integration project.',
            },
            {
              icon: Calendar,
              title: 'Free Consultation',
              description: 'Discover ChatGPT opportunities for your organization.',
            },
            {
              icon: Clock,
              title: 'Rapid Response',
              description: 'We’ll get back to you within 24 hours.',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-on-scroll ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
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

const GPTIntegration = () => {
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
          <AIServicesSection />
          <StatsSection />
          <CapabilitiesSection />
          <TechnologiesSection />
          <ProcessSection />
          <WhyChooseSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default GPTIntegration;