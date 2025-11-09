"use client"

import Image from "next/image"

export default function EventsShowcase() {
  const events = [
    {
      id: 1,
      title: "Picture Day Makeup",
      date: "November 20, 2024",
      description:
        "Smile big! Makeup photos will be taken throughout the school day. Please send students prepared in their favorite picture-day outfit.",
      image: "/picture-day.png",
    },
    {
      id: 2,
      title: "Roller Skating Party @ Champs",
      date: "December 4, 2024 — 6:00 PM to 8:00 PM",
      description:
        "Join us at Champs for a night of skating and Cougar spirit! Cost is $10 per person, which includes skate rentals.",
      image: "/rollerskating.png",
    },
    {
      id: 3,
      title: "PTA Board Meeting",
      date: "December 10, 2024 — 8:00 AM",
      description:
        "Board members meet in the lunch room to plan upcoming initiatives. All PTA members are invited to attend and share ideas.",
      image: "/pta-meeting.png",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-balance">Upcoming Events</h2>
        <p className="text-muted-foreground mb-10 text-lg max-w-3xl">
          Mark your calendars and join us for these exciting activities and community gatherings hosted by school and the Norton
          Elementary PTA.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition">
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-primary font-semibold mb-1">{event.date}</p>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
