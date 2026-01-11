'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CreditCard,
  Link2,
  QrCode,
  Shield,
  FileText,
  HelpCircle,
  Phone,
  ChevronDown,
  Home,
  DollarSign,
  Info
} from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon?: any
  description?: string
  hasDropdown?: boolean
  dropdown?: DropdownItem[]
}

interface DropdownItem {
  name: string
  href: string
  icon: any
  description?: string
}

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const services: DropdownItem[] = [
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

  const resources: DropdownItem[] = [
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: FileText },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Contact Support', href: '/contact', icon: Phone }
  ]

  const navigationItems: NavItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdown: services
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: DollarSign
    },
    {
      name: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdown: resources
    },
    {
      name: 'About',
      href: '/about',
      icon: Info
    }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="flex items-center space-x-1">
      {navigationItems.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          {item.hasDropdown ? (
            <>
              <button
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === item.name ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === item.name && item.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-slideDown">
                  {item.name === 'Services' ? (
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {item.dropdown.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                            <service.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </div>
                            {service.description && (
                              <div className="text-sm text-gray-500 mt-0.5">
                                {service.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-1 p-2">
                      {item.dropdown.map((resource) => (
                        <Link
                          key={resource.name}
                          href={resource.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <resource.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                            {resource.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              <span>{item.name}</span>
            </Link>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </nav>
  )
}