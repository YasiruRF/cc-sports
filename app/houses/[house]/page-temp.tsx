import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Target, Star, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from 'next';

const houseData = {
  red: {
    name: "Red House",
    motto: "Passion & Power",
    description:
      "Red House embodies the spirit of determination and fierce competition. Known for their unwavering passion and powerful performances, Red House athletes never back down from a challenge.",
    color: "text-house-red",
    bgColor: "bg-house-red",
    borderColor: "border-house-red",
    gradientFrom: "from-house-red/20",
    gradientTo: "to-house-red/5",
    values: ["Determination", "Courage", "Leadership", "Excellence"],
    achievements: [
      "Expected to dominate sprint events",
      "Strong tradition in field events",
      "Known for exceptional team spirit",
      "Leaders in motivating fellow athletes",
    ],
    captain: {
      name: "Sarah Johnson",
      year: "3rd Year Business",
      specialty: "Track & Field",
    },
    viceCaptain: {
      name: "Michael Chen",
      year: "2nd Year Engineering",
      specialty: "Sprints",
    },
    expectedEvents: ["100m Sprint", "200m Sprint", "Long Jump", "4x100m Relay"],
    teamSize: "125+ members",
  },
  blue: {
    name: "Blue House",
    motto: "Strength & Unity",
    description:
      "Blue House represents solidarity and collective strength. Their athletes work together as one unified force, believing that true victory comes through teamwork and mutual support.",
    color: "text-house-blue",
    bgColor: "bg-house-blue",
    borderColor: "border-house-blue",
    gradientFrom: "from-house-blue/20",
    gradientTo: "to-house-blue/5",
    values: ["Teamwork", "Loyalty", "Perseverance", "Honor"],
    achievements: [
      "Relay event specialists",
      "Outstanding team coordination",
      "Consistent performance across events",
      "Strong support system for all members",
    ],
    captain: {
      name: "David Williams",
      year: "3rd Year Computer Science",
      specialty: "Middle Distance",
    },
    viceCaptain: {
      name: "Emma Thompson",
      year: "2nd Year Psychology",
      specialty: "Field Events",
    },
    expectedEvents: ["400m Sprint", "800m Run", "4x400m Relay", "High Jump"],
    teamSize: "130+ members",
  },
  green: {
    name: "Green House",
    motto: "Growth & Victory",
    description:
      "Green House symbolizes continuous improvement and natural talent. Like nature itself, Green House athletes grow stronger with each challenge, adapting and evolving to achieve victory.",
    color: "text-house-green",
    bgColor: "bg-house-green",
    borderColor: "border-house-green",
    gradientFrom: "from-house-green/20",
    gradientTo: "to-house-green/5",
    values: ["Growth", "Adaptability", "Resilience", "Innovation"],
    achievements: [
      "Rising stars in endurance events",
      "Innovative training methods",
      "Strong environmental consciousness",
      "Mentorship programs for new athletes",
    ],
    captain: {
      name: "Priya Patel",
      year: "3rd Year Environmental Science",
      specialty: "Long Distance",
    },
    viceCaptain: {
      name: "James Rodriguez",
      year: "2nd Year Marketing",
      specialty: "Throwing Events",
    },
    expectedEvents: ["1500m Run", "Shot Put", "Javelin Throw", "Mixed Relay"],
    teamSize: "120+ members",
  },
  yellow: {
    name: "Yellow House",
    motto: "Brilliance & Excellence",
    description:
      "Yellow House shines with intellectual prowess and athletic excellence. Their athletes combine strategic thinking with physical ability, approaching every event with brilliance and precision.",
    color: "text-house-yellow",
    bgColor: "bg-house-yellow",
    borderColor: "border-house-yellow",
    gradientFrom: "from-house-yellow/20",
    gradientTo: "to-house-yellow/5",
    values: ["Excellence", "Intelligence", "Precision", "Innovation"],
    achievements: [
      "Technical event specialists",
      "Strategic race planning",
      "Academic-athletic balance",
      "Leadership in sports science",
    ],
    captain: {
      name: "Alex Kumar",
      year: "3rd Year Sports Science",
      specialty: "Technical Events",
    },
    viceCaptain: {
      name: "Lisa Zhang",
      year: "2nd Year Medicine",
      specialty: "Hurdles",
    },
    expectedEvents: ["110m Hurdles", "Pole Vault", "Triple Jump", "Decathlon"],
    teamSize: "115+ members",
  },
}

