"use client"

export default function CalendarSection() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-balance">School & PTA Calendar</h2>

        <p className="text-muted-foreground text-lg max-w-3xl mb-6">
          Stay in the loop with Norton PTA activities and key school dates. Add this calendar to your own Google account so
          updates appear automatically.
        </p>

        <div className="bg-background rounded-3xl p-6 md:p-10 border border-border shadow-sm">
          <div className="flex md:justify-end mb-6">
            <a
              href="https://calendar.google.com/calendar/u/0/r?cid=c_6fj49msq7u1nkvvdab327j9s7g@group.calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-sm hover:opacity-90 transition"
            >
              Open in Google Calendar
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_6fj49msq7u1nkvvdab327j9s7g%40group.calendar.google.com&ctz=America%2FNew_York"
            title="Norton PTA Google Calendar"
            className="mt-8 w-full rounded-2xl border border-border/60 shadow-sm"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            style={{ height: "900px" }}
          ></iframe>
        </div>
      </div>
    </section>
  )
}
