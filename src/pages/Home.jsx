// // import { useEffect, useRef, useState } from 'react';
// // import Navigation from '@/components/Header';
// // import Footer from '@/components/Footer';
// // import { Button } from '@/components/ui/button';
// // import { ArrowRight, Sparkles, Code, Brain, Database, Play, Star, TrendingUp, Zap, CheckCircle, Target, Lightbulb, Rocket, MessageCircle, Calendar, Trophy, Search, Globe, Shield } from 'lucide-react';

// // const VantaBackground = ({ children, className = "" }) => {
// //   const vantaRef = useRef(null);
// //   const [vantaEffect, setVantaEffect] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     if (!vantaEffect) {
// //       const initVanta = async () => {
// //         try {
// //           if (typeof window !== 'undefined' && !window.VANTA) {
// //             await new Promise((resolve) => {
// //               const script = document.createElement('script');
// //               script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
// //               script.onload = resolve;
// //               document.head.appendChild(script);
// //             });
// //             await new Promise((resolve) => {
// //               const script = document.createElement('script');
// //               script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
// //               script.onload = resolve;
// //               document.head.appendChild(script);
// //             });
// //           }
// //           if (window.VANTA && vantaRef.current) {
// //             const effect = window.VANTA.DOTS({
// //               el: vantaRef.current,
// //               mouseControls: true,
// //               touchControls: true,
// //               gyroControls: false,
// //               minHeight: 200.0,
// //               minWidth: 200.0,
// //               scale: 1.0,
// //               scaleMobile: 1.0,
// //               color: 0xb1a9a4,
// //               color2: 0xafa6a3,
// //               backgroundColor: 0xfffdfd,
// //               size: 2.6,
// //               spacing: 19.0,
// //               showLines: true,
// //               lineColor: 0xb1a9a4,
// //               lineWidth: 0.5,
// //               lineOpacity: 0.3
// //             });
// //             setVantaEffect(effect);
// //           }
// //         } catch (error) {
// //           console.error('Failed to load VANTA effect:', error);
// //         } finally {
// //           setIsLoading(false);
// //         }
// //       };
// //       initVanta();
// //     }
// //     return () => { if (vantaEffect) vantaEffect.destroy(); };
// //   }, [vantaEffect]);

// //   return (
// //     <div ref={vantaRef} className={`vanta-container ${className}`}>
// //       {isLoading && (<div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 animate-pulse"></div>)}
// //       {children}
// //     </div>
// //   );
// // };

// // const FloatingElement = ({ children, delay = 0 }) => (
// //   <div className="floating" style={{ animationDelay: `${delay}s` }}>{children}</div>
// // );

// // const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
// //   const [count, setCount] = useState(0);
// //   useEffect(() => {
// //     let startTime = null;
// //     const animate = (currentTime) => {
// //       if (!startTime) startTime = currentTime;
// //       const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
// //       setCount(Math.floor(progress * end));
// //       if (progress < 1) requestAnimationFrame(animate);
// //     };
// //     const timer = setTimeout(() => requestAnimationFrame(animate), 500);
// //     return () => clearTimeout(timer);
// //   }, [end, duration]);
// //   return <span>{count}{suffix}</span>;
// // };

// // const MorphingShapes = () => (
// //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //     <div className="absolute top-20 left-10 w-32 h-32 opacity-10"><div className="w-full h-full bg-gradient-primary rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div></div>
// //     <div className="absolute top-40 right-20 w-24 h-24 opacity-10"><div className="w-full h-full bg-gradient-secondary rotate-45 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div></div>
// //     <div className="absolute bottom-40 left-20 w-28 h-28 opacity-10"><div className="w-full h-full bg-gradient-to-br from-accent to-accent/50 rounded-lg animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div></div>
// //     {[...Array(12)].map((_, i) => (<div key={i} className="absolute w-2 h-2 bg-primary rounded-full opacity-20" style={{ left: `${10 + (i * 7)}%`, top: `${20 + (i * 3)}%`, animation: `floating ${3 + (i * 0.5)}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />))}
// //   </div>
// // );

// // const HeroSection = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [activeMetric, setActiveMetric] = useState(0);
// //   useEffect(() => { setIsVisible(true); const interval = setInterval(() => setActiveMetric((p) => (p + 1) % 3), 3000); return () => clearInterval(interval); }, []);
// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       <VantaBackground className="absolute inset-0">
// //         <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/30 to-purple-50/20"></div>
// //         <MorphingShapes />
// //       </VantaBackground>

// //       <div className="absolute top-20 left-10 opacity-20"><FloatingElement delay={0}><Brain className="w-12 h-12 text-primary" /></FloatingElement></div>
// //       <div className="absolute top-40 right-20 opacity-20"><FloatingElement delay={1}><Code className="w-10 h-10 text-secondary" /></FloatingElement></div>
// //       <div className="absolute bottom-40 left-20 opacity-20"><FloatingElement delay={2}><Database className="w-14 h-14 text-accent" /></FloatingElement></div>

