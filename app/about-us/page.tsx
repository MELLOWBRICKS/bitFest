import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Aditya Sharma",
    role: "President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Priya Patel",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Rahul Gupta",
    role: "Technical Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Neha Singh",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Vikram Desai",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Ananya Reddy",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">About Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              The Computer Association at Pillai College is a student-led organization dedicated to fostering
              technological innovation and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* History & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-2xl pixel-font mb-6 text-navy">Our Mission & Vision</h2>
              <p className="text-gray-700 mb-4">
                The Computer Association at Pillai College of Arts, Commerce & Science was established with the mission
                to bridge the gap between academic learning and practical application in the field of technology.
              </p>
              <p className="text-gray-700 mb-4">
                Our vision is to create a community of tech enthusiasts who collaborate, innovate, and excel in various
                domains of computer science and information technology. We aim to provide a platform for students to
                showcase their talents and develop skills that are essential in today's digital world.
              </p>
              <p className="text-gray-700">
                The association brings together students from various departments including Computer Science,
                Information Technology, BCA, and AI/ML, fostering interdisciplinary collaboration and learning.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 relative overflow-hidden rounded-lg">
                <Image src="/images/team-photo.png" alt="Computer Association Team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-16 bg-gray-100 pixel-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl pixel-font mb-12 text-navy text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gold"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-lg">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="pixel-font text-lg mb-1 text-navy text-center">{member.name}</h3>
                <p className="text-gold text-center mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-gold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-gold transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl pixel-font mb-6 text-gold">Join Our Community</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Interested in becoming a part of the Computer Association? We're always looking for passionate individuals
            to join our team.
          </p>
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/80">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
