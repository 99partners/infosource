import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Brain, Database, Code, Zap, Target, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

const services = [
  { icon: Brain, title: "AI & Machine Learning Solutions", description: "Leverage predictive analytics, natural language processing, computer vision, and intelligent automation to make smarter decisions and improve operational efficiency.", features: ["Predictive Analytics & Forecasting", "Natural Language Processing", "Computer Vision & Image Recognition", "Intelligent Process Automation", "Machine Learning Model Development", "AI Strategy & Implementation"], technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Azure AI", "AWS SageMaker"], color: "primary", bgGradient: "from-primary/10 to-primary/5" },
  { icon: Database, title: "Data Engineering & Analytics", description: "Transform raw data into actionable insights. From data pipelines to visualization, we help you harness the full potential of your data.", features: ["Data Pipeline Architecture", "Real-time Data Processing", "Data Warehouse Design", "Business Intelligence Dashboards", "ETL/ELT Development", "Data Quality Management"], technologies: ["Apache Spark", "Kafka", "Snowflake", "dbt", "Tableau", "Power BI"], color: "secondary", bgGradient: "from-secondary/10 to-secondary/5" },
  { icon: Code, title: "Custom Software Development", description: "Build scalable, secure, and user-centric applications tailored to your specific business needs—whether it's a web app, mobile solution, or enterprise platform.", features: ["Full-Stack Web Applications", "Mobile App Development", "Enterprise Software Solutions", "API Development & Integration", "Cloud-Native Applications", "Legacy System Modernization"], technologies: ["React", "Node.js", "Python", "Go", "Docker", "Kubernetes"], color: "accent", bgGradient: "from-accent/10 to-accent/5" }
];

const industries = [
  { name: "Healthcare", projects: "50+", description: "HIPAA-compliant solutions" },
  { name: "Finance", projects: "30+", description: "Secure trading platforms" },
  { name: "Retail", projects: "40+", description: "E-commerce optimization" },
  { name: "Manufacturing", projects: "25+", description: "IoT & automation" },
  { name: "Logistics", projects: "35+", description: "Supply chain optimization" },
  { name: "Education", projects: "20+", description: "Learning management systems" }
];

const Services = () => {
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
    const items = document.querySelectorAll('.service-card, .industry-card');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"><Zap className="w-4 h-4 text-accent" /><span className="text-sm font-mono text-muted-foreground">Our Services</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="gradient-text">Comprehensive</span> Technology Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">From AI-powered insights to custom software development, we deliver cutting-edge solutions that drive real business results and competitive advantage.</p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isVisible = visibleItems.includes(index);
                return (
                  <div key={index} data-index={index} className={`service-card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-${service.color}/20 flex items-center justify-center mb-8`}><Icon className={`w-10 h-10 text-${service.color}`} /></div>
                        <h2 className="text-3xl font-bold mb-6 text-foreground">{service.title}</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                        <div className="space-y-4 mb-8">{service.features.map((feature, featureIndex) => (<div key={featureIndex} className="flex items-center gap-3"><CheckCircle className={`w-5 h-5 text-${service.color} flex-shrink-0`} /><span className="text-foreground">{feature}</span></div>))}</div>
                        <Button variant="hero" size="lg" className="group">Learn More<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="glass-card p-8 rounded-2xl">
                          <h3 className="text-xl font-semibold mb-6 text-foreground">Technologies We Use</h3>
                          <div className="grid grid-cols-2 gap-4">{service.technologies.map((tech, techIndex) => (<div key={techIndex} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100/50 hover:scale-105 transition-transform duration-200"><Star className={`w-4 h-4 text-${service.color}`} /><span className="text-sm font-medium text-foreground">{tech}</span></div>))}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"><Target className="w-4 h-4 text-accent" /><span className="text-sm font-mono text-muted-foreground">Industry Expertise</span></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted Across <span className="gradient-text">Industries</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">With over a decade of experience, we've delivered successful projects across multiple industries.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} data-index={index + 10} className={`industry-card glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 ${visibleItems.includes(index + 10) ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold text-foreground">{industry.name}</h3><div className="text-2xl font-bold gradient-text">{industry.projects}</div></div>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform <span className="gradient-text">Your Business</span>?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">Let's discuss how our technology solutions can drive your business forward.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Button variant="hero" size="xl" className="group"><Users className="w-5 h-5" />Schedule Consultation<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button><Button variant="glass" size="xl">View Case Studies</Button></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;


