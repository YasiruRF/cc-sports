import { Header } from "@/components/header"
import { AboutEclipseSection } from "@/components/about-eclipse-section"
import { CCSCSection } from "@/components/ccsc-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pt-20">
          <AboutEclipseSection />
          <CCSCSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
