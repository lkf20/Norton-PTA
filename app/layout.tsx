import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Norton Elementary PTA | Louisville, KY",
  description:
    "Official website for Norton Elementary PTA. Join us, support our school community, and stay updated on events and announcements.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v24.0&appId=1568103561285615"
        ></script>
      </head>
      <body className={`font-sans antialiased`}>
        <div id="fb-root"></div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
