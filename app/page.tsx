'use client'

import {
  ArrowRight, Star, Play, CheckCircle, Shield, Zap, Globe, CreditCard,
  Lock, TrendingUp, Users, RefreshCw, Smartphone, BarChart3, Wallet,
  Award, Link2, QrCode, Clock, Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)

  useEffect(() => {
    setIsStatsVisible(true)
  }, [])

  const trustedCompanies = ['Amazon', 'Flipkart', 'Zomato', 'Swiggy', 'MakeMyTrip']

  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'PCI DSS Level 1 compliant with 256-bit SSL encryption. Your data is protected with industry-leading security standards.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Instant Settlement',
      description: 'Get your funds settled in your account within 24 hours. No waiting, no delays in accessing your money.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Accept payments in 135+ currencies from customers worldwide. Expand your business globally with ease.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: CreditCard,
      title: 'Multiple Payment Methods',
      description: 'Support for credit/debit cards, UPI, wallets, net banking, and more. Give customers payment flexibility.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lock,
      title: '2-Factor Authentication',
      description: 'Enhanced security with OTP verification and 3D Secure authentication for all card transactions.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Track your payments, revenue, and business metrics in real-time with comprehensive dashboards.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Automatic Retry Logic',
      description: 'Smart retry mechanism for failed transactions increases your success rate automatically.',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Fully responsive checkout experience optimized for mobile devices and tablets.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Users,
      title: '24/7 Customer Support',
      description: 'Round-the-clock dedicated support team ready to help you resolve any issues instantly.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Generate detailed reports and export data in multiple formats for accounting and reconciliation.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Wallet,
      title: 'Digital Wallet Support',
      description: 'Accept payments from popular digital wallets like Paytm, PhonePe, Google Pay, and more.',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Industry Leading Uptime',
      description: '99.99% uptime guarantee ensures your payment gateway is always available when you need it.',
      color: 'from-rose-500 to-red-600'
    }
  ]

  const services = [
    {
      icon: CreditCard,
      title: 'Payment Gateway',
      description: 'Seamless online payment collection with multiple payment options for your website or app',
      features: ['Credit/Debit Cards', 'UPI Payments', 'Net Banking', 'Digital Wallets'],
      gradient: 'from-blue-500 to-cyan-500',
      href: '/services/payment-gateway'
    },
    {
      icon: Link2,
      title: 'Payment Links',
      description: 'Share payment links via SMS, email, or social media without any coding required',
      features: ['No coding required', 'Instant setup', 'Track payments', 'Custom branding'],
      gradient: 'from-purple-500 to-pink-500',
      href: '/services/payment-links'
    },
    {
      icon: RefreshCw,
      title: 'Subscriptions',
      description: 'Automated recurring billing for subscription-based businesses with flexible plans',
      features: ['Auto-debit', 'Flexible billing', 'Smart retry logic', 'Detailed analytics'],
      gradient: 'from-orange-500 to-red-500',
      href: '/services/subscriptions'
    },
    {
      icon: QrCode,
      title: 'QR Code Payments',
      description: 'Dynamic QR codes for in-store and online payments with instant notifications',
      features: ['UPI QR codes', 'Instant payments', 'Contactless', 'Track all sales'],
      gradient: 'from-green-500 to-emerald-500',
      href: '/services/qr-codes'
    }
  ]

  const stats = [
    {
      icon: TrendingUp,
      value: '₹500Cr+',
      label: 'Transactions Processed',
      description: 'Monthly transaction volume',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 'delay-0'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Businesses',
      description: 'Trust BankPay for payments',
      gradient: 'from-purple-500 to-pink-500',
      delay: 'delay-100'
    },
    {
      icon: Clock,
      value: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Always available for you',
      gradient: 'from-orange-500 to-red-500',
      delay: 'delay-200'
    },
    {
      icon: Shield,
      value: '24/7',
      label: 'Support Available',
      description: 'Round the clock assistance',
      gradient: 'from-green-500 to-emerald-500',
      delay: 'delay-300'
    }
  ]

  const benefits = [
    'No setup or monthly fees',
    'Free integration support',
    'Cancel anytime',
    'Go live in 24 hours'
  ]

  return (
    <div className="pt-16">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-shadow">
                <Star className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" />
                <span className="text-gray-700">Trusted by </span>
                <span className="text-blue-600 font-semibold ml-1">50,000+ businesses</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Accept Payments
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Faster & Secure
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                India's most secure payment gateway solution. Start accepting payments online with our easy-to-integrate APIs and grow your business exponentially.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Free integration support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Cancel anytime</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  href="/signup"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 mb-4 font-medium">TRUSTED BY LEADING COMPANIES</p>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                  {trustedCompanies.map((company, index) => (
                    <div
                      key={index}
                      className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h3 className="text-xl font-bold text-gray-900">Transaction Overview</h3>
                    <span className="text-green-500 font-semibold text-sm">● Live</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">Today's Revenue</div>
                      <div className="text-2xl font-bold text-gray-900">₹1,24,500</div>
                      <div className="text-xs text-green-600 mt-1">+12.5% ↑</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">Transactions</div>
                      <div className="text-2xl font-bold text-gray-900">2,847</div>
                      <div className="text-xs text-green-600 mt-1">+8.2% ↑</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Transactions</h4>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {item}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Payment #{1000 + item}</div>
                              <div className="text-xs text-gray-500">2 min ago</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">₹{(Math.random() * 5000 + 500).toFixed(2)}</div>
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Success</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                      <div className="text-lg font-bold text-gray-900">99.9%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float animation-delay-2000">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Avg Settlement</div>
                      <div className="text-lg font-bold text-gray-900">24 hrs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our reliability and commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isStatsVisible ? `animate-fadeInUp ${stat.delay}` : 'opacity-0'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative mb-6">
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>

                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Payment Methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Supported Banks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">135+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;2s</div>
              <div className="text-gray-600">Transaction Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose BankPay?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for businesses of all sizes with enterprise-grade features that help you accept payments securely and grow faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative mb-6">
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to see all features in action?
            </p>
            <a
              href="/features"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              View All Features
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Payment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to accept payments online, in-store, and on-the-go. Choose the solution that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

                <div className="p-8">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  We offer enterprise solutions tailored to your specific business needs with dedicated support and custom integrations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
                >
                  Contact Sales Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'API Integrations', value: '50+' },
                  { label: 'Supported Banks', value: '100+' },
                  { label: 'Payment Methods', value: '15+' },
                  { label: 'Countries', value: '135+' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-white">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join 50,000+ businesses already using BankPay to accept payments and grow their revenue
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                >
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg inline-flex items-center shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl"
              >
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-lg inline-flex items-center"
              >
                Talk to Sales
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-8">
              ⭐ Rated 4.9/5 by 10,000+ customers • Trusted by leading brands
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Help Getting Started?
                </h3>
                <p className="text-orange-100 text-lg mb-6">
                  Our integration experts are here to help you get up and running in no time. Schedule a free consultation call today.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Free technical consultation',
                    'Custom integration support',
                    'Dedicated account manager',
                    'Priority customer support'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Schedule a Demo
                </h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Schedule Free Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .delay-0 {
          animation-delay: 0ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  )
}