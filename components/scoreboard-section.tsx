import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { fetchHouses } from "@/lib/data"
import { House } from "@/data/types"
import Image from "next/image"

export async function ScoreboardSection() {
  const houses = await fetchHouses()

  // Map house colors to their respective CSS classes
  const getHouseStyles = (houseName: string) => {
    const styles = {
      'Ignis': { bg: 'border-red-600 border-2', text: 'text-red-600', logo: '/ccsc/ignis.png' },
      'Nereus': { bg: 'border-blue-600 border-2', text: 'text-blue-600', logo: '/ccsc/nereus.png' },
      'Terra': { bg: 'border-green-600 border-2', text: 'text-green-600', logo: '/ccsc/terra.png' },
      'Ventus': { bg: 'border-yellow-600 border-2', text: 'text-yellow-600', logo: '/ccsc/ventus.png' },
    }
    return styles[houseName as keyof typeof styles] || { bg: 'bg-gray-600', text: 'text-gray-600', logo: '' }
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-serif font-bold text-foreground">Live Scoreboard</h2>
          </div>
          <p className="text-xl text-foreground font-serif">Current House Standings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {houses.map((house: House, index: number) => {
            const styles = getHouseStyles(house.name)
            return (
              <Card key={house.name} className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-26 h-26 ${styles.bg} rounded-full p-3 flex items-center justify-center mx-auto mb-4`}
                  >
                    <Image 
                      src={styles.logo} 
                      alt={`${house.name} Logo`} 
                      className="w-full h-full object-contain"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h3 className={`text-2xl font-serif font-bold ${styles.text} mb-2`}>{house.name}</h3>
                  <p className="text-foreground/70 font-serif mb-4">{house.color}</p>
                  <div className="text-4xl font-serif font-bold text-foreground">{house.score}</div>
                  <p className="text-sm text-foreground/60 font-serif">Points</p>
                  {index === 0 && (
                    <div className="absolute top-2 right-2">
                      <Trophy className="h-6 w-6 text-accent" />
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
