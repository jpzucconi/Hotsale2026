import { Header } from "@/components/hot-sale/header"
import { HeroSection } from "@/components/hot-sale/hero-section"
import { StatsSection } from "@/components/hot-sale/stats-section"
import { MindsetSection } from "@/components/hot-sale/mindset-section"
import { TrendsSection } from "@/components/hot-sale/trends-section"
import { DecisionMatrix } from "@/components/hot-sale/decision-matrix"
import { OfferAnatomy } from "@/components/hot-sale/offer-anatomy"
import { PhasesSection } from "@/components/hot-sale/phases-section"
import { CartRescueSection } from "@/components/hot-sale/cart-rescue-section"
import { EcosystemSection } from "@/components/hot-sale/ecosystem-section"
import { MobileMockupsSection } from "@/components/hot-sale/mobile-mockups-section"
import { ErrorsSection } from "@/components/hot-sale/errors-section"
import { MetricsSection } from "@/components/hot-sale/metrics-section"
import { ChecklistSection } from "@/components/hot-sale/checklist-section"
import { CTASection } from "@/components/hot-sale/cta-section"
import { Footer } from "@/components/hot-sale/footer"

export default function HotSalePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <MobileMockupsSection />
      <MindsetSection />
      <TrendsSection />
      <DecisionMatrix />
      <OfferAnatomy />
      <PhasesSection />
      <CartRescueSection />
      <EcosystemSection />
      <ErrorsSection />
      <MetricsSection />
      <ChecklistSection />
      <CTASection />
      <Footer />
    </main>
  )
}