// //       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
// //         <div className={`inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 transition-all duration-1000 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
// //           <Sparkles className="w-5 h-5 text-accent" />
// //           <span className="text-sm font-medium text-muted-foreground">Welcome to Infosource</span>
// //           <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
// //         </div>
// //         <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <span className="gradient-text">Transform</span> Your Business
// //           <br />
// //           <span className="relative">with <span className="gradient-text relative">AI & Data<div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span></span>
// //         </h1>
// //         <p className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           We are your strategic partner in digital transformation, specializing in 
// //           <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg mx-1">Artificial Intelligence</span>,
// //           <span className="text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-lg mx-1">Data Engineering</span>, and
// //           <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-lg mx-1">Custom Software Development</span>.
// //         </p>
// //         <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <Button variant="hero" size="xl" className="group relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><span className="relative z-10 flex items-center gap-3"><Play className="w-5 h-5" />Start Your Transformation<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span></Button>
// //           <Button variant="glass" size="xl" className="group"><Star className="w-5 h-5 group-hover:text-accent transition-colors" />Explore Our Solutions</Button>
// //         </div>
// //         <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           {[
// //             { value: 10, suffix: "+", label: "Years Experience", icon: TrendingUp, gradient: "from-primary to-primary/70" },
// //             { value: 500, suffix: "+", label: "Projects Delivered", icon: Star, gradient: "from-secondary to-secondary/70" },
// //             { value: 50, suffix: "+", label: "Happy Clients", icon: Sparkles, gradient: "from-accent to-accent/70" }
// //           ].map((stat, index) => {
// //             const Icon = stat.icon;
// //             return (
// //               <div key={index} className={`glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 transform hover:rotate-1 ${activeMetric === index ? 'ring-2 ring-primary/30 scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
// //                 <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
// //                   <Icon className="w-8 h-8 text-white" />
// //                 </div>
// //                 <div className="text-4xl font-bold gradient-text mb-2"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
// //                 <div className="text-muted-foreground font-medium">{stat.label}</div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
// //         <div className="flex flex-col items-center gap-2 animate-bounce">
// //           <div className="text-xs text-muted-foreground font-medium">Scroll to explore</div>
// //           <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
// //             <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
// //             <div className="absolute top-2 w-1 h-2 bg-primary/50 rounded-full animate-[slide-down_2s_ease-in-out_infinite]"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const services = [
// //   { icon: Brain, title: "AI & Machine Learning Solutions", description: "Leverage predictive analytics, natural language processing, computer vision, and intelligent automation to make smarter decisions and improve operational efficiency.", features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Intelligent Automation"], color: "primary", bgGradient: "from-primary/20 to-primary/5" },
// //   { icon: Database, title: "Data Engineering & Analytics", description: "Transform raw data into actionable insights. From data pipelines to visualization, we help you harness the full potential of your data.", features: ["Data Pipelines", "Real-time Analytics", "Data Visualization", "Business Intelligence"], color: "secondary", bgGradient: "from-secondary/20 to-secondary/5" },
// //   { icon: Code, title: "Custom Software Development", description: "Build scalable, secure, and user-centric applications tailored to your specific business needs—whether it's a web app, mobile solution, or enterprise platform.", features: ["Web Applications", "Mobile Solutions", "Enterprise Platforms", "API Development"], color: "accent", bgGradient: "from-accent/20 to-accent/5" }
// // ];

