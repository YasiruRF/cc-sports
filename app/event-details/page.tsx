import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Download, Calendar, Trophy, Target, Flag } from "lucide-react"
import Link from "next/link"

export default function EventDetailsPage() {
  const events = [
    { name: "100m Sprint", category: "Track", time: "9:00 AM" },
    { name: "200m Sprint", category: "Track", time: "9:30 AM" },
    { name: "400m Sprint", category: "Track", time: "10:00 AM" },
    { name: "800m Run", category: "Track", time: "10:30 AM" },
    { name: "1500m Run", category: "Track", time: "11:00 AM" },
    { name: "4x100m Relay", category: "Relay", time: "11:30 AM" },
    { name: "Long Jump", category: "Field", time: "12:00 PM" },
    { name: "High Jump", category: "Field", time: "12:30 PM" },
    { name: "Shot Put", category: "Field", time: "1:00 PM" },
    { name: "Javelin Throw", category: "Field", time: "1:30 PM" },
    { name: "Tug of War", category: "Team", time: "2:00 PM" },
    { name: "Sack Race", category: "Fun", time: "2:30 PM" },
    { name: "Three-Legged Race", category: "Fun", time: "3:00 PM" },
    { name: "4x400m Relay", category: "Relay", time: "3:30 PM" },
    { name: "Mixed Relay", category: "Relay", time: "4:00 PM" },
  ]

  const houses = [
    { name: "Red House", color: "text-house-red", bgColor: "bg-house-red", motto: "Passion & Power" },
    { name: "Blue House", color: "text-house-blue", bgColor: "bg-house-blue", motto: "Strength & Unity" },
    { name: "Green House", color: "text-house-green", bgColor: "bg-house-green", motto: "Growth & Victory" },
    { name: "Yellow House", color: "text-house-yellow", bgColor: "bg-house-yellow", motto: "Brilliance & Excellence" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Event <span className="text-primary">Details</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Everything you need to know about Eclipse 2025
          </p>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Venue Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">Torrington Grounds</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Located in the heart of Colombo, Torrington Grounds is a premier sporting venue with excellent
                    facilities for track and field events. The venue offers ample space for spectators and participants
                    alike.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Event starts at 8:00 AM</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Capacity for 1000+ spectators</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Professional track and field facilities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Getting There</h4>
                <p className="text-muted-foreground mb-4">
                  Torrington Grounds is easily accessible by public transport and private vehicles. Parking will be
                  available on-site.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Houses */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Participating Houses</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Four houses will compete for ultimate glory at Eclipse 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house) => (
              <Card key={house.name} className={`border-2 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-20 h-20 ${house.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-2xl">{house.name.charAt(0)}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${house.color}`}>{house.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{house.motto}</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/houses/${house.name.toLowerCase().split(" ")[0]}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Schedule</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    September 20, 2025 - Event Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {events.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div>
                            <h4 className="font-semibold">{event.name}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {event.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">{event.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    Invitational Relays
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">4x100m House Relay</h4>
                      <p className="text-xs text-muted-foreground">Each house fields their fastest runners</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">4x400m House Relay</h4>
                      <p className="text-xs text-muted-foreground">The ultimate endurance challenge</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">Mixed Gender Relay</h4>
                      <p className="text-xs text-muted-foreground">Promoting inclusivity and teamwork</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 text-primary mr-2" />
                    Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Event Schedule PDF
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Official Rulebook
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Venue Map
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Registration Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <Flag className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Registration Deadline</h3>
                <p className="text-2xl font-bold text-primary mb-2">September 15, 2025</p>
                <p className="text-sm text-muted-foreground">5 days before the event</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Open to all current Curtin University Colombo students
                </p>
                <p className="text-sm text-muted-foreground">Valid student ID required</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Important Rules & Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All participants must complete registration by the deadline</li>
                <li>• Medical clearance required for all track and field events</li>
                <li>• Proper athletic attire and footwear mandatory</li>
                <li>• Each student can participate in maximum 3 individual events</li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• House assignment based on faculty/program</li>
                <li>• Fair play and sportsmanship expected at all times</li>
                <li>• Event officials&apos; decisions are final</li>
                <li>• Spectators must follow venue guidelines</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download Rulebook
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
