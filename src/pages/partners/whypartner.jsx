import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const WhyPartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".animate-on-scroll");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: phoneValue });
      setErrors({
        ...errors,
        phone: phoneValue.length === 10 ? "" : "Phone number must be 10 digits",
      });
    } else if (name === "email") {
      setFormData({ ...formData, [name]: value });
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Please enter a valid email",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email)
      ? ""
      : "Please enter a valid email";
    const phoneError = validatePhone(formData.phone)
      ? ""
      : "Phone number must be 10 digits";

    setErrors({ email: emailError, phone: phoneError });

    if (!emailError && !phoneError) {
      setSubmitStatus({
        type: "success",
        message: "Thank you for your inquiry! We’ll contact you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitStatus({ type: "", message: "" }), 3000);
    } else {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form.",
      });
    }
  };

  const whyPartnerItems = [
    "Diverse Ecosystem: Gain access to a wide range of industries, from e-commerce and financial services to IT solutions and spiritual wellness.",
    "Collaborative Growth: We foster long-term partnerships that benefit all stakeholders.",
    "Expert Support: Leverage our expertise, resources, and technology to expand your reach and achieve success.",
    "Credibility: Work alongside leading brands and trusted names in multiple domains.",
  ];

  const whoCanPartnerItems = [
    "Entrepreneurs & Businesses: Looking to expand their reach and tap into new markets.",
    "Service Providers: Offering IT, marketing, financial, or wellness-related services.",
    "Brands: Seeking co-branding opportunities or support in digital commerce.",
    "Innovators: With unique ideas or products that align with our ecosystem.",
  ];

  const benefitsItems = [
    "Shared Success: Enjoy mutual growth with tailored strategies for your business.",
    "Enhanced Visibility: Be part of a trusted network that spans industries.",
    "Resource Sharing: Leverage our expertise, tools, and market insights.",
    "Co-Branding Opportunities: Collaborate on campaigns that amplify your brand.",
  ];

  const existingPartnerships = [
    {
      category: "Digital Commerce",
      partners: ["Nutraio", "GudGoodlife", "CHAA Tea", "and more"],
    },
    {
      category: "IT & Marketing",
      partners: ["eBranding Studio", "ARKinfoserv", "Biztech.one"],
    },
    {
      category: "Financial Services",
      partners: ["ICICI Bank", "BOB", "Kotak Bank", "Tata Capital"],
    },
    {
      category: "Spiritual Ecosystem",
      partners: ["Yoga Studio", "Panchkarma Kutir", "Joshidada.com", "and more"],
    },
  ];

  const joinSteps = [
    "Submit Your Proposal: Fill out our partnership inquiry form with your details and ideas.",
    "Get in Touch: Our team will review your application and contact you for further discussions.",
    "Collaborate: Together, we’ll create a partnership plan that aligns with our mutual goals.",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0"
            data-index={0}
          >
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={0}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Get In Touch</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Partner with{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                99 Partners
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div>
              </span>
            </h1>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Collaborate. Innovate. Grow Together. Join our dynamic network and become part of a thriving ecosystem.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={0}
            >
              <Button
                variant="hero"
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white font-sans"
              >
                <a href="/join-us ">
                <span className="relative z-10 flex items-center gap-3">
                  Start Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                </a>
              </Button>
              <Button
                variant="glass"
                size="xl"
                className="group bg-black/10 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:text-blue-600 font-sans"
              >
                <a href="/contact" aria-label="Explore Opportunities">
                Explore Opportunities
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Partner with 99 Partners */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={1}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Why Partner</span>
            </div>
            <Card
              className={`bg-black/5 p-8 rounded-2xl transition-all duration-1000 ${
                visibleItems.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={2}
            >
              <CardContent>
                <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                  Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">99 Partners?</span>
                </h2>
                <div className="space-y-6">
                  {whyPartnerItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 font-sans">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who Can Partner with Us */}
        <section className="py-12">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={3}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Who Can Partner</span>
            </div>
            <Card
              className={`bg-black/5 p-8 rounded-2xl transition-all duration-1000 ${
                visibleItems.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={4}
            >
              <CardContent>
                <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                  Who Can Partner with <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Us?</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed font-sans">We welcome partnerships from:</p>
                <div className="space-y-6">
                  {whoCanPartnerItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 font-sans">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How You Benefit */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={5}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Benefits</span>
            </div>
            <Card
              className={`bg-black/5 p-8 rounded-2xl transition-all duration-1000 ${
                visibleItems.includes(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={6}
            >
              <CardContent>
                <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                  How You <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Benefit</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed font-sans">By partnering with us, you unlock:</p>
                <div className="space-y-6">
                  {benefitsItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 font-sans">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyPartner;