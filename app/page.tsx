import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Intro Blurb */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl pixel-font mb-6 text-gold tracking-wide">Welcome to Bitfest</h2>
          <p className="text-lg max-w-3xl mx-auto">
            The Computer Association of Pillai College proudly presents Bitfest, a celebration of technology,
            innovation, and creativity. Join us for an unforgettable experience where everything starts with a bit.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Events Preview */}
      <section className="py-16 bg-gray-100 pixel-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl pixel-font mb-12 text-center text-navy tracking-wide">Featured Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-navy hover:border-gold transition-all">
              <div className="h-48 relative">
                <Image src="/images/coding-event.png" alt="Escape the Loop Event" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold/80 rounded-lg flex items-center justify-center">
                    <span className="text-navy font-bold text-xl">{"</>"}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="pixel-font text-lg mb-2 tracking-wide">Escape the Loop</h3>
                <p className="text-gray-600 mb-4">Test your problem-solving skills in this coding challenge.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold">₹100</span>
                  <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    <Link href="/events">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-navy hover:border-gold transition-all">
              <div className="h-48 relative">
                <Image src="/images/hackathon.png" alt="Bug Buster Event" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold/80 rounded-lg flex items-center justify-center">
                    <span className="text-navy font-bold text-xl">🐛</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="pixel-font text-lg mb-2 tracking-wide">Bug Buster</h3>
                <p className="text-gray-600 mb-4">Find and fix bugs in code snippets against the clock.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold">₹100</span>
                  <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    <Link href="/events">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-navy hover:border-gold transition-all">
              <div className="h-48 relative">
                <Image src="/images/tech-conference.png" alt="Mr & Miss Bitfest Event" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold/80 rounded-lg flex items-center justify-center">
                    <span className="text-navy font-bold text-xl">👑</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="pixel-font text-lg mb-2 tracking-wide">Mr & Miss Bitfest</h3>
                <p className="text-gray-600 mb-4">Showcase your talent and personality in this flagship competition.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold">₹200</span>
                  <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    <Link href="/events">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-navy text-white hover:bg-navy/80">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Workshops Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl pixel-font mb-12 text-center text-navy tracking-wide">
            Workshops & Sessions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workshop 1 */}
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gold relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Image src="/images/workshop.png" alt="Workshop" width={60} height={60} className="rounded" />
              </div>
              <h3 className="pixel-font text-lg mb-4 text-navy tracking-wide">Ethical Hacking & Cyber Security</h3>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of ethical hacking and protecting digital assets.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">₹50</span>
                <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  <Link href="/workshops">Details</Link>
                </Button>
              </div>
            </div>

            {/* Workshop 2 */}
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gold relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Image
                  src="/images/tech-conference.png"
                  alt="Cloud Workshop"
                  width={60}
                  height={60}
                  className="rounded"
                />
              </div>
              <h3 className="pixel-font text-lg mb-4 text-navy tracking-wide">Cloud Computing & DevOps</h3>
              <p className="text-gray-600 mb-4">Explore cloud infrastructure and modern development operations.</p>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">₹50</span>
                <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  <Link href="/workshops">Details</Link>
                </Button>
              </div>
            </div>

            {/* Workshop 3 */}
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gold relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Image
                  src="/images/coding-event.png"
                  alt="Trading Workshop"
                  width={60}
                  height={60}
                  className="rounded"
                />
              </div>
              <h3 className="pixel-font text-lg mb-4 text-navy tracking-wide">Strategic Trading & Investment</h3>
              <p className="text-gray-600 mb-4">Master the basics of financial markets and investment strategies.</p>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">₹50</span>
                <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  <Link href="/workshops">Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl pixel-font mb-6 text-gold tracking-wide">Ready to Join Bitfest?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Don't miss out on the biggest tech fest of the year. Register now to participate in exciting events,
            workshops, and networking opportunities.
          </p>
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/80 text-lg px-8">
            <Link href="/schedule-registration">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
