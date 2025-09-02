import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Download, Trophy, Users, Star } from "lucide-react"

const scheduleData = {
  morning: [
    {
      time: "8:00 AM",
      event: "Opening Ceremony",
      category: "Ceremony",
      location: "Main Stadium",
      description: "Welcome address and house parade",
      featured: true,
    },
    {
      time: "8:30 AM",
      event: "100m Sprint (Heats)",
      category: "Track",
      location: "Track",
      description: "Men's and Women's qualifying rounds",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "9:00 AM",
      event: "Long Jump (Qualifying)",
      category: "Field",
      location: "Field Area A",
      description: "Men's and Women's qualifying rounds",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "9:30 AM",
      event: "200m Sprint (Heats)",
      category: "Track",
      location: "Track",
      description: "Men's and Women's qualifying rounds",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "10:00 AM",
      event: "Shot Put",
      category: "Field",
      location: "Field Area B",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "10:30 AM",
      event: "400m Sprint (Heats)",
      category: "Track",
      location: "Track",
      description: "Men's and Women's qualifying rounds",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "11:00 AM",
      event: "High Jump",
      category: "Field",
      location: "Field Area A",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "11:30 AM",
      event: "4x100m Relay (Heats)",
      category: "Relay",
      location: "Track",
      description: "House qualifying rounds",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
  ],
  afternoon: [
    {
      time: "12:00 PM",
      event: "Lunch Break",
      category: "Break",
      location: "Cafeteria Area",
      description: "Refreshments and entertainment",
    },
    {
      time: "1:00 PM",
      event: "800m Run",
      category: "Track",
      location: "Track",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "1:30 PM",
      event: "Javelin Throw",
      category: "Field",
      location: "Field Area B",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "2:00 PM",
      event: "100m Sprint (Finals)",
      category: "Track",
      location: "Track",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
    {
      time: "2:30 PM",
      event: "Tug of War",
      category: "Team",
      location: "Central Field",
      description: "House team competition",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
    {
      time: "3:00 PM",
      event: "1500m Run",
      category: "Track",
      location: "Track",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      time: "3:30 PM",
      event: "200m Sprint (Finals)",
      category: "Track",
      location: "Track",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
  ],
  evening: [
    {
      time: "4:00 PM",
      event: "4x100m Relay (Finals)",
      category: "Relay",
      location: "Track",
      description: "House championship finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
    {
      time: "4:30 PM",
      event: "400m Sprint (Finals)",
      category: "Track",
      location: "Track",
      description: "Men's and Women's finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
    {
      time: "5:00 PM",
      event: "4x400m Relay (Finals)",
      category: "Relay",
      location: "Track",
      description: "House championship finals",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
    {
      time: "5:30 PM",
      event: "Mixed Relay (Finals)",
      category: "Relay",
      location: "Track",
      description: "House mixed gender relay",
      houses: ["Red", "Blue", "Green", "Yellow"],
      featured: true,
    },
    {
      time: "6:00 PM",
      event: "Closing Ceremony",
      category: "Ceremony",
      location: "Main Stadium",
      description: "Awards presentation and house rankings",
      featured: true,
    },
  ],
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Track":
      return "bg-blue-100 text-blue-800"
    case "Field":
      return "bg-green-100 text-green-800"
    case "Relay":
      return "bg-primary/20 text-primary"
    case "Team":
      return "bg-purple-100 text-purple-800"
    case "Ceremony":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function SchedulePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Event <span className="text-primary">Schedule</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Your complete guide to Eclipse 2025 - September 20th, 2025
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10</div>
              <div className="text-muted-foreground">Hours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Houses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Athletes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="morning" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="morning">Morning (8:00 AM - 12:00 PM)</TabsTrigger>
              <TabsTrigger value="afternoon">Afternoon (12:00 PM - 4:00 PM)</TabsTrigger>
              <TabsTrigger value="evening">Evening (4:00 PM - 6:30 PM)</TabsTrigger>
            </TabsList>

            {Object.entries(scheduleData).map(([period, events]) => (
              <TabsContent key={period} value={period} className="space-y-4">
                {events.map((event, index) => (
                  <Card
                    key={index}
                    className={`${
                      event.featured ? "border-primary/50 bg-primary/5" : ""
                    } hover:shadow-md transition-shadow`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center text-primary font-semibold">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                            <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                            {event.featured && (
                              <Badge variant="default" className="bg-primary">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{event.event}</h3>
                          <p className="text-muted-foreground mb-2">{event.description}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                        {event.houses && (
                          <div className="flex flex-col items-end">
                            <div className="text-sm text-muted-foreground mb-2">Participating Houses:</div>
                            <div className="flex gap-2">
                              {event.houses.map((house) => (
                                <div
                                  key={house}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                                    house === "Red"
                                      ? "bg-house-red"
                                      : house === "Blue"
                                        ? "bg-house-blue"
                                        : house === "Green"
                                          ? "bg-house-green"
                                          : "bg-house-yellow"
                                  }`}
                                >
                                  {house.charAt(0)}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  Opening Ceremony
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The grand opening featuring house parades, welcome addresses, and the official start of Eclipse 2025.
                </p>
                <div className="text-sm text-primary font-semibold">8:00 AM - Main Stadium</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  House Relays
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The ultimate team events where houses compete in 4x100m, 4x400m, and mixed gender relays.
                </p>
                <div className="text-sm text-primary font-semibold">4:00 PM - 5:30 PM</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 text-primary mr-2" />
                  Closing Ceremony
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Awards presentation, house rankings announcement, and celebration of all participants.
                </p>
                <div className="text-sm text-primary font-semibold">6:00 PM - Main Stadium</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Take the Schedule With You</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the complete Eclipse 2025 schedule and never miss an event. Available in multiple formats for your
            convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Schedule
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Schedule - Eclipse 2025",
  description:
    "Complete event schedule for Eclipse 2025, Curtin University Colombo's inaugural sports meet. View all events, timings, and download the PDF schedule.",
}
