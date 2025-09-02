"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Video, Download, Eye, Calendar, Users } from "lucide-react"
import Image from "next/image"

const galleryItems = {
  all: [
    {
      id: 1,
      type: "image",
      src: "/athletes-running-on-track-during-sports-meet.png",
      title: "100m Sprint Finals",
      category: "Events",
      date: "Sept 20, 2025",
      description: "Intense competition during the 100m sprint finals",
    },
    {
      id: 2,
      type: "image",
      src: "/red-house-team-celebrating-victory-with-trophy.png",
      title: "Red House Victory",
      category: "Houses",
      date: "Sept 20, 2025",
      description: "Red House team celebrating their relay victory",
    },
    {
      id: 3,
      type: "video",
      src: "/opening-ceremony-with-colorful-house-parade.png",
      title: "Opening Ceremony Highlights",
      category: "Ceremony",
      date: "Sept 20, 2025",
      description: "Best moments from the Eclipse 2025 opening ceremony",
    },
    {
      id: 4,
      type: "image",
      src: "/athletes-training-on-field-with-coach.png",
      title: "Training Sessions",
      category: "Training",
      date: "Sept 15, 2025",
      description: "Athletes preparing for the big day",
    },
    {
      id: 5,
      type: "image",
      src: "/long-jump-athlete-in-mid-air-during-competition.png",
      title: "Long Jump Excellence",
      category: "Events",
      date: "Sept 20, 2025",
      description: "Record-breaking long jump performance",
    },
    {
      id: 6,
      type: "image",
      src: "/blue-house-supporters-cheering-in-stands.png",
      title: "House Spirit",
      category: "Houses",
      date: "Sept 20, 2025",
      description: "Blue House supporters showing their team spirit",
    },
    {
      id: 7,
      type: "video",
      src: "/relay-race-handoff-between-teammates.png",
      title: "4x100m Relay Drama",
      category: "Events",
      date: "Sept 20, 2025",
      description: "Thrilling relay race with perfect handoffs",
    },
    {
      id: 8,
      type: "image",
      src: "/behind-the-scenes-event-organization-setup.png",
      title: "Behind the Scenes",
      category: "Behind Scenes",
      date: "Sept 19, 2025",
      description: "Event setup and organization efforts",
    },
    {
      id: 9,
      type: "image",
      src: "/awards-ceremony-with-medals-presentation.png",
      title: "Awards Ceremony",
      category: "Ceremony",
      date: "Sept 20, 2025",
      description: "Medal presentations and recognition",
    },
    {
      id: 10,
      type: "image",
      src: "/green-house-team-group-photo-with-medals.png",
      title: "Green House Champions",
      category: "Houses",
      date: "Sept 20, 2025",
      description: "Green House team with their hard-earned medals",
    },
    {
      id: 11,
      type: "video",
      src: "/high-jump-athlete-clearing-bar-in-slow-motion.png",
      title: "High Jump Mastery",
      category: "Events",
      date: "Sept 20, 2025",
      description: "Spectacular high jump technique in action",
    },
    {
      id: 12,
      type: "image",
      src: "/yellow-house-team-strategy-meeting.png",
      title: "Team Strategy",
      category: "Houses",
      date: "Sept 20, 2025",
      description: "Yellow House planning their next moves",
    },
  ],
}

// Filter items by category
const getFilteredItems = (category: string) => {
  if (category === "all") return galleryItems.all
  return galleryItems.all.filter((item) => item.category.toLowerCase().replace(" ", "-") === category)
}

export default function GalleryClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = getFilteredItems(selectedCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Event <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Capturing the moments that made Eclipse 2025 unforgettable
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Events Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10</div>
              <div className="text-muted-foreground">Hours Documented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="houses">Houses</TabsTrigger>
              <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="behind-scenes">Behind Scenes</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="bg-black/50 text-white">
                              {item.type === "video" ? (
                                <Video className="h-3 w-3 mr-1" />
                              ) : (
                                <Camera className="h-3 w-3 mr-1" />
                              )}
                              {item.type}
                            </Badge>
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="bg-primary/80 text-primary-foreground">
                              {item.category}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 rounded-full p-3">
                              <Eye className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 line-clamp-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {item.date}
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                          <Image src={item.src || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.date}
                            </div>
                            <Badge variant="secondary">{item.category}</Badge>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Memories</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Were you part of Eclipse 2025? Share your photos and videos with us to be featured in our community gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Users className="h-4 w-4 mr-2" />
              Submit Your Photos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download All Photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
