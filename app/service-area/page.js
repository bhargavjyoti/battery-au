"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Phone,
  Clock,
  Shield,
  ChevronDown,
  Navigation,
  Globe,
  Compass,
  AlertCircle,
  Zap,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { PhoneIcon, ZapIcon, MapPinIcon } from "@animateicons/react/lucide";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Bundled parsed suburb data of 183 served areas categorized by starting letter
const suburbsData = {
  "A": [
    "Acacia Ridge",
    "Albion",
    "Alderley",
    "Algester",
    "Annerley",
    "Anstead",
    "Archerfield",
    "Arundel",
    "Ascot",
    "Ashgrove",
    "Aspley",
    "Auchenflower"
  ],
  "B": [
    "Bald Hills",
    "Balmoral",
    "Banyo",
    "Bardon",
    "Bellbowrie",
    "Belmont",
    "Berrinba",
    "Boondall",
    "Bowen Hills",
    "Bracken Ridge",
    "Bridgeman Downs",
    "Brighton",
    "Brisbane city",
    "Brookfield",
    "Bulimba",
    "Burbank"
  ],
  "C": [
    "Calamvale",
    "Camp Hill",
    "Cannon Hill",
    "Carina",
    "Carina Heights",
    "Carindale",
    "Carole Park",
    "Carseldine",
    "Chandler",
    "Chapel Hill",
    "Chelmer",
    "Chermside",
    "Chermside West",
    "Chuwar",
    "Clayfield",
    "Coopers Plains",
    "Coorparoo",
    "Corinda"
  ],
  "D": [
    "Darra",
    "Deagon",
    "Doolandella",
    "Drewvale",
    "Durack",
    "Dutton Park"
  ],
  "E": [
    "Eagle Farm",
    "East Brisbane",
    "Eight Mile Plains",
    "Ellen Grove",
    "Enoggera",
    "Enoggera Reservoir",
    "Everton Park"
  ],
  "F": [
    "Fairfield",
    "Ferny Grove",
    "Fig Tree Pocket",
    "Fitzgibbon",
    "Forest Lake",
    "Fortitude Valley"
  ],
  "G": [
    "Gaythorne",
    "Geebung",
    "Gordon Park",
    "Graceville",
    "Grange",
    "Greenslopes",
    "Gumdale"
  ],
  "H": [
    "Hamilton",
    "Hawthorne",
    "Heathwood",
    "Helensvale",
    "Hemmant",
    "Hendra",
    "Herston",
    "Highgate Hill",
    "Holland Park",
    "Holland Park West"
  ],
  "I": [
    "Inala",
    "Indooroopilly"
  ],
  "J": [
    "Jamboree Heights",
    "Jindalee"
  ],
  "K": [
    "Kangaroo Point",
    "Karana Downs",
    "Karawatha",
    "Kedron",
    "Kelvin Grove",
    "Kenmore",
    "Kenmore Hills",
    "Keperra",
    "Kholo",
    "Kuraby"
  ],
  "L": [
    "Labrador",
    "Lake Manchester",
    "Larapinta",
    "Lota",
    "Lutwyche",
    "Lytton"
  ],
  "M": [
    "Macgregor",
    "Mackenzie",
    "Manly",
    "Manly West",
    "Mansfield",
    "McDowall",
    "Middle Park",
    "Milton",
    "Mitchelton",
    "Moggill",
    "Moorooka",
    "Moreton Island",
    "Morningside",
    "Mt Coot-tha",
    "Mt Crosby",
    "Mt Gravatt",
    "Mt Gravatt East",
    "Mt Ommaney",
    "Murarrie"
  ],
  "N": [
    "Nathan",
    "New Farm",
    "Newmarket",
    "Newstead",
    "Norman Park",
    "Northgate",
    "Nudgee",
    "Nudgee Beach",
    "Nundah"
  ],
  "O": [
    "Oxley"
  ],
  "P": [
    "Paddington",
    "Pallara",
    "Parkinson",
    "Pimpama",
    "Pinjarra Hills",
    "Pinkenba",
    "Port of Brisbane",
    "Pullenvale"
  ],
  "R": [
    "Ransome",
    "Red Hill",
    "Richlands",
    "Riverhills",
    "Robertson",
    "Rochedale",
    "Rocklea",
    "Runcorn"
  ],
  "S": [
    "Salisbury",
    "Sandgate",
    "Seven Hills",
    "Seventeen Mile Rocks",
    "Sherwood",
    "Shorncliffe",
    "Sinnamon Park",
    "South Brisbane",
    "Spring Hill",
    "St Lucia",
    "Stafford",
    "Stafford Heights",
    "Stretton",
    "Sumner",
    "Sunnybank",
    "Sunnybank Hills"
  ],
  "U": [
    "Upper Brookfield",
    "Upper Kedron",
    "Upper Mt Gravatt"
  ],
  "V": [
    "Virginia"
  ],
  "W": [
    "Wacol",
    "Wakerley",
    "Wavell Heights",
    "West End",
    "Westlake",
    "Willawong",
    "Wilston",
    "Windsor",
    "Wishart",
    "Woolloongabba",
    "Wooloowin",
    "Wynnum",
    "Wynnum West"
  ],
  "Y": [
    "Yeerongpilly",
    "Yeronga"
  ],
  "Z": [
    "Zillmere"
  ]
};

