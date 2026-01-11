'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Shield, CreditCard, Link2, QrCode, FileText, HelpCircle, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [resourcesDropdown, setResourcesDropdown] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setServicesDropdown(false)
    setResourcesDropdown(false)
  }, [pathname])

  const services = [
    {
      icon: CreditCard,
      name: 'Payment Gateway',
      description: 'Accept online payments seamlessly',
      href: '/services/payment-gateway'
    },
    {
      icon: Link2,
      name: 'Payment Links',
      description: 'Share & collect payments instantly',
      href: '/services/payment-links'
    },
    {
      icon: QrCode,
      name: 'QR Codes',
      description: 'Dynamic QR for instant payments',
      href: '/services/qr-codes'
    },
    {
      icon: Shield,
      name: 'Subscriptions',
      description: 'Automated recurring billing',
      href: '/services/subscriptions'
    }
  ]

  const resources = [
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: FileText },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Contact Support', href: '/contact', icon: Phone }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdown: services
    },
    { name: 'Pricing', href: '/pricing' },
    {
      name: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdown: resources
    },
    { name: 'About', href: '/about' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              BankPay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => {
                      if (item.name === 'Services') setServicesDropdown(true)
                      if (item.name === 'Resources') setResourcesDropdown(true)
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setServicesDropdown(false)
                      if (item.name === 'Resources') setResourcesDropdown(false)
                    }}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        (item.name === 'Services' && servicesDropdown) ||
                        (item.name === 'Resources' && resourcesDropdown)
                          ? 'rotate-180'
                          : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {((item.name === 'Services' && servicesDropdown) ||
                      (item.name === 'Resources' && resourcesDropdown)) && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                        {item.name === 'Services' ? (
                          <div className="grid grid-cols-1 gap-1 p-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                                  <service.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-1 p-2">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                href={resource.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                <resource.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                                <span className="font-medium text-gray-700 group-hover:text-blue-600">
                                  {resource.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-gray-100 animate-fadeIn">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') {
                          setServicesDropdown(!servicesDropdown)
                          setResourcesDropdown(false)
                        }
                        if (item.name === 'Resources') {
                          setResourcesDropdown(!resourcesDropdown)
                          setServicesDropdown(false)
                        }
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        (item.name === 'Services' && servicesDropdown) ||
                        (item.name === 'Resources' && resourcesDropdown)
                          ? 'rotate-180'
                          : ''
                      }`} />
                    </button>

                    {/* Mobile Dropdown Content */}
                    {((item.name === 'Services' && servicesDropdown) ||
                      (item.name === 'Resources' && resourcesDropdown)) && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.name === 'Services' ? (
                          services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-start space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50"
                            >
                              <service.icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-gray-900">{service.name}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                            </Link>
                          ))
                        ) : (
                          resources.map((resource) => (
                            <Link
                              key={resource.name}
                              href={resource.href}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50"
                            >
                              <resource.icon className="w-5 h-5 text-gray-400" />
                              <span className="font-medium text-gray-700">{resource.name}</span>
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="px-4 pt-4 space-y-2 border-t border-gray-100 mt-4">
              <Link
                href="/login"
                className="block text-center text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 font-semibold shadow-sm"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Add fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  )
}