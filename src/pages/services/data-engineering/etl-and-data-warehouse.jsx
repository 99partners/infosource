import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
  Cloud
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
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Database className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">Data Warehousing Services</span>
        </div>
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>
          Safeguard Your Enterprise with <span className="text-blue-500 relative">Data Warehousing<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
        </h1>
        <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>
          Boost your data movement and revamp your enterprise with our sophisticated Data Warehousing tools.
        </p>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Obtain a Complimentary Data Discussion
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
            <Play className="w-5 h-5 group-hover:text-blue-600 transition-colors" />Progress Your Data Movement
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Services</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our <span className="text-blue-500">Data Warehousing</span> Offerings
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Improve your data movement with sophisticated Data Warehousing offerings to boost enterprise efficiency.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: FileText, text: "Data Warehouse Plan & Advice: Form a detailed data plan that matches your entity's strategic aims." },
            { icon: Database, text: "Data Warehouse Creation: Plan and build a data warehouse to back your enterprise's needs." },
            { icon: Settings, text: "Data Warehouse Improvement: Spot and fix performance blocks to enhance query times and productivity." },
            { icon: Cloud, text: "Data Warehouse Transfer: Handle the transfer of data warehouses to fresh platforms or settings." },
            { icon: Target, text: "Data Warehouse Plan: Plan a structure that matches enterprise aims and supports data-oriented choices." }
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

const TechStackSection = () => {
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
    { icon: Cloud, title: "Cloud-Oriented Data Warehouses", color: "from-blue-500 to-blue-700" },
    { icon: Database, title: "Local Data Warehouses", color: "from-green-500 to-green-700" },
    { icon: Settings, title: "ETL/ELT Coordination Tools", color: "from-purple-500 to-purple-700" },
    { icon: Search, title: "Data Removal Tools", color: "from-red-500 to-red-700" },
    { icon: Monitor, title: "Oversight and Handling Tools", color: "from-indigo-500 to-indigo-700" },
    { icon: BarChart3, title: "Data Modeling Tools", color: "from-blue-500 to-blue-700" },
    { icon: Shield, title: "Data Oversight Tools", color: "from-green-500 to-green-700" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Tech Stack</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Cutting-Edge <span className="text-blue-500">Data Warehousing</span> Tools
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Uncover the tech behind our outstanding Data Warehouse tools.
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
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isItemVisible ? 'animate-fade-in-up' : ''} bg-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{tech.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Button variant="hero" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-sans">
            Review Tech
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
    { icon: Search, title: "Data Removal", description: "Gather data from diverse origins using various tools like Apache NiFi, Fivetran, and others." },
    { icon: Cloud, title: "Data Placement", description: "Keep the removed data in the preparation zone or straight in the data warehouse via cloud storage." },
    { icon: Settings, title: "Data Change", description: "Purify and organize the data for review using tools and implementing business guidelines." },
    { icon: Database, title: "Data Keeping", description: "Arrange and keep changed data in a Data Warehouse for effective review and querying." },
    { icon: BarChart3, title: "Data Review & Reporting", description: "Allow enterprise users to retrieve and review data using business tools for data-oriented choices." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Process</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Fluid <span className="text-blue-500">Data Warehouse</span> and ETL Process
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our gradual method ensures efficient Data Warehousing and ETL procedures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
          <p className="text-lg mb-6 font-sans">Uncover how we've aided enterprises succeed</p>
          <p className="text-blue-100 mb-8 font-sans">Review our case studies to observe how Infosource’s Data Warehousing & ETL tools have provided concrete outcomes.</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-sans">
            See Case Studies
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
    { icon: Database, title: "Expandable Data Setup", description: "Construct a robust and expandable data warehouse plan to manage huge data amounts and efficiency." },
    { icon: Settings, title: "Thorough Data Change", description: "Use strong ETL procedures to change unprocessed data into perceptive, practical knowledge and choices." },
    { icon: Shield, title: "Data-Driven Results", description: "Attain your enterprise aims via data superiority with Infosource’s expertise." },
    { icon: Heart, title: "Client-Centric Approach", description: "Select Infosource for skills, tools, and dedication to changing data into a potent resource." }
  ];

  const achievements = [
    { value: "10+", label: "Years of Experience", icon: Clock },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "200+", label: "Skilled Professionals", icon: Star },
    { value: "1000+", label: "Completed Projects", icon: CheckCircle },
    { value: "95%", label: "Client Retention Rate", icon: TrendingUp }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Why Infosource</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why Choose <span className="text-blue-500">Infosource?</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Attain your enterprise aims via data superiority with Infosource.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
                  <div className="text-2xl font-bold text-white mb-2 font-sans">{achievement.value}</div>
                  <div className="text-white/80 text-sm font-sans">{achievement.label}</div>
                </div>
              );
            })}
          </div>
          <Button variant="hero" size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-sans">
            Enhance Your Data Plan
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Heart className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white font-sans">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">
            Transforming <span className="text-blue-200">Businesses</span> with Data
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Discover how Infosource’s Data Warehousing & ETL tools drive enterprise success across industries.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: Star, title: "Case Studies", description: "Review our case studies to observe how Infosource’s Data Warehousing & ETL tools have provided concrete outcomes.", buttonText: "See Case Studies" },
            { icon: TrendingUp, title: "Industries", description: "Data-oriented change across diverse sectors with Infosource’s tailored Data Warehousing advice.", buttonText: "Arrange a Complimentary AI Discussion" },
            { icon: Users, title: "Testimonials", description: "Listen straight from our clients on how our Data Warehousing & ETL tools have strengthened their enterprises.", buttonText: "Uncover Client Achievement" },
            { icon: CheckCircle, title: "Resources", description: "Review our recent data perspectives and remain current on sector patterns and innovations.", buttonText: "See All Blogs" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white font-sans">{item.title}</h3>
                  <p className="text-sm text-white/80 font-sans">{item.description}</p>
                  <Button variant="outline" size="lg" className="mt-4 border-white text-white hover:bg-white hover:text-blue-600 font-sans">
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

const ETLAndWarehouse = () => {
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

export default ETLAndWarehouse;