import { useParams } from 'react-router-dom';
import Navigation from '@/components/Header';
import Footer from '@/components/Footer';

const titleMap = {
  ai: {
    'ai-consulting': 'AI Consulting',
    'rag-data-to-llms': 'RAG (Data to LLMs)',
    'custom-llms': 'Custom LLMs for Enterprises',
    'ai-in-mobile-apps': 'AI in Mobile Apps',
    'ai-in-software': 'AI in Software',
  },
  'data-engineering': {
    'data-analytics': 'Data Analytics',
    'etl-and-data-warehouse': 'ETL and Data Warehouse',
    'data-annotation-services': 'Data Annotation Services',
  },
  'generative-ai': {
    'ai-agent': 'AI Agent',
    'llm-powered-chatbots': 'LLM Powered Chatbots',
    'llm-testing-and-finetuning': 'LLM Testing and Finetuning',
    'gpt-integration': 'GPT Integration',
  },
  devops: {
    aiops: 'AIOps',
    'devops-consulting': 'DevOps Consulting',
    'devops-automation': 'DevOps Automation',
    'site-reliability-engineering': 'Site Reliability Engineering',
    'llm-observability': 'LLM Observability',
  },
  'development-services': {
    'mobile-app-development': 'Mobile App Development',
    'software-development': 'Software Development',
    'staff-augmentation': 'Staff Augmentation',
    'product-engineering': 'Product Engineering',
  }
};

const ServicePage = () => {
  const { category, slug } = useParams();
  const resolvedTitle = titleMap[category]?.[slug] || 'Service';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{resolvedTitle}</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">Detailed content for {resolvedTitle} will be added here.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
