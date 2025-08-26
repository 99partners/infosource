import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Added for button redirects
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, ArrowRight, Heart, Zap, Target, CheckCircle, Clock, Star, Shield, DollarSign, Cpu, Award, Package } from 'lucide-react';

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

const BFSI = () => { // Changed from bfsisolutions to BFSI
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
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <DollarSign className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">BFSI Software Solutions</span>
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Innovate <span className="text-blue-500 relative">BFSI<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Discover premium banking and financial software development services at Infosource, designed to optimize and transform the BFSI sector with secure, innovative solutions.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Button asChild variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <Link to="/connect-us">
                  <span className="relative z-10 flex items-center gap-3">
                    <Users className="w-5 h-5" />Request a Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                Explore BFSI Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* BFSI Solutions Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={1}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Solutions</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Advanced <span className="text-blue-500">BFSI Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
                We deliver innovative BFSI software tailored to client needs, utilizing cutting-edge technologies to drive growth and ensure compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: DollarSign, title: "Mobile Banking Apps", description: "Intuitive Android/iOS apps with robust security and cross-platform compatibility." },
                  { icon: Package, title: "Loan Management Software", description: "Comprehensive systems to enhance service quality and operational efficiency." },
                  { icon: Users, title: "Neo Banking Platforms", description: "Digital banking portals for seamless fund transfers, payments, and lending." },
                  { icon: Star, title: "Digital Wallet Solutions", description: "Secure mobile payment technologies for convenient transactions." },
                  { icon: Shield, title: "Insurance Claim Software", description: "Automated systems for streamlined claim processing and evaluations." },
                  { icon: Clock, title: "Trading Platforms", description: "Fast, reliable platforms with real-time quotes and advanced analytics." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white ${
                        visibleItems.includes(2 + index) ? 'animate-fade-in-up' : ''
                      } animate-on-scroll`}
                      data-index={2 + index}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-black font-sans">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed font-sans">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={8}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Projects</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Exceptional <span className="text-blue-500">BFSI Solutions</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Microfinance App", description: "A platform providing credit access to underserved populations in Tanzania for financial inclusion." },
                  { title: "Youth Financial App", description: "An eWallet in Egypt with parental controls, processed via the National Bank of Egypt." },
                  { title: "Crypto Trading Platform", description: "A global exchange with advanced analytics and robust security for minimal-risk trading." },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                      visibleItems.includes(9 + index) ? 'animate-fade-in-up' : ''
                    } animate-on-scroll`}
                    data-index={9 + index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-black font-sans">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed font-sans">{project.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(12) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={12}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Technology Stack</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Technologies <span className="text-blue-500">Powering BFSI</span>
              </h2>
              <Card className="p-8 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Java",
                      "Python",
                      "C++",
                      "ReactJS",
                      "SQL",
                    ].map((tech, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-lg text-gray-600 font-sans">{tech}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    We leverage leading languages and tools to build secure, scalable, and high-performance BFSI software solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Infosource Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(17) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={17}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Why Infosource</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Why Partner with <span className="text-blue-500">Infosource?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: 15, suffix: "+", description: "Years of Experience" },
                  { value: 500, suffix: "+", description: "Skilled Engineers" },
                  { value: 1500, suffix: "+", description: "Projects Delivered" },
                  { value: 3, suffix: "", description: "Development Centers" },
                  { value: 1000, suffix: "+", description: "Satisfied Clients" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 bg-black/5 ${
                      visibleItems.includes(18 + index) ? 'animate-fade-in-up' : ''
                    } animate-on-scroll`}
                    data-index={18 + index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-blue-500 mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-lg text-gray-600 font-sans">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="p-8 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    Tap into Infosource’s digital expertise to build innovative BFSI solutions that optimize operations and drive business growth.
                  </p>
                </CardContent>
              </Card>
              <div className="mt-8">
                <Button asChild variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                  <Link to="/connect-us">
                    <span className="relative z-10 flex items-center gap-3">
                      <Users className="w-5 h-5" />Connect with Us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(23) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={23}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Industries We Support</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Beyond <span className="text-blue-500">BFSI</span>
              </h2>
              <Card className="p-8 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Ecommerce – Scalable Platforms",
                      "Sports & Gaming – Engaging Experiences",
                      "Media & Entertainment – Dynamic Content",
                      "SaaS Products – Digital Transformation",
                      "Real Estate – PropTech Solutions",
                      "Healthcare – Optimized Workflows",
                      "Education – Immersive EdTech",
                      "Logistics – Smart Supply Chains",
                      "Energy & Utilities – Efficient Operations",
                      "Fintech – Innovative Financial Solutions",
                    ].map((industry, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-lg text-gray-600 font-sans">{industry}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    Our expertise empowers businesses across diverse sectors with innovative software solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div
              className={`transition-all duration-1000 ${
                visibleItems.includes(29) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={29}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Transform BFSI</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Transform <span className="text-blue-500">BFSI</span> with Infosource
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Partner with Infosource to create secure, innovative BFSI software that optimizes operations and enhances customer experiences.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
                visibleItems.includes(29) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={29}
            >
              <Button asChild variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <Link to="/connect-us">
                  <span className="relative z-10 flex items-center gap-3">
                    <Users className="w-5 h-5" />Get Connected
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                View BFSI Portfolio
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                visibleItems.includes(29) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={29}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Start a Conversation</h3>
                  <p className="text-sm text-black/80 font-sans">Discuss your BFSI project with our experts.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
                  <p className="text-sm text-black/80 font-sans">Explore opportunities for your financial institution.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Fast Response</h3>
                  <p className="text-sm text-black/80 font-sans">We’ll get back to you within 24 hours.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BFSI;