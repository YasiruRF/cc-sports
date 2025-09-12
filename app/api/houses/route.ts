import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const houses = await prisma.house.findMany({
      orderBy: {
        score: 'desc'
      }
    })
    
    return NextResponse.json(houses)
  } catch (error) {
    console.error('Error fetching houses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch houses' },
      { status: 500 }
    )
  }
}
