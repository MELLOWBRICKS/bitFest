"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.png",
    alt: "Coding Competition",
    category: "events",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Tech Workshop",
    category: "workshops",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Hackathon",
    category: "events",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Panel Discussion",
    category: "sessions",
  },
  {
    src: "/images/gallery-5.png",
    alt: "Team Building",
    category: "events",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Award Ceremony",
    category: "events",
  },
  {
    src: "/images/coding-event.png",
    alt: "Programming Contest",
    category: "events",
  },
  {
    src: "/images/hackathon.png",
    alt: "Bitfest Hackathon",
    category: "events",
  },
  {
    src: "/images/tech-conference.png",
    alt: "Tech Conference",
    category: "sessions",
  },
  {
    src: "/images/workshop.png",
    alt: "Cloud Computing Workshop",
    category: "workshops",
  },
  {
    src: "/images/team-photo.png",
    alt: "Organizing Team",
    category: "team",
  },
  {
    src: "/images/hero-bg.png",
    alt: "Bitfest Opening",
    category: "events",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState("all")

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">Gallery</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">Explore memorable moments from previous Bitfest events.</p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={
                filter === "all" ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"
              }
            >
              All
            </Button>
            <Button
              variant={filter === "events" ? "default" : "outline"}
              onClick={() => setFilter("events")}
              className={
                filter === "events" ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"
              }
            >
              Events
            </Button>
            <Button
              variant={filter === "workshops" ? "default" : "outline"}
              onClick={() => setFilter("workshops")}
              className={
                filter === "workshops" ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"
              }
            >
              Workshops
            </Button>
            <Button
              variant={filter === "sessions" ? "default" : "outline"}
              onClick={() => setFilter("sessions")}
              className={
                filter === "sessions" ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"
              }
            >
              Sessions
            </Button>
            <Button
              variant={filter === "team" ? "default" : "outline"}
              onClick={() => setFilter("team")}
              className={
                filter === "team" ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"
              }
            >
              Team
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-64 overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all flex items-end">
                  <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="pixel-text-lg mb-1">{image.alt}</h3>
                    <p className="text-sm capitalize opacity-80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <Button
              className="absolute top-4 right-4 bg-gold text-navy p-2 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </Button>
            <div className="relative w-full h-5/6">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
