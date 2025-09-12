import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Contact & Support</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Have questions about Eclipse 2025? Need support with registration or event details? We're here to help make
            your experience seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif">
                  <Mail className="h-6 w-6 text-accent" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">General Inquiries</p>
                <p className="font-medium">eclipse2025@curtin.edu.lk</p>
                <p className="text-muted-foreground mb-2 mt-4">CCSC Committee</p>
                <p className="font-medium">ccsc@curtin.edu.lk</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif">
                  <Phone className="h-6 w-6 text-accent" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Event Hotline</p>
                <p className="font-medium">+94 11 2 123 456</p>
                <p className="text-sm text-muted-foreground mt-2">Available Mon-Fri, 9:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif">
                  <MapPin className="h-6 w-6 text-accent" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Curtin Colombo Campus</p>
                <p className="font-medium">
                  No. 12A, Rajagiriya Gardens
                  <br />
                  Rajagiriya, Sri Lanka
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-serif">
                <MessageCircle className="h-6 w-6 text-accent" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Your first name" className="font-serif" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" className="font-serif" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="font-serif" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="What's this about?" className="font-serif" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea placeholder="Tell us how we can help you..." rows={4} className="font-serif" />
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
