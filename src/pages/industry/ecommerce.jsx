import React, { useEffect, useState } from 'react';
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

const Ecommerce = () => {
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
              <ShoppingCart className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Ecommerce AI Solutions</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Smarter <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Ecommerce</span> with AI
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
            </h1>
            <p
              className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Revolutionize online shopping with Infosource’s AI solutions — from personalized experiences to intelligent automation, we empower ecommerce businesses to thrive.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  <Users className="w-5 h-5" />Connect with Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* AI's Impact Section */}
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
                <span className="text-sm font-medium text-blue-500 font-sans">AI's Impact</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                AI’s <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Impact</span> on Ecommerce
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
                Artificial Intelligence is transforming ecommerce by delivering personalized shopping experiences, optimizing operations, and boosting ROI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Heart, title: "Personalized Suggestions", description: "Match products to user preferences for higher conversions." },
                  { icon: Search, title: "Smart Search Optimization", description: "Enhance product discovery with intelligent search." },
                  { icon: Bot, title: "24/7 Customer Support", description: "AI chatbots provide seamless, round-the-clock assistance." },
                  { icon: BarChart, title: "Predictive Insights", description: "Anticipate customer needs with data-driven forecasts." },
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

        {/* Industry Statistics Section */}
        <section className="py-12 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                AI in Ecommerce <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">By the Numbers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: 22.4, suffix: "B", description: "Projected AI in ecommerce market by 2028", source: "SellersCommerce" },
                  { value: 35, suffix: "%", description: "Amazon’s revenue from AI recommendations", source: "McKinsey & Company" },
                  { value: 69, suffix: "%", description: "Shoppers open to AI-assisted product search", source: "Salesforce" },
                  { value: 78, suffix: "%", description: "Ecommerce brands using AI chatbots", source: "Socialchamp" },
                  { value: 26, suffix: "%", description: "Rise in conversion rates with AI suggestions", source: "Big Sur AI" },
                  { value: 60, suffix: "%", description: "Ecommerce leaders using generative AI", source: "Salesforce" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 bg-black/5 rounded-xl ${
                      visibleItems.includes(7 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } animate-on-scroll`}
                    data-index={7 + index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-black mb-2 font-sans">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm text-gray-600 font-sans">{stat.description}</p>
                      <p className="text-xs text-gray-500 font-sans">Source: {stat.source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions Section */}
        <section className="py-12 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Our <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">AI Solutions</span> for Ecommerce
              </h2>
              <Card className="p-8 rounded-xl max-w-4xl mx-auto bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "AI-Personalized Shopping Experiences",
                      "Smart Chatbots & Virtual Assistants",
                      "Predictive Analytics & Insights",
                      "Visual Search & Image Recognition",
                      "Issue Detection & Risk Management",
                      "Dynamic Pricing Optimization",
                      "AI-Powered Customer Segmentation",
                      "Inventory & Supply Chain Automation",
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
                    Our AI-powered tools are designed to transform your ecommerce ecosystem, driving conversions, enhancing customer satisfaction, and streamlining operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI-Powered Innovations Section */}
        <section className="py-12 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                AI-Powered <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Ecommerce Innovations</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Search, title: "Product Search & Discovery", description: "Enhance search accuracy with NLP and image recognition." },
                  { icon: ShoppingCart, title: "Marketing Automation", description: "Optimize ad targeting and personalize campaigns for better ROI." },
                  { icon: Package, title: "Inventory Management", description: "Predict demand and automate replenishment to reduce losses." },
                  { icon: MessageSquare, title: "Customer Support", description: "AI chatbots provide 24/7 assistance for improved satisfaction." },
                  { icon: Cpu, title: "Voice Commerce", description: "Enable shopping via smart speakers and voice assistants." },
                  { icon: Shield, title: "Fraud Detection", description: "Real-time monitoring to protect transactions and customer data." },
                ].map((innovation, index) => {
                  const Icon = innovation.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 rounded-xl ${
                        visibleItems.includes(21 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      } animate-on-scroll`}
                      data-index={21 + index}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-lg font-bold text-black font-sans">{innovation.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{innovation.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Technologies <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Powering Our AI</span>
              </h2>
              <Card className="p-8 rounded-xl max-w-4xl mx-auto bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Machine Learning (ML)",
                      "Natural Language Processing (NLP)",
                      "Computer Vision",
                      "Predictive Analytics",
                      "Generative AI",
                      "Reinforcement Learning",
                      "Augmented Reality (AR)",
                      "Virtual Reality (VR)",
                      "Real-Time Analytics",
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
                    We leverage cutting-edge technologies to deliver scalable, high-performance AI solutions for ecommerce businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(37) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={37}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Approach</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Our <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Implementation Approach</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Star, title: "Tailored Personalization", description: "AI-driven unique shopping experiences based on customer behavior." },
                  { icon: BarChart, title: "Demand Forecasting", description: "Predict inventory needs to minimize waste and maximize sales." },
                  { icon: Search, title: "Smart Search Technology", description: "Enable fast, intuitive product discovery with visual and voice search." },
                  { icon: Shield, title: "Revenue Protection", description: "Real-time fraud detection and intelligent pricing strategies." },
                ].map((approach, index) => {
                  const Icon = approach.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 rounded-xl ${
                        visibleItems.includes(38 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      } animate-on-scroll`}
                      data-index={38 + index}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-lg font-bold text-black font-sans">{approach.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{approach.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Infosource Section */}
        <section className="py-12 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Infosource?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: 15, suffix: "+", description: "Years in Business" },
                  { value: 1000, suffix: "+", description: "Satisfied Clients" },
                  { value: 400, suffix: "+", description: "AI Specialists" },
                  { value: 1500, suffix: "+", description: "Successful Projects" },
                  { value: 4, suffix: "", description: "Proprietary Products" },
                  { value: 95, suffix: "%", description: "Client Retention Rate" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-500 bg-black/5 rounded-xl ${
                      visibleItems.includes(43 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } animate-on-scroll`}
                    data-index={43 + index}
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
                    Partner with Infosource to leverage our industry-specific expertise and results-driven AI solutions tailored for ecommerce growth and customer satisfaction.
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
                visibleItems.includes(49) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={49}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Transform Ecommerce</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Transform <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Ecommerce</span> with AI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Connect with Infosource to discover how our AI solutions can drive conversions, enhance customer experiences, and streamline your ecommerce operations.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
                visibleItems.includes(49) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={49}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  <Users className="w-5 h-5" />Connect with Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
                View AI Portfolio
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                visibleItems.includes(49) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={49}
            >
              <Card className="bg-black/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Start a Conversation</h3>
                  <p className="text-sm text-gray-600 font-sans">Discuss your ecommerce AI project with our experts.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
                  <p className="text-sm text-gray-600 font-sans">Explore AI opportunities for your ecommerce business.</p>
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

export default Ecommerce;
