"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Youtube, Send } from "lucide-react"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulating form submission
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">Contact Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">Have questions about Bitfest? Need more information? Get in touch with us.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/10 text-navy flex items-center justify-center rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="pixel-text-lg text-navy mb-2">Address</h3>
              <p className="text-gray-600">
                Pillai College of Arts, Commerce & Science, New Panvel, Navi Mumbai, Maharashtra
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/10 text-navy flex items-center justify-center rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="pixel-text-lg text-navy mb-2">Phone</h3>
              <p className="text-gray-600">+91 1234567890</p>
              <p className="text-gray-600">+91 9876543210</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/10 text-navy flex items-center justify-center rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="pixel-text-lg text-navy mb-2">Email</h3>
              <p className="text-gray-600">bitfest@pillai.edu</p>
              <p className="text-gray-600">ca@pillai.edu</p>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/10 text-navy flex items-center justify-center rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h3 className="pixel-text-lg text-navy mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50 pixel-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl pixel-font mb-8 text-navy">Send a Message</h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                  <Button onClick={() => setFormSubmitted(false)} className="mt-4 bg-navy text-white hover:bg-navy/80">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Type your message here" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/80">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl pixel-font mb-8 text-navy">Our Location</h2>
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.669434523738!2d73.12113601490045!3d18.990206987144396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e866de88667f%3A0xc1c5d5badc610f5f!2sDr.%20K.%20M.%20Vasudevan%20Pillai%20Campus!5e0!3m2!1sen!2sin!4v1625647631186!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl pixel-font mb-12 text-navy">Connect With Us</h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white p-4 rounded-full hover:bg-gold transition-colors"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white p-4 rounded-full hover:bg-gold transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white p-4 rounded-full hover:bg-gold transition-colors"
            >
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
