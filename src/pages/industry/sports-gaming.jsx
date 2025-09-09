import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, ArrowRight, Heart, Zap, Target, CheckCircle, Clock, Star, Shield, Gamepad2 } from 'lucide-react';

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

const SportsGaming = () => {
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
        <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Gamepad2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Sports & Gaming Solutions</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Elevate <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Sports & Gaming</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
            </h1>
            <p
              className={`text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Leverage expert-level game development services to build cutting-edge sports solutions tailored for performance tracking, team management, and advanced sports analytics.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Button asChild variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                <Link to="/connect-us">
                  <span className="relative z-10 flex items-center gap-3">
                    <Users className="w-5 h-5" />Request a Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
                Explore Sports Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Sports & Gaming Solutions Section */}
        <section className="py-12 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Custom <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Sports & Gaming Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
                As a top-tier sports app development company, Infosource delivers high-performance game and fantasy sports solutions tailored for fans, athletes, and businesses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Star, title: "Sports News & Updates App", description: "Intuitive app for real-time updates on football, cricket, tennis, rugby, and more." },
                  { icon: Shield, title: "Live Match Streaming App", description: "Seamless live-streaming with minimal latency and high-quality playback." },
                  { icon: Users, title: "Fantasy Sports Platform", description: "Engaging platform for building dream teams and joining global leagues." },
                  { icon: CheckCircle, title: "Sports Ticket Booking App", description: "Fast, user-friendly app for secure ticket purchases worldwide." },
                  { icon: Target, title: "Team Management Software", description: "Centralized solution for task assignment, player analytics, and performance tracking." },
                  { icon: Clock, title: "Online Sports Coaching App", description: "Fully managed app for scheduling classes and monitoring business performance." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 rounded-xl ${
                        visibleItems.includes(2 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      } animate-on-scroll`}
                      data-index={2 + index}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-lg font-bold text-black font-sans">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={8}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Featured Projects</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Driving <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Innovation in Sports</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Live Streaming App", description: "Multi-platform app for live sports broadcasts and real-time scoring." },
                  { title: "Fantasy Sports Platform", description: "Dynamic platform with in-app wallet and crypto integration via WalletConnect." },
                  { title: "Smart Matching App", description: "Geo-based app connecting athletes and coaches for training and networking." },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 rounded-xl ${
                      visibleItems.includes(9 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } animate-on-scroll`}
                    data-index={9 + index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-black font-sans">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{project.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(12) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={12}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Gamepad2 className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Technology Stack</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Technologies <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Powering Sports Apps</span>
              </h2>
              <Card className="p-8 rounded-xl max-w-4xl mx-auto bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Kotlin",
                      "Swift",
                      "Node.js",
                      "Blockchain",
                      "MySQL",
                      "React.js",
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
                    We leverage cutting-edge technologies to build scalable, high-performance sports and gaming apps.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Infosource Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(17) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={17}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Why Infosource</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Infosource?</span>
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
                    className={`hover:shadow-lg transition-all duration-500 bg-black/5 rounded-xl ${
                      visibleItems.includes(18 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } animate-on-scroll`}
                    data-index={18 + index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-black mb-2 font-sans">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm text-gray-600 font-sans">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="p-8 rounded-xl max-w-4xl mx-auto bg-black/5">
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    Enterprise-grade sports and gaming software built by industry experts to drive innovation and engagement.
                  </p>
                </CardContent>
              </Card>
              <div className="mt-8">
                <Button asChild variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                  <Link to="/connect-us">
                    <span className="relative z-10 flex items-center gap-3">
                      <Users className="w-5 h-5" />Contact Us Today
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(23) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={23}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Industries We Serve</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Beyond <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Sports & Gaming</span>
              </h2>
              <Card className="p-8 rounded-xl max-w-4xl mx-auto bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Ecommerce – Scalable Platforms",
                      "Banking & Finance – Cutting-edge BFSI Software",
                      "Energy & Utilities – Efficient Operations",
                      "Real Estate – Modern PropTech Solutions",
                      "SaaS Products – Scalable SaaS Apps",
                      "Media & Entertainment – Next-gen Content Platforms",
                      "Fintech – Seamless Financial Solutions",
                      "Healthcare – Intelligent Healthtech",
                      "Education – Interactive EdTech Platforms",
                      "Logistics – Smart Supply Chain Systems",
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
                    Infosource delivers impactful digital solutions across various sectors to drive innovation and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleItems.includes(29) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={29}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Transform Sports & Gaming</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Build Your <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Sports App</span> with Infosource
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Partner with Infosource to create innovative sports and gaming solutions that engage fans and empower athletes.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
                visibleItems.includes(29) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={29}
            >
              <Button asChild variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                <Link to="/connect-us">
                  <span className="relative z-10 flex items-center gap-3">
                    <Users className="w-5 h-5" />Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
                View Sports Portfolio
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                visibleItems.includes(29) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={29}
            >
              <Card className="bg-black/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Start a Conversation</h3>
                  <p className="text-sm text-gray-600 font-sans">Discuss your sports app project with our experts.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
                  <p className="text-sm text-gray-600 font-sans">Explore opportunities for your sports solution.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Fast Response</h3>
                  <p className="text-sm text-gray-600 font-sans">We’ll get back to you within 24 hours.</p>
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

export default SportsGaming;
