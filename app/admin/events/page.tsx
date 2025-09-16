'use client';

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { EventForm } from "@/components/admin/event-form"
import { EventsTable } from "@/components/admin/events-table"
import { useState, useEffect } from "react"
import type { Event, House } from "@prisma/client"

type EventWithHouse = Event & { house: House }

export default function AdminEventsPage() {
  const [events, setEvents] = useState<EventWithHouse[]>([])
  const [houses, setHouses] = useState<House[]>([])
  const [formOpen, setFormOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<EventWithHouse | undefined>()

  // Fetch events and houses on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch events
        const eventsResponse = await fetch('/api/admin/events')
        if (!eventsResponse.ok) {
          throw new Error(`HTTP error! status: ${eventsResponse.status}`)
        }
        const eventsData = await eventsResponse.json()
        if (!Array.isArray(eventsData)) {
          throw new Error('Invalid events response format')
        }
        setEvents(eventsData)

        // Fetch houses for the form
        const housesResponse = await fetch('/api/admin/houses')
        if (!housesResponse.ok) {
          throw new Error(`HTTP error! status: ${housesResponse.status}`)
        }
        const housesData = await housesResponse.json()
        if (!Array.isArray(housesData)) {
          throw new Error('Invalid houses response format')
        }
        setHouses(housesData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
        // You might want to show an error message to the user here
      }
    }
    fetchData()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif font-bold">Manage Events</h1>
        <Button onClick={() => { setEditingEvent(undefined); setFormOpen(true); }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>
      <EventsTable 
        events={events} 
        onEdit={(event) => {
          setEditingEvent(event)
          setFormOpen(true)
        }}
        onDelete={async (event) => {
          if (confirm('Are you sure you want to delete this event?')) {
            try {
              const response = await fetch(`/api/admin/events/${event.id}`, { 
                method: 'DELETE' 
              })
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }
              setEvents(events.filter(e => e.id !== event.id))
            } catch (error) {
              console.error('Failed to delete event:', error)
              alert('Failed to delete event. Please try again.')
            }
          }
        }}
      />

      <EventForm 
        open={formOpen} 
        onOpenChange={setFormOpen}
        event={editingEvent}
        houses={houses}
        onSubmit={async (data) => {
          try {
            if (editingEvent) {
              // Update existing event
              const response = await fetch(`/api/admin/events/${editingEvent.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              })
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }
              const updated = await response.json()
              setEvents(events.map(e => e.id === editingEvent.id ? updated : e))
            } else {
              // Create new event
              const response = await fetch('/api/admin/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              })
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }
              const created = await response.json()
              setEvents([...events, created])
            }
            setFormOpen(false)
          } catch (error) {
            console.error('Failed to save event:', error)
            alert('Failed to save event. Please try again.')
          }
        }}
      />
    </div>
  )
}