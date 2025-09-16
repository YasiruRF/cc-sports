import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Target } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Athletes",
    description: "Competing across all events",
  },
  {
    icon: Calendar,
    number: "3",
    label: "Days",
    description: "Of non-stop action",
  },
  {
    icon: Trophy,
    number: "15+",
    label: "Events",
    description: "Across multiple disciplines",
  },
  {
    icon: Target,
    number: "4",
    label: "Houses",
    description: "Battling for supremacy",
  },
];

export function AboutEclipseSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eclipse Introduction */}
        <div className="text-center mb-16">
          <h1 className="mb-4 flex justify-center">
            <Image
              src="/eclipse-logo.png"
              alt="Eclipse logo"
              width={250}
              height={250}
            ></Image>
          </h1>
          <p className="text-xl text-foreground/80 font-serif max-w-3xl mx-auto leading-relaxed">
            Where athletic excellence meets university pride. Eclipse 2025 is
            Curtin Colombo's premier sports meet, bringing together the finest
            student athletes in a celebration of competition, camaraderie, and
            sporting spirit.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.label}
                className="text-center bg-card border-2 hover:border-accent/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-serif font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-serif font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <p className="text-sm text-foreground/70 font-serif">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About Eclipse */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6 text-center">
                The Eclipse Legacy
              </h2>
              <div className="space-y-6 text-foreground/90 font-serif leading-relaxed">
                <p>
                  Eclipse represents more than just a sports meet—it's a
                  testament to the unwavering spirit of competition that defines
                  Curtin Colombo. As part of the world's top 1% universities, we
                  believe in nurturing not just academic excellence, but also
                  physical prowess and team spirit.
                </p>
                <p>
                  Our four houses—Ignis (Fire), Nereus (Water), Terra (Earth),
                  and Ventus (Air)—each embody unique characteristics that
                  reflect the diverse strengths of our student body. Through
                  friendly rivalry and mutual respect, Eclipse fosters bonds
                  that last well beyond university years.
                </p>
                <p>
                  Set against the vibrant backdrop of Sri Lanka, Eclipse 2025
                  promises to be our most spectacular event yet, showcasing the
                  athletic talents of our students while celebrating the rich
                  sporting culture of our island nation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
