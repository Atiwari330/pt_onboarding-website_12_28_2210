import { Navbar } from "@/components/navbar";
import { ProcessIllustration } from "@/components/hero-illustration";
import { FeaturedLogos } from "@/components/featured-logos";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { BenefitsSection } from "@/components/benefits/benefits-section";
import { FeatureSection } from "@/components/features/feature-section";
import { SocialProofSection } from "@/components/social-proof/social-proof-section";
import { FAQSection } from "@/components/faq/faq-section";
import { FinalCTA } from "@/components/cta/final-cta";
import { Footer } from "@/components/footer/footer";
import { DemoButton } from "@/components/demo-request/demo-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="relative pt-16">
        <GradientMesh />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  Streamline Patient Onboarding for Behavioral Health
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Customize your facility's intake process, match patients with ideal providers, and eliminate administrative bottlenecks—all in one platform
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <DemoButton size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Schedule a Demo
                  </DemoButton>
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </div>
                
                <p className="mt-6 text-sm text-gray-500">
                  Trusted by leading behavioral health facilities to optimize patient intake and provider matching
                </p>
              </div>
              
              {/* Illustration */}
              <div className="flex-1 w-full max-w-xl">
                <ProcessIllustration />
              </div>
            </div>
            
            <FeaturedLogos />
          </div>
        </div>
        
        <ScrollIndicator />
      </div>

      <BenefitsSection />
      <FeatureSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}