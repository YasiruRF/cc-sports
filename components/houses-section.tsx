import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { houses } from "@/data/houses"

export function HousesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">The Four Houses</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto text-balance">
            Every competitor belongs to one of four legendary houses, each representing a fundamental element and
            embodying unique strengths that define the spirit of Eclipse 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {houses.map((house) => (
            <Card
              key={house.name}
              className={`border-2 border-${house.color} hover:shadow-lg transition-all duration-300 bg-card`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${house.color} flex items-center justify-center`}
                >
                  <span className="text-2xl font-serif font-bold text-white">{house.name[0]}</span>
                </div>
                <CardTitle className={`text-2xl font-serif text-${house.color} mb-2`}>{house.name}</CardTitle>
                <Badge variant="outline" className={`border-${house.color} text-${house.color}`}>
                  {house.element} • {house.animal}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-foreground mb-4 text-balance">{house.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {house.traits.map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