export default function HousePage({ params }: { params: { house: string } }) {
  const house = houseData[params.house as keyof typeof houseData]

  if (!house) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className={`bg-gradient-to-br ${house.gradientFrom} ${house.gradientTo} py-16 lg:py-24 border-b-4 ${house.borderColor}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`w-24 h-24 ${house.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}>
            <span className="text-white font-bold text-3xl">{house.name.charAt(0)}</span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${house.color}`}>{house.name}</h1>
          <p className={`text-2xl md:text-3xl font-semibold mb-6 ${house.color}`}>{house.motto}</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">{house.description}</p>
        </div>
      </section>

      {/* House Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className={`text-center border-2 ${house.borderColor}/20`}>
              <CardContent className="p-6">
                <Users className={`h-8 w-8 ${house.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${house.color}`}>{house.teamSize}</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </CardContent>
            </Card>

            <Card className={`text-center border-2 ${house.borderColor}/20`}>
              <CardContent className="p-6">
                <Trophy className={`h-8 w-8 ${house.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${house.color}`}>{house.expectedEvents.length}</div>
                <div className="text-sm text-muted-foreground">Key Events</div>
              </CardContent>
            </Card>

            <Card className={`text-center border-2 ${house.borderColor}/20`}>
              <CardContent className="p-6">
                <Target className={`h-8 w-8 ${house.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${house.color}`}>100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </CardContent>
            </Card>

            <Card className={`text-center border-2 ${house.borderColor}/20`}>
              <CardContent className="p-6">
                <Star className={`h-8 w-8 ${house.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${house.color}`}>1st</div>
                <div className="text-sm text-muted-foreground">Goal Position</div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className={`border-2 ${house.borderColor}/20`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className={`h-5 w-5 ${house.color} mr-2`} />
                    House Captain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${house.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {house.captain.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{house.captain.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{house.captain.year}</p>
                    <Badge variant="secondary" className="text-xs">
                      {house.captain.specialty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-2 ${house.borderColor}/20`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className={`h-5 w-5 ${house.color} mr-2`} />
                    Vice Captain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${house.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {house.viceCaptain.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{house.viceCaptain.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{house.viceCaptain.year}</p>
                    <Badge variant="secondary" className="text-xs">
                      {house.viceCaptain.specialty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* House Values */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {house.values.map((value, index) => (
                <Card
                  key={index}
                  className={`text-center border-2 ${house.borderColor}/20 hover:${house.borderColor}/40 transition-colors`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${house.bgColor} rounded-full mx-auto mb-3 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className={`font-semibold ${house.color}`}>{value}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expected Events */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {house.expectedEvents.map((event, index) => (
                <Card key={index} className={`border-2 ${house.borderColor}/20`}>
                  <CardContent className="p-4 flex items-center">
                    <div className={`w-10 h-10 ${house.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{event}</h4>
                      <p className="text-sm text-muted-foreground">High medal potential</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">House Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {house.achievements.map((achievement, index) => (
                <Card key={index} className={`border-2 ${house.borderColor}/20`}>
                  <CardContent className="p-6 flex items-start">
                    <div className={`w-8 h-8 ${house.bgColor} rounded-full flex items-center justify-center mr-4 mt-1`}>
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-muted-foreground">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`bg-gradient-to-r ${house.gradientFrom} ${house.gradientTo} rounded-lg p-8 text-center`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the {house.name} Family</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to represent {house.name} at Eclipse 2025? Join our team and be part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className={`${house.bgColor} hover:${house.bgColor}/90 text-white`}>
                Join Our Team
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                <Link href="/contact">Contact House Captain</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ house: "red" }, { house: "blue" }, { house: "green" }, { house: "yellow" }]
}

export async function generateMetadata({ params }: { params: { house: string } }): Promise<Metadata> {
  const house = houseData[params.house as keyof typeof houseData]

  if (!house) {
    return {
      title: "House Not Found - Eclipse 2025",
    }
  }

  return {
    title: `${house.name} - Eclipse 2025`,
    description: `${house.description} Join ${house.name} for Eclipse 2025 at Curtin University Colombo.`,
  }
}