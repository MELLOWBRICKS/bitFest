import { Code, Palette, Users } from "lucide-react"

const features = [
  {
    title: "Technology Rivalry",
    description: "Hackathons, coding duels, AI challenges",
    icon: Code,
  },
  {
    title: "Creativity & Fun",
    description: "Design sprints, art jams, debate",
    icon: Palette,
  },
  {
    title: "Industry Insights",
    description: "Workshops, panels, networking",
    icon: Users,
  },
]

export default function FeatureSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border-2 border-navy hover:border-gold transition-colors group"
            >
              <div className="w-16 h-16 mb-6 bg-navy text-gold rounded-lg flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl pixel-font mb-4 text-navy tracking-wide">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
