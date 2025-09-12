import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users } from "lucide-react"
import { basicEvents } from "@/data/events"

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Competition <span className="text-foreground">Events</span>
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto text-balance">
            Experience the thrill of competition across multiple sports disciplines. From individual excellence to team
            spirit, Eclipse 2025 celebrates every form of athletic achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{event.category}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-foreground text-sm text-balance">{event.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock className="h-4 w-4" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Users className="h-4 w-4" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
