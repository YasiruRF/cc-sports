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
})

export async function PATCH(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    const eventId = parseInt(params.eventId)
    const body = await request.json()
    const validatedData = eventSchema.parse(body)

    // Convert the date string to a Date object
    const data = {
      ...validatedData,
      date: new Date(validatedData.date)
    }

    const event = await prisma.event.update({
      where: { id: eventId },
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
      { error: 'Failed to update event' }, 
      { status: 500 }
    )
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    const eventId = parseInt(params.eventId)
    await prisma.event.delete({
      where: { id: eventId }
    })
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete event' }, 
      { status: 500 }
    )
  }
}