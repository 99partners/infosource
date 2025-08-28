import { Code, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/Infosource.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <img src={logo} alt="Infosource Logo" className="w-20 h-20 rounded-lg object-contain" />
              <span className="text-2xl font-bold gradient-text">Infosource</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">Your strategic partner in digital transformation. We specialize in AI, Data Engineering, and Custom Software Development to help businesses thrive in the digital world.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary"><Twitter className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="hover:text-primary"><Linkedin className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="hover:text-primary"><Github className="w-5 h-5" /></Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">Blogs</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact us</a></li>
              <li><a href="/join-us" className="text-muted-foreground hover:text-primary transition-colors">Join us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/ai" className="text-muted-foreground hover:text-primary transition-colors">AI & Machine Learning</a></li>
              <li><a href="/services/data-engineering" className="text-muted-foreground hover:text-primary transition-colors">Data Engineering</a></li>
              <li><a href="/services/generative-ai" className="text-muted-foreground hover:text-primary transition-colors">Generative AI</a></li>
              <li><a href="/services/devops" className="text-muted-foreground hover:text-primary transition-colors">DevOps</a></li>
              <li><a href="/services/development-services" className="text-muted-foreground hover:text-primary transition-colors">Development Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground"><Mail className="w-4 h-4" /><span className="text-sm">hello@infosource.com</span></li>
              <li className="flex items-center gap-3 text-muted-foreground"><Phone className="w-4 h-4" /><span className="text-sm">+1 (555) 123-4567</span></li>
              <li className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-4 h-4" /><span className="text-sm">Global Remote Team</span></li>
            </ul>
          </div>

          
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Infosource. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


