import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const houseSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  color: z.string().min(1),
  score: z.number().min(0)
})

export async function GET() {
  try {
    const houses = await prisma.house.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    return NextResponse.json(houses)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch houses' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = houseSchema.parse(body)
    
    const house = await prisma.house.create({
      data: validatedData
    })
    
    return NextResponse.json(house)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to create house' }, { status: 500 })
  }
}