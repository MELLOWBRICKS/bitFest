import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Users, AlertCircle } from "lucide-react"

const events = [
  {
    id: "escape-the-loop",
    title: "Escape the Loop",
    description: "A coding challenge where participants must solve algorithmic problems within a time limit.",
    rules: [
      "Individual participation",
      "Time limit: 2 hours",
      "Languages allowed: C++, Java, Python",
      "Internet access will be restricted",
    ],
    prize: "₹5,000 for 1st place, ₹3,000 for 2nd place, ₹2,000 for 3rd place",
    fee: "₹100",
    category: "technical",
  },
  {
    id: "prison-break",
    title: "Prison Break",
    description:
      "A cybersecurity challenge where participants must find vulnerabilities and break through security systems.",
    rules: ["Teams of 2", "Time limit: 3 hours", "Bring your own laptop", "Only white-hat techniques allowed"],
    prize: "₹6,000 for 1st place, ₹4,000 for 2nd place",
    fee: "₹100",
    category: "technical",
  },
  {
    id: "live-ludo",
    title: "Live Ludo",
    description: "A life-sized version of the classic board game with tech-themed challenges at each step.",
    rules: [
      "Teams of 4",
      "90-minute game duration",
      "Tech trivia will determine dice rolls",
      "Special power-ups available",
    ],
    prize: "₹4,000 for winning team",
    fee: "₹100",
    category: "non-technical",
  },
  {
    id: "bug-buster",
    title: "Bug Buster",
    description: "Find and fix bugs in provided code snippets as quickly as possible.",
    rules: [
      "Individual participation",
      "Time limit: 1.5 hours",
      "Languages: JavaScript, Python, Java",
      "Points awarded for each bug fixed",
    ],
    prize: "₹4,000 for 1st place, ₹2,000 for 2nd place",
    fee: "₹100",
    category: "technical",
  },
  {
    id: "debate-competition",
    title: "Debate Competition",
    description: "Debate on tech-related topics and showcase your communication skills.",
    rules: [
      "Individual participation",
      "Topics will be provided 30 minutes before",
      "5 minutes per speaker",
      "Judged on content, clarity, and presentation",
    ],
    prize: "₹3,000 for 1st place, ₹1,500 for 2nd place",
    fee: "₹50",
    category: "non-technical",
  },
  {
    id: "mr-miss-bitfest",
    title: "Mr & Miss Bitfest 2025",
    description: "The flagship personality contest to find the face of Bitfest 2025.",
    rules: [
      "Individual participation",
      "Three rounds: Introduction, Talent, Q&A",
      "Tech-related talent preferred",
      "Formal attire required",
    ],
    prize: "₹10,000 for winners (one male, one female)",
    fee: "₹200",
    category: "non-technical",
  },
  {
    id: "chess",
    title: "Chess Tournament",
    description: "Test your strategic thinking in this classic game of intellect.",
    rules: [
      "Individual participation",
      "Swiss-system tournament",
      "15 minutes per player per game",
      "FIDE rules apply",
    ],
    prize: "₹2,500 for 1st place, ₹1,500 for 2nd place",
    fee: "₹50",
    category: "non-technical",
  },
]

export default function Events() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">Events & Competitions</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              Participate in a variety of technical and non-technical events designed to challenge your skills and
              creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-navy text-white hover:bg-navy/80">All Events</Button>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
              Technical
            </Button>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
              Non-Technical
            </Button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-gold transition-all"
              >
                <div className="bg-navy p-6">
                  <h2 className="pixel-font text-xl text-gold">{event.title}</h2>
                  <span className="inline-block mt-2 bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">
                    {event.category === "technical" ? "Technical" : "Non-Technical"}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{event.description}</p>

                  <h3 className="pixel-font text-sm mb-3 text-navy flex items-center">
                    <AlertCircle size={16} className="mr-2" /> Rules
                  </h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-700">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="mb-1">
                        {rule}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <Trophy size={20} className="text-gold mr-2" />
                      <span className="text-gray-700">{event.prize}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={20} className="text-navy mr-2" />
                      <span className="text-gray-700">
                        {event.rules[0].includes("Teams") ? event.rules[0] : "Individual"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
                    <div className="text-xl font-bold text-gold mb-4 sm:mb-0">{event.fee}</div>
                    <Button asChild className="bg-navy text-white hover:bg-navy/80">
                      <Link href="/schedule-registration">Register</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl pixel-font mb-12 text-navy text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">How do I register for events?</h3>
                <p className="text-gray-700">
                  You can register for events through our Schedule & Registration page. Select the events you want to
                  participate in, fill out the form, and complete the payment process.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">Can I participate in multiple events?</h3>
                <p className="text-gray-700">
                  Yes, you can participate in multiple events as long as there are no schedule conflicts. Make sure to
                  check the event timings on our Schedule page.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">What should I bring to the events?</h3>
                <p className="text-gray-700">
                  For technical events, bring your college ID, registration confirmation, and a laptop if specified. For
                  non-technical events, specific requirements will be communicated after registration.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">Are there any prerequisites for participating?</h3>
                <p className="text-gray-700">
                  Most events are open to all college students. Some technical events may require basic programming
                  knowledge or specific skills, which are mentioned in the event descriptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl pixel-font mb-6 text-gold">Ready to Compete?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Don't miss your chance to showcase your skills, win exciting prizes, and make memories at Bitfest 2025.
          </p>
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/80">
            <Link href="/schedule-registration">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
