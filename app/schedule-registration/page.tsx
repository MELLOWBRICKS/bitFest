"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, AlertCircle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const scheduleData = {
  day1: [
    {
      time: "09:00 AM - 10:00 AM",
      event: "Opening Ceremony",
      category: "general",
      location: "Main Auditorium",
    },
    {
      time: "10:30 AM - 12:30 PM",
      event: "Escape the Loop",
      category: "technical",
      location: "Computer Lab 1",
    },
    {
      time: "10:30 AM - 12:30 PM",
      event: "Debate Competition",
      category: "non-technical",
      location: "Seminar Hall 2",
    },
    {
      time: "01:30 PM - 03:30 PM",
      event: "Bug Buster",
      category: "technical",
      location: "Computer Lab 2",
    },
    {
      time: "01:30 PM - 03:30 PM",
      event: "Chess Tournament",
      category: "non-technical",
      location: "Recreation Area",
    },
    {
      time: "04:00 PM - 06:00 PM",
      event: "Ethical Hacking Workshop",
      category: "workshop",
      location: "Computer Lab 1",
    },
  ],
  day2: [
    {
      time: "09:30 AM - 11:30 AM",
      event: "Prison Break",
      category: "technical",
      location: "Computer Lab 1",
    },
    {
      time: "09:30 AM - 11:30 AM",
      event: "Live Ludo",
      category: "non-technical",
      location: "Recreation Area",
    },
    {
      time: "01:00 PM - 03:00 PM",
      event: "Cloud Computing Workshop",
      category: "workshop",
      location: "Computer Lab 2",
    },
    {
      time: "03:30 PM - 05:30 PM",
      event: "Strategic Trading Workshop",
      category: "workshop",
      location: "Seminar Hall 1",
    },
    {
      time: "06:00 PM - 08:00 PM",
      event: "Mr & Miss Bitfest",
      category: "non-technical",
      location: "Main Auditorium",
    },
  ],
}

const events = [
  { id: "escape-loop", name: "Escape the Loop", fee: 100, category: "technical" },
  { id: "prison-break", name: "Prison Break", fee: 100, category: "technical" },
  { id: "live-ludo", name: "Live Ludo", fee: 100, category: "non-technical" },
  { id: "bug-buster", name: "Bug Buster", fee: 100, category: "technical" },
  { id: "debate", name: "Debate Competition", fee: 50, category: "non-technical" },
  { id: "mr-miss", name: "Mr & Miss Bitfest", fee: 200, category: "non-technical" },
  { id: "chess", name: "Chess Tournament", fee: 50, category: "non-technical" },
]

const workshops = [
  { id: "ethical-hacking", name: "Ethical Hacking & Cyber Security", fee: 50 },
  { id: "cloud-computing", name: "Cloud Computing & DevOps", fee: 50 },
  { id: "strategic-trading", name: "Strategic Trading & Investment", fee: 50 },
]