// // const ServicesSection = () => {
// //   const [visibleItems, setVisibleItems] = useState([]);
// //   const sectionRef = useRef(null);
// //   useEffect(() => {
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => { if (entry.isIntersecting) { const index = parseInt(entry.target.getAttribute('data-index') || '0'); setVisibleItems((prev) => [...prev, index]); } });
// //     }, { threshold: 0.2 });
// //     const items = sectionRef.current?.querySelectorAll('.service-card');
// //     items?.forEach((item) => observer.observe(item));
// //     return () => observer.disconnect();
// //   }, []);
// //   return (
// //     <section ref={sectionRef} className="py-24 relative overflow-hidden" id="services">
// //       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
// //       <div className="relative z-10 max-w-7xl mx-auto px-6">
// //         <div className="text-center mb-20">
// //           <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"><Zap className="w-4 h-4 text-accent" /><span className="text-sm font-mono text-muted-foreground">What We Do</span></div>
// //           <h2 className="text-4xl md:text-6xl font-bold mb-6"><span className="gradient-text">Cutting-Edge</span> Solutions</h2>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">We deliver innovative technology solutions that drive real business results and competitive advantage.</p>
// //         </div>
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {services.map((service, index) => {
// //             const Icon = service.icon;
// //             const isVisible = visibleItems.includes(index);
// //             return (
// //               <div key={index} data-index={index} className={`service-card group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
// //                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
// //                   <Icon className={`w-8 h-8 text-${service.color}`} />
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
// //                 <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
// //                 <ul className="space-y-2 mb-8">
// //                   {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground"><div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>{feature}</li>))}
// //                 </ul>
// //                 <Button variant="ghost" className="group-hover:bg-primary/10 transition-colors w-full">Learn More<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div className="text-center mt-16"><Button variant="glow" size="lg">Explore All Solutions<ArrowRight className="w-5 h-5" /></Button></div>
// //       </div>
// //     </section>
// //   );
// // };

// // const features = [
// //   { icon: Trophy, title: "Deep Expertise Across Industries", description: "With over a decade of experience, we've worked with startups, SMEs, and global enterprises across sectors like finance, healthcare, retail, logistics, and more.", gradient: "from-primary to-primary/50" },
// //   { icon: Search, title: "Tailored, Transparent Approach", description: "We believe that no two businesses are the same. That's why we prioritize understanding your unique goals and challenges to deliver solutions that fit—without surprises.", gradient: "from-secondary to-secondary/50" },
// //   { icon: Globe, title: "Global Reach, Local Commitment", description: "We serve clients across continents while maintaining the flexibility, responsiveness, and personalized attention of a local partner.", gradient: "from-accent to-accent/50" },
// //   { icon: Shield, title: "Security & Scalability at the Core", description: "Every solution is built with robust security practices and designed to grow with your business.", gradient: "from-purple-500 to-purple-300" }
// // ];

// // const WhyChooseSection = () => {
// //   const [visibleItems, setVisibleItems] = useState([]);
// //   const sectionRef = useRef(null);
// //   useEffect(() => {
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => { if (entry.isIntersecting) { const index = parseInt(entry.target.getAttribute('data-index') || '0'); setVisibleItems((prev) => [...prev, index]); } });
// //     }, { threshold: 0.3 });
// //     const items = sectionRef.current?.querySelectorAll('.feature-card');
// //     items?.forEach((item) => observer.observe(item));
// //     return () => observer.disconnect();
// //   }, []);
// //   return (
// //     <section ref={sectionRef} className="py-24 relative overflow-hidden">
// //       <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div><div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div></div>
// //       <div className="relative z-10 max-w-7xl mx-auto px-6">
// //         <div className="text-center mb-20"><div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-sm font-mono text-muted-foreground">Why Choose Infosource</span></div><h2 className="text-4xl md:text-6xl font-bold mb-6">Your Success is <span className="gradient-text">Our Mission</span></h2><p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">We don't just deliver technology — we deliver results that transform your business and drive sustainable growth.</p></div>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {features.map((feature, index) => {
// //             const Icon = feature.icon;
// //             const isVisible = visibleItems.includes(index);
// //             return (
// //               <div key={index} data-index={index} className={`feature-card group relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
// //                 <div className="glass-card p-8 rounded-2xl h-full transition-all duration-500 hover:scale-105 group-hover:bg-white/5">
// //                   <div className="relative mb-6">
// //                     <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center glow-primary transition-all duration-300`}><Icon className="w-8 h-8 text-white" /></div>
// //                     <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
// //                     <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
// //                   </div>
// //                   <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
// //                   <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
// //                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-full"></div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div className="mt-20 text-center"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{[{ value: "98%", label: "Client Satisfaction" }, { value: "24/7", label: "Support Available" }, { value: "50+", label: "Industries Served" }, { value: "100%", label: "Project Success Rate" }].map((stat, index) => (<div key={index} className={`glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 ${visibleItems.length > 0 ? 'animate-scale-in' : ''}`} style={{ animationDelay: `${(index + 4) * 0.1}s` }}><div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div><div className="text-sm text-muted-foreground">{stat.label}</div></div>))}</div></div>
// //       </div>
// //     </section>
// //   );
// // };

// // const commitments = [
// //   { icon: Target, title: "Identify Opportunities", description: "We analyze your business processes to find areas where automation and innovation can drive significant improvements and cost savings.", color: "text-primary" },
// //   { icon: Lightbulb, title: "Design Future-Ready Systems", description: "Our solutions are built with tomorrow in mind, ensuring they can adapt and scale as your business evolves and technology advances.", color: "text-secondary" },
// //   { icon: TrendingUp, title: "Deliver Measurable Results", description: "Every solution comes with clear metrics and KPIs, so you can see exactly how our technology investments drive your business forward.", color: "text-accent" }
// // ];

// // const CommitmentSection = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);
// //   useEffect(() => {
// //     const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); }); }, { threshold: 0.2 });
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);
// //   return (
// //     <section ref={sectionRef} className="py-24 relative overflow-hidden">
// //       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
// //       <div className="absolute top-20 right-10 opacity-20"><div className="floating delay-200"><div className="w-24 h-24 rounded-full bg-gradient-primary blur-xl"></div></div></div>
// //       <div className="absolute bottom-20 left-10 opacity-20"><div className="floating delay-400"><div className="w-32 h-32 rounded-full bg-gradient-secondary blur-xl"></div></div></div>
// //       <div className="relative z-10 max-w-6xl mx-auto px-6">
// //         <div className="text-center mb-16">
// //           <div className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><Target className="w-4 h-4 text-accent" /><span className="text-sm font-mono text-muted-foreground">Our Commitment to You</span></div>
// //           <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Driven by <span className="gradient-text">Your Success</span></h2>
// //           <p className={`text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>At Infosource, we're driven by a single goal: your success. Our client-first philosophy means we work closely with you to transform your business through technology.</p>
// //         </div>
// //         <div className="space-y-8 mb-16">
// //           {commitments.map((commitment, index) => {
// //             const Icon = commitment.icon;
// //             return (
// //               <div key={index} className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
// //                 <div className="flex-shrink-0"><div className="w-20 h-20 rounded-2xl bg-gradient-card flex items-center justify-center glow-primary"><Icon className={`w-10 h-10 ${commitment.color}`} /></div></div>
// //                 <div className="flex-1"><h3 className="text-2xl font-bold mb-3 text-foreground">{commitment.title}</h3><p className="text-muted-foreground text-lg leading-relaxed">{commitment.description}</p></div>
// //                 {index < commitments.length - 1 && (<div className="hidden lg:block"><ArrowRight className="w-6 h-6 text-muted-foreground/50" /></div>)}
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
// //             <h3 className="text-2xl font-bold mb-4 gradient-text">From Idea to Execution</h3>
// //             <p className="text-muted-foreground text-lg leading-relaxed mb-8">We stay by your side — evolving with your needs, scaling with your growth, and ensuring that your digital infrastructure remains a competitive asset.</p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button variant="hero" size="lg">Start Your Journey<ArrowRight className="w-5 h-5" /></Button><Button variant="glass" size="lg">Learn Our Process</Button></div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const CTASection = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);
// //   return (
// //     <section className="py-24 relative overflow-hidden">
// //       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animated-bg"></div>
// //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
// //       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
// //         <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"><Rocket className="w-4 h-4 text-accent" /><span className="text-sm font-mono text-muted-foreground">Let's Build the Future Together</span></div>
// //           <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to <span className="gradient-text">Transform</span> Your Business?</h2>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">The digital landscape is moving fast — don't get left behind. Partner with Infosource to unlock powerful technologies that drive real results.</p>
// //         </div>
// //         <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <Button variant="hero" size="xl" className="group"><MessageCircle className="w-5 h-5" />Contact Us Today<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button>
// //           <Button variant="glass" size="xl" className="group"><Calendar className="w-5 h-5" />Schedule Consultation</Button>
// //         </div>
// //         <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"><div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4"><MessageCircle className="w-6 h-6 text-white" /></div><h3 className="font-semibold mb-2">Get In Touch</h3><p className="text-sm text-muted-foreground">Start a conversation about your project</p></div>
// //           <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"><div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mx-auto mb-4"><Calendar className="w-6 h-6 text-white" /></div><h3 className="font-semibold mb-2">Free Consultation</h3><p className="text-sm text-muted-foreground">Discover opportunities for your business</p></div>
// //           <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"><div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mx-auto mb-4"><Rocket className="w-6 h-6 text-white" /></div><h3 className="font-semibold mb-2">Fast Response</h3><p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p></div>
// //         </div>
// //         <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <p className="text-lg text-muted-foreground">Join the companies already transforming their businesses with Infosource</p>
// //           <div className="flex justify-center items-center gap-4 mt-6">{[1,2,3,4,5].map((i) => (<div key={i} className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>))}</div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Home = () => {
// //   return (
// //     <div className="min-h-screen bg-background">
// //       <Navigation />
// //       <main>
// //         <HeroSection />
// //         <ServicesSection />
// //         <WhyChooseSection />
// //         <CommitmentSection />
// //         <CTASection />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;


// import { useEffect, useRef, useState } from 'react';
// import Navigation from '@/components/Header';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Sparkles, Play, Star, BringToFront } from 'lucide-react';

// const VantaBackground = ({ children, className = "" }) => {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!vantaEffect) {
//       const initVanta = async () => {
//         try {
//           if (typeof window !== 'undefined' && !window.VANTA) {
//             await new Promise((resolve) => {
//               const script = document.createElement('script');
//               script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
//               script.onload = resolve;
//               document.head.appendChild(script);
//             });
//             await new Promise((resolve) => {
//               const script = document.createElement('script');
//               script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
//               script.onload = resolve;
//               document.head.appendChild(script);
//             });
//           }
//           if (window.VANTA && vantaRef.current) {
//             const effect = window.VANTA.DOTS({
//               el: vantaRef.current,
//               mouseControls: true,
//               touchControls: true,
//               gyroControls: false,
//               minHeight: 200.0,
//               minWidth: 200.0,
//               scale: 1.0,
//               scaleMobile: 1.0,
//               color: 0x1e40af, // Blue primary color
//               color2: 0x60a5fa, // Lighter blue
//               backgroundColor: 0xffffff, // White background
//               size: 2.6,
//               spacing: 19.0,
//               showLines: true,
//               lineColor: ffffff, // Blue lines
//               lineWidth: 0.5,
//               lineOpacity: 0.3
//             });
//             setVantaEffect(effect);
//           }
//         } catch (error) {
//           console.error('Failed to load VANTA effect:', error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       initVanta();
//     }
//     return () => { if (vantaEffect) vantaEffect.destroy(); };
//   }, [vantaEffect]);

//   return (
//     <div ref={vantaRef} className={`vanta-container ${className}`}>
//       {isLoading && (<div className="absolute inset-0 bg-white animate-pulse"></div>)}
//       {children}
//     </div>
//   );
// };

// const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let startTime = null;
//     const animate = (currentTime) => {
//       if (!startTime) startTime = currentTime;
//       const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
//       setCount(Math.floor(progress * end));
//       if (progress < 1) requestAnimationFrame(animate);
//     };
//     const timer = setTimeout(() => requestAnimationFrame(animate), 500);
//     return () => clearTimeout(timer);
//   }, [end, duration]);
//   return <span>{count}{suffix}</span>;
// };

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeMetric, setActiveMetric] = useState(0);
//   useEffect(() => { 
//     setIsVisible(true); 
//     const interval = setInterval(() => setActiveMetric((p) => (p + 1) % 3), 3000); 
//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <VantaBackground className="absolute inset-0">
//         <div className="absolute inset-0 bg-white/70"></div>
//       </VantaBackground>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <br></br><br></br><br></br><br></br><br></br><br></br>
//         <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>
//           <span className="text-blue-500">Transform</span> Your Business
//           <br />
//           <span className="relative">with <span className="text-blue-500 relative">AI & Data<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span></span>
//         </h1>
//         <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>
//           We are your strategic partner in digital transformation, specializing in 
//           <span className="text-blue-500 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg mx-1">Artificial Intelligence</span>,
//           <span className="text-blue-500 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg mx-1">Data Engineering</span>, and
//           <span className="text-blue-500 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg mx-1">Custom Software Development</span>.
//         </p>
//         <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
//             <span className="relative z-10 flex items-center gap-3">
//               <Play className="w-5 h-5" />Start Your Transformation
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//           </Button>
//           <Button variant="glass" size="xl" className="group bg-black/10 text-blue-300 hover:text-blue-500 font-sans">
//             <Star className="w-5 h-5 group-hover:text-blue-500 transition-colors" />Explore Our Solutions
//           </Button>
//         </div>
//         <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           {[
//             { value: 10, suffix: "+", label: "Years Experience", icon: Star, gradient: "from-blue-500 to-blue-700" },
//             { value: 500, suffix: "+", label: "Projects Delivered", icon: Star, gradient: "from-blue-500 to-blue-700" },
//             { value: 50, suffix: "+", label: "Happy Clients", icon: Sparkles, gradient: "from-blue-500 to-blue-700" }
//           ].map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <div key={index} className={`glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 transform hover:rotate-1 ${activeMetric === index ? 'ring-2 ring-blue-500/30 scale-105' : ''} bg-black/5`} style={{ animationDelay: `${index * 0.2}s` }}>
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-4xl font-bold text-blue-500 mb-2"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
//                 <div className="text-gray-600 font-medium font-sans">{stat.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="flex flex-col items-center gap-2 animate-bounce">
//           <div className="text-xs text-gray-600 font-medium font-sans">Scroll to explore</div>
//           <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center relative overflow-hidden">
//             <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
//             <div className="absolute top-2 w-1 h-2 bg-blue-500/50 rounded-full animate-[slide-down_2s_ease-in-out_infinite]"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const services = [
//   { icon: Star, title: "AI & Machine Learning Solutions", description: "Leverage predictive analytics, natural language processing, computer vision, and intelligent automation to make smarter decisions and improve operational efficiency.", features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Intelligent Automation"], color: "blue-500", bgGradient: "from-blue-500/20 to-blue-500/5" },
//   { icon: Star, title: "Data Engineering & Analytics", description: "Transform raw data into actionable insights. From data pipelines to visualization, we help you harness the full potential of your data.", features: ["Data Pipelines", "Real-time Analytics", "Data Visualization", "Business Intelligence"], color: "blue-500", bgGradient: "from-blue-500/20 to-blue-500/5" },
//   { icon: Star, title: "Custom Software Development", description: "Build scalable, secure, and user-centric applications tailored to your specific business needs—whether it's a web app, mobile solution, or enterprise platform.", features: ["Web Applications", "Mobile Solutions", "Enterprise Platforms", "API Development"], color: "blue-500", bgGradient: "from-blue-500/20 to-blue-500/5" }
// ];

