import { Card, CardContent } from "@/components/ui/card"
import { sponsors } from "@/data/sponsors"

export function SponsorsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Sponsors</h2>
          <p className="text-xl text-foreground/70 font-serif">Powering Excellence Together</p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center text-accent mb-6">Title Sponsor</h3>
          <div className="flex justify-center">
            <Card className="p-8 bg-card">
              <CardContent className="flex items-center justify-center">
                <img
                  src={sponsors.title[0].logo || "/placeholder.svg"}
                  alt={sponsors.title[0].name}
                  className="h-20 object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-10">
          <h3 className="text-xl font-serif font-bold text-center text-foreground mb-6">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {sponsors.platinum.map((sponsor) => (
              <Card key={sponsor.name} className="p-6 bg-card">
                <CardContent className="flex items-center justify-center">
                  <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-16 object-contain" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-10">
          <h3 className="text-lg font-serif font-bold text-center text-foreground mb-6">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sponsors.gold.map((sponsor) => (
              <Card key={sponsor.name} className="p-4 bg-card">
                <CardContent className="flex items-center justify-center">
                  <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-12 object-contain" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-lg font-serif font-bold text-center text-foreground mb-6">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {sponsors.silver.map((sponsor) => (
              <Card key={sponsor.name} className="p-3 bg-card">
                <CardContent className="flex items-center justify-center">
                  <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-10 object-contain" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
