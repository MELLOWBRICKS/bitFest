import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Gamepad2, Settings, Laptop, Cpu, Code, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="pixel-pattern p-1 inline-block mb-6 animate-pixel-float">
          <div className="bg-navy p-2 border-2 border-gold">
            <h1 className="text-xl sm:text-2xl md:text-4xl pixel-font text-gold tracking-wider">BITFEST 2025</h1>
          </div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center max-w-2xl pixel-font leading-relaxed tracking-wide">
          Everything Starts with a Bit
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/80 text-lg px-8">
            <Link href="/schedule-registration">Register Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8">
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>
      </div>

      {/* Tech-themed floating decorations */}
      <div className="absolute bottom-20 left-10 text-gold/30 hidden md:block animate-pulse">
        <Gamepad2 size={48} />
      </div>
      <div className="absolute top-32 right-20 text-gold/20 hidden md:block animate-bounce">
        <Settings size={32} />
      </div>
      <div className="absolute bottom-60 right-32 text-gold/25 hidden md:block animate-pulse">
        <Laptop size={40} />
      </div>
      <div className="absolute top-40 left-32 text-gold/15 hidden lg:block animate-bounce">
        <Cpu size={36} />
      </div>
      <div className="absolute bottom-32 right-10 text-gold/20 hidden md:block animate-pulse">
        <Code size={44} />
      </div>
      <div className="absolute top-60 left-20 text-gold/30 hidden lg:block animate-bounce">
        <Zap size={28} />
      </div>
    </div>
  )
}
