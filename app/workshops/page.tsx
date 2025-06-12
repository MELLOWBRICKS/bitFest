import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { User, Calendar, MapPin, Laptop, CheckCircle } from "lucide-react"

const workshops = [
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Cyber Security",
    description:
      "Learn the fundamentals of ethical hacking, penetration testing, and how to protect digital assets from cyber threats.",
    instructor: "Rahul Sharma",
    instructorBio: "Certified Ethical Hacker with 8+ years of experience in cybersecurity",
    date: "March 15, 2025",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Lab 1",
    prerequisites: "Basic understanding of networking concepts",
    takeaways: [
      "Understanding of common vulnerabilities",
      "Hands-on experience with penetration testing tools",
      "Knowledge of security best practices",
      "Certificate of participation",
    ],
    fee: "₹50",
    image: "/images/hackathon.png",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & DevOps",
    description:
      "Explore cloud infrastructure, containerization, CI/CD pipelines, and modern development operations practices.",
    instructor: "Priya Mehta",
    instructorBio: "AWS Certified Solutions Architect with experience at leading tech companies",
    date: "March 16, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Computer Lab 2",
    prerequisites: "Basic understanding of operating systems and networking",
    takeaways: [
      "Understanding of cloud service models",
      "Hands-on experience with Docker and Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Certificate of participation",
    ],
    fee: "₹50",
    image: "/images/tech-conference.png",
  },
  {
    id: "strategic-trading",
    title: "Strategic Trading & Investment",
    description:
      "Master the basics of financial markets, technical analysis, and develop strategies for smart investments.",
    instructor: "Vikram Kapoor",
    instructorBio: "Financial analyst with 10+ years of experience in investment banking",
    date: "March 17, 2025",
    time: "11:00 AM - 2:00 PM",
    venue: "Seminar Hall",
    prerequisites: "No prior experience required",
    takeaways: [
      "Understanding of market fundamentals",
      "Ability to read market trends",
      "Knowledge of investment strategies",
      "Certificate of participation",
    ],
    fee: "₹50",
    image: "/images/coding-event.png",
  },
]

export default function Workshops() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">Workshops & Sessions</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              Enhance your skills and knowledge with our expert-led workshops covering trending technologies and
              domains.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-gold transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Workshop Image */}
                  <div className="relative h-60 md:h-auto">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gold/90 px-4 py-2 rounded-lg">
                        <span className="text-navy pixel-font">WORKSHOP</span>
                      </div>
                    </div>
                  </div>

                  {/* Workshop Details */}
                  <div className="p-6 md:col-span-2">
                    <h2 className="pixel-font text-xl mb-4 text-navy">{workshop.title}</h2>
                    <p className="text-gray-700 mb-6">{workshop.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <User size={18} className="text-gold mr-2" />
                        <div>
                          <p className="font-medium text-navy">{workshop.instructor}</p>
                          <p className="text-sm text-gray-600">{workshop.instructorBio}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={18} className="text-gold mr-2" />
                        <div>
                          <p className="font-medium text-navy">{workshop.date}</p>
                          <p className="text-sm text-gray-600">{workshop.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={18} className="text-gold mr-2" />
                        <span className="text-gray-700">{workshop.venue}</span>
                      </div>
                      <div className="flex items-center">
                        <Laptop size={18} className="text-gold mr-2" />
                        <span className="text-gray-700">{workshop.prerequisites}</span>
                      </div>
                    </div>

                    <h3 className="font-medium text-navy mb-3">What You'll Learn:</h3>
                    <div className="mb-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {workshop.takeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
                      <div className="text-xl font-bold text-gold mb-4 sm:mb-0">{workshop.fee}</div>
                      <Button asChild className="bg-navy text-white hover:bg-navy/80">
                        <Link href="/schedule-registration">Register Now</Link>
                      </Button>
                    </div>
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
                <h3 className="pixel-font text-lg mb-2 text-navy">Do I need to bring my laptop?</h3>
                <p className="text-gray-700">
                  Yes, for technical workshops like Ethical Hacking and Cloud Computing, you should bring your laptop.
                  For other workshops, we'll specify the requirements in the confirmation email after registration.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">Will I receive a certificate?</h3>
                <p className="text-gray-700">
                  Yes, all workshop participants will receive a certificate of participation issued by the Computer
                  Association of Pillai College.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">Can I register for multiple workshops?</h3>
                <p className="text-gray-700">
                  You can register for multiple workshops. Just make sure there are no schedule conflicts, as we cannot
                  offer refunds due to timing clashes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="pixel-font text-lg mb-2 text-navy">What if I miss a workshop?</h3>
                <p className="text-gray-700">
                  Unfortunately, we don't offer refunds for missed workshops. However, workshop materials will be shared
                  with all registered participants via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl pixel-font mb-6 text-gold">Ready to Upgrade Your Skills?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Don't miss this opportunity to learn from industry experts and enhance your knowledge. Register for our
            workshops today!
          </p>
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/80">
            <Link href="/schedule-registration">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
