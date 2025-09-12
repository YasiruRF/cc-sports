"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { eventDates } from "@/data/dates"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date(eventDates.countdownTarget).getTime()

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
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">The Eclipse Begins In</h2>
        <p className="text-lg mb-12 opacity-90 text-balance">
          Get ready for the most spectacular sports event of the year
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.days}</div>
              <div className="text-sm uppercase tracking-wide">Days</div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.hours}</div>
              <div className="text-sm uppercase tracking-wide">Hours</div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.minutes}</div>
              <div className="text-sm uppercase tracking-wide">Minutes</div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.seconds}</div>
              <div className="text-sm uppercase tracking-wide">Seconds</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
