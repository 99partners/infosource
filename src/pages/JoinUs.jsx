import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
        <br /><br /><br /><br /><br /><br />
        
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Users className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500">Join Our Team</span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>
         <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Join the</span>
          <br />
          <span className="relative">Infosource Family <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Today<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span></span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>
          Are you passionate about technology and eager to make a difference? At Infosource, we build innovative software solutions that shape industries worldwide—and we’re looking for talented individuals to join our journey.
        </p>

        {/* CTA Buttons */}
       <div
  className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
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
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Why Join Infosource</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-black font-sans transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Opportunities at <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">`Infosource</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Join a team that drives innovation and shapes the future of technology across industries.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: Brain, text: "Work on cutting-edge AI and software projects." },
            { icon: Users, text: "Collaborate with a global team of experts." },
            { icon: Zap, text: "Grow your skills with continuous learning." },
            { icon: Award, text: "Make an impact in industries worldwide." }
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

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Users className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Apply Now</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-sans">Join Our <span className="text-blue-200">Innovative Team</span></h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Take the first step to join Infosource and contribute to groundbreaking software solutions.
          </p>
        </div>
        
      {/* Form Section */}
       <div
  className={`transition-all duration-1000 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <div className="bg-blue-50 backdrop-blur-sm border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
    <h3 className="text-2xl font-bold text-blue-800 mb-6 font-sans">
      Join Us Application Form
    </h3>
    <div className="grid gap-6">
      <div>
        <Label htmlFor="fullName" className="block text-left text-blue-700 font-sans">
          Full Name*
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          className="mt-2 bg-white border-blue-200 text-blue-800 font-sans"
          required
        />
      </div>
      <div>
        <Label htmlFor="email" className="block text-left text-blue-700 font-sans">
          Email Address*
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="mt-2 bg-white border-blue-200 text-blue-800 font-sans"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone" className="block text-left text-blue-700 font-sans">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="mt-2 bg-white border-blue-200 text-blue-800 font-sans"
        />
      </div>
      <div>
        <Label htmlFor="position" className="block text-left text-blue-700 font-sans">
          Position Interested In
        </Label>
        <Input
          id="position"
          type="text"
          placeholder="e.g., Software Developer, Project Manager"
          className="mt-2 bg-white border-blue-200 text-blue-800 font-sans"
        />
      </div>
      <div>
        <Label htmlFor="resume" className="block text-left text-blue-700 font-sans">
          Upload Resume*
        </Label>
        <Input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-2 bg-white border-blue-200 text-blue-800 font-sans"
          required
        />
      </div>
      <div>
        <Label htmlFor="coverLetter" className="block text-left text-blue-700 font-sans">
          Cover Letter / Message
        </Label>
        <Textarea
          id="coverLetter"
          placeholder="Tell us why you're a great fit"
          className="mt-2 bg-white border-blue-200 text-blue-800 font-sans"
        />
      </div>
      <Button
        variant="hero"
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white font-sans shadow-md"
      >
        Submit Application
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

const JoinUs = () => {
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
    
    const items = document.querySelectorAll('.tech-card');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
  ``      <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;