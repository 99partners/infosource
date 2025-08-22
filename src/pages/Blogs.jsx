import { useEffect, useState } from 'react';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, ArrowRight, Clock, Tag, Users, Heart } from 'lucide-react';

// Sample blog post data (replace with API call or CMS data in a real application)
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the way we build software, from automation to intelligent code generation.",
    date: "August 15, 2025",
    tags: ["AI", "Software Development"],
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Scaling Your Business with Cloud Solutions",
    excerpt: "Learn how cloud technologies can help your business scale efficiently while maintaining security and performance.",
    date: "August 10, 2025",
    tags: ["Cloud", "DevOps"],
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Designing User-Centric UI/UX for Modern Apps",
    excerpt: "Discover the principles of creating intuitive and engaging user interfaces that drive user satisfaction.",
    date: "August 5, 2025",
    tags: ["UI/UX", "Design"],
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Role of DevOps in Agile Development",
    excerpt: "Understand how DevOps practices enhance agility, collaboration, and delivery in modern software projects.",
    date: "July 30, 2025",
    tags: ["DevOps", "Agile"],
    readTime: "8 min read",
  },
];

const Blogs = () => {
  const [visibleItems, setVisibleItems] = useState([]);

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
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.animate-on-scroll');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-sans">Infosource Blog</span>
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } text-black font-sans animate-on-scroll`}
              data-index={0}
            >
              Insights for <span className="text-blue-500 relative">Digital Innovation<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1s_forwards]"></div></span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } font-sans animate-on-scroll`}
              data-index={0}
            >
              Dive into the latest trends, technologies, and strategies in software development, AI, cloud solutions, and more. Stay informed with actionable insights from Infosource’s experts.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={0}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />Explore Blog Posts
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={1}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Latest Posts</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Our <span className="text-blue-500">Blog</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                Stay updated with the latest insights, trends, and tips from our team of technology experts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white ${
                    visibleItems.includes(2 + index) ? 'animate-fade-in-up' : ''
                  } animate-on-scroll`}
                  data-index={2 + index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-500 font-sans">{post.date} • {post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-black font-sans">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed font-sans mb-4">{post.excerpt}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="inline-flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-sm text-blue-500 font-sans"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="group text-blue-500 hover:text-blue-600 font-sans">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-400">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16 min-h-0">
            <div
              className={`transition-all duration-1000 ${
                visibleItems.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={10}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500 font-sans">Join Our Community</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sans">
                Stay <span className="text-blue-500">Connected</span>
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
                Subscribe to our blog for the latest insights, trends, and expert advice on technology and innovation.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
                visibleItems.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={10}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-sans">
                <span className="relative z-10 flex items-center gap-3">
                  <Users className="w-5 h-5" />Subscribe Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group bg-black/10 text-blue-500 hover:text-blue-600 font-sans">
                Contact Us
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                visibleItems.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-on-scroll`}
              data-index={10}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Weekly Insights</h3>
                  <p className="text-sm text-black/80 font-sans">Get the latest articles delivered to your inbox.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Join the Community</h3>
                  <p className="text-sm text-black/80 font-sans">Connect with innovators and tech enthusiasts.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black font-sans">Stay Updated</h3>
                  <p className="text-sm text-black/80 font-sans">Never miss out on the latest tech trends.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;