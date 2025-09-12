import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Video, Download } from "lucide-react"
import { galleryItems } from "@/data/gallery"

export function GallerySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Event Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Capture the moments, celebrate the victories, and relive the excitement of Eclipse 2025 through our
            comprehensive photo and video gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src={`/abstract-geometric-shapes.png?height=250&width=400&query=${item.query}`}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Video className="h-12 w-12 text-white" />
                  ) : (
                    <Camera className="h-12 w-12 text-white" />
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.type === "video" ? "Video Collection" : "Photo Gallery"}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Gallery will be updated live during and after the event</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="font-serif bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download Media Kit
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif">
              View Full Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
