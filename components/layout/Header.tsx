'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Receipt, Globe } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle mounting state
  useEffect(() => {
    setMounted(true)
  }, [])

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
  }, [pathname])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setServicesDropdown(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false)
    }, 200) // 200ms delay before closing
  }

  const services = [
    {
      icon: Receipt,
      name: 'BBPS',
      description: 'Complete bill payment solution',
      href: '/bbps'
    },
    {
      icon: Globe,
      name: 'Travel',
      description: 'Full-suite travel booking platform',
      href: '/travel'
    }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Services',
      href: '/services',
      hasDropdown: true,
      dropdown: services
    },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
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
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 0.15s ease-in forwards;
        }
      `}} />
      <header
        suppressHydrationWarning
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
                NeeliPay
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      handleMouseEnter()
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      handleMouseLeave()
                    }
                  }}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          isActive(item.href) || servicesDropdown
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          servicesDropdown ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdown && (
                        <div
                          className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 animate-fadeIn"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="grid grid-cols-1 gap-1 p-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                              >
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors flex-shrink-0">
                                  <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Login & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 dark:border-gray-800">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesDropdown(!servicesDropdown)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          servicesDropdown ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Dropdown Content */}
                      {servicesDropdown && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 py-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-start space-x-3 px-6 py-3 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                              onClick={() => {
                                setIsOpen(false)
                                setServicesDropdown(false)
                              }}
                            >
                              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">{service.name}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Login Button */}
              <div className="px-4 py-4">
                <Link
                  href="/login"
                  className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 font-semibold shadow-sm transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20"></div>
    </>
  )
}
