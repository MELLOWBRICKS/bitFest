import Link from "next/link"
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-gold text-lg mb-4 pixel-font tracking-wide">BITFEST</h3>
            <p className="text-gray-300 mb-4">
              The second-largest tech fest at Pillai College of Arts, Commerce & Science. Everything Starts with a Bit.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-300 hover:text-gold">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-gold">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://youtube.com" className="text-gray-300 hover:text-gold">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold text-lg mb-4 pixel-font tracking-wide">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-gold">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-gray-300 hover:text-gold">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-gold">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold text-lg mb-4 pixel-font tracking-wide">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Pillai College of Arts, Commerce & Science, New Panvel, Navi Mumbai, Maharashtra
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-gold mr-2 flex-shrink-0" />
                <p className="text-gray-300">+91 1234567890</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
                <p className="text-gray-300">bitfest@pillai.edu</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gold text-lg mb-4 pixel-font tracking-wide">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on events and workshops.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email" className="bg-navy-800 border-gold/50 text-white" />
              <Button className="w-full bg-gold text-navy hover:bg-gold/80">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bitfest. All rights reserved.</p>
          <p className="mt-2">Designed & Developed by Computer Association, Pillai College</p>
        </div>
      </div>
    </footer>
  )
}
