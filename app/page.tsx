import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { Calendar, MapPin, Trophy, Users, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-sports-pattern-background.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Eclipse <span className="text-primary animate-pulse">2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto text-balance">
              Curtin University Colombo's Inaugural Sports Meet
            </p>
            <p className="text-lg mb-8 text-muted-foreground/80 max-w-2xl mx-auto">
              Where champions are born and legends are made. Join us for a day of athletic excellence and university
              pride.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center space-x-3 text-lg bg-card/20 backdrop-blur px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-semibold">September 20th, 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-lg bg-card/20 backdrop-blur px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold">Torrington Grounds, Colombo</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <Link href="/event-details">View Event Details</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-primary/50 hover:bg-primary/10"
              >
                <Link href="/schedule">See Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Countdown</h2>
          <p className="text-muted-foreground mb-8 text-lg">The excitement builds as we approach the big day</p>
          <CountdownTimer />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">4</div>
              <div className="text-muted-foreground font-medium">Houses Competing</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground font-medium">Sports Events</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground font-medium">Expected Participants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">1</div>
              <div className="text-muted-foreground font-medium">Unforgettable Day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What to Expect</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Eclipse 2025 promises to be an extraordinary celebration of athleticism, teamwork, and university spirit
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Events</h3>
                <p className="text-muted-foreground">
                  Multiple sports categories with exciting competitions between all four houses, featuring both
                  individual and team events.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">House Spirit</h3>
                <p className="text-muted-foreground">
                  Join your house team and compete for glory in Red, Blue, Green, or Yellow. Experience the thrill of
                  team unity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Memorable Experience</h3>
                <p className="text-muted-foreground">
                  A complete day of sports, entertainment, and university community building that you'll remember
                  forever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Houses Preview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your House</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Every great athlete belongs to a house. Which colors will you represent?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/houses/red" className="group">
              <Card className="transition-all duration-300 group-hover:scale-105 border-house-red/20 hover:border-house-red hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-house-red rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  <h3 className="text-lg font-semibold text-house-red mb-2">Red House</h3>
                  <p className="text-sm text-muted-foreground">Passion & Power</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/houses/blue" className="group">
              <Card className="transition-all duration-300 group-hover:scale-105 border-house-blue/20 hover:border-house-blue hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-house-blue rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <h3 className="text-lg font-semibold text-house-blue mb-2">Blue House</h3>
                  <p className="text-sm text-muted-foreground">Strength & Unity</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/houses/green" className="group">
              <Card className="transition-all duration-300 group-hover:scale-105 border-house-green/20 hover:border-house-green hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-house-green rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">G</span>
                  </div>
                  <h3 className="text-lg font-semibold text-house-green mb-2">Green House</h3>
                  <p className="text-sm text-muted-foreground">Growth & Victory</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/houses/yellow" className="group">
              <Card className="transition-all duration-300 group-hover:scale-105 border-house-yellow/20 hover:border-house-yellow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-house-yellow rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary-foreground font-bold text-xl">Y</span>
                  </div>
                  <h3 className="text-lg font-semibold text-house-yellow mb-2">Yellow House</h3>
                  <p className="text-sm text-muted-foreground">Brilliance & Excellence</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make History?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of Curtin University Colombo's inaugural sports meet. Register now and help us create an
            unforgettable legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/event-details">Get Event Info</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Contact Organizers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