export default function ScheduleRegistration() {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([])
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState("all")
  const [submitted, setSubmitted] = useState(false)

  const handleEventChange = (eventId: string, checked: boolean) => {
    setSelectedEvents((prev) => {
      if (checked) {
        const event = events.find((e) => e.id === eventId)
        if (event) {
          setTotal((prevTotal) => prevTotal + event.fee)
        }
        return [...prev, eventId]
      } else {
        const event = events.find((e) => e.id === eventId)
        if (event) {
          setTotal((prevTotal) => prevTotal - event.fee)
        }
        return prev.filter((id) => id !== eventId)
      }
    })
  }

  const handleWorkshopChange = (workshopId: string, checked: boolean) => {
    setSelectedWorkshops((prev) => {
      if (checked) {
        const workshop = workshops.find((w) => w.id === workshopId)
        if (workshop) {
          setTotal((prevTotal) => prevTotal + workshop.fee)
        }
        return [...prev, workshopId]
      } else {
        const workshop = workshops.find((w) => w.id === workshopId)
        if (workshop) {
          setTotal((prevTotal) => prevTotal - workshop.fee)
        }
        return prev.filter((id) => id !== workshopId)
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form validation would go here
    setSubmitted(true)
  }

  const filteredScheduleDay1 =
    filter === "all"
      ? scheduleData.day1
      : scheduleData.day1.filter((item) => item.category === filter || item.category === "general")

  const filteredScheduleDay2 =
    filter === "all"
      ? scheduleData.day2
      : scheduleData.day2.filter((item) => item.category === filter || item.category === "general")

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pixel-font mb-6 text-gold text-center">Schedule & Registration</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              View the complete schedule of Bitfest 2025 events and register to participate.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl pixel-font mb-8 text-navy text-center">Event Schedule</h2>

          <div className="mb-6 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "all" ? "bg-navy text-white" : "bg-white text-navy hover:bg-gray-100"
                } border border-navy rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "technical" ? "bg-navy text-white" : "bg-white text-navy hover:bg-gray-100"
                } border-t border-b border-navy focus:outline-none focus:ring-2 focus:ring-navy`}
                onClick={() => setFilter("technical")}
              >
                Technical
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "non-technical" ? "bg-navy text-white" : "bg-white text-navy hover:bg-gray-100"
                } border-t border-b border-navy focus:outline-none focus:ring-2 focus:ring-navy`}
                onClick={() => setFilter("non-technical")}
              >
                Non-Technical
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "workshop" ? "bg-navy text-white" : "bg-white text-navy hover:bg-gray-100"
                } border border-navy rounded-r-md focus:outline-none focus:ring-2 focus:ring-navy`}
                onClick={() => setFilter("workshop")}
              >
                Workshops
              </button>
            </div>
          </div>

          <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="day1" className="pixel-text-lg">
                Day 1 (Mar 15)
              </TabsTrigger>
              <TabsTrigger value="day2" className="pixel-text-lg">
                Day 2 (Mar 16)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="day1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-navy text-white border-b">
                        <th className="px-6 py-3">Time</th>
                        <th className="px-6 py-3">Event</th>
                        <th className="px-6 py-3">Location</th>
                        <th className="px-6 py-3">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredScheduleDay1.map((item, index) => (
                        <tr
                          key={index}
                          className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                        >
                          <td className="px-6 py-4 flex items-center">
                            <Clock className="inline-block mr-2 text-gold h-4 w-4" /> {item.time}
                          </td>
                          <td className="px-6 py-4 font-medium">{item.event}</td>
                          <td className="px-6 py-4">{item.location}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                item.category === "technical"
                                  ? "bg-blue-100 text-blue-800"
                                  : item.category === "non-technical"
                                    ? "bg-green-100 text-green-800"
                                    : item.category === "workshop"
                                      ? "bg-purple-100 text-purple-800"
                                      : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {item.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="day2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-navy text-white border-b">
                        <th className="px-6 py-3">Time</th>
                        <th className="px-6 py-3">Event</th>
                        <th className="px-6 py-3">Location</th>
                        <th className="px-6 py-3">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredScheduleDay2.map((item, index) => (
                        <tr
                          key={index}
                          className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                        >
                          <td className="px-6 py-4 flex items-center">
                            <Clock className="inline-block mr-2 text-gold h-4 w-4" /> {item.time}
                          </td>
                          <td className="px-6 py-4 font-medium">{item.event}</td>
                          <td className="px-6 py-4">{item.location}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                item.category === "technical"
                                  ? "bg-blue-100 text-blue-800"
                                  : item.category === "non-technical"
                                    ? "bg-green-100 text-green-800"
                                    : item.category === "workshop"
                                      ? "bg-purple-100 text-purple-800"
                                      : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {item.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl pixel-font mb-12 text-navy text-center">Registration Form</h2>

            {submitted ? (
              <div className="text-center">
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
                  <p className="font-bold">Registration Successful!</p>
                  <p>Your registration has been received. Please check your email for confirmation details.</p>
                </div>
                <Button onClick={() => setSubmitted(false)} className="bg-navy text-white hover:bg-navy/80">
                  Register Another Participant
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-4 text-navy">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="college">College Name</Label>
                      <Input id="college" placeholder="Enter your college name" required />
                    </div>
                  </div>
                </div>

                {/* Department & Year */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-4 text-navy">Academic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="bca">BCA</SelectItem>
                          <SelectItem value="aiml">AI & ML</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Study</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">First Year</SelectItem>
                          <SelectItem value="2">Second Year</SelectItem>
                          <SelectItem value="3">Third Year</SelectItem>
                          <SelectItem value="4">Fourth Year</SelectItem>
                          <SelectItem value="pg">Post Graduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Event Selection */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-4 text-navy">Event Selection</h3>
                  <p className="text-gray-600 mb-4">Select the events you want to participate in:</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-navy mb-2">Technical Events</h4>
                    <div className="space-y-3">
                      {events
                        .filter((e) => e.category === "technical")
                        .map((event) => (
                          <div key={event.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={event.id}
                              checked={selectedEvents.includes(event.id)}
                              onCheckedChange={(checked) => handleEventChange(event.id, checked === true)}
                            />
                            <Label htmlFor={event.id} className="cursor-pointer">
                              {event.name} - ₹{event.fee}
                            </Label>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-navy mb-2">Non-Technical Events</h4>
                    <div className="space-y-3">
                      {events
                        .filter((e) => e.category === "non-technical")
                        .map((event) => (
                          <div key={event.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={event.id}
                              checked={selectedEvents.includes(event.id)}
                              onCheckedChange={(checked) => handleEventChange(event.id, checked === true)}
                            />
                            <Label htmlFor={event.id} className="cursor-pointer">
                              {event.name} - ₹{event.fee}
                            </Label>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-navy mb-2">Workshops</h4>
                    <div className="space-y-3">
                      {workshops.map((workshop) => (
                        <div key={workshop.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={workshop.id}
                            checked={selectedWorkshops.includes(workshop.id)}
                            onCheckedChange={(checked) => handleWorkshopChange(workshop.id, checked === true)}
                          />
                          <Label htmlFor={workshop.id} className="cursor-pointer">
                            {workshop.name} - ₹{workshop.fee}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-4 text-navy">Payment Details</h3>
                  <div className="flex justify-between items-center p-4 bg-navy/5 rounded-md mb-4">
                    <span className="font-bold">Total Amount:</span>
                    <span className="text-xl font-bold text-gold">₹{total}</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-navy">Payment Method</h4>
                    <RadioGroup defaultValue="upi">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi">UPI</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking">Net Banking</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the terms and conditions and understand that registration fees are non-refundable.
                    </Label>
                  </div>
                </div>

                {/* Registration Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gold text-navy hover:bg-gold/80 text-lg px-8 py-6"
                    disabled={!total}
                  >
                    Complete Registration
                  </Button>

                  {!total && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Registration Required</AlertTitle>
                      <AlertDescription>Please select at least one event or workshop to register.</AlertDescription>
                    </Alert>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
