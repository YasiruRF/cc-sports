import { Header } from "@/components/header"
import { EventsDetailSection } from "@/components/events-detail-section"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pt-20">
          <EventsDetailSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
