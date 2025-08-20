import Navigation from '@/components/Header';
import Footer from '@/components/Footer';

const DataAnalytics = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-16">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Analytics</h1>
          <p className="text-muted-foreground mb-8">Edit this page at src/pages/services/data-engineering/data-analytics.jsx</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default DataAnalytics;
