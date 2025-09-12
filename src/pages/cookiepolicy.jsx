import React, { useEffect, useState } from 'react';
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ArrowUp } from "lucide-react";

const CookiePolicy = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Observer for scroll animations
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
      { threshold: 0 }
    );

    const items = document.querySelectorAll('.animate-on-scroll');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Scroll event listener for showing/hiding scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="cookie-hero"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div 
            className={`inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-black rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={0}
          >
            <Shield className="h-4 w-4 text-black" />
            <span className="text-sm text-black">Our Cookie Policy</span>
          </div>
          <h1 
            className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 delay-200 ${
              visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={0}
          >
            Cookie Policy
          </h1>
          <p 
            className={`text-xl text-black max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={0}
          >
            Last Updated: September 12, 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section id="cookie-content" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            className={`bg-gradient-card border border-border rounded-2xl p-8 shadow-soft transition-all duration-1000 ${
              visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              This Cookie Policy explains how 99infosource.com ("we," "us," or "our") uses cookies and similar technologies on our website, 99infosource.com (the "Website"). By using the Website, you consent to the use of cookies as described in this policy.
            </p>

            {/* Section 1: What Are Cookies? */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help websites function efficiently, remember your preferences, and provide insights into how you use the site.
              </p>
            </div>

            {/* Section 2: Types of Cookies We Use */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              <p className="text-muted-foreground mb-4">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Necessary for the Website to function, such as enabling navigation and access to secure areas.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Website by collecting anonymized data about page views, time spent, and navigation patterns.</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced features, such as remembering your preferences or settings.</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of ad campaigns.</li>
              </ul>
            </div>

            {/* Section 3: How We Use Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ensure the Website operates correctly.</li>
                <li>Analyze Website performance and usage trends.</li>
                <li>Personalize your experience (e.g., remembering your language preferences).</li>
                <li>Deliver targeted advertisements (if applicable).</li>
              </ul>
            </div>

            {/* Section 4: Third-Party Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services (e.g., Google Analytics) that set their own cookies to provide analytics or advertising services. These third parties have their own privacy and cookie policies, which we encourage you to review.
              </p>
            </div>

            {/* Section 5: Managing Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">You can control cookies through your browser settings, such as:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Blocking or deleting cookies.</li>
                <li>Setting your browser to notify you before accepting cookies.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Note that disabling cookies may affect the Website's functionality. For more information, visit your browser's help section.
              </p>
            </div>

            {/* Section 6: Changes to This Cookie Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to This Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of significant changes by posting the updated policy on the Website with a revised "Last Updated" date.
              </p>
            </div>

            {/* Section 7: Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Cookie Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@99infosource.com"
                  className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:underline"
                >
                  support@99infosource.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;