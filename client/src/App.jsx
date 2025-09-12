import SaaSProduct from "./pages/industry/saas-product";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
// static service pages
import AIConsulting from "./pages/services/ai/ai-consulting";
import RAG from "./pages/services/ai/rag-data-to-llms";
import CustomLLMs from "./pages/services/ai/custom-llms";
import AIInMobileApps from "./pages/services/ai/ai-in-mobile-apps";
import AIInSoftware from "./pages/services/ai/ai-in-software";
import DataAnalytics from "./pages/services/data-engineering/data-analytics";
import ETLAndWarehouse from "./pages/services/data-engineering/etl-and-data-warehouse";
import DataAnnotationServices from "./pages/services/data-engineering/data-annotation-services";
import AIAgent from "./pages/services/generative-ai/ai-agent";
import LLMChatbots from "./pages/services/generative-ai/llm-powered-chatbots";
import LLMTestingFinetuning from "./pages/services/generative-ai/llm-testing-and-finetuning";
import GPTIntegration from "./pages/services/generative-ai/gpt-integration";
import AIOps from "./pages/services/devops/aiops";
import DevOpsConsulting from "./pages/services/devops/devops-consulting";
import DevOpsAutomation from "./pages/services/devops/devops-automation";
import SRE from "./pages/services/devops/site-reliability-engineering";
import LLMObservability from "./pages/services/devops/llm-observability";
import MobileAppDevelopment from "./pages/services/development-services/mobile-app-development";
import SoftwareDevelopment from "./pages/services/development-services/software-development";
import StaffAugmentation from "./pages/services/development-services/staff-augmentation";
import ProductEngineering from "./pages/services/development-services/product-engineering";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Industry from "./pages/Industry";
import Blogs from "./pages/Blogs";
import ResourcesCaseStudies from "./pages/ResourcesCaseStudies";
import ResourcesTestimonial from "./pages/ResourcesTestimonial";
import JoinUs from "./pages/JoinUs";
import ServicePage from "./pages/ServicePage";

//core services pages
import AI from "./pages/services/core_services/ai";
import DataEng from "./pages/services/core_services/data_eng";
import GenAI from "./pages/services/core_services/gen_ai";
import DevEng from "./pages/services/core_services/dev_eng";
import DevOp from "./pages/services/core_services/devop";

//partners pages
import WhyPartner from "./pages/partners/whypartner";
import PartnerBenefits from "./pages/partners/partnerBenefits";
import PartnerOpportunity from "./pages/partners/partnerOpportunity";

//industry pages
import Healthcare from "./pages/industry/healthcare";
import Fintech from "./pages/industry/fintech";
import Logistics from "./pages/industry/logistics";
import Retail from "./pages/industry/retail";
import Ecommerce from "./pages/industry/ecommerce";
import Education from "./pages/industry/education";
import BFSI from "./pages/industry/bfsi-solutions";
import SportsGaming from "./pages/industry/sports-gaming";
import EnergyUtility from "./pages/industry/energy-utility";
import RealEstate from "./pages/industry/real-estate";
import MediaEntertainment from "./pages/industry/media-entertainment";
import saasProduct from "./pages/industry/saas-product";

import PrivacyPolicy from "./pages/privacypolicy";
import TermsAndConditions from "./pages/termscondition";
import CookiePolicy from "./pages/cookiepolicy";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          {/* services overview */}
          <Route path="/services" element={<Services />} />
          {/* AI */}
          <Route path="/services/ai/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/ai/rag-data-to-llms" element={<RAG />} />
          <Route path="/services/ai/custom-llms" element={<CustomLLMs />} />
          <Route path="/services/ai/ai-in-mobile-apps" element={<AIInMobileApps />} />
          <Route path="/services/ai/ai-in-software" element={<AIInSoftware />} />
          {/* Data Engineering */}
          <Route path="/services/data-engineering/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/data-engineering/etl-and-data-warehouse" element={<ETLAndWarehouse />} />
          <Route path="/services/data-engineering/data-annotation-services" element={<DataAnnotationServices />} />
          {/* Generative AI */}
          <Route path="/services/generative-ai/ai-agent" element={<AIAgent />} />
          <Route path="/services/generative-ai/llm-powered-chatbots" element={<LLMChatbots />} />
          <Route path="/services/generative-ai/llm-testing-and-finetuning" element={<LLMTestingFinetuning />} />
          <Route path="/services/generative-ai/gpt-integration" element={<GPTIntegration />} />
          {/* DevOps */}
          <Route path="/services/devops/aiops" element={<AIOps />} />
          <Route path="/services/devops/devops-consulting" element={<DevOpsConsulting />} />
          <Route path="/services/devops/devops-automation" element={<DevOpsAutomation />} />
          <Route path="/services/devops/site-reliability-engineering" element={<SRE />} />
          <Route path="/services/devops/llm-observability" element={<LLMObservability />} />
          {/* Development Services */}
          <Route path="/services/development-services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/development-services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/development-services/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/services/development-services/product-engineering" element={<ProductEngineering />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resources/case-studies" element={<ResourcesCaseStudies />} />
          <Route path="/resources/testimonial" element={<ResourcesTestimonial />} />
          <Route path="/resources/about-us" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />

          {/* core services pages */}
          {/* Core Services */}
<Route path="/services/ai" element={<AI />} />
<Route path="/services/data-engineering" element={<DataEng />} />
<Route path="/services/generative-ai" element={<GenAI />} />
<Route path="/services/development-services" element={<DevEng />} />
<Route path="/services/devops" element={<DevOp />} />

          {/* partners pages */}
          <Route path="/partner/why-partner-with-us" element={<WhyPartner />} />
          <Route path="/partner/partner-benefits" element={<PartnerBenefits />} />
          <Route path="/partner/partner-opportunity" element={<PartnerOpportunity />} />

          {/* industry pages */}  
          <Route path="/industry/healthcare" element={<Healthcare />} />
          <Route path="/industry/fintech" element={<Fintech />} />
          <Route path="/industry/logistics" element={<Logistics />} />
          <Route path="/industry/retail" element={<Retail />} />
          <Route path="/industry/ecommerce" element={<Ecommerce />} />
          <Route path="/industry/education" element={<Education />} />          
          <Route path="/industry/bfsi-solution" element={<BFSI />} />
          <Route path="/industry/sports-gaming" element={<SportsGaming />} />
          
          <Route path="/industry/energy-utility" element={<EnergyUtility />} />
          <Route path="/industry/real-estate" element={<RealEstate />} />
          <Route path="/industry/media-entertainment" element={<MediaEntertainment />} />
          <Route path="/industry/saas-product" element={<SaaSProduct />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