// const ServicesSection = () => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => { if (entry.isIntersecting) { const index = parseInt(entry.target.getAttribute('data-index') || '0'); setVisibleItems((prev) => [...prev, index]); } });
//     }, { threshold: 0.2 });
//     const items = sectionRef.current?.querySelectorAll('.service-card');
//     items?.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);
//   return (
//     <section ref={sectionRef} className="py-24 relative overflow-hidden" id="services">
//       <div className="absolute inset-0 bg-white"></div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 bg-black/10 text-blue-300 font-sans"><Star className="w-4 h-4 text-blue-500" /><span className="text-sm font-mono">What We Do</span></div>
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans"><span className="text-blue-500">Cutting-Edge</span> Solutions</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">We deliver innovative technology solutions that drive real business results and competitive advantage.</p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             const isVisible = visibleItems.includes(index);
//             return (
//               <div key={index} data-index={index} className={`service-card group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''} bg-black/5`} style={{ animationDelay: `${index * 0.2}s` }}>
//                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <Icon className={`w-8 h-8 text-${service.color}`} />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-500 transition-colors font-sans">{service.title}</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed font-sans">{service.description}</p>
//                 <ul className="space-y-2 mb-8">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600 font-sans">
//                       <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>{feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button variant="ghost" className="group-hover:bg-blue-500/10 transition-colors w-full text-blue-300 hover:text-blue-500 font-sans">Learn More<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
//               </div>
//             );
//           })}
//         </div>
//         <div className="text-center mt-16">
//           <Button variant="glow" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-sans">Explore All Solutions<ArrowRight className="w-5 h-5" /></Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// const features = [
//   { icon: Star, title: "Deep Expertise Across Industries", description: "With over a decade of experience, we've worked with startups, SMEs, and global enterprises across sectors like finance, healthcare, retail, logistics, and more.", gradient: "from-blue-500 to-blue-700" },
//   { icon: Star, title: "Tailored, Transparent Approach", description: "We believe that no two businesses are the same. That's why we prioritize understanding your unique goals and challenges to deliver solutions that fit—without surprises.", gradient: "from-blue-500 to-blue-700" },
//   { icon: Star, title: "Global Reach, Local Commitment", description: "We serve clients across continents while maintaining the flexibility, responsiveness, and personalized attention of a local partner.", gradient: "from-blue-500 to-blue-700" },
//   { icon: Star, title: "Security & Scalability at the Core", description: "Every solution is built with robust security practices and designed to grow with your business.", gradient: "from-blue-500 to-blue-700" }
// ];

