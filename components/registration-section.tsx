import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown } from "lucide-react"

const registrationTiers = [
  {
    name: "Participant",
    price: "LKR 2,500",
    icon: <Star className="h-6 w-6" />,
    features: [
      "Event participation",
      "Official Eclipse 2025 t-shirt",
      "Meals during event days",
      "Certificate of participation",
      "Access to all venues",
    ],
    popular: false,
  },
  {
    name: "Competitor Plus",
    price: "LKR 4,000",
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Everything in Participant",
      "Professional coaching sessions",
      "Video analysis of performance",
      "Exclusive competitor merchandise",
      "Priority venue access",
      "Networking dinner invitation",
    ],
    popular: true,
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Join the <span className="text-accent">Eclipse</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose your registration package and become part of Sri Lanka's premier university sports event. Early bird
            discounts available until February 15th!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {registrationTiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? "border-accent shadow-lg scale-105" : ""}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 text-accent">{tier.icon}</div>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-accent">{tier.price}</div>
                <p className="text-sm text-muted-foreground">per participant</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 ${
                    tier.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-background rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Make History?</h3>
            <p className="text-muted-foreground mb-6 text-balance">
              Registration closes on March 1st, 2025. Don't miss your chance to be part of Eclipse 2025 and compete
              alongside Sri Lanka's finest university athletes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Register Individual
              </Button>
              <Button size="lg" variant="outline">
                Register Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
