"use client"

import EmailLink from "@/components/email-link"

export default function Officers() {
  const officers = [
    {
      id: 1,
      name: "Jenny Howard",
      title: "President",
      email: { user: "Nortonpres", domain: "gmail.com" },
    },
    {
      id: 2,
      name: "Emily Munson",
      title: "VP of Programming",
      email: { user: "norton1vp", domain: "gmail.com" },
    },
    {
      id: 3,
      name: "Sarah Petrosky",
      title: "VP of Membership & Communications",
      email: { user: "Norton2ndvp", domain: "gmail.com" },
    },
    {
      id: 4,
      name: "Andrea McClure",
      title: "VP of Ways and Means",
      email: { user: "Norton3vp", domain: "gmail.com" },
    },
    {
      id: 5,
      name: "Jenny O'Donnell",
      title: "VP of Volunteers and Extras",
      email: { user: "norton4thvp", domain: "gmail.com" },
    },
    {
      id: 6,
      name: "Melissa Hines",
      title: "VP of Fundraising",
      email: { user: "norton5vp", domain: "gmail.com" },
    },
    {
      id: 7,
      name: "Allyson McCormick",
      title: "Treasurer",
      email: { user: "Nortontreas", domain: "gmail.com" },
    },
    {
      id: 8,
      name: "Katie White",
      title: "Secretary",
      email: { user: "nortonsecr", domain: "gmail.com" },
    },
    {
      id: 9,
      name: "Lisa Bohn",
      title: "Parliamentarian",
      email: { user: "nortonparliam", domain: "gmail.com" },
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-balance">PTA Leadership</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Meet the dedicated volunteers leading our PTA. Together, we're creating amazing experiences for our Norton
          Elementary community.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {officers.map((officer) => (
            <div key={officer.id} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-5xl">👤</div>
              </div>
              <h3 className="text-lg font-bold mb-1">
                <EmailLink
                  user={officer.email.user}
                  domain={officer.email.domain}
                  className="hover:text-primary underline-offset-4 hover:underline"
                >
                  {officer.name}
                </EmailLink>
              </h3>
              <p className="text-primary font-semibold text-sm">{officer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
