import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fetchHouses } from "@/lib/data"
import { House } from "@/data/types"
import Image from "next/image"

export async function HousesSection() {
  const houses = await fetchHouses()

  // Map house colors to their respective CSS classes
  const getHouseStyles = (houseName: string) => {
    const styles = {
      'Ignis': { 
        bg: 'bg-red-600', 
        text: 'text-red-600', 
        logo: '/ccsc/ignis.png',
        captain: '/ccsc/people/ignis.jpg' 
      },
      'Nereus': { 
        bg: 'bg-blue-600', 
        text: 'text-blue-600', 
        logo: '/ccsc/nereus.png',
        captain: '/ccsc/people/nereus.jpg' 
      },
      'Terra': { 
        bg: 'bg-green-600', 
        text: 'text-green-600', 
        logo: '/ccsc/terra.png',
        captain: '/ccsc/people/terra.jpg' 
      },
      'Ventus': { 
        bg: 'bg-yellow-600', 
        text: 'text-yellow-600', 
        logo: '/ccsc/ventus.png',
        captain: '/ccsc/people/ventus.jpg' 
      },
    }
    return styles[houseName as keyof typeof styles] || { 
      bg: 'bg-gray-600', 
      text: 'text-gray-600', 
      logo: '', 
      captain: '' 
    }
  }
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Houses</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto text-balance">
            Every competitor belongs to one of four legendary houses, each representing a fundamental element and
            embodying unique strengths that define the spirit of Eclipse 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {houses.map((house: House) => {
            const styles = getHouseStyles(house.name)
            return (
              <Card
                key={house.name}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 flex flex-col items-center relative">
                  {/* House Logo */}
                  <div className={`w-24 h-24 rounded-full ${styles.bg} p-4 mb-6 shadow-lg`}>
                    <img 
                      src={styles.logo} 
                      alt={`${house.name} House Logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* House Info */}
                  <div className="text-center mb-8">
                    <h3 className={`text-4xl font-serif font-bold mb-3 ${styles.text}`}>
                      {house.name}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {house.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {house.traits?.map((trait: string) => (
                        <Badge 
                          key={trait} 
                          variant="outline" 
                          className={`${styles.text} border-current`}
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* House Captain */}
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-muted shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={styles.captain} 
                      alt={`${house.name} House Captain`} 
                      className="w-full h-full object-cover"
                      width={192}
                      height={192}
                    />
                  </div>
                  <span className="mt-4 text-sm text-muted-foreground font-medium">
                    {house.name} House Captains
                  </span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
