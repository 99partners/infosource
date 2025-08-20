import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ArrowRight, Stethoscope, Shield, Truck, ShoppingCart } from 'lucide-react';

const ResourcesCaseStudies = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems((prev) => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.2 });

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
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Case Studies</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`} data-index={0}>
              Showcasing Infosource’s <span className="text-blue-500 relative">AI Impact<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`} data-index={0}>
              At Infosource, we craft bespoke AI solutions that drive measurable outcomes and foster growth across industries. Our case studies highlight how our innovative AI tools streamline operations, enhance efficiency, and deliver lasting value to our clients.
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  Connect with Our AI Experts
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                View Our Full Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-12 transition-all duration-1000 ${visibleItems.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={10}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Success Stories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-sans">
                Our <span className="text-blue-500">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-sans">
                Explore how Infosource’s custom AI solutions have empowered organizations worldwide to achieve their goals and stay ahead in the digital landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Stethoscope,
                  title: "Smart Healthcare Platform",
                  subtitle: "Revolutionizing Patient Care",
                  description: "Developed an AI-powered platform for a leading healthcare provider, integrating predictive analytics and remote patient monitoring to improve clinical outcomes and optimize resource allocation. The solution reduced patient readmission rates by 25% and enhanced operational efficiency by 30%.",
                  color: "text-white"
                },
                {
                  icon: Shield,
                  title: "Fintech Fraud Detection System",
                  subtitle: "Enhancing Financial Security",
                  description: "Built an AI-driven fraud detection tool for a global fintech firm, leveraging machine learning to analyze transaction patterns in real-time. The system reduced fraudulent transactions by 40% and seamlessly integrated with existing infrastructure, boosting client trust.",
                  color: "text-white"
                },
                {
                  icon: Truck,
                  title: "Logistics Optimization Suite",
                  subtitle: "Streamlining Supply Chains",
                  description: "Created a comprehensive AI solution for a logistics company, featuring real-time vehicle tracking and demand forecasting. This tool cut delivery times by 20% and reduced operational costs by 15%, enabling sustainable and efficient supply chain management.",
                  color: "text-white"
                },
                {
                  icon: ShoppingCart,
                  title: "Retail Personalization Engine",
                  subtitle: "Elevating Customer Experiences",
                  description: "Designed an AI-based personalization platform for an e-commerce retailer, using behavioral data to deliver tailored product recommendations. The solution increased conversion rates by 28% and boosted customer engagement significantly.",
                  color: "text-white"
                }
              ].map((study, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${visibleItems.includes(index + 11) ? 'animate-fade-in-up' : ''} animate-on-scroll`}
                  data-index={index + 11}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <study.icon className={`h-6 w-6 ${study.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-black font-sans">{study.title}</CardTitle>
                        <p className="text-sm text-gray-600 font-sans">{study.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{study.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Solutions Succeed Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-12 transition-all duration-1000 ${visibleItems.includes(15) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={15}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Why Our Solutions Succeed</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-sans">
                Why Our <span className="text-blue-500">Solutions Succeed</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Customized Innovation",
                  description: "We tailor AI solutions to meet your unique operational and strategic goals."
                },
                {
                  title: "Proven Impact",
                  description: "Our projects deliver measurable improvements in efficiency, profitability, and customer satisfaction."
                },
                {
                  title: "Seamless Integration",
                  description: "Our AI tools integrate effortlessly with your existing systems, minimizing disruption."
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continuous optimization to ensure long-term value from your AI investments."
                }
              ].map((reason, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${visibleItems.includes(index + 16) ? 'animate-fade-in-up' : ''} animate-on-scroll`}
                  data-index={index + 16}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-black font-sans">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{reason.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-black font-sans">
                Ready to Create Your <span className="text-blue-500">Success Story?</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-sans">
                Partner with Infosource to transform your business with cutting-edge AI solutions.
              </p>
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  Get in Touch Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div className={`transition-all duration-1000 ${visibleItems.includes(20) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={20}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Partner With Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Ready to <span className="text-blue-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Let’s discuss how we can help transform your business with our proven expertise and innovative AI solutions.
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${visibleItems.includes(20) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={20}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  Start Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                Meet Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesCaseStudies;