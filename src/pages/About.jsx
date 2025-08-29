import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Heart, Zap, Award, Target, CheckCircle, Clock, Star, Settings, TrendingUp, Shield, MessageCircle } from 'lucide-react';

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

const About = () => {
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/10 to-accent/10"></div>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0"
            data-index={0}
          >
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">About Infosource</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Pioneering{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Digital Excellence
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
              </span>
            </h1>
            <p
              className={`text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Infosource has been a trusted technology partner, delivering innovative software development, IT consulting, and digital transformation services. We empower businesses worldwide to scale smarter, innovate faster, and achieve measurable growth through cutting-edge solutions.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Button
                asChild
                variant="hero"
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
              >
                <Link to="/contact">
                  <span className="relative z-10 flex items-center gap-3">
                    <Users className="w-5 h-5" />Start Partnership
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="xl"
                className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              data-index={1}
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Our <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <Card className="p-8 rounded-2xl max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    To empower businesses to innovate and grow through smart, agile, and future-ready digital solutions, making advanced technologies accessible and practical for organizations of all sizes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              data-index={2}
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Our Vision</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Our <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Vision</span>
              </h2>
              <Card className="p-8 rounded-2xl max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    To be a globally recognized technology partner, delivering transformative impact through innovation, advanced technology, and a commitment to people-first values.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              data-index={3}
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">What We Do</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                What <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">We Do</span>
              </h2>
              <Card className="p-8 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/5">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Custom Software Development",
                      "Web & Mobile App Development",
                      "AI & Machine Learning Solutions",
                      "Cloud & DevOps Services",
                      "UI/UX Design",
                      "Dedicated Development Teams",
                      "QA & Testing Services",
                      "Product Engineering"
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
                    Our solutions are meticulously crafted to align with each client’s unique business objectives, ensuring outcomes that are both technically robust and strategically impactful.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              data-index={4}
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Why Choose Infosource</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Infosource?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { icon: Target, title: "Tailor-Made Solutions", description: "We craft software precisely tailored to your unique needs, ensuring seamless alignment with your goals." },
                  { icon: Star, title: "Global Talent Pool", description: "Access our team of top-tier developers, designers, and architects for world-class solutions." },
                  { icon: Clock, title: "Faster Time to Market", description: "Our agile processes accelerate development cycles, delivering results swiftly." },
                  { icon: Shield, title: "Security & Scalability", description: "We build enterprise-grade solutions designed for long-term reliability and growth." },
                  { icon: Heart, title: "Client-Centric Approach", description: "With 95% of clients returning, we prioritize your success as your strategic partner." }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-black/5 animate-on-scroll`}
                      data-index={4 + index}
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleItems.includes(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={9}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Partner With Us</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                Ready to <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Partner with Infosource to unlock innovative technology solutions that drive growth, streamline operations, and deliver measurable results.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
                visibleItems.includes(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={9}
            >
              <Button
                asChild
                variant="hero"
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
              >
                <Link to="/contact">
                  <span className="relative z-10 flex items-center gap-3">
                    <Users className="w-5 h-5" />Start Partnership
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="xl"
                className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
              >
                <Link to="/consultation">Request a Consultation</Link>
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                visibleItems.includes(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={9}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Get In Touch</h3>
                  <p className="text-sm text-black/80 font-sans">Start a conversation about your technology project</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Free Consultation</h3>
                  <p className="text-sm text-black/80 font-sans">Discover technology opportunities for your organization</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Fast Response</h3>
                  <p className="text-sm text-black/80 font-sans">We'll get back to you within 24 hours</p>
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

export default About;