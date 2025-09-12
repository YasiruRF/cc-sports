import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export function EventsLinkSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Ready for Action?</h2>
          <p className="text-xl text-foreground/70 font-serif mb-8">
            Discover all the thrilling events waiting for you at Eclipse 2025
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-background border-2 border-accent/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">15+ Events</h3>
                <p className="text-foreground/70 font-serif">Track & Field, Swimming, Team Sports & More</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Multiple Venues</h3>
                <p className="text-foreground/70 font-serif">State-of-the-art facilities across campus</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">500+ Athletes</h3>
                <p className="text-foreground/70 font-serif">Representing all four houses</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/events">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-3"
                >
                  View All Events
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
