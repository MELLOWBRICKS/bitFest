import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png",
]

export default function AboutBitfest() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">About Bitfest</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">Discover the story behind the second-largest tech fest at Pillai College.</p>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl pixel-font mb-6 text-navy">The Origins</h2>
              <p className="text-gray-700 mb-4">
                Bitfest was first conceptualized in 2018 by a group of enthusiastic computer science students who wanted
                to create a platform where technology and creativity could converge. What started as a small
                departmental event has now grown to become the second-largest fest at Pillai College.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, Bitfest has evolved from a one-day coding competition to a multi-day extravaganza
                featuring a diverse range of events, workshops, and sessions that cater to both technical and
                non-technical participants.
              </p>
              <p className="text-gray-700">
                Today, Bitfest attracts participants from colleges across Mumbai and Navi Mumbai, making it one of the
                most anticipated tech fests in the region.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="w-full h-80 relative overflow-hidden rounded-lg">
                <Image src="/images/coding-event.png" alt="First Bitfest Event" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-navy"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Story */}
      <section className="py-16 bg-gray-100 pixel-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl pixel-font mb-8 text-navy">Everything Starts with a Bit</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-navy">
              <p className="text-gray-700 mb-4">
                Our tagline "Everything Starts with a Bit" encapsulates the fundamental philosophy of computing and
                digital technology. Just as the binary digit (bit) is the basic unit of information in computing, we
                believe that every great technological innovation begins with a simple idea—a single bit.
              </p>
              <p className="text-gray-700 mb-4">
                This tagline also represents our belief in the power of small beginnings. Whether you're writing your
                first line of code or conceptualizing a complex system, everything starts with that initial step—that
                first bit.
              </p>
              <p className="text-gray-700">
                At Bitfest, we celebrate this journey from bits to breakthroughs, providing a platform for students to
                transform their ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl pixel-font mb-12 text-navy text-center">Past Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Bitfest highlight ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-navy text-white hover:bg-navy/80">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl pixel-font mb-12 text-navy text-center">Bitfest Timeline</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-navy text-gold p-3 inline-block pixel-font">2018</div>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-navy">
                <h3 className="pixel-font text-lg mb-2 text-navy">The Beginning</h3>
                <p className="text-gray-700">First edition of Bitfest with just three events and 100 participants.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-navy text-gold p-3 inline-block pixel-font">2020</div>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-navy">
                <h3 className="pixel-font text-lg mb-2 text-navy">Going Virtual</h3>
                <p className="text-gray-700">
                  Adapted to the pandemic with our first virtual edition, reaching 500+ participants.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-navy text-gold p-3 inline-block pixel-font">2022</div>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-navy">
                <h3 className="pixel-font text-lg mb-2 text-navy">Expansion</h3>
                <p className="text-gray-700">
                  Added non-technical events and workshops, becoming the second-largest fest at Pillai College.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-navy text-gold p-3 inline-block pixel-font">2025</div>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-navy">
                <h3 className="pixel-font text-lg mb-2 text-navy">Present Day</h3>
                <p className="text-gray-700">
                  Now featuring 15+ events, 5+ workshops, and expecting 1000+ participants from across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl pixel-font mb-6 text-gold">Be Part of Bitfest 2025</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join us for the biggest and best Bitfest yet. Register now to participate in exciting events, workshops, and
            create memories that will last a lifetime.
          </p>
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/80">
            <Link href="/schedule-registration">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
