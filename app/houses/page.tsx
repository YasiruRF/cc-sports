import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Users } from "lucide-react"
import Link from "next/link"

const houses = [
  {
    name: "Red House",
    slug: "red",
    motto: "Passion & Power",
    description: "Embodying determination and fierce competition, Red House athletes never back down from a challenge.",
    color: "text-house-red",
    bgColor: "bg-house-red",
    borderColor: "border-house-red",
    members: "125+",
    keyEvents: ["100m Sprint", "200m Sprint", "Long Jump", "4x100m Relay"],
  },
  {
    name: "Blue House",
    slug: "blue",
    motto: "Strength & Unity",
    description: "Representing solidarity and collective strength, Blue House believes victory comes through teamwork.",
    color: "text-house-blue",
    bgColor: "bg-house-blue",
    borderColor: "border-house-blue",
    members: "130+",
    keyEvents: ["400m Sprint", "800m Run", "4x400m Relay", "High Jump"],
  },
  {
    name: "Green House",
    slug: "green",
    motto: "Growth & Victory",
    description: "Symbolizing continuous improvement, Green House athletes grow stronger with each challenge.",
    color: "text-house-green",
    bgColor: "bg-house-green",
    borderColor: "border-house-green",
    members: "120+",
    keyEvents: ["1500m Run", "Shot Put", "Javelin Throw", "Mixed Relay"],
  },
  {
    name: "Yellow House",
    slug: "yellow",
    motto: "Brilliance & Excellence",
    description: "Combining strategic thinking with physical ability, approaching every event with brilliance.",
    color: "text-house-yellow",
    bgColor: "bg-house-yellow",
    borderColor: "border-house-yellow",
    members: "115+",
    keyEvents: ["110m Hurdles", "Pole Vault", "Triple Jump", "Decathlon"],
  },
]

export default function HousesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            The <span className="text-primary">Houses</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Four houses, one goal - Eclipse 2025 glory
          </p>
        </div>
      </section>

      {/* Houses Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Colors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every great athlete belongs to a house. Each house brings its own unique spirit, values, and competitive
              edge to Eclipse 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {houses.map((house) => (
              <Card
                key={house.slug}
                className={`group hover:shadow-xl transition-all duration-300 border-2 ${house.borderColor}/20 hover:${house.borderColor}/40`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-20 h-20 ${house.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <span className="text-white font-bold text-2xl">{house.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${house.color}`}>{house.name}</h3>
                      <p className={`text-lg font-semibold mb-3 ${house.color}`}>{house.motto}</p>
                      <p className="text-muted-foreground mb-4">{house.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className={`h-4 w-4 ${house.color}`} />
                          <span className="text-sm font-medium">{house.members} Members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Trophy className={`h-4 w-4 ${house.color}`} />
                          <span className="text-sm font-medium">{house.keyEvents.length} Key Events</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Key Events:</h4>
                        <div className="flex flex-wrap gap-2">
                          {house.keyEvents.map((event, index) => (
                            <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                              {event}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button asChild className={`${house.bgColor} hover:${house.bgColor}/90 text-white`}>
                        <Link href={`/houses/${house.slug}`}>Learn More About {house.name}</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competition Stats */}
          <div className="bg-card rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">House Competition</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">490+</div>
                <div className="text-muted-foreground">Total Athletes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Houses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">Champion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Represent?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your house and be part of Eclipse 2025. Every house needs champions - will you be one of them?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Link href="/event-details">Register for Events</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Contact House Captains</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Houses - Eclipse 2025",
  description:
    "Discover the four houses competing at Eclipse 2025: Red, Blue, Green, and Yellow. Each house brings unique values and competitive spirit to Curtin University Colombo's inaugural sports meet.",
}
