"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface Event {
  id: number
  title: string
  description: string
  date: string
  venue: string
  category: string
  image?: string
  houseId: number
}

interface EventImage {
  name: string
  url: string
}

export function EventsDetailSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [eventImages, setEventImages] = useState<EventImage[]>([])
  const [loadingImages, setLoadingImages] = useState(false)

  const fetchEventImages = async (eventId: number) => {
    setLoadingImages(true)
    try {
      // List all files in the event folder
      const { data: files, error: listError } = await supabase.storage
        .from('CCSC')
        .list(`event-images/${eventId}`)

      if (listError) throw listError

      if (files && files.length > 0) {
        // Get signed URLs for all files
        const images = await Promise.all(
          files.map(async (file) => {
            const { data: { signedUrl }, error } = await supabase.storage
              .from('CCSC')
              .createSignedUrl(`event-images/${eventId}/${file.name}`, 60 * 60) // 1 hour expiry

            if (error) {
              console.error('Error getting signed URL:', error)
              return null
            }
            
            return {
              name: file.name,
              url: signedUrl
            }
          })
        )
        // Filter out any null values from failed URL generations
        setEventImages(images.filter((image): image is EventImage => image !== null))
      } else {
        setEventImages([])
      }
    } catch (error) {
      console.error('Error fetching event images:', error)
      setEventImages([])
    } finally {
      setLoadingImages(false)
    }
  }

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetch('/api/events')
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Failed to fetch events:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadEvents()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/70">Loading events...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Eclipse 2025 Events</h1>
          <p className="text-xl text-foreground/70 font-serif">Discover every thrilling moment of competition</p>
        </div>

        <div className="grid gap-6">
          {events.map((event) => {
            const eventDate = new Date(event.date)
            const isSelected = selectedEvent === event.id

            return (
              <Card key={event.id} className="overflow-hidden border-2 hover:border-accent/50 transition-colors">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-foreground">{event.title}</h3>
                          <p className="text-accent font-serif font-semibold">{event.category}</p>
                        </div>
                      </div>
                        <Button
                          variant="outline"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedEvent(null)
                              setEventImages([])
                            } else {
                              setSelectedEvent(event.id)
                              fetchEventImages(event.id)
                            }
                          }}
                          className="font-serif"
                        >
                          {isSelected ? "Hide Gallery" : "View Gallery"}
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="text-sm font-serif text-foreground">
                          {eventDate.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm font-serif text-foreground">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-accent" />
                        <span className="text-sm font-serif text-foreground">All Houses</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 font-serif leading-relaxed">{event.description}</p>
                  </div>

                  {isSelected && (
                    <div className="border-t bg-card/50 p-6">
                      <h4 className="text-lg font-serif font-bold text-foreground mb-4">Event Gallery</h4>
                      {loadingImages ? (
                        <div className="flex items-center justify-center h-40">
                          <Loader2 className="h-6 w-6 animate-spin text-accent" />
                        </div>
                      ) : eventImages.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {eventImages.map((image, index) => (
                            <div
                              key={image.name}
                              className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                            >
                              <img
                                src={image.url}
                                alt={`${event.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground font-serif">No images available for this event.</p>
                      )}
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
