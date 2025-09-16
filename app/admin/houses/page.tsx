'use client';

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { HouseForm } from "@/components/admin/house-form"
import { HousesTable } from "@/components/admin/houses-table"
import { useState, useEffect } from "react"
import type { House } from "@prisma/client"

export default function AdminHousesPage() {
  const [houses, setHouses] = useState<House[]>([])
  const [formOpen, setFormOpen] = useState(false)
  const [editingHouse, setEditingHouse] = useState<House | undefined>()

  // Fetch houses on component mount
  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await fetch('/api/admin/houses')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format')
        }
        setHouses(data)
      } catch (error) {
        console.error('Failed to fetch houses:', error)
        // You might want to show an error message to the user here
        setHouses([])
      }
    }
    fetchHouses()
  }, [])

  const getHouseColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'red-600': 'bg-red-600',
      'blue-600': 'bg-blue-600',
      'green-600': 'bg-green-600',
      'yellow-600': 'bg-yellow-600'
    }
    return colorMap[color] || 'bg-gray-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif font-bold">Manage Houses</h1>
        <Button onClick={() => { setEditingHouse(undefined); setFormOpen(true); }}>
          <Plus className="h-4 w-4 mr-2" />
          Add House
        </Button>
      </div>
      <HousesTable 
        houses={houses} 
        onEdit={(house) => {
          setEditingHouse(house)
          setFormOpen(true)
        }}
        onDelete={async (house) => {
          if (confirm('Are you sure you want to delete this house?')) {
            await fetch(`/api/admin/houses/${house.id}`, { method: 'DELETE' })
            setHouses(houses.filter(h => h.id !== house.id))
          }
        }}
      />

      <HouseForm 
        open={formOpen} 
        onOpenChange={setFormOpen}
        house={editingHouse}
        onSubmit={async (data) => {
          try {
            if (editingHouse) {
              // Update existing house
              const response = await fetch(`/api/admin/houses/${editingHouse.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              })
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }
              const updated = await response.json()
              setHouses(houses.map(h => h.id === editingHouse.id ? updated : h))
            } else {
              // Create new house
              const response = await fetch('/api/admin/houses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              })
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }
              const created = await response.json()
              setHouses([...houses, created])
            }
            setFormOpen(false)
          } catch (error) {
            console.error('Failed to save house:', error)
            alert('Failed to save house. Please try again.')
          }
        }}
      />
    </div>
  )
}