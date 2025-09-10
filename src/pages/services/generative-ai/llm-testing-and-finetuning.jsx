import { useEffect, useRef, useState, Component } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ArrowRight,
  Brain,
  Users,
  TrendingUp,
  Star,
  Zap,
  MessageCircle,
  Calendar,
  Play,
  BarChart3,
  Database,
  Settings,
  Clock,
  Cloud,
  Code,
  FileText,
  CheckCircle,
  Award,
  Shield,
  Target,
  Globe,
  Monitor,
  Bot
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
          <Brain className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">LLM Fine-Tuning Services</span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } text-black font-sans animate-on-scroll`}
          data-index={0}
        >
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Tailored LLM Optimization
          </span>
          <br />
          <span className="relative">
            for Business Excellence
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } font-sans animate-on-scroll`}
          data-index={0}
        >
          Maximize your AI models’ potential with Infosource’s customized LLM fine-tuning services.
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
              Optimize Your LLM
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
          >
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            Explore Fine-Tuning Solutions
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
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Fine-Tuning Services</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              LLM Solutions
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Enhance business performance with our tailored LLM fine-tuning solutions.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {[
            { icon: MessageCircle, text: 'LLM Consultation: Strategic fine-tuning solutions.' },
            { icon: Settings, text: 'Custom Model Training: Tailored for diverse industries.' },
            { icon: CheckCircle, text: 'Testing & Evaluation: Optimize model performance.' },
            { icon: Brain, text: 'Model Fine-Tuning: Achieve peak accuracy.' },
            { icon: Database, text: 'Data Preparation: Align data with business goals.' },
            { icon: Cloud, text: 'Model Integration: Seamless deployment across systems.' }
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
            Explore Our Services
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
    { value: '150%', label: 'Growth in LLM Adoption (2022-2025)', source: 'Industry Report', icon: TrendingUp },
    { value: '$50B', label: 'Projected LLM Market by 2030', source: 'Market Analysis', icon: BarChart3 },
    { value: '80%', label: 'Enterprises Using LLMs', source: 'Industry Insights', icon: Users },
    { value: '35%', label: 'CAGR for LLM Services (2024-2030)', source: 'Research Report', icon: BarChart3 },
    { value: '60%', label: 'Companies Optimizing with LLMs', source: 'Analyst Report', icon: Bot },
    { value: '85%', label: 'Leaders Prioritizing LLM Performance', source: 'Global Survey', icon: Monitor }
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
            <span className="text-sm font-medium text-blue-500 font-sans">LLM Industry Insights</span>
          </div>
          <h2
            className={`text-3xl font-bold text-black mb-6 font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            LLM Industry{' '}
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
    { icon: Settings, title: 'Hyperparameter Tuning', description: 'Optimize model performance with precise adjustments.' },
    { icon: Brain, title: 'Parameter Tuning', description: 'Enhance model accuracy with targeted parameter adjustments.' },
    { icon: FileText, title: 'Instruction Tuning', description: 'Tailor models for specific tasks with guided instructions.' },
    { icon: Globe, title: 'Transfer Learning', description: 'Leverage pre-trained models for faster adaptation.' },
    { icon: Star, title: 'Reward Modeling', description: 'Align models with business goals using reward-based training.' },
    { icon: Target, title: 'Task-Specific Tuning', description: 'Customize LLMs for unique business applications.' }
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
            <span className="text-sm font-medium text-blue-500 font-sans">Fine-Tuning Capabilities</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Versatile{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Fine-Tuning Methods
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Our fine-tuning capabilities deliver agile and effective LLM solutions.
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
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <div className="text-center mt-12">
          <Button
            variant="hero"
            size="lg"
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
          >
            Discover Our Expertise
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
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
    { icon: Code, title: 'Programming Languages', color: 'from-blue-500 to-blue-700' },
    { icon: FileText, title: 'Libraries & Frameworks', color: 'from-green-500 to-green-700' },
    { icon: Brain, title: 'ML Architectures', color: 'from-purple-500 to-purple-700' },
    { icon: Cloud, title: 'Cloud Platforms', color: 'from-red-500 to-red-700' },
    { icon: BarChart3, title: 'Evaluation Tools', color: 'from-indigo-500 to-indigo-700' }
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
            <span className="text-sm font-medium text-blue-500 font-sans">Technology Stack</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Advanced Tools for{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              LLM Fine-Tuning
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Our cutting-edge technology stack powers innovative LLM solutions.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer bg-black/5 ${
                  isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-6 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">
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
            Explore Our Tech Stack
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
    { icon: Database, title: 'Data Preparation', description: 'Clean and format data for optimal model performance.' },
    { icon: Brain, title: 'Model Selection', description: 'Choose models based on functionality and task scope.' },
    { icon: Settings, title: 'Parameter Identification', description: 'Define key parameters for effective fine-tuning.' },
    { icon: CheckCircle, title: 'Testing & Refinement', description: 'Evaluate and refine models for peak accuracy.' },
    { icon: Cloud, title: 'Deployment & Monitoring', description: 'Integrate and monitor models for continuous improvement.' }
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
            <span className="text-sm font-medium text-blue-500 font-sans">Our Fine-Tuning Process</span>
          </div>
          <h2
            className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Strategic{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Fine-Tuning
            </span>{' '}
            Process
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Our agile approach delivers high-performance LLM fine-tuning solutions.
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
          <p className="text-lg mb-6 font-sans">Transforming Industries with LLM Fine-Tuning</p>
          <p className="text-blue-100 mb-8 font-sans">Discover how our solutions drive business success.</p>
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
    { icon: Zap, title: 'Technical Expertise', description: 'Cutting-edge solutions for innovative LLM fine-tuning.' },
    { icon: Shield, title: 'Ethical Development', description: 'Secure, bias-free, and sustainable AI solutions.' },
    { icon: Star, title: 'Proven Track Record', description: 'Years of experience delivering high-performance LLMs.' },
    { icon: Monitor, title: 'Customized Solutions', description: 'Tailored fine-tuning for your unique business needs.' }
  ];

  const achievements = [
    { value: '10+', label: 'Years of Experience', icon: Clock },
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '200+', label: 'Skilled AI Experts', icon: Star },
    { value: '1000+', label: 'Completed Projects', icon: CheckCircle }
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
            LLM Fine-Tuning
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={2}
          >
            Our expert team delivers innovative and reliable LLM fine-tuning solutions.
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
        <div
          className={`bg-black/5 rounded-xl p-8 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } animate-on-scroll`}
          data-index={3}
        >
          <h3 className="text-2xl font-bold text-black mb-8 font-sans">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`}
                  data-index={4 + index}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-black mb-2 font-sans">{achievement.value}</div>
                  <div className="text-gray-600 text-sm font-sans">{achievement.label}</div>
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
            <Brain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Get Started</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-black font-sans">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Optimize</span> Your
            LLMs?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Partner with Infosource to unlock powerful LLM fine-tuning solutions for your business.
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
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
          >
            <Settings className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            Design Your Custom Solution
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
              description: 'Start a conversation about your LLM project.'
            },
            {
              icon: Calendar,
              title: 'Free Consultation',
              description: 'Explore LLM fine-tuning opportunities.'
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

const LLMTestingFinetuning = () => {
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

export default LLMTestingFinetuning;