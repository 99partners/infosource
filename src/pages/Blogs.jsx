import Navigation from '@/components/Header';
import Footer from '@/components/Footer';

const Blogs = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-16">
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
        <p className="text-muted-foreground">Content coming soon.</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default Blogs;
