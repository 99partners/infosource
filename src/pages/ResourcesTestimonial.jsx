import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ArrowRight, Users, Globe, Award, CheckCircle } from 'lucide-react';

const ResourcesTestimonial = () => {
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
              <span className="text-sm font-medium text-blue-500 font-sans">Testimonials</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`} data-index={0}>
              Voices of Our <span className="text-blue-500 relative">Success<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`} data-index={0}>
              At Infosource, we take pride in helping organizations worldwide become digitally proficient through our advanced AI solutions. Our clients’ feedback reflects the trust and value we bring to their businesses.
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  Connect with Our AI Experts
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* What Our Clients Say Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-12 transition-all duration-1000 ${visibleItems.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={10}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">What Our Clients Say</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-sans">
                What Our <span className="text-blue-500">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-sans">
                Hear from our clients about how Infosource’s AI solutions have transformed their operations and driven growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: "Global Healthcare Provider",
                  role: "Chief Technology Officer",
                  quote: "Infosource’s AI-driven platform revolutionized our patient care processes. Their predictive analytics tools have improved our decision-making, reducing costs and enhancing patient outcomes significantly.",
                  color: "text-white"
                },
                {
                  title: "Fintech Startup",
                  role: "CEO",
                  quote: "Working with Infosource was a game-changer. Their fraud detection system integrated seamlessly with our platform, boosting security and customer trust. Their team’s expertise is unmatched.",
                  color: "text-white"
                },
                {
                  title: "Logistics Firm",
                  role: "Operations Director",
                  quote: "Infosource’s AI solutions optimized our supply chain, cutting delivery times and costs. Their dedication to understanding our needs made all the difference.",
                  color: "text-white"
                },
                {
                  title: "E-commerce Retailer",
                  role: "Marketing Head",
                  quote: "The personalization engine from Infosource transformed our customer experience. Sales have soared, and our customers love the tailored recommendations. Highly recommend their services!",
                  color: "text-white"
                }
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${visibleItems.includes(index + 11) ? 'animate-fade-in-up' : ''} animate-on-scroll`}
                  data-index={index + 11}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <Users className={`h-6 w-6 ${testimonial.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-black font-sans">{testimonial.title}</CardTitle>
                        <p className="text-sm text-gray-600 font-sans">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">“{testimonial.quote}”</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clients Trust Infosource Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-12 transition-all duration-1000 ${visibleItems.includes(15) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={15}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Why Clients Trust Infosource</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-sans">
                Why Clients <span className="text-blue-500">Trust Infosource</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "Client-Centric Approach",
                  description: "We collaborate closely with clients to deliver solutions that exceed expectations."
                },
                {
                  icon: Award,
                  title: "Proven Expertise",
                  description: "Our team of 400+ AI specialists brings years of experience to every project."
                },
                {
                  icon: Globe,
                  title: "Global Impact",
                  description: "We serve over 1000 clients worldwide, delivering measurable results."
                },
                {
                  icon: CheckCircle,
                  title: "Reliable Support",
                  description: "From consultation to post-implementation, we provide end-to-end assistance."
                }
              ].map((reason, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 ${visibleItems.includes(index + 16) ? 'animate-fade-in-up' : ''} animate-on-scroll`}
                  data-index={index + 16}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <reason.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-black font-sans">{reason.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed font-sans">{reason.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-black font-sans">
                Join Our <span className="text-blue-500">Satisfied Clients</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-sans">
                Discover how Infosource can elevate your business with tailored AI solutions.
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

export default ResourcesTestimonial;