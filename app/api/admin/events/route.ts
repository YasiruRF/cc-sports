import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const eventSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  venue: z.string().min(1),
  category: z.string().min(1),
  houseId: z.number().min(1),
  image: z.string().optional(),
})

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      include: {
        house: true
      },
      orderBy: {
        date: 'asc'
      }
    })
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' }, 
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = eventSchema.parse(body)
    
    // Convert the date string to a Date object
    const data = {
      ...validatedData,
      date: new Date(validatedData.date)
    }
    
    const event = await prisma.event.create({
      data,
      include: {
        house: true
      }
    })
    
    return NextResponse.json(event)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors }, 
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create event' }, 
      { status: 500 }
    )
  }
}