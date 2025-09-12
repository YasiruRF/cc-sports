import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const sponsors = await prisma.sponsor.findMany({
      orderBy: {
        tier: 'asc'
      }
    })
    
    // Group sponsors by tier
    const groupedSponsors = sponsors.reduce<Record<string, typeof sponsors[0][]>>((acc, sponsor) => {
      const tier = sponsor.tier.toLowerCase()
      if (!acc[tier]) {
        acc[tier] = []
      }
      acc[tier].push(sponsor)
      return acc
    }, {})
    
    return NextResponse.json(groupedSponsors)
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch sponsors' },
      { status: 500 }
    )
  }
}
