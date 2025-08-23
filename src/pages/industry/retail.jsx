import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, ArrowRight, Heart, Zap, Target, CheckCircle, Clock, Star, Shield, ShoppingCart, BarChart, Package, Search, MessageSquare, Bot, Cpu, Award } from 'lucide-react';

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

const Retail = () => {
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
              <ShoppingCart className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Retail AI Solutions</span>
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Smart AI for <span className="text-blue-500 relative">Retail<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Reimagine retail with next-gen AI — elevate customer experiences, streamline operations, and accelerate growth with Infosource’s tailored AI solutions.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  <Users className="w-5 h-5" />Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* AI's Impact Section */}
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
                <span className="text-sm font-medium text-blue-500 font-sans">AI's Impact</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                AI’s <span className="text-blue-500">Impact</span> on Retail
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
                Artificial Intelligence is reshaping the retail landscape by enhancing customer journeys, enabling data-driven decisions, and streamlining operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Heart, title: "Personalized Recommendations", description: "Enhance customer satisfaction with tailored product suggestions." },
                  { icon: BarChart, title: "Demand Forecasting", description: "Predict product demand accurately to optimize stock levels." },
                  { icon: Shield, title: "Fraud Prevention", description: "Detect and prevent fraudulent activities for safer transactions." },
                  { icon: Package, title: "Supply Chain Optimization", description: "Cut costs and speed up deliveries with intelligent logistics." },
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

        {/* Industry Statistics Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={6}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <BarChart className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Industry Statistics</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                AI in Retail <span className="text-blue-500">By the Numbers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: 40.5, suffix: "B", description: "Estimated AI retail market value by 2025", source: "Business Intelligent" },
                  { value: 87, suffix: "%", description: "Retailers using AI in at least one area", source: "Neontri" },
                  { value: 69, suffix: "%", description: "Reported revenue growth from AI adoption", source: "NVIDIA" },
                  { value: 2025, suffix: "", description: "Year most executives expect full AI automation", source: "Neontri" },
                  { value: 80, suffix: "%", description: "Shoppers more likely to buy with personalization", source: "Salesforce" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 bg-black/5 ${
                      visibleItems.includes(7 + index) ? 'animate-fade-in-up' : ''
                    } animate-on-scroll`}
                    data-index={7 + index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-blue-500 mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-lg text-gray-600 font-sans">{stat.description}</p>
                      <p className="text-sm text-gray-500 font-sans">Source: {stat.source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(12) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={12}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our AI Solutions</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Our <span className="text-blue-500">AI Solutions</span> for Retail
              </h2>
              <Card className="p-8 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Demand Forecasting",
                      "Price Optimization",
                      "Supply Chain Intelligence",
                      "Visual Product Search",
                      "Personalized Marketing Campaigns",
                      "Fraud Prevention",
                      "Enhanced In-Store Experiences",
                      "Smart Inventory Management",
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-lg text-gray-600 font-sans">{service}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    Our AI-powered tools are built to transform your retail ecosystem, delivering measurable improvements in efficiency, customer satisfaction, and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI-Powered Innovations Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(20) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={20}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">AI Innovations</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                AI-Powered <span className="text-blue-500">Retail Innovations</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Search, title: "In-Store Analytics", description: "Track customer movements and interactions to optimize layouts and promotions." },
                  { icon: ShoppingCart, title: "E-commerce Optimization", description: "Drive conversions with personalized product suggestions and enhanced search." },
                  { icon: Users, title: "CRM Enhancement", description: "Tailor loyalty programs and promotions based on customer behavior." },
                  { icon: BarChart, title: "Sales Forecasting", description: "Gain clear visibility into sales trends with AI-powered projections." },
                  { icon: Clock, title: "Automated Reporting", description: "Generate real-time reports on sales, stock, and customer data." },
                  { icon: Bot, title: "Customer Service Automation", description: "Use virtual assistants and chatbots for 24/7 support." },
                ].map((innovation, index) => {
                  const Icon = innovation.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                        visibleItems.includes(21 + index) ? 'animate-fade-in-up' : ''
                      } animate-on-scroll`}
                      data-index={21 + index}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-black font-sans">{innovation.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed font-sans">{innovation.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(27) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={27}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Technologies</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Technologies <span className="text-blue-500">Powering Our AI</span>
              </h2>
              <Card className="p-8 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Machine Learning",
                      "Natural Language Processing",
                      "Computer Vision",
                      "Predictive Analytics",
                      "Robotic Process Automation",
                      "Internet of Things",
                      "Augmented Reality",
                      "Virtual Reality",
                      "Neural Networks",
                      "Deep Learning",
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
                    We integrate top-tier technologies to ensure innovation, performance, and scalability in our retail AI solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(37) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={37}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Approach</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Our <span className="text-blue-500">Implementation Approach</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Star, title: "Custom AI Solutions", description: "Retail-specific AI models aligned with your business objectives." },
                  { icon: BarChart, title: "Insight-Driven Strategies", description: "Real-time analytics for better, faster decisions." },
                  { icon: Package, title: "Seamless System Integration", description: "Incorporate AI tools with minimal disruption." },
                  { icon: Clock, title: "Ongoing Optimization", description: "Continuous improvements for long-term value." },
                ].map((approach, index) => {
                  const Icon = approach.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${
                        visibleItems.includes(38 + index) ? 'animate-fade-in-up' : ''
                      } animate-on-scroll`}
                      data-index={38 + index}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-black font-sans">{approach.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed font-sans">{approach.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Infosource Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(42) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index={42}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Why Infosource</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Why Choose <span className="text-blue-500">Infosource?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: 15, suffix: "+", description: "Years in Business" },
                  { value: 1000, suffix: "+", description: "Satisfied Clients" },
                  { value: 400, suffix: "+", description: "AI Specialists" },
                  { value: 1500, suffix: "+", description: "Projects Delivered" },
                  { value: 4, suffix: "", description: "Proprietary Products" },
                  { value: 95, suffix: "%", description: "Client Retention Rate" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 bg-black/5 ${
                      visibleItems.includes(43 + index) ? 'animate-fade-in-up' : ''
                    } animate-on-scroll`}
                    data-index={43 + index}
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
                    We bring unmatched expertise and a client-first approach to help retail businesses scale and innovate with superior customer experiences and streamlined operations.
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
                visibleItems.includes(49) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={49}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Build the Future</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Let’s Build the <span className="text-blue-500">Future of Retail</span>
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Connect with Infosource to explore how our AI solutions can transform your retail operations, drive growth, and deliver measurable results.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
                visibleItems.includes(49) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={49}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  <Users className="w-5 h-5" />Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                View AI Portfolio
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                visibleItems.includes(49) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={49}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Start a Conversation</h3>
                  <p className="text-sm text-black/80 font-sans">Discuss your retail AI project with our experts.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
                  <p className="text-sm text-black/80 font-sans">Discover AI opportunities for your retail business.</p>
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

export default Retail;