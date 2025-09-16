import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { ScoreboardSection } from "@/components/scoreboard-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { EventsLinkSection } from "@/components/events-link-section"
import { Footer } from "@/components/footer"

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CountdownSection />
        {await ScoreboardSection()}
        <SponsorsSection />
        <EventsLinkSection />
      </main>
      <Footer />
    </div>
  )
}
