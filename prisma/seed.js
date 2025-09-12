import { PrismaClient } from '@prisma/client'
import { houses } from './seeds/houses.js'
import { events } from './seeds/events.js'
import { gallery } from './seeds/gallery.js'
import { sponsors } from './seeds/sponsors.js'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting to seed data...')
  
  // Clear existing data
  await prisma.event.deleteMany()
  await prisma.house.deleteMany()
  await prisma.gallery.deleteMany()
  await prisma.sponsor.deleteMany()
  
  // Seed houses
  console.log('Seeding houses...')
  const createdHouses = await Promise.all(
    houses.map(house => 
      prisma.house.create({
        data: {
          name: house.name,
          description: house.description,
          color: house.color,
          score: house.score,
        },
      })
    )
  )
  
  // Seed events with house relations
  console.log('Seeding events...')
  await Promise.all(
    events.map((event, index) => 
      prisma.event.create({
        data: {
          ...event,
          houseId: createdHouses[index % createdHouses.length].id
        },
      })
    )
  )
  
  // Seed gallery
  console.log('Seeding gallery...')
  await Promise.all(
    gallery.map(item => 
      prisma.gallery.create({
        data: item,
      })
    )
  )
  
  // Seed sponsors
  console.log('Seeding sponsors...')
  await Promise.all(
    sponsors.map(sponsor => 
      prisma.sponsor.create({
        data: sponsor,
      })
    )
  )

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })