import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, title: "Email Us", description: "Get in touch via email", details: "hello@infosource.com", action: "Send Email" },
  { icon: Phone, title: "Call Us", description: "Speak with our team", details: "+1 (555) 123-4567", action: "Call Now" },
  { icon: MapPin, title: "Global Team", description: "Remote-first company", details: "Worldwide Coverage", action: "View Locations" },
  { icon: Clock, title: "Business Hours", description: "We're here to help", details: "24/7 Support Available", action: "Learn More" }
];

const services = [
  "AI & Machine Learning",
  "Data Engineering",
  "Custom Software Development",
  "Cloud Migration",
  "Digital Transformation",
  "Technical Consulting"
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-12">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Get In Touch</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-black font-sans`} data-index={0}>
              Let's Build Something <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Amazing<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span> Together
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-sans`} data-index={0}>
              Ready to transform your business with cutting-edge technology? We're here to help you succeed. Reach out today for a free consultation.
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  Start Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans">
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Form and Why Choose Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={0}>
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Contact us</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Card className={`bg-black/5 p-8 rounded-2xl transition-all duration-1000 ${visibleItems.includes(15) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={15}>
                <CardContent>
                  <h2 className="text-3xl font-bold mb-6 text-black font-sans">Send Us a <span className="text-blue-500">Message</span></h2>
                  <p className="text-gray-600 mb-8 leading-relaxed font-sans">Fill out the form below and we'll get back to you within 24 hours.</p>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-black font-sans">Message Sent!</h3>
                      <p className="text-gray-600 font-sans">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-black mb-2 font-sans">Full Name *</label>
                          <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="w-full font-sans" placeholder="Your full name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-black mb-2 font-sans">Email Address *</label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full font-sans" placeholder="your.email@company.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-black mb-2 font-sans">Company Name</label>
                          <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="w-full font-sans" placeholder="Your company" />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-black mb-2 font-sans">Service of Interest</label>
                          <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans">
                            <option value="">Select a service</option>
                            {services.map((service, index) => (<option key={index} value={service}>{service}</option>))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-2 font-sans">Message *</label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full font-sans" placeholder="Tell us about your project and how we can help..." />
                      </div>
                      <Button type="submit" variant="hero" size="xl" className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans">
                        <span className="relative z-10 flex items-center gap-3">
                          <Send className="w-5 h-5" /> Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
              <div className={`space-y-8 transition-all duration-1000 ${visibleItems.includes(16) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-on-scroll`} data-index={16}>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-black font-sans">Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Infosource?</span></h2>
                  <div className="space-y-6">
                    {[
                      { icon: CheckCircle, title: "Free Consultation", description: "Get expert advice tailored to your specific business needs at no cost." },
                      { icon: Calendar, title: "24-Hour Response", description: "We respond to all inquiries within 24 hours, usually much sooner." },
                      { icon: MessageCircle, title: "Personalized Approach", description: "Every solution is tailored to your unique business requirements." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-black font-sans">{item.title}</h3>
                          <p className="text-gray-600 font-sans">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Card className="bg-black/5 p-6 rounded-xl">
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-4 text-black font-sans">Quick Contact</h3>
                    <div className="space-y-3">
                      <p className="text-gray-600 font-sans">Need immediate assistance? Reach out directly:</p>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <a href="mailto:hello@infosource.com" className="text-blue-500 hover:underline font-sans">hello@infosource.com</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <a href="tel:+15551234567" className="text-blue-500 hover:underline font-sans">+1 (555) 123-4567</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;