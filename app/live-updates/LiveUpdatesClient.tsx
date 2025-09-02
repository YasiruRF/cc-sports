"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Clock, TrendingUp, Users, Medal, Activity } from "lucide-react"

// Mock live data - in a real app, this would come from an API
const mockResults = [
  {
    event: "100m Sprint - Men's Final",
    time: "2:15 PM",
    status: "Completed",
    results: [
      { position: 1, name: "John Smith", house: "Red", time: "10.85s", record: true },
      { position: 2, name: "Mike Johnson", house: "Blue", time: "10.92s" },
      { position: 3, name: "David Lee", house: "Green", time: "11.01s" },
      { position: 4, name: "Alex Kumar", house: "Yellow", time: "11.15s" },
    ],
  },
  {
    event: "Long Jump - Women's Final",
    time: "1:45 PM",
    status: "Completed",
    results: [
      { position: 1, name: "Sarah Wilson", house: "Blue", distance: "5.85m" },
      { position: 2, name: "Emma Davis", house: "Red", distance: "5.72m" },
      { position: 3, name: "Lisa Chen", house: "Yellow", distance: "5.68m" },
      { position: 4, name: "Maya Patel", house: "Green", distance: "5.55m" },
    ],
  },
  {
    event: "Shot Put - Men's Final",
    time: "12:30 PM",
    status: "Completed",
    results: [
      { position: 1, name: "James Rodriguez", house: "Green", distance: "14.25m", record: true },
      { position: 2, name: "Tom Wilson", house: "Red", distance: "13.85m" },
      { position: 3, name: "Chris Brown", house: "Blue", distance: "13.42m" },
      { position: 4, name: "Ryan Kumar", house: "Yellow", distance: "12.98m" },
    ],
  },
]

const houseStandings = [
  { house: "Red", points: 85, color: "text-house-red", bgColor: "bg-house-red" },
  { house: "Blue", points: 78, color: "text-house-blue", bgColor: "bg-house-blue" },
  { house: "Green", points: 72, color: "text-house-green", bgColor: "bg-house-green" },
  { house: "Yellow", points: 65, color: "text-house-yellow", bgColor: "bg-house-yellow" },
]

const upcomingEvents = [
  { event: "200m Sprint - Finals", time: "3:30 PM", status: "Starting Soon" },
  { event: "4x100m Relay - Finals", time: "4:00 PM", status: "Upcoming" },
  { event: "High Jump - Finals", time: "4:30 PM", status: "Upcoming" },
]

const liveUpdates = [
  { time: "2:45 PM", message: "🏃‍♂️ 200m Sprint heats completed - all finalists confirmed!" },
  { time: "2:30 PM", message: "🏆 New Eclipse 2025 record set in Shot Put by James Rodriguez!" },
  { time: "2:15 PM", message: "⚡ Incredible 100m final - John Smith takes gold for Red House!" },
  { time: "2:00 PM", message: "🔥 Tug of War getting intense - Blue House showing great teamwork!" },
  { time: "1:45 PM", message: "🥇 Sarah Wilson soars to victory in Women's Long Jump!" },
]

export default function LiveUpdatesClient() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Live <span className="text-primary">Updates</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Real-time results and leaderboards from Eclipse 2025
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Activity className="h-5 w-5 text-green-500 animate-pulse" />
            <span className="text-green-500 font-semibold">LIVE</span>
            <span className="text-muted-foreground">
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>
      </section>

      {/* Live Status Bar */}
      <section className="py-4 bg-primary/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-green-500">
                <Activity className="h-3 w-3 mr-1" />
                LIVE
              </Badge>
              <span className="text-sm font-medium">Eclipse 2025 in Progress</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Trophy className="h-4 w-4 text-primary" />
                <span>8 Events Completed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-primary" />
                <span>7 Events Remaining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="leaderboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="leaderboard">House Standings</TabsTrigger>
              <TabsTrigger value="results">Latest Results</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="live-feed">Live Feed</TabsTrigger>
            </TabsList>

            {/* House Standings */}
            <TabsContent value="leaderboard" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    Current House Standings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {houseStandings.map((house, index) => (
                      <div key={house.house} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl font-bold text-muted-foreground">#{index + 1}</div>
                          <div className={`w-12 h-12 ${house.bgColor} rounded-full flex items-center justify-center`}>
                            <span className="text-white font-bold">{house.house.charAt(0)}</span>
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold ${house.color}`}>{house.house} House</h3>
                            <p className="text-sm text-muted-foreground">
                              {index === 0 ? "Leading" : `${houseStandings[0].points - house.points} points behind`}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">{house.points}</div>
                          <div className="text-sm text-muted-foreground">Points</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Medal className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Gold Medals Awarded</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Records Broken</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">450+</div>
                    <div className="text-sm text-muted-foreground">Athletes Participated</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Latest Results */}
            <TabsContent value="results" className="space-y-6">
              {mockResults.map((result, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{result.event}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{result.status}</Badge>
                        <span className="text-sm text-muted-foreground">{result.time}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.results.map((athlete, pos) => (
                        <div
                          key={pos}
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            athlete.position === 1
                              ? "bg-yellow-50 border border-yellow-200"
                              : athlete.position === 2
                                ? "bg-gray-50 border border-gray-200"
                                : athlete.position === 3
                                  ? "bg-orange-50 border border-orange-200"
                                  : "bg-muted"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                athlete.house === "Red"
                                  ? "bg-house-red"
                                  : athlete.house === "Blue"
                                    ? "bg-house-blue"
                                    : athlete.house === "Green"
                                      ? "bg-house-green"
                                      : "bg-house-yellow"
                              }`}
                            >
                              {athlete.position}
                            </div>
                            <div>
                              <h4 className="font-semibold">{athlete.name}</h4>
                              <p className="text-sm text-muted-foreground">{athlete.house} House</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">
                              {athlete.time || athlete.distance}
                              {athlete.record && (
                                <Badge variant="default" className="ml-2 bg-red-500">
                                  RECORD
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    Next Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <h3 className="font-semibold">{event.event}</h3>
                          <p className="text-sm text-muted-foreground">Scheduled for {event.time}</p>
                        </div>
                        <Badge
                          variant={event.status === "Starting Soon" ? "default" : "secondary"}
                          className={event.status === "Starting Soon" ? "bg-green-500" : ""}
                        >
                          {event.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Live Feed */}
            <TabsContent value="live-feed" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                    Live Updates Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {liveUpdates.map((update, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground font-mono mt-1">{update.time}</div>
                        <div className="flex-1 text-sm">{update.message}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