// const WhyChooseSection = () => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => { if (entry.isIntersecting) { const index = parseInt(entry.target.getAttribute('data-index') || '0'); setVisibleItems((prev) => [...prev, index]); } });
//     }, { threshold: 0.3 });
//     const items = sectionRef.current?.querySelectorAll('.feature-card');
//     items?.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);
//   return (
//     <section ref={sectionRef} className="py-24 relative overflow-hidden">
//       <div className="absolute inset-0 bg-white"></div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 bg-black/10 text-blue-300 font-sans"><Star className="w-4 h-4 text-blue-500" /><span className="text-sm font-mono">Why Choose Infosource</span></div>
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">Your Success is <span className="text-blue-500">Our Mission</span></h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">We don't just deliver technology — we deliver results that transform your business and drive sustainable growth.</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             const isVisible = visibleItems.includes(index);
//             return (
//               <div key={index} data-index={index} className={`feature-card group relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
//                 <div className="glass-card p-8 rounded-2xl h-full transition-all duration-500 hover:scale-105 group-hover:bg-black/5">
//                   <div className="relative mb-6">
//                     <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center glow-primary transition-all duration-300`}><Icon className="w-8 h-8 text-white" /></div>
//                     <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
//                     <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-500 transition-colors font-sans">{feature.title}</h3>
//                   <p className="text-gray-600 leading-relaxed font-sans">{feature.description}</p>
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-full"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="mt-20 text-center">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[{ value: "98%", label: "Client Satisfaction" }, { value: "24/7", label: "Support Available" }, { value: "50+", label: "Industries Served" }, { value: "100%", label: "Project Success Rate" }].map((stat, index) => (
//               <div key={index} className={`glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 ${visibleItems.length > 0 ? 'animate-scale-in' : ''} bg-black/5`} style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
//                 <div className="text-3xl font-bold text-blue-500 mb-2 font-sans">{stat.value}</div>
//                 <div className="text-sm text-gray-600 font-sans">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const commitments = [
//   { icon: Star, title: "Identify Opportunities", description: "We analyze your business processes to find areas where automation and innovation can drive significant improvements and cost savings.", color: "text-blue-500" },
//   { icon: Star, title: "Design Future-Ready Systems", description: "Our solutions are built with tomorrow in mind, ensuring they can adapt and scale as your business evolves and technology advances.", color: "text-blue-500" },
//   { icon: Star, title: "Deliver Measurable Results", description: "Every solution comes with clear metrics and KPIs, so you can see exactly how our technology investments drive your business forward.", color: "text-blue-500" }
// ];

