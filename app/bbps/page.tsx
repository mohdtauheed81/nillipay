'use client'

import {
  Home, ChevronRight, Receipt, Lightbulb, Droplet, Fuel, Phone, Wifi,
  Tv, Building2, Landmark, GraduationCap, Hospital, Car, CreditCard,
  CheckCircle, Shield, Zap, Clock, TrendingUp, Users, Globe, ArrowRight,
  Star, BarChart3, Smartphone, RefreshCw, Award, Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function BBPSPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const stats = [
    {
      icon: Receipt,
      value: '1500+',
      label: 'Active Billers',
      description: 'Across all categories',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: '₹1000Cr+',
      label: 'Monthly Volume',
      description: 'Bills paid successfully',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      value: '10 Lakh+',
      label: 'Happy Users',
      description: 'Trust our platform',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      value: '10 Sec',
      label: 'Avg Time',
      description: 'For bill payment',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const billCategories = [
    {
      icon: Lightbulb,
      title: 'Electricity',
      description: 'Pay electricity bills for all major power distribution companies across India',
      billers: ['BSES Delhi', 'Tata Power', 'BESCOM', 'MSEDCL', 'KSEB'],
      gradient: 'from-yellow-500 to-orange-500',
      count: '120+ Billers'
    },
    {
      icon: Droplet,
      title: 'Water',
      description: 'Water bill payments for municipal corporations and water boards nationwide',
      billers: ['DJB Delhi', 'BMC Mumbai', 'BWSSB Bangalore', 'CMWSSB Chennai'],
      gradient: 'from-blue-500 to-cyan-500',
      count: '50+ Billers'
    },
    {
      icon: Fuel,
      title: 'Gas',
      description: 'LPG and piped gas bill payments for all major gas distribution companies',
      billers: ['Indane Gas', 'HP Gas', 'Bharat Gas', 'Indraprastha Gas', 'Gujarat Gas'],
      gradient: 'from-red-500 to-orange-500',
      count: '45+ Billers'
    },
    {
      icon: Phone,
      title: 'Mobile & DTH',
      description: 'Recharge prepaid mobile, pay postpaid bills, and recharge DTH services',
      billers: ['Airtel', 'Jio', 'Vi', 'BSNL', 'Tata Sky', 'Dish TV'],
      gradient: 'from-purple-500 to-pink-500',
      count: '200+ Services'
    },
    {
      icon: Wifi,
      title: 'Broadband',
      description: 'Internet and broadband bill payments for all ISPs and telecom providers',
      billers: ['ACT Fibernet', 'Airtel Xstream', 'Jio Fiber', 'BSNL', 'Hathway'],
      gradient: 'from-indigo-500 to-blue-500',
      count: '80+ Providers'
    },
    {
      icon: Tv,
      title: 'Cable TV',
      description: 'Cable TV and digital TV subscription payments for local and national operators',
      billers: ['Hathway', 'DEN Networks', 'GTPL', 'Local Cable Operators'],
      gradient: 'from-green-500 to-teal-500',
      count: '150+ Operators'
    },
    {
      icon: Building2,
      title: 'Housing Society',
      description: 'Pay society maintenance, apartment dues, and housing complex charges',
      billers: ['ApnaComplex', 'MyGate', 'NoBroker Society'],
      gradient: 'from-cyan-500 to-blue-500',
      count: '30+ Platforms'
    },
    {
      icon: Landmark,
      title: 'Municipal Taxes',
      description: 'Property tax, water tax, and other municipal corporation payments',
      billers: ['MCD Delhi', 'BMC Mumbai', 'BBMP Bangalore', 'Chennai Corporation'],
      gradient: 'from-amber-500 to-yellow-500',
      count: '100+ Corporations'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'School fees, college tuition, exam fees, and education loan payments',
      billers: ['CBSE', 'Universities', 'Coaching Centers'],
      gradient: 'from-pink-500 to-rose-500',
      count: '500+ Institutions'
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Hospital bills, insurance premiums, and medical service payments',
      billers: ['Apollo', 'Fortis', 'Max Healthcare', 'HDFC Life'],
      gradient: 'from-red-500 to-pink-500',
      count: '200+ Providers'
    },
    {
      icon: Car,
      title: 'Insurance',
      description: 'Vehicle, health, life, and general insurance premium payments',
      billers: ['LIC', 'HDFC Life', 'ICICI Prudential', 'Bajaj Allianz'],
      gradient: 'from-violet-500 to-purple-500',
      count: '50+ Companies'
    },
    {
      icon: CreditCard,
      title: 'Loans & EMI',
      description: 'Credit card bills, loan EMIs, and financial institution payments',
      billers: ['HDFC Bank', 'SBI', 'ICICI Bank', 'Bajaj Finserv'],
      gradient: 'from-emerald-500 to-green-500',
      count: '100+ Lenders'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'RBI Certified',
      description: 'Authorized BBPS operating unit with complete regulatory compliance and bank-grade security.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Instant Confirmation',
      description: 'Real-time bill payment processing with instant SMS and email confirmation for every transaction.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'All Billers',
      description: '1500+ billers across 20+ categories including electricity, water, gas, mobile, and more.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: CreditCard,
      title: 'Multiple Payment Options',
      description: 'Pay via UPI, credit/debit cards, net banking, wallets, or cash - choose what suits you best.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Pay bills anytime, anywhere - even on holidays and weekends without any downtime.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Payment History',
      description: 'Track all your bill payments with detailed history, receipts, and downloadable reports.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Auto-Pay',
      description: 'Set up automatic payments for recurring bills and never miss a due date again.',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'API Integration',
      description: 'Easy-to-integrate APIs for businesses to offer BBPS services to their customers.',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Select Biller',
      description: 'Choose your service provider from 1500+ billers across multiple categories',
      icon: Receipt
    },
    {
      step: '2',
      title: 'Enter Details',
      description: 'Input your consumer number and fetch bill amount instantly',
      icon: CreditCard
    },
    {
      step: '3',
      title: 'Make Payment',
      description: 'Pay using your preferred payment method - UPI, cards, net banking, or wallet',
      icon: CheckCircle
    },
    {
      step: '4',
      title: 'Get Confirmation',
      description: 'Receive instant confirmation via SMS and email with digital receipt',
      icon: Star
    }
  ]

  const benefits = [
    'Zero transaction fees',
    'Instant confirmation',
    '24/7 availability',
    'Secure payments'
  ]

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* ==================== BREADCRUMB ==================== */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Home className="w-4 h-4" />
            </Link>

            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">BBPS</span>
          </div>
        </div>
      </section>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 py-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" />
                <span className="text-gray-700 dark:text-gray-300">RBI Authorized </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold ml-1">BBPS Platform</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Pay All Your Bills
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  In One Place
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Complete BBPS bill payment solution for your business. Integrate our API and offer seamless bill payments across 1500+ billers to your customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Zero integration fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Instant confirmation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">24/7 available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#categories"
                  className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-semibold inline-flex items-center justify-center"
                >
                  View All Categories
                </Link>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 transition-colors">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bill Categories</h3>
                    <span className="text-green-500 font-semibold text-sm">● Active</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Lightbulb, name: 'Electricity', color: 'from-yellow-500 to-orange-500' },
                      { icon: Droplet, name: 'Water', color: 'from-blue-500 to-cyan-500' },
                      { icon: Fuel, name: 'Gas', color: 'from-red-500 to-orange-500' },
                      { icon: Phone, name: 'Mobile', color: 'from-purple-500 to-pink-500' },
                      { icon: Wifi, name: 'Broadband', color: 'from-indigo-500 to-blue-500' },
                      { icon: Tv, name: 'Cable TV', color: 'from-green-500 to-teal-500' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Total Billers</span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">1500+</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative mb-6">
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                How It Works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pay any bill in just a few clicks with our streamlined process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="inline-flex w-14 h-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <item.icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>

                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300 dark:text-blue-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BILL CATEGORIES ==================== */}
      <section id="categories" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                Bill Categories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Pay Bills Across 20+ Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From utilities to loans, pay all your bills through our comprehensive BBPS platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {billCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>

                <div className="p-8">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white`}>
                        {category.count}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Popular Billers:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.billers.slice(0, 3).map((biller, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                        >
                          {biller}
                        </span>
                      ))}
                      {category.billers.length > 3 && (
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-semibold">
                          +{category.billers.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our BBPS Solution?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade features designed for seamless bill payment experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative mb-6">
                  <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-white">Start Integration Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Integrate BBPS?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of businesses offering seamless bill payment services to their customers
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
                href="/contact"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg inline-flex items-center shadow-2xl transform hover:-translate-y-1"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-lg inline-flex items-center"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
