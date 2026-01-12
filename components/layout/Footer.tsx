'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [year, setYear] = useState(2025)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support', href: '/support' },
      { name: 'FAQs', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-white">NeeliPay</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Secure and reliable payment gateway solutions for businesses of all sizes.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600/20 rounded-lg p-2 flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <a href="mailto:support@neelipay.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                  support@neelipay.in
                </a>
                <br />
                <a href="mailto:sales@neelipay.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                  sales@neelipay.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <div className="bg-green-600/20 rounded-lg p-2 flex-shrink-0">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Phone</p>
                <a href="tel:+911800123456" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  +91 1800-123-4567 (Toll Free)
                </a>
                <a href="tel:+912212345678" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  +91 22 1234 5678
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600/20 rounded-lg p-2 flex-shrink-0">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Address</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  NeeliPay Technologies Pvt Ltd<br />
                  Bandra Kurla Complex<br />
                  Mumbai - 400051, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0" suppressHydrationWarning>
            © {year} NeeliPay. All rights reserved.
          </p>

          {/* Additional Links */}

        </div>
      </div>
    </footer>
  )
}