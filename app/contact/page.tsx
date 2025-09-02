"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Users,
  MessageSquare,
  Calendar,
} from "lucide-react"

const organizers = [
  {
    name: "Sarah Johnson",
    role: "Event Director",
    email: "sarah.johnson@curtin.edu.lk",
    phone: "+94 11 123 4567",
    department: "Sports Committee",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    email: "michael.chen@curtin.edu.lk",
    phone: "+94 11 123 4568",
    department: "Student Guild",
  },
  {
    name: "Priya Patel",
    role: "House Coordinator",
    email: "priya.patel@curtin.edu.lk",
    phone: "+94 11 123 4569",
    department: "Sports Committee",
  },
]

const contactReasons = [
  "General Inquiry",
  "Registration Question",
  "House Information",
  "Sponsorship Opportunity",
  "Media & Press",
  "Volunteer Application",
  "Technical Support",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    })
    setIsSubmitting(false)

    // In a real app, you would send this data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Get in touch with the Eclipse 2025 organizing team
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+94 XX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reason">Inquiry Type *</Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) => handleInputChange("reason", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactReasons.map((reason) => (
                              <SelectItem key={reason} value={reason}>
                                {reason}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">General Inquiries</p>
                      <p className="text-muted-foreground">eclipse2025@curtin.edu.lk</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Event Hotline</p>
                      <p className="text-muted-foreground">+94 11 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">
                        Curtin University Colombo
                        <br />
                        Torrington Grounds, Colombo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Eclipse 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Stay updated with the latest news and announcements</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Registration Deadline</span>
                    <span className="text-sm font-semibold text-primary">Sept 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Event Day</span>
                    <span className="text-sm font-semibold text-primary">Sept 20, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Venue Setup</span>
                    <span className="text-sm font-semibold text-primary">Sept 19, 2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Team */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Organizing Team</h2>
            <p className="text-lg text-muted-foreground">The dedicated team behind Eclipse 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{organizer.name}</h3>
                  <p className="text-primary font-semibold mb-1">{organizer.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{organizer.department}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{organizer.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{organizer.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions about Eclipse 2025</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I register for Eclipse 2025?</h3>
                <p className="text-muted-foreground">
                  Registration is open to all current Curtin University Colombo students. Visit our Event Details page
                  for registration forms and deadlines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can spectators attend the event?</h3>
                <p className="text-muted-foreground">
                  Yes! Eclipse 2025 is open to spectators including family, friends, and the general public. Entry is
                  free for all attendees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What should I bring on event day?</h3>
                <p className="text-muted-foreground">
                  Bring your student ID, appropriate athletic wear, water bottle, and sun protection. All sports
                  equipment will be provided.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How are house assignments made?</h3>
                <p className="text-muted-foreground">
                  House assignments are typically based on your faculty or program. Contact our House Coordinator for
                  specific assignment questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Eclipse 2025?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on Curtin University Colombo's inaugural sports meet. Register now and be part of history!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              View Event Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Contact Us - Eclipse 2025",
  description:
    "Get in touch with the Eclipse 2025 organizing team. Contact information, inquiry form, and frequently asked questions for Curtin University Colombo's inaugural sports meet.",
}
