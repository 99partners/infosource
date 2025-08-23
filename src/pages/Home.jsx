import Navigation from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  Users, 
  Award, 
  Truck, 
  Monitor, 
  Landmark, 
  Gamepad2, 
  Home, 
  Film, 
  Target, 
  Shield, 
  CheckCircle, 
  Clock, 
  Star 
} from "lucide-react";
import heroAI from "@/assets/hero-ai.jpg";
import teamConsulting from "@/assets/team-consulting.jpg";
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-400">
        <img
          src={heroAI}
          alt="AI Technology Visualization"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full animate-float delay-300 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent/30 rounded-full animate-float delay-700 blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-primary-foreground">
              Cutting-Edge AI Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up delay-150">
            Transform Your Organization & Data for the AI Era
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
            Cutting-Edge AI Solutions for Future-Ready Enterprises. Infosource
            delivers comprehensive AI services powered by the latest technological
            advancements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <Button variant="accent" size="lg" className="border-blue-500/30 text-blue-500 bg-blue-100" asChild>
              <a href="/contact">
                Engage with an AI Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
           <Button variant="accent" size="lg" className="border-blue-500/30 text-blue-500 bg-blue-100" asChild>
            <a href="/services">Our Services</a>
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🧠",
      title: "Artificial Intelligence",
      description: "Transform your organization's workflows and boost efficiency with our full range of AI services.",
      features: ["AI Consulting", "RAG (Data to LLMs)", "Custom LLMs for Enterprises", "AI in Mobile Apps", "AI in Software"],
      color: "text-blue-500",
      base: "/services/ai"
    },
    {
      icon: "🔍",
      title: "Data Engineering",
      description: "Turn raw data into actionable insights with our expert team of data consultants and engineers.",
      features: ["ETL and Data Warehouse", "Data Annotation Services", "Predictive Analytics", "Data Visualization"],
      color: "text-green-500",
      base: "/services/data-engineering"
    },
    {
      icon: "🤖",
      title: "Generative AI",
      description: "Embrace automation and innovation with advanced generative AI solutions customized to your business needs.",
      features: ["AI Agents", "LLM Powered Chatbots", "LLM Testing and Finetuning", "GPT Integration"],
      color: "text-purple-500",
      base: "/services/generative-ai"
    },
    {
      icon: "📊",
      title: "DevOps & AIOps",
      description: "Accelerate your Software Development Life Cycle (SDLC) with a progressive approach and seamless collaboration.",
      features: ["AIOps", "DevOps Consulting", "DevOps Automation", "Site Reliability Engineering", "LLM Observability"],
      color: "text-orange-500",
      base: "/services/devops"
    },
    {
      icon: "📲",
      title: "Development Services",
      description: "Drive innovation and streamline business processes with premium software development solutions.",
      features: ["Mobile App Development", "Software Development", "Staff Augmentation", "Product Engineering"],
      color: "text-indigo-500",
      base: "/services/development-services"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionizing Operations with{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Advanced AI Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate the technology-driven landscape and achieve long-term growth with our tailored AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 justify-items-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:scale-105 border-border bg-gradient-card w-full max-w-xs flex flex-col"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4">{service.icon}</span>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full group hover:text-blue-600" asChild>
                    <a href={service.base} className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-blue-800" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold text-foreground">
              Ready to Transform Your Business?
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experts are ready to analyze your current systems and create a customized AI strategy that drives growth and innovation.
          </p>
          <Button
            variant="hero"
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hover:opacity-90 transition-opacity"
          >
            <a href="/contact">Consult Our AI Specialists</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$15.7",
      label: "Projected contribution of AI to the global economy by 2030 (in trillion USD)",
      source: "PWC"
    },
    {
      icon: Users,
      value: "79%",
      label: "of Strategists believe AI and analytics are critical for success in the next two years",
      source: "Gartner"
    },
    {
      icon: Globe,
      value: "70%",
      label: "Automation in web and mobile app design with generative AI by 2027",
      source: "Gartner"
    },
    {
      icon: Award,
      value: "25%",
      label: "Estimated cost reduction in operations through AI-based automation",
      source: "McKinsey"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Market Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Evolving AI and Data Strategies
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Are You Keeping Up?
          </p>
          <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto">
            Our experts share insights on AI's transformative impact across global industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg shadow-gray-500/30 hover:bg-white/15 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-primary-foreground/80 text-sm mb-3 leading-relaxed">
                    {stat.label}
                  </p>
                  <div className="text-accent text-xs font-semibold">
                    – {stat.source}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg shadow-gray-500/30">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">Additional Market Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">38%</div>
              <p className="text-primary-foreground/80 text-sm">
                of Operations expected to see doubled efficiency and profitability by 2035 – Forbes
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">20%</div>
              <p className="text-primary-foreground/80 text-sm">
                Faster Product Delivery with our AI-optimized development processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      description: "AI-powered diagnostics, patient care optimization, and medical data analysis",
      color: "text-red-500"
    },
    {
      icon: "💰",
      title: "Fintech",
      description: "Fraud detection, algorithmic trading, risk assessment, and personalized financial services",
      color: "text-green-500"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Supply chain optimization, route planning, and predictive maintenance",
      color: "text-blue-500"
    },
    {
      icon: "🛍️",
      title: "Retail",
      description: "Customer behavior analysis, inventory management, and personalized shopping experiences",
      color: "text-purple-500"
    },
    {
      icon: Monitor,
      title: "Ecommerce",
      description: "Recommendation engines, dynamic pricing, and automated customer support",
      color: "text-orange-500"
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Personalized learning, automated grading, and student performance analytics",
      color: "text-indigo-500"
    },
    {
      icon: Landmark,
      title: "BFSI Solution",
      description: "Banking automation, insurance claims processing, and regulatory compliance",
      color: "text-gray-500"
    },
    {
      icon: Gamepad2,
      title: "Sports & Gaming",
      description: "Player analytics, game AI, and performance optimization",
      color: "text-pink-500"
    },
    {
      icon: Zap,
      title: "Energy & Utility",
      description: "Smart grid optimization, energy forecasting, and predictive maintenance",
      color: "text-yellow-500"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property valuation, market analysis, and automated property management",
      color: "text-teal-500"
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Content recommendation, automated editing, and audience analytics",
      color: "text-rose-500"
    },
    {
      icon: "🤖",
      title: "SaaS Solutions",
      description: "AI-enhanced SaaS products, user behavior analysis, and workflow automation",
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tailored AI Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of industry specialists crafts innovative solutions that align with your unique requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    {typeof IconComponent === "string" ? (
                      <span className="text-2xl">{IconComponent}</span>
                    ) : (
                      <IconComponent className={`h-6 w-6 ${industry.color}`} />
                    )}
                    <CardTitle className="text-lg font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                      {industry.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a free consultation with our industry experts to discover how AI can revolutionize your specific sector.
          </p>
          <Button
            variant="hero"
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hover:opacity-90"
          >
            <a href="/contact">
              Book a Free AI Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhyInfoSource = () => {
  const features = [
    {
      icon: Shield,
      title: "Vendor-Neutral Approach",
      description: "We create scalable enterprise AI solutions aligned with your business model, driven by your needs rather than technology preferences."
    },
    {
      icon: Globe,
      title: "Globally Compliant & Sustainable AI",
      description: "Our team stays updated with evolving regulations to ensure our custom AI solutions meet all relevant compliance and regulatory standards."
    },
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Over a decade and a half of proven expertise in delivering cutting-edge technology solutions to enterprises worldwide."
    },
    {
      icon: Users,
      title: "400+ AI Specialists",
      description: "A dedicated team of AI experts, data scientists, and engineers working together to bring your vision to life."
    }
  ];

  const achievements = [
    { number: "1000+", label: "Satisfied Clients", icon: Users },
    { number: "1500+", label: "Successful Projects", icon: CheckCircle },
    { number: "95%", label: "Client Retention", icon: Star },
    { number: "20%", label: "Faster Delivery", icon: Clock }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Why InfoSource?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Globally Trusted{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              AI Development Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborate with InfoSource's skilled professionals to turn your ideas into impactful AI solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img
                src={teamConsulting}
                alt="InfoSource AI consulting team"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-glow animate-float">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs">Years</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-4 shadow-glow animate-float delay-300">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-xs">Retention</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Embracing the AI-Driven Future
            </h3>
            <div className="bg-gradient-card border border-border rounded-xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">A Message from Our Founder</h4>
              <p className="text-muted-foreground leading-relaxed">
                "I am excited to affirm our steadfast dedication to revolutionizing your business and products with innovative AI technology. In today's fast-evolving and competitive landscape, leveraging AI to optimize and enhance your organization is not just an opportunity—it's a necessity."
              </p>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At InfoSource, we excel in AI Strategy, AIOps, custom LLM development, seamless AI integration into existing systems, and business process automation. Our mission is to ensure your organization, products, and data are AI-ready, fostering innovation and operational efficiency.
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hover:opacity-90"
            >
              <a href="/contact">
                Create Your AI Roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-white/80 text-sm">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Industries />
      <WhyInfoSource />
      <Footer />
    </div>
  );
};

export default MainPage;