// const CommitmentSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); }); }, { threshold: 0.2 });
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);
//   return (
//     <section ref={sectionRef} className="py-24 relative overflow-hidden">
//       <div className="absolute inset-0 bg-white"></div>
//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-black/10 text-blue-300 font-sans`}><Star className="w-4 h-4 text-blue-500" /><span className="text-sm font-mono">Our Commitment to You</span></div>
//           <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`}>Driven by <span className="text-blue-500">Your Success</span></h2>
//           <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`}>At Infosource, we're driven by a single goal: your success. Our client-first philosophy means we work closely with you to transform your business through technology.</p>
//         </div>
//         <div className="space-y-8 mb-16">
//           {commitments.map((commitment, index) => {
//             const Icon = commitment.icon;
//             return (
//               <div key={index} className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : ''} bg-black/5`} style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
//                 <div className="flex-shrink-0"><div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center"><Icon className={`w-10 h-10 ${commitment.color}`} /></div></div>
//                 <div className="flex-1"><h3 className="text-2xl font-bold mb-3 text-black font-sans">{commitment.title}</h3><p className="text-gray-600 text-lg leading-relaxed font-sans">{commitment.description}</p></div>
//                 {index < commitments.length - 1 && (<div className="hidden lg:block"><ArrowRight className="w-6 h-6 text-gray-600/50" /></div>)}
//               </div>
//             );
//           })}
//         </div>
//         <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto bg-black/5">
//             <h3 className="text-2xl font-bold mb-4 text-blue-500 font-sans">From Idea to Execution</h3>
//             <p className="text-gray-600 text-lg leading-relaxed mb-8 font-sans">We stay by your side — evolving with your needs, scaling with your growth, and ensuring that your digital infrastructure remains a competitive asset.</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button variant="hero" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-sans">Start Your Journey<ArrowRight className="w-5 h-5" /></Button>
//               <Button variant="glass" size="lg" className="bg-black/10 text-blue-300 hover:text-blue-500 font-sans">Learn Our Process</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const CTASection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => { const t = setTimeout(() => setIsVisible(true), 200); return () => clearTimeout(t); }, []);
//   return (
//     <section className="py-24 relative overflow-hidden">
//       <div className="absolute inset-0 bg-white"></div>
//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//         <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 bg-black/10 text-blue-300 font-sans"><Star className="w-4 h-4 text-blue-500" /><span className="text-sm font-mono">Let's Build the Future Together</span></div>
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">Ready to <span className="text-blue-500">Transform</span> Your Business?</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">The digital landscape is moving fast — don't get left behind. Partner with Infosource to unlock powerful technologies that drive real results.</p>
//         </div>
//         <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <Button variant="hero" size="xl" className="group bg-blue-600 hover:bg-blue-700 text-white font-sans"><Star className="w-5 h-5" />Contact Us Today<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button>
//           <Button variant="glass" size="xl" className="group bg-black/10 text-blue-300 hover:text-blue-500 font-sans"><Star className="w-5 h-5" />Schedule Consultation</Button>
//         </div>
//         <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 bg-black/5"><div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4"><Star className="w-6 h-6 text-white" /></div><h3 className="font-semibold mb-2 text-black font-sans">Get In Touch</h3><p className="text-sm text-gray-600 font-sans">Start a conversation about your project</p></div>
//           <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 bg-black/5"><div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4"><Star className="w-6 h-6 text-white" /></div><h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3><p className="text-sm text-gray-600 font-sans">Discover opportunities for your business</p></div>
//           <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 bg-black/5"><div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4"><Star className="w-6 h-6 text-white" /></div><h3 className="font-semibold mb-2 text-black font-sans">Fast Response</h3><p className="text-sm text-gray-600 font-sans">We'll get back to you within 24 hours</p></div>
//         </div>
//         <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <p className="text-lg text-gray-600 font-sans">Join the companies already transforming their businesses with Infosource</p>
//           <div className="flex justify-center items-center gap-4 mt-6">{[1,2,3,4,5].map((i) => (<div key={i} className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>))}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
//       <main>
//         <HeroSection />
//         <ServicesSection />
//         <WhyChooseSection />
//         <CommitmentSection />
//         <CTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import Navigation from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  Users, 
  Award, 
  Truck, 
  Monitor, 
  Landmark, 
  Gamepad2, 
  Home, 
  Film, 
  Target, 
  Shield, 
  CheckCircle, 
  Clock, 
  Star 
} from "lucide-react";
import heroAI from "@/assets/hero-ai.jpg";
import teamConsulting from "@/assets/team-consulting.jpg";
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-400">
        <img
          src={heroAI}
          alt="AI Technology Visualization"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full animate-float delay-300 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent/30 rounded-full animate-float delay-700 blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-primary-foreground">
              Cutting-Edge AI Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up delay-150">
            Transform Your Organization & Data for the AI Era
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
            Cutting-Edge AI Solutions for Future-Ready Enterprises. Infosource
            delivers comprehensive AI services powered by the latest technological
            advancements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <Button variant="accent" size="lg" className="border-blue-500/30 text-blue-500 bg-blue-100" asChild>
              <a href="/contact">
                Engage with an AI Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
           <Button variant="accent" size="lg" className="border-blue-500/30 text-blue-500 bg-blue-100" asChild>
            <a href="/services">Our Services</a>
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🧠",
      title: "Artificial Intelligence",
      description: "Transform your organization's workflows and boost efficiency with our full range of AI services.",
      features: ["AI Consulting", "RAG (Data to LLMs)", "Custom LLMs for Enterprises", "AI in Mobile Apps", "AI in Software"],
      color: "text-blue-500"
    },
    {
      icon: "🔍",
      title: "Data Engineering",
      description: "Turn raw data into actionable insights with our expert team of data consultants and engineers.",
      features: ["ETL and Data Warehouse", "Data Annotation Services", "Predictive Analytics", "Data Visualization"],
      color: "text-green-500"
    },
    {
      icon: "🤖",
      title: "Generative AI",
      description: "Embrace automation and innovation with advanced generative AI solutions customized to your business needs.",
      features: ["AI Agents", "LLM Powered Chatbots", "LLM Testing and Finetuning", "GPT Integration"],
      color: "text-purple-500"
    },
    {
      icon: "📊",
      title: "DevOps & AIOps",
      description: "Accelerate your Software Development Life Cycle (SDLC) with a progressive approach and seamless collaboration.",
      features: ["AIOps", "DevOps Consulting", "DevOps Automation", "Site Reliability Engineering", "LLM Observability"],
      color: "text-orange-500"
    },
    {
      icon: "📲",
      title: "Development Services",
      description: "Drive innovation and streamline business processes with premium software development solutions.",
      features: ["Mobile App Development", "Software Development", "Staff Augmentation", "Product Engineering"],
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionizing Operations with{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Advanced AI Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate the technology-driven landscape and achieve long-term growth with our tailored AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 justify-items-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:scale-105 border-border bg-gradient-card w-full max-w-xs flex flex-col"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4">{service.icon}</span>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full group hover:text-blue-600" asChild>
                    <a href="/contact" className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-blue-800" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold text-foreground">
              Ready to Transform Your Business?
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experts are ready to analyze your current systems and create a customized AI strategy that drives growth and innovation.
          </p>
          <Button
            variant="hero"
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hover:opacity-90 transition-opacity"
          >
            <a href="/contact">Consult Our AI Specialists</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$15.7",
      label: "Projected contribution of AI to the global economy by 2030 (in trillion USD)",
      source: "PWC"
    },
    {
      icon: Users,
      value: "79%",
      label: "of Strategists believe AI and analytics are critical for success in the next two years",
      source: "Gartner"
    },
    {
      icon: Globe,
      value: "70%",
      label: "Automation in web and mobile app design with generative AI by 2027",
      source: "Gartner"
    },
    {
      icon: Award,
      value: "25%",
      label: "Estimated cost reduction in operations through AI-based automation",
      source: "McKinsey"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Market Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Evolving AI and Data Strategies
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Are You Keeping Up?
          </p>
          <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto">
            Our experts share insights on AI's transformative impact across global industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg shadow-gray-500/30 hover:bg-white/15 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-primary-foreground/80 text-sm mb-3 leading-relaxed">
                    {stat.label}
                  </p>
                  <div className="text-accent text-xs font-semibold">
                    – {stat.source}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg shadow-gray-500/30">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">Additional Market Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">38%</div>
              <p className="text-primary-foreground/80 text-sm">
                of Operations expected to see doubled efficiency and profitability by 2035 – Forbes
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">20%</div>
              <p className="text-primary-foreground/80 text-sm">
                Faster Product Delivery with our AI-optimized development processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      description: "AI-powered diagnostics, patient care optimization, and medical data analysis",
      color: "text-red-500"
    },
    {
      icon: "💰",
      title: "Fintech",
      description: "Fraud detection, algorithmic trading, risk assessment, and personalized financial services",
      color: "text-green-500"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Supply chain optimization, route planning, and predictive maintenance",
      color: "text-blue-500"
    },
    {
      icon: "🛍️",
      title: "Retail",
      description: "Customer behavior analysis, inventory management, and personalized shopping experiences",
      color: "text-purple-500"
    },
    {
      icon: Monitor,
      title: "Ecommerce",
      description: "Recommendation engines, dynamic pricing, and automated customer support",
      color: "text-orange-500"
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Personalized learning, automated grading, and student performance analytics",
      color: "text-indigo-500"
    },
    {
      icon: Landmark,
      title: "BFSI Solution",
      description: "Banking automation, insurance claims processing, and regulatory compliance",
      color: "text-gray-500"
    },
    {
      icon: Gamepad2,
      title: "Sports & Gaming",
      description: "Player analytics, game AI, and performance optimization",
      color: "text-pink-500"
    },
    {
      icon: Zap,
      title: "Energy & Utility",
      description: "Smart grid optimization, energy forecasting, and predictive maintenance",
      color: "text-yellow-500"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property valuation, market analysis, and automated property management",
      color: "text-teal-500"
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Content recommendation, automated editing, and audience analytics",
      color: "text-rose-500"
    },
    {
      icon: "🤖",
      title: "SaaS Solutions",
      description: "AI-enhanced SaaS products, user behavior analysis, and workflow automation",
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tailored AI Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of industry specialists crafts innovative solutions that align with your unique requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    {typeof IconComponent === "string" ? (
                      <span className="text-2xl">{IconComponent}</span>
                    ) : (
                      <IconComponent className={`h-6 w-6 ${industry.color}`} />
                    )}
                    <CardTitle className="text-lg font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                      {industry.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a free consultation with our industry experts to discover how AI can revolutionize your specific sector.
          </p>
          <Button
            variant="hero"
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hover:opacity-90"
          >
            <a href="/contact">
              Book a Free AI Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhyInfoSource = () => {
  const features = [
    {
      icon: Shield,
      title: "Vendor-Neutral Approach",
      description: "We create scalable enterprise AI solutions aligned with your business model, driven by your needs rather than technology preferences."
    },
    {
      icon: Globe,
      title: "Globally Compliant & Sustainable AI",
      description: "Our team stays updated with evolving regulations to ensure our custom AI solutions meet all relevant compliance and regulatory standards."
    },
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Over a decade and a half of proven expertise in delivering cutting-edge technology solutions to enterprises worldwide."
    },
    {
      icon: Users,
      title: "400+ AI Specialists",
      description: "A dedicated team of AI experts, data scientists, and engineers working together to bring your vision to life."
    }
  ];

  const achievements = [
    { number: "1000+", label: "Satisfied Clients", icon: Users },
    { number: "1500+", label: "Successful Projects", icon: CheckCircle },
    { number: "95%", label: "Client Retention", icon: Star },
    { number: "20%", label: "Faster Delivery", icon: Clock }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Why InfoSource?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Globally Trusted{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              AI Development Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborate with InfoSource's skilled professionals to turn your ideas into impactful AI solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img
                src={teamConsulting}
                alt="InfoSource AI consulting team"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-glow animate-float">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs">Years</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-4 shadow-glow animate-float delay-300">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-xs">Retention</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Embracing the AI-Driven Future
            </h3>
            <div className="bg-gradient-card border border-border rounded-xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">A Message from Our Founder</h4>
              <p className="text-muted-foreground leading-relaxed">
                "I am excited to affirm our steadfast dedication to revolutionizing your business and products with innovative AI technology. In today's fast-evolving and competitive landscape, leveraging AI to optimize and enhance your organization is not just an opportunity—it's a necessity."
              </p>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At InfoSource, we excel in AI Strategy, AIOps, custom LLM development, seamless AI integration into existing systems, and business process automation. Our mission is to ensure your organization, products, and data are AI-ready, fostering innovation and operational efficiency.
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hover:opacity-90"
            >
              <a href="/contact">
                Create Your AI Roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-white/80 text-sm">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Industries />
      <WhyInfoSource />
      <Footer />
    </div>
  );
};

export default MainPage;