import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '@/assets/Infosource.png';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesMenu = [
    {
      title: 'Artificial Intelligence',
      base: '/services/ai',
      items: [
        { label: 'AI Consulting', slug: 'ai-consulting' },
        { label: 'RAG (Data to LLMs)', slug: 'rag-data-to-llms' },
        { label: 'Custom LLMs for Enterprises', slug: 'custom-llms' },
        { label: 'AI in Mobile Apps', slug: 'ai-in-mobile-apps' },
        { label: 'AI in Software', slug: 'ai-in-software' },
      ],
    },
    {
      title: 'Data Engineering',
      base: '/services/data-engineering',
      items: [
        { label: 'Data Analytics', slug: 'data-analytics' },
        { label: 'ETL and Data Warehouse', slug: 'etl-and-data-warehouse' },
        { label: 'Data Annotation Services', slug: 'data-annotation-services' },
      ],
    },
    {
      title: 'Generative AI',
      base: '/services/generative-ai',
      items: [
        { label: 'AI Agent', slug: 'ai-agent' },
        { label: 'LLM Powered Chatbots', slug: 'llm-powered-chatbots' },
        { label: 'LLM Testing and Finetuning', slug: 'llm-testing-and-finetuning' },
        { label: 'GPT Integration', slug: 'gpt-integration' },
      ],
    },
    {
      title: 'DevOps',
      base: '/services/devops',
      items: [
        { label: 'AIOps', slug: 'aiops' },
        { label: 'DevOps Consulting', slug: 'devops-consulting' },
        { label: 'DevOps Automation', slug: 'devops-automation' },
        { label: 'Site Reliability Engineering', slug: 'site-reliability-engineering' },
        { label: 'LLM Observability', slug: 'llm-observability' },
      ],
    },
    {
      title: 'Development Services',
      base: '/services/development-services',
      items: [
        { label: 'Mobile App Development', slug: 'mobile-app-development' },
        { label: 'Software Development', slug: 'software-development' },
        { label: 'Staff Augmentation', slug: 'staff-augmentation' },
        { label: 'Product Engineering', slug: 'product-engineering' },
      ],
    },
  ];

  const industryMenu = [
    { label: 'Healthcare', slug: 'healthcare' },
    { label: 'Fintech', slug: 'fintech' },
    { label: 'Logistics', slug: 'logistics' },
    { label: 'Retail', slug: 'retail' },
    { label: 'Ecommerce', slug: 'ecommerce' },
    { label: 'Education', slug: 'education' },
    { label: 'BFSI Solution', slug: 'bfsi-solution' },
    { label: 'Sports & Gaming', slug: 'sports-gaming' },
    { label: 'Energy & Utility', slug: 'energy-utility' },
    { label: 'Real Estate', slug: 'real-estate' },
    { label: 'Media & Entertainment', slug: 'media-entertainment' },
    { label: 'SaaS Product', slug: 'saas-product' },
  ];

  const partnerMenu = [
    { label: 'Why Partner With Us', slug: 'why-partner-with-us' },
    { label: 'Partner Benefits', slug: 'partner-benefits' },
    { label: 'Partner Opportunity', slug: 'partner-opportunity' },
  ];

  const resourcesMenu = [
    { label: 'Case Studies', slug: 'case-studies' },
    { label: 'Testimonial', slug: 'testimonial' },
    { label: 'About Us', slug: 'about-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-1 hover:scale-105 transition-transform duration-200"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                const hero = document.querySelector('section');
                if (hero) hero.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <img src={logo} alt="Infosource Logo" className="w-20 h-20 rounded-lg object-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-400 text-transparent bg-clip-text">Infosource</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 relative">
            {/* Home */}
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Services Mega Menu */}
            <div className="relative group py-2">
              <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative">
                Services
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </div>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 fixed left-1/2 -translate-x-1/2 top-16 mt-3 z-50">
                <div className="bg-white p-6 rounded-2xl shadow-xl w-[920px] border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {servicesMenu.map((group) => (
                      <div key={group.title}>
                        <Link
                          to={group.base}
                          className="font-semibold mb-2 text-gray-900 hover:text-blue-500 transition-colors block"
                        >
                          {group.title}
                        </Link>
                        <ul className="space-y-1">
                          {group.items.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to={`${group.base}/${s.slug}`}
                                className="text-sm text-gray-600 hover:text-gray-900 block py-1"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Submenu */}
            <div className="relative group py-2">
              <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative">
                Industry
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </div>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 z-50">
                <div className="bg-white p-6 rounded-2xl shadow-xl w-[320px] border border-gray-200">
                  <ul className="grid gap-2">
                    {industryMenu.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/industry/${s.slug}`}
                          className="text-sm text-gray-600 hover:text-gray-900 block py-1"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Partner Submenu */}
            <div className="relative group py-2">
              <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative">
                Partner
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </div>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 z-50">
                <div className="bg-white p-6 rounded-2xl shadow-xl w-[320px] border border-gray-200">
                  <ul className="grid gap-2">
                    {partnerMenu.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/partner/${s.slug}`}
                          className="text-sm text-gray-600 hover:text-gray-900 block py-1"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Blogs */}
            <Link
              to="/blogs"
              className="text-gray-600 hover:text-gray-900 transition-colors relative group py-2"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Resources Submenu */}
            <div className="relative group py-2">
              <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative">
                Resources
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </div>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 z-50">
                <div className="bg-white p-6 rounded-2xl shadow-xl w-[320px] border border-gray-200">
                  <ul className="grid gap-2">
                    {resourcesMenu.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/resources/${s.slug}`}
                          className="text-sm text-gray-600 hover:text-gray-900 block py-1"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors relative group py-2"
            >
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Desktop Join Us Button */}
          <div className="hidden md:block">
            <Link to="/join-us">
              <Button variant="hero" size="sm" className="group bg-gradient-to-r from-blue-800 to-blue-500 text-white">
                Join us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 animate-fade-in-up">
            <div className="p-6 space-y-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-900">
                Home
              </Link>
              <details>
                <summary className="py-2 cursor-pointer text-gray-900 flex items-center gap-2">
                  Services <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 py-2 space-y-3">
                  {servicesMenu.map((group) => (
                    <div key={group.title}>
                      <Link
                        to={group.base}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-semibold mb-1 text-gray-900 hover:text-blue-500 transition-colors block"
                      >
                        {group.title}
                      </Link>
                      <ul className="space-y-1">
                        {group.items.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`${group.base}/${s.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-600 hover:text-gray-900 py-1 text-sm"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
              <details>
                <summary className="py-2 cursor-pointer text-gray-900 flex items-center gap-2">
                  Industry <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 py-2 space-y-1">
                  {industryMenu.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/industry/${s.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-gray-900 py-1 text-sm"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </details>
              <details>
                <summary className="py-2 cursor-pointer text-gray-900 flex items-center gap-2">
                  Partner <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 py-2 space-y-1">
                  {partnerMenu.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/partner/${s.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-gray-900 py-1 text-sm"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-900">
                Blogs
              </Link>
              <details>
                <summary className="py-2 cursor-pointer text-gray-900 flex items-center gap-2">
                  Resources <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 py-2 space-y-1">
                  {resourcesMenu.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/resources/${s.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-gray-900 py-1 text-sm"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-900">
                Contact us
              </Link>
              <Link to="/join-us" className="block mt-2">
                <Button variant="hero" className="w-full bg-gradient-to-r from-blue-800 to-blue-500 text-white">
                  Join us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
