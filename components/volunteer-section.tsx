"use client"

import Image from "next/image"

import EmailLink from "@/components/email-link"

const volunteerOpportunities = [
  {
    id: 1,
      title: "Clothing Assistance Program",
      description:
        "The Clothing Assistance Program (CAP) works with JCPS to provide free clothing, shoes, and uniforms to students in need. Norton volunteers are needed 11/11 and 11/13 from 10-1pm. Thank you for signing up!",
    image: "/clothing-assistance.png",
    contact: {
      user: "Nortonvolunteers",
      domain: "gmail.com",
      subject: "Volunteer Interest - Clothing Assistance Program",
    },
  },
  {
    id: 2,
    title: "Donate Canned Goods",
    description:
      "JCPS is collecting non-perishable food items to help families in need. You may drop off donations in the front office.",
    image: "/food-drive.png",
    contact: {
      user: "Nortonvolunteers",
      domain: "gmail.com",
      subject: "Volunteer Interest - Donate Canned Goods",
    },
  },
  {
    id: 3,
    title: "Countdown to Winter Break",
    description:
      "Let's make the last week of school before winter break extra special for our teachers. Sign up for volunteer opportunities.",
    image: "/winter-break.png",
    contact: {
      user: "Nortonvolunteers",
      domain: "gmail.com",
      subject: "Volunteer Interest - Countdown to Winter Break",
    },
  },
]

export default function VolunteerSection() {
  return (
    <section className="pt-6 pb-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="mb-4 max-w-sm">
              <Image
                src="/Lend-a-Paw_black.PNG"
                alt="Lend a Paw typography with paw print"
                width={640}
                height={240}
                priority
                className="w-full h-auto"
                style={{
                  filter:
                    "invert(19%) sepia(67%) saturate(912%) hue-rotate(324deg) brightness(88%) contrast(101%)",
                }}
              />
            </div>
            <h2 className="text-4xl font-bold text-balance">Volunteer Opportunities</h2>
            <p className="text-muted-foreground text-lg mt-3 max-w-3xl">
              Share your time and talents to make a difference for Norton Elementary students. Explore the roles below or
              reach out to learn about more ways to help.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {volunteerOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-background rounded-lg border border-border hover:shadow-lg transition flex flex-col"
            >
              {opportunity.image && (
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    width={640}
                    height={320}
                    className="w-full h-48 object-cover"
                    priority
                  />
                </div>
              )}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{opportunity.description}</p>
                </div>
                <EmailLink
                  user={opportunity.contact.user}
                  domain={opportunity.contact.domain}
                  subject={opportunity.contact.subject}
                  variant="button"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition"
                >
                  Sign Up
                  <span aria-hidden="true">→</span>
                </EmailLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

