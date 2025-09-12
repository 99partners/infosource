import React, { useEffect, useState } from 'react';
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ArrowUp } from "lucide-react";

const PrivacyPolicy = () => {
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
        id="privacy-hero"
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
            <span className="text-sm text-black">Your Privacy Matters</span>
          </div>
          <h1 
            className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 delay-200 ${
              visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={0}
          >
            Privacy Policy
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
      <section id="privacy-content" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            className={`bg-gradient-card border border-border rounded-2xl p-8 shadow-soft transition-all duration-1000 ${
              visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              99infosource.com ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, 99infosource.com (the "Website"). By using the Website, you agree to the terms of this Privacy Policy.
            </p>

            {/* Section 1: Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Information that identifies you, such as your name, email address, or other details you provide when contacting us or subscribing to newsletters.</li>
                <li><strong>Non-Personal Information:</strong> Information that does not directly identify you, such as browser type, IP address, device information, and browsing behavior on the Website.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to collect data about your interactions with the Website. See our Cookie Policy for more details.</li>
              </ul>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We may use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and improve the Website's content and functionality.</li>
                <li>To respond to your inquiries or requests.</li>
                <li>To send you newsletters, updates, or promotional materials (if you opt in).</li>
                <li>To analyze Website usage and improve user experience.</li>
                <li>To comply with legal obligations or protect our legal rights.</li>
              </ul>
            </div>

            {/* Section 3: How We Share Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">We do not sell or rent your personal information to third parties. We may share your information in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> With trusted third-party service providers (e.g., hosting providers, analytics tools) who assist us in operating the Website, provided they agree to keep your information confidential.</li>
                <li><strong>Legal Requirements:</strong> If required by law, such as to comply with a subpoena or similar legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the transaction.</li>
              </ul>
            </div>

            {/* Section 4: Your Choices and Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Your Choices and Rights</h2>
              <p className="text-muted-foreground mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Access and Update:</strong> You may request access to or updates of the personal information we hold about you.</li>
                <li><strong>Opt-Out:</strong> You may opt out of receiving promotional emails by following the unsubscribe instructions in those emails.</li>
                <li><strong>Cookies:</strong> You can manage cookie preferences through your browser settings. See our Cookie Policy for details.</li>
              </ul>
            </div>

            {/* Section 5: Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6: Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Section 7: Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will take steps to delete it.
              </p>
            </div>

            {/* Section 8: International Users */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Users</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you access the Website from outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ. By using the Website, you consent to this transfer.
              </p>
            </div>

            {/* Section 9: Changes to This Privacy Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on the Website with a revised "Last Updated" date.
              </p>
            </div>

            {/* Section 10: Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;