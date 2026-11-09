import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofBar } from './components/SocialProofBar';
import { ServicesSection } from './components/ServicesSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { BenefitsSection } from './components/BenefitsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export function App() {
  const [preselectedService, setPreselectedService] = useState<string>(
    'Renovations & Building'
  );
  const [preselectedNote, setPreselectedNote] = useState<string>('');

  const scrollToQuote = (serviceName?: string, note?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    if (note !== undefined) setPreselectedNote(note);

    const quoteEl = document.getElementById('contact-quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#f6f1eb] text-[#333333] flex flex-col selection:bg-[#403a34] selection:text-[#f6f1eb]">
        <Navbar onQuoteClick={() => scrollToQuote()} />

        <main className="flex-1">
          <HeroSection onRequestQuote={() => scrollToQuote()} />

          <SocialProofBar />

          <ServicesSection
            onSelectServiceForQuote={(serviceTitle) =>
              scrollToQuote(
                serviceTitle,
                `I would like a quote for ${serviceTitle}.`
              )
            }
          />

          <ShowcaseSection
            onRequestSimilarProject={(category) =>
              scrollToQuote(
                category,
                `Enquiry based on your completed ${category} project.`
              )
            }
          />

          <BenefitsSection />

          <PricingSection
            onSelectTierForQuote={(service, note) => scrollToQuote(service, note)}
          />

          <TestimonialsSection />

          <FAQSection />

          <QuoteSection
            preselectedService={preselectedService}
            preselectedNote={preselectedNote}
          />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
