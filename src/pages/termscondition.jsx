import React, { useEffect, useState } from 'react';
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ArrowUp } from "lucide-react";

const TermsAndConditions = () => {
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
      { threshold: 0}
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
        id="terms-hero"
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
            <span className="text-sm text-black">Our Terms</span>
          </div>
          <h1 
            className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 delay-200 ${
              visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={0}
          >
            Terms and Conditions
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
      <section id="terms-content" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            className={`bg-gradient-card border border-border rounded-2xl p-8 shadow-soft transition-all duration-1000 ${
              visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } animate-on-scroll`}
            data-index={1}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to 99infosource.com ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of the Website, operated by 99infosource.com (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
            </p>

            {/* Section 1: Use of the Website */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Use of the Website</h2>
              <p className="text-muted-foreground mb-4">Your use of the Website is subject to the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Eligibility:</strong> You must be at least 13 years old to use the Website. By using the Website, you represent that you meet this requirement.</li>
                <li><strong>Permitted Use:</strong> You may use the Website for lawful purposes only. You agree not to use the Website to engage in any activity that violates applicable laws or these Terms.</li>
                <li><strong>Prohibited Conduct:</strong> You may not:
                  <ul className="list-circle pl-6 space-y-2">
                    <li>Post or transmit harmful, offensive, or illegal content.</li>
                    <li>Attempt to gain unauthorized access to the Website or its systems.</li>
                    <li>Interfere with the Website's functionality or security.</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Section 2: Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the Website, including text, images, logos, and other materials, is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.
              </p>
            </div>

            {/* Section 3: User Content */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you submit content to the Website (e.g., comments or feedback), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute that content in connection with the Website. You are responsible for ensuring your content complies with these Terms.
              </p>
            </div>

            {/* Section 4: Disclaimer of Warranties */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Website and its content are provided "as is" without warranties of any kind, express or implied, including warranties of accuracy, reliability, or fitness for a particular purpose. We do not guarantee that the Website will be uninterrupted, error-free, or free of viruses.
              </p>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website, including damages for loss of data, profits, or business interruption.
              </p>
            </div>

            {/* Section 6: Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these websites. Accessing these links is at your own risk.
              </p>
            </div>

            {/* Section 7: Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to the Website at our discretion, without notice, for any violation of these Terms or for any other reason.
              </p>
            </div>

            {/* Section 8: Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of California.
              </p>
            </div>

            {/* Section 9: Changes to These Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. We will notify you of significant changes by posting the updated Terms on the Website with a revised "Last Updated" date. Your continued use of the Website constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Section 10: Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms, please contact us at:
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

export default TermsAndConditions;