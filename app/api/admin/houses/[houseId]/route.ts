import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const houseSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  color: z.string().min(1),
  score: z.number().min(0)
})

export async function PATCH(
  request: Request,
  { params }: { params: { houseId: string } }
) {
  try {
    const houseId = parseInt(params.houseId)
    const body = await request.json()
    const validatedData = houseSchema.parse(body)
    
    const house = await prisma.house.update({
      where: { id: houseId },
      data: validatedData
    })
    
    return NextResponse.json(house)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to update house' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { houseId: string } }
) {
  try {
    const houseId = parseInt(params.houseId)
    
    await prisma.house.delete({
      where: { id: houseId }
    })
    
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete house' }, { status: 500 })
  }
}