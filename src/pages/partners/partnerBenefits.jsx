import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const PartnerBenefits = () => {
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

  const benefits = [
    {
      title: "Diverse Ecosystem Access",
      description:
        "Gain direct access to our broad ecosystem that spans multiple industries, opening doors to new opportunities and collaborations.",
      subItems: [
        "Digital Commerce: Co-brand and market e-commerce products with brands like Nutraio, GudGoodlife, RK Organic, and more.",
        "IT & Marketing: Access expert-driven IT solutions, performance marketing, and outsourcing services.",
        "Financial Services: SME loan support through trusted institutions like ICICI, Kotak, and Tata Capital.",
        "Spiritual Ecosystem: Collaborate on wellness initiatives, from yoga and meditation to Ayurveda and astrological services.",
      ],
    },
    {
      title: "Enhanced Visibility and Reach",
      description:
        "Leverage the 99 Partners’ platform to increase your brand’s exposure and connect with new audiences.",
      subItems: [
        "Increase visibility among a diverse audience.",
        "Tap into new markets across various industries.",
        "Co-brand with trusted names to build credibility and trust.",
      ],
    },
    {
      title: "Expert Support and Resources",
      description:
        "Benefit from our years of expertise and resources to grow your business effectively.",
      subItems: [
        "Strategic guidance to refine your offerings.",
        "Access to cutting-edge tools and technologies.",
        "Marketing and branding support tailored to your needs.",
      ],
    },
    {
      title: "Shared Success and Long-Term Growth",
      description:
        "Build win-win collaborations that foster sustainable growth and innovation.",
      subItems: [
        "Share resources, insights, and networks for mutual success.",
        "Build a sustainable growth model with long-term impact.",
        "Gain exclusive opportunities for innovation and expansion.",
      ],
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry leaders and like-minded businesses within our network.",
      subItems: [
        "Leading brands and innovators in your industry.",
        "Service providers and experts across multiple domains.",
        "Like-minded businesses aiming to achieve common goals.",
      ],
    },
    {
      title: "Tailored Collaboration Opportunities",
      description:
        "Customize partnerships to align with your specific business goals.",
      subItems: [
        "Co-Branding Solutions: Collaborate on campaigns that amplify both brands.",
        "Market Entry Support: Leverage our networks to establish yourself in new markets.",
        "Product Distribution: Access our vast distribution channels.",
        "Technology Integration: Seamlessly integrate our tools into your operations.",
      ],
    },
    {
      title: "Credibility and Trust",
      description:
        "Align your brand with a trusted name in multiple industries, enhancing your reputation.",
      subItems: [
        "Financial Leaders: ICICI, BOB, Kotak, Tata Capital.",
        "E-Commerce Brands: Nutraio, GudGoodlife, RK Organic, and others.",
        "IT Innovators: eBranding Studio, ARKinfoserv, Biztech.one.",
        "Spiritual Experts: Joshidada.com, Yoga Studio, Panchkarma Kutir, and more.",
      ],
    },
    {
      title: "Exclusive Growth Opportunities",
      description:
        "Participate in unique initiatives that drive innovation and expansion.",
      subItems: [
        "Strategic joint ventures.",
        "Pilot programs for new products or services.",
        "Special initiatives within our expanding ecosystem.",
      ],
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce costs through shared resources and collaborative efforts.",
      subItems: [
        "Marketing and branding efforts.",
        "Operational tools and technologies.",
        "Market research and analysis.",
      ],
    },
    {
      title: "Dedicated Partnership Support",
      description:
        "Receive personalized support to maximize the value of our collaboration.",
      subItems: [
        "A dedicated partnership manager for personalized support.",
        "Regular reviews to optimize our collaboration.",
        "Open communication channels for feedback and growth.",
      ],
    },
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
              <span className="text-sm font-medium text-blue-500 font-sans">Partnership Benefits</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Partnership Benefits with{" "}
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
              Collaborating with 99 Partners is a gateway to accessing a diverse ecosystem, leveraging expert resources, and driving mutual growth.
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

        {/* Benefits List */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl text-center mx-auto px-6">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={1}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Key Benefits</span>
            </div>
            <h2
              className={`text-3xl font-bold mb-12 text-center text-black font-sans transition-all duration-1000 ${
                visibleItems.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } animate-on-scroll`}
              data-index={2}
            >
              Key Benefits of Partnering with{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className={`bg-black/5 p-6 rounded-xl transition-all duration-1000 ${
                    visibleItems.includes(3 + index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } animate-on-scroll`}
                  data-index={3 + index}
                >
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-3 text-blue-500 font-sans">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4 font-sans">{benefit.description}</p>
                    <ul className="space-y-2 text-gray-600">
                      {benefit.subItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerBenefits;