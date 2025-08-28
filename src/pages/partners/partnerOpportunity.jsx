import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const PartnerOpportunity = () => {
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
        message: "Thank you for your interest! We’ll contact you soon.",
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

  const benefits = [
    "Diverse Ecosystem: Access a wide array of fields—e-commerce, IT, finance, wellness, and more—all under one roof.",
    "Cross-Functional Collaboration: Join forces with industry leaders, innovative brands, and service experts to unlock new opportunities.",
    "Unparalleled Reach: Expand your span across untapped markets and customer bases with our robust network.",
    "Shared Resources: Leverage cutting-edge tools, insights, and expertise to accelerate your growth.",
    "Co-Branding Opportunities: Build credibility and visibility by collaborating with trusted names in the industry.",
  ];

  const whyPartnerItems = [
    {
      title: "Join a Thriving Ecosystem",
      subItems: [
        "Digital Commerce: From co-branding to product marketing.",
        "IT & Marketing Services: Cutting-edge solutions for modern businesses.",
        "Financial Services: Access SME loans and funding opportunities.",
        "Spiritual & Wellness Initiatives: Collaborate with experts in yoga, Ayurveda, and more.",
      ],
    },
    {
      title: "Expand Your Reach",
      subItems: [
        "Tap into new markets.",
        "Reach a wider audience.",
        "Amplify your brand visibility.",
      ],
    },
    {
      title: "Unmatched Benefits",
      subItems: [
        "Cross-Functional Collaboration: Work with industry leaders and innovators.",
        "Exclusive Growth Opportunities: Co-branding, joint ventures, and more.",
        "Tailored Support: Expert guidance and shared resources to drive success.",
      ],
    },
    {
      title: "Diverse Fields Under One Umbrella",
      description:
        "We bring together businesses from various domains, creating endless opportunities for innovation and synergies.",
    },
  ];

  const whoShouldPartner = [
    "Entrepreneurs & Startups: Ready to take their business to the next level.",
    "Established Brands: Looking for innovative collaborations.",
    "Service Providers: Seeking growth through resource sharing and networking.",
    "Innovators: With unique products or services that align with our ecosystem.",
  ];

  const whatSetsUsApart = [
    "Comprehensive Ecosystem: From e-commerce to financial services, IT to wellness—everything you need is here.",
    "Golden Collaboration: Join hands with leading brands and trusted partners.",
    "Future-Ready Solutions: Stay ahead with cutting-edge tools, strategies, and technology.",
  ];

  const howItWorks = [
    "Submit Your Interest: Fill out our quick application form.",
    "Collaborative Planning: We’ll design a tailored partnership plan that meets your goals.",
    "Mutual Growth: Work with us to achieve your business objectives through synergy and innovation.",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/50"></div>
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
              <span className="text-sm font-medium text-blue-500 font-sans">Partnership Opportunity</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Partnership Opportunity with{" "}
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
              A Golden Opportunity Awaits You! Join the 99 Partners Ecosystem and unlock a world of growth, collaboration, and unmatched opportunities across diverse industries.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                    Start Partnership
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
                <Link to="/about">Explore More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={1}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Unmatched Benefits</span>
            </div>
            <Card
              className={`bg-black/5 p-8 rounded-2xl transition-all duration-1000 ${
                visibleItems.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={2}
            >
              <CardContent>
                <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                  Unmatched Benefits of Partnering with{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Us</span>
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-600 font-sans">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Partner with Us */}
        <section className="py-12">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={3}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Why Partner</span>
            </div>
            <h2
              className={`text-3xl font-bold mb-12 text-center text-black font-sans transition-all duration-1000 ${
                visibleItems.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={4}
            >
              Why Partner with{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Us?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyPartnerItems.map((item, index) => (
                <Card
                  key={index}
                  className={`bg-black/5 p-6 rounded-xl transition-all duration-1000 ${
                    visibleItems.includes(5 + index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } animate-on-scroll`}
                  data-index={5 + index}
                >
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-3 text-blue-500 font-sans">{item.title}</h3>
                    {item.description ? (
                      <p className="text-gray-600 font-sans">{item.description}</p>
                    ) : (
                      <ul className="space-y-2 text-gray-600">
                        {item.subItems.map((subItem, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-sans">{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(9) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={9}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Who Should Partner</span>
            </div>
            <Card
              className={`bg-black/5 p-8 rounded-2xl transition-all duration-1000 ${
                visibleItems.includes(10) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={10}
            >
              <CardContent>
                <h2 className="text-3xl font-bold mb-6 text-black font-sans">
                  Who Should Partner with{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Us?</span>
                </h2>
                <p className="text-gray-600 mb-8 font-sans">This partnership opportunity is ideal for:</p>
                <div className="space-y-6">
                  {whoShouldPartner.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-600 font-sans">{item}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mt-8 mb-3 text-blue-500 font-sans">What Sets Us Apart?</h3>
                <div className="space-y-6">
                  {whatSetsUsApart.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-600 font-sans">{item}</p>
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

export default PartnerOpportunity;