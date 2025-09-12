import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Users, 
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
  Camera,
  Newspaper,
  Video,
  Settings
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
    <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
        <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <Cloud className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 font-sans">Media & Entertainment</span>
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans animate-on-scroll`} data-index={0}>
          <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Media & Entertainment</span>
          <br />
          <span className="relative">Software Solutions<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
        </h1>
        <p className={`text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans animate-on-scroll`} data-index={0}>
          Delivering next-gen digital experiences with powerful, immersive, and user-centric media solutions. From OTT platforms to social apps—we help brands captivate audiences. 100% Confidential & Secure.
        </p>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
            <a href="/join-us">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />Join Our Team
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

// const MediaSolutionsSection = () => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => { 
//         if (entry.isIntersecting) { 
//           const index = parseInt(entry.target.getAttribute('data-index') || '0'); 
//           setVisibleItems((prev) => [...prev, index]); 
//         } 
//       });
//     }, { threshold: 0.2 });
//     const items = sectionRef.current?.querySelectorAll('.solution-card');
//     items?.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   const solutions = [
//     { icon: Video, title: "OTT Streaming App Development", description: "Create scalable, high-performance OTT platforms that support premium video delivery, smart device integrations, seamless playback, and zero-latency streaming. Our team also revamps existing apps with better UX and faster load times." },
//     { icon: Users, title: "Social Media App Development", description: "Launch feature-rich social media apps that connect people, spark engagement, and boost brand presence. Integrated marketing tools, real-time feeds, and content moderation ensure user retention and platform growth." },
//     { icon: Gamepad, title: "Sports App Development", description: "We develop robust apps for sports teams, athletes, and leagues—featuring live scores, team updates, ticketing, and fan engagement modules. Whether you're managing a team or launching a fan-based app, we've got you covered." },
//     { icon: Camera, title: "Photo Editing & Sharing Apps", description: "Create intuitive photo editing apps with filters, effects, cropping, resolution controls, publishing tools, scheduling, and in-app payment capabilities—all wrapped in a slick UI." },
//     { icon: Newspaper, title: "News Streaming App Development", description: "Deliver personalized news experiences with real-time notifications, multilingual support, offline reading, and live news feeds. Our apps are optimized for content distribution and audience retention." },
//     { icon: Play, title: "On-Demand Entertainment App Solutions", description: "Connect users to services in real time with responsive on-demand apps. Features include intuitive navigation, instant booking, real-time tracking, one-click cancellations, and secure payments." }
//   ];

//   return (
//     <section ref={sectionRef} className="py-0 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-2">
//         <div className="text-center mb-12">
//           <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
//             <Cloud className="w-4 h-4 text-blue-500" />
//             <span className="text-sm font-medium text-blue-500 font-sans">Our Media Solutions</span>
//           </div>
//           <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
//             Cutting-Edge Media & Entertainment <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">App Development</span>
//           </h2>
//           <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
//             At Infosource, we craft custom entertainment software that engages users, enhances experiences, and keeps your brand ahead in the digital media landscape.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => {
//             const Icon = solution.icon;
//             const isVisible = visibleItems.includes(index + 3);
//             return (
//               <Card key={index} data-index={index + 3} className={`solution-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll bg-black/5`} style={{ animationDelay: `${index * 0.1}s` }}>
//                 <CardHeader className="text-center">
//                   <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>
//                   <CardTitle className="text-lg font-bold text-black group-hover:text-blue-500 transition-colors font-sans">{solution.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{solution.description}</CardDescription>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

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
    { icon: Video, title: "Live Sports Streaming Platform", description: "Stream, Record, and Engage in Real Time: A multifunctional app for amateur sports broadcasting and recruitment. Teams can live stream Baseball, Volleyball, and Softball games, as well as live score matches directly through the platform." },
    { icon: Users, title: "YouTuber Social Networking App", description: "Connect Creators and Fans Seamlessly: A niche social platform built for YouTubers and their subscribers. It allows creators to engage with fans through video calls, content sharing, and community-building—turning casual viewers into loyal followers." },
    { icon: Calendar, title: "Event & Care Tracking App", description: "Real-Time Group Location and Messaging App: This app enables users to create events, share live locations, and track participants on a map. Perfect for families and friends attending events or meetups, with group chat and notification support." },
        { icon: Video, title: "OTT Streaming App Development", description: "Create scalable, high-performance OTT platforms that support premium video delivery, smart device integrations, seamless playback, and zero-latency streaming. Our team also revamps existing apps with better UX and faster load times." },
    { icon: Users, title: "Social Media App Development", description: "Launch feature-rich social media apps that connect people, spark engagement, and boost brand presence. Integrated marketing tools, real-time feeds, and content moderation ensure user retention and platform growth." },
    { icon: Gamepad, title: "Sports App Development", description: "We develop robust apps for sports teams, athletes, and leagues—featuring live scores, team updates, ticketing, and fan engagement modules. Whether you're managing a team or launching a fan-based app, we've got you covered." },
    { icon: Camera, title: "Photo Editing & Sharing Apps", description: "Create intuitive photo editing apps with filters, effects, cropping, resolution controls, publishing tools, scheduling, and in-app payment capabilities—all wrapped in a slick UI." },
    { icon: Newspaper, title: "News Streaming App Development", description: "Deliver personalized news experiences with real-time notifications, multilingual support, offline reading, and live news feeds. Our apps are optimized for content distribution and audience retention." },
    { icon: Play, title: "On-Demand Entertainment App Solutions", description: "Connect users to services in real time with responsive on-demand apps. Features include intuitive navigation, instant booking, real-time tracking, one-click cancellations, and secure payments." }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Our Work</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            Pioneering Digital Innovation in <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Media & Entertainment</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-black font-sans">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{project.description}</CardDescription>
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
    { icon: "", title: "Swift", color: "from-blue-500 to-blue-700" },
    { icon: "🤖", title: "Kotlin", color: "from-blue-500 to-blue-700" },
    { icon: "⚛️", title: "ReactJS", color: "from-blue-500 to-blue-700" },
    { icon: "🛠️", title: "NodeJS", color: "from-blue-500 to-blue-700" },
    { icon: "🗄️", title: "MySQL", color: "from-blue-500 to-blue-700" }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Tech Stack</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            Technologies Powering Our <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Media & Entertainment Solutions</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Our robust tech stack delivers scalable and innovative media solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const isItemVisible = visibleItems.includes(index);
            return (
              <Card
                key={index}
                data-index={index}
                className={`tech-card group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll bg-black/5`}
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
    { value: "15+", label: "Years of Industry Experience", icon: Clock },
    { value: "500+", label: "Skilled Developers & Technical Experts", icon: Users },
    { value: "1500+", label: "Software Projects Successfully Delivered", icon: CheckCircle },
    { value: "3", label: "Global Development Facilities", icon: Settings },
    { value: "1000+", label: "Happy Clients Worldwide", icon: Globe }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Why Choose Infosource</span>
          </div>
          <h2 className={`text-3xl font-bold mb-6 text-black font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
            A Trusted Media & Entertainment <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">App Development Company</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto font-sans transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
            Your strategic partner for innovative and scalable media solutions.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
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

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Cloud className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 font-sans">Build Your Media App</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-black font-sans">
            Ready to Bring Your <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Media Vision to Life</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            Partner with Infosource to create powerful media and entertainment apps that captivate audiences and drive engagement. Let’s build something extraordinary.
          </p>
        </div>
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={1}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" /><a href="/join-us">Get in Touch With Our Experts Today</a>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <a href="/contact">
          <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
            <Calendar className="w-5 h-5" />Schedule Consultation
          </Button>
          </a>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={2}>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Get In Touch</h3>
              <p className="text-sm text-gray-600 font-sans">Start a conversation about your media project</p>
            </CardContent>
          </Card>
          <Card className="bg-black/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
              <p className="text-sm text-gray-600 font-sans">Discover media app opportunities for your brand</p>
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

const MediaEntertainment = () => {
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
    const items = document.querySelectorAll('.animate-on-scroll');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        {/* <MediaSolutionsSection /> */}
        <PortfolioSection />
        <TechStackSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MediaEntertainment;