"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Announcements from "@/components/announcements"
import VolunteerSection from "@/components/volunteer-section"
import EventsShowcase from "@/components/events-showcase"
import CalendarSection from "@/components/calendar-section"
import Officers from "@/components/officers"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      <Hero />
      <Announcements />
      <VolunteerSection />
      <EventsShowcase />
      <CalendarSection />
      <Officers />
      <Footer />
    </main>
  )
}
