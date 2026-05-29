"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Zap,
  Shield,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { PhoneIcon, MailIcon, MapPinIcon, ZapIcon } from "@animateicons/react/lucide";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  const contacts = [
    {
      title: "24/7 Mobile Emergency Dispatch",
      detail: "0492 979 067",
      subDetail: "Average arrival in 60 mins or less",
      actionLabel: "Call Hotline Now",
      href: "tel:+61492979067",
      icon: Phone,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      glowing: true,
      cardStyle: "border-red-100 shadow-red-100/50 bg-gradient-to-br from-red-50/30 to-white"
    },
    {
      title: "General Enquiries & Support",
      detail: "info@batteryaustralia.com.au",
      subDetail: "Get custom quotes or fleet booking assistance",
      actionLabel: "Send Email",
      href: "mailto:info@batteryaustralia.com.au",
      icon: Mail,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      glowing: false,
      cardStyle: "border-blue-100 shadow-blue-100/50 bg-gradient-to-br from-blue-50/30 to-white"
    }
  ];

  const depots = [
    {
      city: "Brisbane Depot",
      address: "5/17 Benronalds Street, Seventeen Mile Rocks QLD 4073",
      mapUrl: "https://maps.google.com/?q=5/17+Benronalds+Street,+Seventeen+Mile+Rocks,+Brisbane",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.491325350315!2d152.9567431!3d-27.5472145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91501d51a5e1cb%3A0xe21060de95df5d2!2s5%2F17%20Benronalds%20St%2C%20Seventeen%20Mile%20Rocks%20QLD%204073!5e0!3m2!1sen!2sau!4v1700000000000",
      desc: "Our primary central hub housing 24/7 mobile response vehicles and walk-in battery collections."
    },
    {
      city: "Gold Coast Depot",
      address: "74 Township Drive, Burleigh Heads QLD 4220",
      mapUrl: "https://maps.google.com/?q=74+Township+Drive,+Burleigh+Heads,+Gold+Coast",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.696773539327!2d153.4216831!3d-28.09884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a37c0500001%3A0x1e8a8b1a80d4f90!2s74%20Township%20Dr%2C%20Burleigh%20Heads%20QLD%204220!5e0!3m2!1sen!2sau!4v1700000000001",
      desc: "Servicing the entire southern coastal fringe, deepcycle marine watercraft, and highway towing emergencies."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-10 right-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-96 h-96 bg-red-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <ZapIcon className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                We're Standing By
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Get in Touch <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                With Our Team
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a dead battery, need expert commercial vehicle fleet advice, or want a free no-obligation quotation? Reach out directly using our clickable interactive options below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Contact Hub */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Direct Call/Email Cards */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Direct Connections</span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-4xl font-bold text-gray-900">
                  Tap to Connect Instantly
                </h2>
                <p className="text-gray-600">
                  Click any card to open the number directly on your phone dialer or launch your email client. Our team will respond immediately.
                </p>
              </div>

              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`block relative p-8 rounded-[2.5rem] border ${contact.cardStyle} shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                  >
                    {contact.glowing && (
                      <div className="absolute top-6 right-6 flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Live Dispatch</span>
                      </div>
                    )}
                    
                    <div className="flex gap-6 items-start">
                      <div className={`w-14 h-14 rounded-2xl ${contact.bgColor} flex items-center justify-center shrink-0`}>
                        <contact.icon className={`w-7 h-7 ${contact.iconColor}`} />
                      </div>
                      
                      <div className="space-y-2 grow">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          {contact.title}
                        </h4>
                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {contact.detail}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {contact.subDetail}
                        </p>
                        
                        <div className="pt-2 flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                          <span>{contact.actionLabel}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Availability & Times */}
            <div className="space-y-8 lg:pl-6">
              <div className="space-y-4">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Hours of Operation</span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-4xl font-bold text-gray-900">
                  Roadside vs. Depot Pickups
                </h2>
                <p className="text-gray-600">
                  Please note that while our mobile service vans operate all night, physical depot locations have specific operating structures.
                </p>
              </div>

              {/* Claymorphic Timeline Card */}
              <div className="clay p-8 rounded-[2.5rem] bg-white border border-gray-100 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/40 rounded-bl-[10rem] -z-10" />

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">General Service Window</h4>
                    <p className="text-sm text-gray-500 font-semibold">Monday to Sunday — 6:00 AM to 8:00 PM</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full" />

                {/* Illustrated visual comparison */}
                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 items-start">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-2 animate-ping shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-base">24/7/365 Mobile Emergency Vans</h5>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">
                        Our roadside jumpstart and mobile delivery fleets are active **all night**. If you are stranded or stuck on the road, dial **0492 979 067** immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 text-base">In-Depot Collection & Consultations</h5>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">
                        Physical walk-ins, commercial fleet pickups, and battery warranty returns are processed strictly between **6:00 AM and 8:00 PM** at either of our warehouses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Depots & Interactive Maps Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Geographic Presence</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gray-900">
              Our Strategic Depot Hubs
            </h2>
            <p className="text-gray-600">
              Pick up your order or speak with an expert technician directly. Click coordinates to open directions on your phone map immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {depots.map((depot, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[2.5rem] p-6 shadow-md border border-gray-100 flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-gray-900">
                        {depot.city}
                      </h3>
                    </div>
                    <a
                      href={depot.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50/50 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-sm text-gray-700 font-medium">
                    {depot.address}
                  </p>
                  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {depot.desc}
                  </p>
                </div>

                {/* Google Map stylized embed */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-gray-100 relative shadow-inner">
                  <iframe
                    title={depot.city}
                    src={depot.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium Trust Accents Carousel */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              Why Australians Choose Battery Australia
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "5 Equipped Vans",
              "365 Days Dispatch",
              "60 Mins or Less ETA",
              "Zero Call Out Fees",
              "Local Family Run",
              "Best Everyday Prices",
              "3-Year Warranty",
              "Superior Batteries",
              "Accredited Technicians"
            ].map((pill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-semibold text-gray-700"
              >
                ✓ {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Callout Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Stranded or Need On-Site Replacement?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Do not wait hours for a tow or pay exorbitant membership club fees. Call us, and our closest service vehicle will be on its way.
          </p>
          <div className="pt-2">
            <a
              href="tel:+61492979067"
              className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-white text-blue-600 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Call 0492 979 067</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
