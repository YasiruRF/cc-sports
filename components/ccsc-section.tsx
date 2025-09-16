import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Trophy, Heart } from "lucide-react"
import Image from "next/image"

export function CCSCSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">About CCSC</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            The Curtin Colombo Sports Club (CCSC) is the heartbeat of athletic excellence at our university, operating
            under the Student Guild to foster sporting culture and competitive spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif">
                  <Users className="h-6 w-6 text-accent" />
                  Student-Led Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  CCSC is entirely student-operated, ensuring that every decision reflects the voice and passion of our
                  athletic community. We organize, manage, and celebrate sports at Curtin Colombo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif">
                  <Trophy className="h-6 w-6 text-accent" />
                  Competitive Spirit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From inter-house competitions to university-wide tournaments, CCSC creates platforms for athletes to
                  showcase their talents and push their limits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif">
                  <Heart className="h-6 w-6 text-accent" />
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beyond competition, we build lasting friendships, mentor emerging athletes, and create a supportive
                  environment where everyone can thrive in their sporting journey.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <Image
              src="/ccsc/ccsc.jpg"
              alt="CCSC Team"
              className="w-full h-64 object-cover rounded-lg mb-6"
              width={400}
              height={300}
            />
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Join the CCSC Family</h3>
            <p className="text-muted-foreground mb-6 text-balance">
              Whether you're a seasoned athlete or just starting your sporting journey, CCSC welcomes you to be part of
              something bigger than yourself.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif">
              Learn More About CCSC
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
