import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy } from "lucide-react"
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/university-sports-stadium-with-athletes-running-tr.jpg" alt="Eclipse 2025 Sports Meet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 flex justify-center">
            <Image
              src="/eclipse-logo.png"
              alt="Eclipse logo"
              width={380}
              height={380}
            ></Image>
          </h1>
          <div className="text-xl md:text-2xl font-light mb-2">2025</div>
          <p className="text-lg md:text-xl text-accent font-medium mb-6 text-balance">
            Where Champions Rise & Legends Are Born
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            <span>September 20, 2025 • 08:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span>Curtin Colombo Campus</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            <span>4 Houses • 15+ Events</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 font-serif"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-transparent font-serif"
          >
            View Events
          </Button>
        </div>

        <div className="mt-12 text-sm text-white/90">
          <p className="text-balance">
            Proudly hosted by <span className="text-accent font-medium">Curtin Colombo</span> • Top 1% University
            Worldwide
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-10"></div>
    </section>
  )
}
