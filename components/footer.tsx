"use client"

import { Mail, MapPin } from "lucide-react"

import EmailLink from "@/components/email-link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Norton Elementary PTA</h3>
            <p className="opacity-90">
              Supporting our school through fundraising, volunteering, and community building events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 opacity-90">
              <li>
                <a
                  href="https://jefferson.kyschools.us/norton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition"
                >
                  School Website
                </a>
              </li>
              <li>
                <a
                  href="https://norton.givebacks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition"
                >
                  School Store
                </a>
              </li>
              <li>
                <a
                  href="https://norton.givebacks.com/shop/items/872922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition"
                >
                  Join the PTA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 opacity-90">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <EmailLink
                  user="Norton2ndvp"
                  domain="gmail.com"
                  className="hover:opacity-100 transition break-all"
                >
                  Norton2ndvp@gmail.com
                </EmailLink>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>
                  Norton Elementary School
                  <br />
                  Louisville, Kentucky
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
          <p>&copy; 2025 Norton Elementary PTA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
