"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[288px] md:h-[404px] lg:h-[504px] flex items-center justify-center overflow-hidden">
      <Image
        src="/norton-hero-banner.jpg"
        alt="Students from Norton Elementary smiling together"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 15%" }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white translate-y-8 md:translate-y-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Welcome to the Norton Elementary PTA
        </h1>
        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto opacity-95">
          Building community, supporting excellence, and creating amazing experiences for our Cougar families and
          teachers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://norton.givebacks.com/shop/items/872922"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Join the PTA
          </a>
          <a
            href="https://norton.givebacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  )
}
