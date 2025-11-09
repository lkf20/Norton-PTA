"use client"

import Image from "next/image"

import EmailLink from "@/components/email-link"
import FacebookFeed from "@/components/facebook-feed"

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "PTA Reflections Calling for Submissions!",
      date: "November 8, 2024",
      content: (
        <div className="flex flex-col gap-4">
          <div>
            Please send entries to{" "}
            <EmailLink
              user="Norton1vp"
              domain="gmail.com"
              className="text-primary underline-offset-4 hover:underline font-semibold"
            >
              Norton1vp@gmail.com
            </EmailLink>{" "}
            no later than Wednesday, November 12. Entries need to be judged and submitted by November 14 at midnight.{" "}
            <a
              href="https://www.pta.org/home/programs/reflections"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline font-semibold"
            >
              Learn more at PTA.org/Reflections →
            </a>
          </div>
          <Image
            src="/PTA-reflections.png"
            alt="PTA Reflections: I Belong! Explore the arts and express yourself!"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl border border-border/60 bg-background/80"
            priority
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Norton Elementary Named Top School!",
      date: "October 29, 2024",
      content: (
        <>
          Congratulations to Norton Elementary School on being named one of the BEST Kentucky Elementary Schools for 2026!
          Way to go, Cougars!!!{" "}
          <a
            href="https://www.usnews.com/education/k12/elementary-schools/kentucky?brid=ez4wJL7VfCRQRcmqkoJnmw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline font-semibold"
          >
            Read the ranking →
          </a>
        </>
      ),
    },
  ]

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">News & Announcements</h2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition"
              >
                <p className="text-sm text-primary font-semibold mb-2">{announcement.date}</p>
                <h3 className="text-xl font-bold mb-3">{announcement.title}</h3>
                <div className="text-muted-foreground space-y-3 text-base leading-relaxed">
                  {announcement.content}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-lg border border-border p-4 lg:p-6">
            <FacebookFeed />
          </div>
        </div>
      </div>
    </section>
  )
}
