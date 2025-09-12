import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Globe, Star } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About <span className="text-accent">Eclipse 2025</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Eclipse 2025 represents the pinnacle of university sports excellence in Sri Lanka. Join us for three days of
            intense competition, incredible performances, and unforgettable memories at Curtin Colombo's premier
            sporting event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">15+ Sports</h3>
              <p className="text-muted-foreground text-sm">
                From athletics to team sports, compete in diverse categories
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Athletes</h3>
              <p className="text-muted-foreground text-sm">
                Students from across Sri Lanka competing at the highest level
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
              <p className="text-muted-foreground text-sm">International-level facilities and competition standards</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top 1% University</h3>
              <p className="text-muted-foreground text-sm">Hosted by Curtin University, ranked in the world's top 1%</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Experience Sri Lankan Sports Excellence</h3>
              <p className="text-muted-foreground mb-6 text-balance">
                Eclipse 2025 celebrates the rich sporting heritage of Sri Lanka while embracing international standards
                of competition. Our event brings together the best young athletes from across the island nation in a
                festival of sport, culture, and achievement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">State-of-the-art facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Professional coaching support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Cultural celebration events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Networking opportunities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder-pvvfi.png"
                alt="Curtin Colombo Sports Excellence"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
