'use client'

import Link from 'next/link'
import {
  CheckCircle,
  ArrowRight,
  Plane,
  Hotel,
  Train,
  Bus,
  Calendar,
  Shield,
  Clock,
  Wallet,
  MapPin,
  Users,
  CreditCard,
  Percent,
  ChevronRight,
  Home,
  Map
} from 'lucide-react'

export default function TravelPage() {
  const features = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Domestic and international flight bookings with best prices',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Train,
      title: 'Train Reservations',
      description: 'IRCTC integrated train ticket booking and PNR status',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Bus,
      title: 'Bus Tickets',
      description: 'Book bus tickets across 10,000+ routes nationwide',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Hotel,
      title: 'Hotel Booking',
      description: 'Wide range of hotels, resorts, and homestays',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: Wallet,
      title: 'Best Price Guarantee',
      description: 'Competitive prices with exclusive deals and offers'
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      description: 'Easy modifications and cancellation policies'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple payment options with 100% secure transactions'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for assistance'
    },
    {
      icon: Percent,
      title: 'Instant Discounts',
      description: 'Exclusive cashback and discount offers'
    },
    {
      icon: CreditCard,
      title: 'Easy EMI Options',
      description: 'Convert bookings to easy installments'
    }
  ]

  const travelServices = [
    {
      icon: Plane,
      title: 'Domestic & International Flights',
      items: [
        'All major airlines coverage',
        'Real-time seat availability',
        'Web check-in facility',
        'Baggage insurance',
        'Fare alerts & tracking'
      ]
    },
    {
      icon: Train,
      title: 'Train Ticket Booking',
      items: [
        'IRCTC authorized partner',
        'Tatkal ticket booking',
        'PNR status tracking',
        'Train running status',
        'Cancellation & refunds'
      ]
    },
    {
      icon: Bus,
      title: 'Bus Reservations',
      items: [
        'AC & Non-AC buses',
        'Sleeper & seater options',
        'Live bus tracking',
        'Boarding point selection',
        'Instant ticket confirmation'
      ]
    },
    {
      icon: Hotel,
      title: 'Hotel & Accommodation',
      items: [
        'Budget to luxury hotels',
        'Verified guest reviews',
        'No hidden charges',
        'Pay at hotel option',
        'Free cancellation available'
      ]
    }
  ]

  const popularDestinations = [
    { name: 'Mumbai', Icon: Map, color: 'from-blue-500 to-cyan-500' },
    { name: 'Delhi', Icon: Map, color: 'from-red-500 to-orange-500' },
    { name: 'Goa', Icon: Map, color: 'from-amber-500 to-yellow-500' },
    { name: 'Bangalore', Icon: Map, color: 'from-green-500 to-emerald-500' },
    { name: 'Jaipur', Icon: Map, color: 'from-pink-500 to-rose-500' },
    { name: 'Kerala', Icon: Map, color: 'from-teal-500 to-cyan-500' },
    { name: 'Manali', Icon: Map, color: 'from-indigo-500 to-purple-500' },
    { name: 'Agra', Icon: Map, color: 'from-violet-500 to-purple-500' }
  ]

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">Travel</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  Travel Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Complete Travel Solution
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Book flights, trains, buses, and hotels at the best prices. Powered by secure payment gateway for seamless transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg inline-flex items-center justify-center shadow-xl"
                >
                  Start Booking
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-lg inline-flex items-center justify-center"
                >
                  Partner with Us
                </Link>
              </div>

              <div className="mt-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Best Prices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                  <Plane className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-2xl font-bold mb-1">500+</h3>
                  <p className="text-blue-100">Airlines</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                  <Hotel className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-2xl font-bold mb-1">50,000+</h3>
                  <p className="text-blue-100">Hotels</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                  <Train className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-2xl font-bold mb-1">All Routes</h3>
                  <p className="text-blue-100">Train Booking</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                  <Bus className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-2xl font-bold mb-1">10,000+</h3>
                  <p className="text-blue-100">Bus Routes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Book Everything in One Place
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From flights to hotels, we've got your entire journey covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Services Details */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Travel Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need for a seamless travel experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3">
                    <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Travel Platform?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by millions of travelers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore trending travel destinations across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {popularDestinations.map((destination, index) => {
              const Icon = destination.Icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
                >
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-full bg-gradient-to-br ${destination.color} text-white mb-3 transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {destination.name}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-600 via-gray-600 to-gray-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white mb-8">
              Join millions of happy travelers. Book your next trip with us and experience hassle-free travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg inline-flex items-center justify-center shadow-xl"
              >
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-lg inline-flex items-center justify-center"
              >
                Talk to Sales
              </Link>
            </div>
            <p className="text-black text-sm mt-8">
              ⭐ Rated 4.8/5 by 1 million+ travelers
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}