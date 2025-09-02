import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Handshake, Zap, Heart, Trophy } from "lucide-react"
import Link from "next/link"

const sponsors = {
  title: [
    {
      name: "Curtin University",
      logo: "/curtin-university-logo.png",
      description: "Our founding institution and primary supporter of Eclipse 2025",
      website: "https://curtin.edu.au",
      tier: "Title Sponsor",
    },
  ],
  official: [
    {
      name: "TechCorp Solutions",
      logo: "/techcorp-technology-company-logo.png",
      description: "Official Technology Partner providing cutting-edge timing and scoring systems",
      website: "#",
      tier: "Official Technology Partner",
      featured: true,
    },
    {
      name: "SportGear Pro",
      logo: "/sportgear-athletic-equipment-logo.png",
      description: "Official Equipment Partner supplying professional sports equipment",
      website: "#",
      tier: "Official Equipment Partner",
    },
    {
      name: "HealthFirst Medical",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Official Medical Partner ensuring athlete safety and wellbeing",
      website: "#",
      tier: "Official Medical Partner",
    },
  ],
  partners: [
    {
      name: "Energy Boost",
      logo: "/placeholder.svg?height=60&width=150",
      description: "Keeping our athletes hydrated and energized",
      website: "#",
    },
    {
      name: "QuickTransport",
      logo: "/placeholder.svg?height=60&width=150",
      description: "Official transportation partner",
      website: "#",
    },
    {
      name: "FreshMeals Catering",
      logo: "/placeholder.svg?height=60&width=150",
      description: "Providing nutritious meals for participants",
      website: "#",
    },
    {
      name: "PrintPro Media",
      logo: "/placeholder.svg?height=60&width=150",
      description: "Official printing and media partner",
      website: "#",
    },
    {
      name: "SecureGuard",
      logo: "/placeholder.svg?height=60&width=150",
      description: "Ensuring event safety and security",
      website: "#",
    },
    {
      name: "GreenClean Services",
      logo: "/placeholder.svg?height=60&width=150",
      description: "Maintaining clean and sustainable event spaces",
      website: "#",
    },
  ],
  community: [
    {
      name: "Local Sports Club",
      logo: "/placeholder.svg?height=50&width=120",
      description: "Supporting grassroots sports development",
      website: "#",
    },
    {
      name: "Alumni Association",
      logo: "/placeholder.svg?height=50&width=120",
      description: "Curtin Colombo Alumni giving back to the community",
      website: "#",
    },
    {
      name: "Student Council",
      logo: "/placeholder.svg?height=50&width=120",
      description: "Student-led support and organization",
      website: "#",
    },
    {
      name: "Parent Committee",
      logo: "/placeholder.svg?height=50&width=120",
      description: "Parent volunteers supporting the event",
      website: "#",
    },
  ],
}

export default function SponsorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Eclipse 2025 is made possible by our incredible sponsors and partners
          </p>
        </div>
      </section>

      {/* Title Sponsor */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Title Sponsor</h2>
            <p className="text-lg text-muted-foreground">Our founding partner making Eclipse 2025 possible</p>
          </div>

          {sponsors.title.map((sponsor, index) => (
            <Card key={index} className="max-w-4xl mx-auto border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="h-24 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4">{sponsor.name}</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">{sponsor.description}</p>
                <Badge variant="default" className="text-lg px-6 py-2">
                  <Trophy className="h-4 w-4 mr-2" />
                  {sponsor.tier}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Official Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Official Partners</h2>
            <p className="text-lg text-muted-foreground">Strategic partners providing essential services and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.official.map((sponsor, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 ${
                  sponsor.featured ? "border-primary/50 bg-primary/5 ring-2 ring-primary/20" : ""
                }`}
              >
                <CardHeader>
                  {sponsor.featured && (
                    <div className="flex justify-center mb-4">
                      <Badge variant="default" className="bg-primary">
                        <Star className="h-3 w-3 mr-1" />
                        Featured Partner
                      </Badge>
                    </div>
                  )}
                  <div className="mb-4">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      className="h-16 mx-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{sponsor.description}</p>
                  <Badge variant="secondary" className="mb-4">
                    <Award className="h-3 w-3 mr-1" />
                    {sponsor.tier}
                  </Badge>
                  <div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supporting Partners</h2>
            <p className="text-lg text-muted-foreground">Valued partners contributing to the success of Eclipse 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.partners.map((sponsor, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{sponsor.name}</h3>
                    <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Supporters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Supporters</h2>
            <p className="text-lg text-muted-foreground">Local organizations and groups supporting our athletes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.community.map((sponsor, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      className="h-10 mx-auto object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{sponsor.name}</h3>
                  <p className="text-xs text-muted-foreground">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community of supporters and be part of something extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Visibility</h3>
                <p className="text-muted-foreground">
                  Reach over 1000+ students, faculty, and community members during the event
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                <p className="text-muted-foreground">
                  Support youth development and promote healthy, active lifestyles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Long-term Partnership</h3>
                <p className="text-muted-foreground">
                  Build lasting relationships with Curtin University Colombo and its community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in partnering with Eclipse 2025? We offer various sponsorship packages to suit different needs
            and budgets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Handshake className="h-4 w-4 mr-2" />
              Partnership Inquiry
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Sponsors & Partners - Eclipse 2025",
  description:
    "Meet the sponsors and partners who made Eclipse 2025 possible. From title sponsors to community supporters, discover the organizations backing Curtin University Colombo's inaugural sports meet.",
}
