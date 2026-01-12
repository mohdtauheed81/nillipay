'use client'

import {
  Home, ChevronRight, Shield, Target, Eye, Award, Users, TrendingUp,
  Zap, Globe, Heart, Lightbulb, CheckCircle, ArrowRight, Star,
  Building2, Briefcase, GraduationCap, Clock
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission')

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Customers',
      description: 'Businesses trust us',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: '₹500Cr+',
      label: 'Monthly Volume',
      description: 'Transactions processed',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      value: '135+',
      label: 'Countries',
      description: 'Global presence',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime',
      description: 'Service reliability',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security of every transaction with bank-grade encryption and compliance with international standards.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Customer Centric',
      description: 'Our customers are at the heart of everything we do. We build products that solve real problems and deliver value.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge payment solutions that help businesses stay ahead of the curve.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'We believe in honest communication and transparent pricing. No hidden fees, no surprises - just straightforward service.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Time is money. We ensure fast processing, instant settlements, and efficient service delivery at every touchpoint.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our partners and customers to build solutions that drive mutual growth and success.',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Chief Executive Officer',
      image: '👨‍💼',
      description: '15+ years in fintech and payments industry',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      image: '👩‍💻',
      description: 'Expert in payment systems and security',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Amit Patel',
      position: 'Chief Financial Officer',
      image: '👨‍💼',
      description: 'Former banking executive with 20+ years experience',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Sneha Reddy',
      position: 'Head of Operations',
      image: '👩‍💼',
      description: 'Operations excellence and customer success leader',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Started with a vision to simplify payments for Indian businesses',
      icon: Building2
    },
    {
      year: '2017',
      title: 'RBI Authorization',
      description: 'Received official authorization as a payment aggregator',
      icon: Award
    },
    {
      year: '2019',
      title: 'Major Milestone',
      description: 'Crossed 10,000+ merchants and ₹100Cr monthly volume',
      icon: TrendingUp
    },
    {
      year: '2021',
      title: 'Product Expansion',
      description: 'Launched BBPS and travel services for B2B partners',
      icon: Briefcase
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended services to 135+ countries worldwide',
      icon: Globe
    },
    {
      year: '2025',
      title: 'Leading Platform',
      description: 'Serving 50,000+ businesses with ₹500Cr+ monthly volume',
      icon: Star
    }
  ]

  const achievements = [
    'RBI Authorized Payment Aggregator',
    'PCI DSS Level 1 Certified',
    'ISO 27001:2013 Certified',
    'Best Payment Gateway Award 2023',
    'Top 50 Fintech Companies in India',
    'Customer Choice Award 2024'
  ]

  return (
    <div className="pt-16">
      {/* ==================== BREADCRUMB ==================== */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-600 font-medium">About Us</span>
          </div>
        </div>
      </section>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                About BankPay
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Businesses with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Seamless Payments
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to transform the way businesses accept and manage payments across India and beyond. Since 2015, we've been helping thousands of businesses grow faster with our secure, reliable, and innovative payment solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">RBI Authorized</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">PCI DSS Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative mb-6">
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VISION ==================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-xl shadow-md border border-gray-200 p-1">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'mission'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Our Mission</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'vision'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Our Vision</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To empower every business in India with world-class payment solutions that are secure, reliable, and easy to integrate. We strive to remove the complexity from digital payments and enable businesses of all sizes to accept payments seamlessly.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Accessibility</h3>
                        <p className="text-gray-600">Making payment solutions accessible to businesses of all sizes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>
                        <p className="text-gray-600">Continuously innovating to meet evolving business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Trust</h3>
                        <p className="text-gray-600">Building trust through security and transparency</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Growth</h3>
                        <p className="text-gray-600">Helping businesses grow with scalable solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To become India's most trusted and preferred payment platform, enabling millions of businesses to thrive in the digital economy. We envision a future where payment acceptance is instant, secure, and effortless for every business.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start space-x-3">
                      <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Market Leader</h3>
                        <p className="text-gray-600">Becoming the #1 payment platform in India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Global Reach</h3>
                        <p className="text-gray-600">Expanding payment capabilities worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Technology</h3>
                        <p className="text-gray-600">Leading with cutting-edge payment technology</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Customer Love</h3>
                        <p className="text-gray-600">Being the most loved payment platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR VALUES ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape the culture of our organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative mb-6">
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUR JOURNEY ==================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Decade of Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a startup to India's leading payment platform - our journey of innovation and excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 md:ml-20">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[4.5rem] top-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <div className="md:hidden w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LEADERSHIP TEAM ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Leadership Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence in payments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>

                <div className="p-8 text-center">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-5xl transform group-hover:scale-110 transition-transform duration-300`}>
                    {member.image}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ACHIEVEMENTS ==================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Achievements
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recognized Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Awards and certifications that validate our commitment to quality
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Be part of India's leading payment platform. Start accepting payments today and grow your business with BankPay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg inline-flex items-center shadow-2xl transform hover:-translate-y-1"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-lg inline-flex items-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}