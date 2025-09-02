"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-20T08:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      <Card className="bg-card/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-muted-foreground font-medium">Days</div>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-muted-foreground font-medium">Hours</div>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-muted-foreground font-medium">Minutes</div>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-muted-foreground font-medium">Seconds</div>
        </CardContent>
      </Card>
    </div>
  )
}