// Flattened suburb array for searching
const allSuburbs = Object.values(suburbsData).flat();

export default function ServiceArea() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Available unique letters for selection
  const availableLetters = useMemo(() => {
    return Object.keys(suburbsData).sort();
  }, []);

  // Filter suburbs by search query and/or selected letter
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    // If there is a search query, search globally
    if (query) {
      const results = {};
      Object.keys(suburbsData).forEach((letter) => {
        const matches = suburbsData[letter].filter((suburb) =>
          suburb.toLowerCase().includes(query)
        );
        if (matches.length > 0) {
          results[letter] = matches;
        }
      });
      return results;
    }

    // If a letter filter is active, filter only that letter
    if (activeLetter) {
      return {
        [activeLetter]: suburbsData[activeLetter] || []
      };
    }

    // Default: return everything
    return suburbsData;
  }, [searchQuery, activeLetter]);

  const totalMatchesCount = useMemo(() => {
    return Object.values(filteredData).flat().length;
  }, [filteredData]);

  const handleLetterClick = (letter) => {
    setSearchQuery(""); // Clear search when navigating by letters
    if (activeLetter === letter) {
      setActiveLetter(null); // Deselect
    } else {
      setActiveLetter(letter);
      // Smooth scroll to the filtered suburbs section
      const element = document.getElementById("suburbs-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const faqs = [
    {
      q: "Do you charge extra call-out fees for remote suburbs?",
      a: "No! We believe in transparent, honest pricing. Battery Australia offers completely zero call-out fees across our entire Brisbane and Gold Coast service areas. You only pay for the battery replacement itself and professional on-site installation."
    },
    {
      q: "How quickly can a mobile technician reach my suburb?",
      a: "Our dispatch goal is to arrive within 60 minutes or less. We have fully stocked service vans strategically stationed in Seventeen Mile Rocks (Brisbane Depot) and Burleigh Heads (Gold Coast Depot) to ensure rapid response times no matter where you are stranded."
    },
    {
      q: "Is roadside battery replacement available 24/7 in my area?",
      a: "Absolutely. We operate 24 hours a day, 7 days a week, 365 days a year across all listed suburbs. Whether you're stranded in Brisbane City at 2 AM on a Monday, or need help on a Sunday in Burleigh Heads, we are always ready to assist."
    },
    {
      q: "What should I do if my suburb is not listed on this page?",
      a: "If your suburb isn't listed, don't worry! Please call us directly on 0492 979 067. Depending on our technician workload and current dispatch locations, we may still be able to send a mobile vehicle to help you, or coordinate a rapid roadside rescue."
    },
    {
      q: "Can you replace the battery at my home, office, or roadside?",
      a: "Yes. Our service is designed to bring the workshop directly to you. Our expert technicians are equipped to perform complete battery diagnostics, jumpstarts, and full replacements safely in residential driveways, corporate office garages, or standard road shoulders."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-hidden">
        {/* Ambient Blurred Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-20 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-10 left-1/4 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-2">
              <Navigation className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Southeast Queensland Coverage
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              We Bring Battery Rescue <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Directly To You
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast, reliable mobile battery replacement serving <span className="font-bold text-blue-600">{allSuburbs.length}+ suburbs</span> across Brisbane & Gold Coast. Available 24 hours a day, 7 days a week.
            </p>

            {/* Smart Search Bar Card */}
            <div className="max-w-2xl mx-auto pt-6">
              <div className="relative glass p-2 rounded-2xl shadow-xl border border-white/60 flex items-center bg-white/70">
                <Search className="w-6 h-6 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Type your suburb name (e.g. Chermside, Labrador)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setActiveLetter(null); // Clear active letter filter when searching
                    setSearchQuery(e.target.value);
                  }}
                  className="w-full pl-3 pr-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 font-medium focus:outline-none text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg text-sm transition-colors mr-2 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              {/* Live search results counter */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-3 text-sm font-semibold text-blue-600"
                  >
                    Found {totalMatchesCount} served suburbs matching your query
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats and Info Banner */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { title: `${allSuburbs.length}+ Suburbs`, desc: "Full coverage in SEQ", icon: Globe, color: "text-blue-600" },
            { title: "60 Min or Less", desc: "Average roadside arrival ETA", icon: Clock, color: "text-red-600" },
            { title: "24/7 Emergency Dispatch", desc: "Available 365 days a year", icon: Zap, color: "text-amber-500" }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50/50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{stat.title}</h4>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alphabet Quick Links section */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              Quick Jump By Letter:
            </span>
            <AnimatePresence>
              {(activeLetter || searchQuery) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => {
                    setActiveLetter(null);
                    setSearchQuery("");
                  }}
                  className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Reset Filter
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {availableLetters.map((letter) => {
              const isActive = activeLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className={`w-9 h-9 shrink-0 flex items-center justify-center rounded-lg font-bold text-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-110"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Suburbs Directory List */}
      <section id="suburbs-section" className="py-20 bg-gray-50/50 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {totalMatchesCount === 0 ? (
            /* Empty State block if no matches found */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto text-red-500">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-gray-900">
                Suburb Not Found in List?
              </h3>
              <p className="text-gray-600">
                We regularly expand our roadside coverage. If <span className="font-semibold text-red-600">"{searchQuery}"</span> isn't showing in our directory, our service vans might still be nearby! 
              </p>
              <div className="pt-2">
                <a
                  href="tel:+61492979067"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300 font-bold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 0492 979 067</span>
                </a>
              </div>
              <p className="text-xs text-gray-400">
                Tell us your current location. We diagnose and quote in under 2 minutes.
              </p>
            </motion.div>
          ) : (
            /* Suburb Cards list grouped by Letter */
            <div className="space-y-16">
              {Object.keys(filteredData).sort().map((letter) => {
                const suburbs = filteredData[letter];
                return (
                  <div key={letter} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-[family-name:var(--font-space-grotesk)] text-2xl font-bold shadow-md">
                        {letter}
                      </div>
                      <div className="h-0.5 bg-gray-100 grow"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {suburbs.map((suburb) => (
                        <motion.div
                          key={suburb}
                          whileHover={{ y: -4 }}
                          className="group relative bg-white px-5 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                        >
                          {/* Ambient border hover highlight */}
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                          
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <MapPin className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
                          </div>
                          
                          <div className="grow">
                            <h5 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors text-base">
                              {suburb}
                            </h5>
                            <p className="text-xxs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-0.5">
                              Fast Mobile Dispatch
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Illustrative Regional Service Hub Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Regional Depots</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              Our Strategic Dispatch Depots
            </h2>
            <p className="text-gray-600">
              We operate two high-efficiency dispatch hubs in Southeast Queensland, enabling fully stocked technician vehicles to arrive within 60 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brisbane Depot */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-[2rem] border border-gray-100 bg-gradient-to-br from-blue-50/50 via-white to-white shadow-lg space-y-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-bl-[8rem] -z-10" />
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-gray-900">
                Greater Brisbane Depot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Headquartered in **Seventeen Mile Rocks**, our Brisbane base services all surrounding suburbs from Northern Pine Rivers down to Ipswich and Southside Logan. 
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Northside, Southside & Western Suburbs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>60 Min Average ETA Guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Seventeen Mile Rocks on-site depot matching</span>
                </li>
              </ul>
            </motion.div>

            {/* Gold Coast Depot */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-[2rem] border border-gray-100 bg-gradient-to-br from-red-50/50 via-white to-white shadow-lg space-y-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/30 rounded-bl-[8rem] -z-10" />
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-700">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-gray-900">
                Gold Coast Service Depot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Operating out of **Burleigh Heads**, our coastal team delivers and installs premium batteries from Ormeau and Pimpama in the north, all the way to Coolangatta at the border.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Burleigh, Southport, Surfers Paradise & border suburbs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Beachside & Highway mobile rescue coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Full marine and watercraft battery specialist stock</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest block">Answers For You</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gray-900">
              Service Area FAQs
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our mobile dispatch areas, arrival times, and billing rules.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed border-t border-gray-50/60 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium CTA Callout Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Need Rapid Battery Assistance Now?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our mobile technicians are on the road 24/7/365 across Brisbane & the Gold Coast. Standard roadside arrival is under an hour!
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
