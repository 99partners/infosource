import Navigation from '@/components/Header';
import Footer from '@/components/Footer';

const JoinUs = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-16">
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Us</h1>
        <p className="text-muted-foreground">We are always looking for talented people. Content coming soon.</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default JoinUs;
