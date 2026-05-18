"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Battery,
  Zap,
  Clock,
  Shield,
  ChevronDown,
  Menu,
  X,
  ChevronRight,
  Search,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  Map,
  Navigation,
  CheckCircle2,
  Truck,
} from "lucide-react";
import Link from "next/link";

export default function ServiceArea() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [expandedRegions, setExpandedRegions] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Battery Replacement",
      href: "#battery-replacement",
      dropdown: [
        { name: "Car Batteries", href: "#car" },
        { name: "Truck Batteries", href: "#truck" },
        { name: "Motorcycle Batteries", href: "#motorcycle" },
        { name: "Marine Batteries", href: "#marine" },
        { name: "Golf Cart Batteries", href: "#golf-cart" },
        { name: "NBN Batteries", href: "#nbn" },
      ],
    },
    { name: "Service Area", href: "/service-area" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Service areas organized by region for better UX
  const serviceAreas = {
    "Brisbane CBD & Inner North": [
      "Albion", "Alderley", "Ascot", "Ashgrove", "Auchenflower", "Bald Hills", "Bardon", "Boondall", "Bowen Hills", 
      "Bracken Ridge", "Bridgeman Downs", "Brisbane city", "Brookfield", "Carseldine", "Chermside", "Chermside West", 
      "Clayfield", "Enoggera", "Enoggera Reservoir", "Everton Park", "Ferny Grove", "Fitzgibbon", "Fortitude Valley", 
      "Gaythorne", "Geebung", "Gordon Park", "Grange", "Hamilton", "Hendra", "Herston", "Kedron", "Kelvin Grove", 
      "Keperra", "Lutwyche", "McDowall", "Milton", "Mitchelton", "New Farm", "Newmarket", "Newstead", "Northgate", 
      "Nudgee", "Nudgee Beach", "Nundah", "Paddington", "Red Hill", "Rosalie", "Sandgate", "Shorncliffe", "Spring Hill", 
      "Stafford", "Stafford Heights", "Teneriffe", "Wavell Heights", "Wilston", "Windsor", "Wooloowin", "Zillmere"
    ],
    "Brisbane South": [
      "Acacia Ridge", "Algester", "Annerley", "Archerfield", "Berrinba", "Burbank", "Calamvale", "Camp Hill", 
      "Cannon Hill", "Carina", "Carina Heights", "Carindale", "Coopers Plains", "Coorparoo", "Doolandella", 
      "Drewvale", "Durack", "East Brisbane", "Eight Mile Plains", "Fairfield", "Greenslopes", "Gumdale", 
      "Hawthorne", "Heathwood", "Hemmant", "Highgate Hill", "Holland Park", "Holland Park West", "Kangaroo Point", 
      "Karawatha", "Kuraby", "Lota", "Lytton", "Macgregor", "Mackenzie", "Mansfield", "Moorooka", "Morningside", 
      "Mt Gravatt", "Mt Gravatt East", "Murarrie", "Nathan", "Norman Park", "Parkinson", "Ransome", "Rochedale", 
      "Rocklea", "Runcorn", "Salisbury", "Seven Hills", "South Brisbane", "South Bank", "Stones Corner", 
      "Stretton", "Sumner", "Sunnybank", "Sunnybank Hills", "Tingalpa", "Wakerley", "West End", "Wishart", 
      "Woolloongabba", "Wynnum", "Wynnum West", "Yeerongpilly", "Yeronga"
    ],
    "Brisbane West": [
      "Anstead", "Bellbowrie", "Carole Park", "Chapel Hill", "Chelmer", "Chuwar", "Corinda", "Darra", 
      "Ellen Grove", "Fig Tree Pocket", "Forest Lake", "Graceville", "Inala", "Indooroopilly", 
      "Jamboree Heights", "Jindalee", "Karana Downs", "Kenmore", "Kenmore Hills", "Kholo", "Lake Manchester", 
      "Larapinta", "Middle Park", "Moggill", "Mt Crosby", "Mt Ommaney", "Oxley", "Pallara", "Pinjarra Hills", 
      "Pullenvale", "Richlands", "Riverhills", "Seventeen Mile Rocks", "Sherwood", "Sinnamon Park", 
      "St Lucia", "Taringa", "Toowong", "Wacol", "Westlake", "Willawong"
    ],
    "Brisbane North": [
      "Banyo", "Brighton", "Deagon"
    ],
    "Brisbane East": [
      "Balmoral", "Belmont", "Bulimba", "Chandler", "Manly", "Manly West", "Moreton Island", 
      "Mt Coot-tha", "Pinkenba", "Port of Brisbane", "Robertson"
    ],
    "Gold Coast": [
      "Burleigh Heads", "Broadbeach", "Surfers Paradise", "Southport", "Main Beach", "Mermaid Beach", 
      "Miami", "Coolangatta", "Currumbin", "Palm Beach", "Robina", "Varsity Lakes"
    ],
  };

  const allSuburbs = Object.values(serviceAreas).flat();

  const filteredAreas = () => {
    let filtered = serviceAreas;

    if (selectedRegion !== "All") {
      filtered = { [selectedRegion]: serviceAreas[selectedRegion] };
    }

    if (searchTerm) {
      const searchFiltered = {};
      Object.keys(filtered).forEach((region) => {
        const matchingSuburbs = filtered[region].filter((suburb) =>
          suburb.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matchingSuburbs.length > 0) {
          searchFiltered[region] = matchingSuburbs;
        }
      });
      return searchFiltered;
    }

    return filtered;
  };

  const regions = ["All", ...Object.keys(serviceAreas)];

  const toggleRegion = (region) => {
    setExpandedRegions(prev => ({
      ...prev,
      [region]: !prev[region]
    }));
  };

  const getVisibleSuburbs = (suburbs, region) => {
    if (searchTerm) return suburbs; // Show all when searching
    if (expandedRegions[region]) return suburbs; // Show all when expanded
    return suburbs.slice(0, 12); // Show first 12 by default
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-white/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Battery className="w-8 h-8 text-blue-600" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-gray-900">
                Battery Australia
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 glass rounded-xl shadow-xl py-2 border border-gray-100"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+61492979067"
                className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                <a
                  href="tel:+61492979067"
                  className="flex items-center justify-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-red-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">Service Coverage</p>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Have Mobile Service Vehicles in Your Area!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Whether it's for your car, truck, motorcycle, 4WD, or boat — Battery Australia has the perfect solution! We stock a wide range of high-quality batteries for almost every application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+61492979067"
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl hover:shadow-xl transition-all duration-200 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call +61 492 979 067</span>
              </a>
              <a
                href="#areas"
                className="flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:shadow-xl transition-all duration-200 font-semibold border-2 border-gray-200"
              >
                <Map className="w-5 h-5" />
                <span>View Service Areas</span>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Total Suburbs", value: allSuburbs.length + "+" },
              { label: "Response Time", value: "30 Min" },
              { label: "Service Days", value: "7 Days" },
              { label: "Coverage", value: "24/7" },
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Areas Section */}
      <section id="areas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Find Your Area</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Service the Following Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Search or browse by region to find your suburb. Don't see your area? Call us on +61 492 979 067 - we may still be able to help!
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for your suburb..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500"
              />
            </div>

            {/* Region Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                    selectedRegion === region
                      ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Service Areas Grid */}
          <div className="space-y-8">
            {Object.keys(filteredAreas()).length > 0 ? (
              Object.entries(filteredAreas()).map(([region, suburbs], index) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{region}</h3>
                      <p className="text-sm text-gray-600">{suburbs.length} suburbs covered</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {getVisibleSuburbs(suburbs, region).map((suburb, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.02 }}
                        className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{suburb}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Show More/Less Button */}
                  {suburbs.length > 12 && !searchTerm && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => toggleRegion(region)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 cursor-pointer"
                      >
                        {expandedRegions[region] ? "Show Less" : `Show More (${suburbs.length - 12} more suburbs)`}
                      </button>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-xl text-gray-600 mb-2">No suburbs found</p>
                <p className="text-gray-500">Try a different search term or region filter</p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center glass p-8 rounded-3xl"
          >
            <Truck className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Don't See Your Area?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Just give us a call on +61 492 979 067 or fill out our online quote form to see if we can travel to you. We're always expanding our service coverage!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+61492979067"
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl hover:shadow-xl transition-all duration-200 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:shadow-xl transition-all duration-200 font-semibold border-2 border-gray-200"
              >
                <Mail className="w-5 h-5" />
                <span>Get a Quote</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Mobile Service */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Why Choose Us</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              Mobile Battery Service Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "30 Minutes or Less",
                desc: "Need urgent help? We'll have a service van at your location in 30 minutes or less across Brisbane and Gold Coast.",
              },
              {
                icon: Truck,
                title: "We Come to You",
                desc: "Our mobile battery replacement service ensures fast, reliable support wherever you are - home, work, or roadside.",
              },
              {
                icon: Shield,
                title: "Warranty Backed",
                desc: "Every battery we install is high-performance, long-lasting, and backed by a solid warranty for your peace of mind.",
              },
              {
                icon: Battery,
                title: "All Battery Types",
                desc: "We stock a wide range of high-quality batteries for cars, trucks, motorcycles, 4WDs, boats, and more.",
              },
              {
                icon: Zap,
                title: "Expert Technicians",
                desc: "Our fully trained technicians provide professional installation and expert advice on every job.",
              },
              {
                icon: Navigation,
                title: "Wide Coverage",
                desc: "Servicing Brisbane, Gold Coast, and surrounding areas with fully equipped mobile service vehicles.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center text-blue-600 mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Got Questions?</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our mobile battery service in Brisbane and Gold Coast.
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you arrive for emergency battery service?",
      answer: "We aim to reach you within 60 minutes or less across Brisbane and Gold Coast. Our mobile vans are strategically positioned throughout the region to ensure fast response times. In most cases, we arrive even sooner, especially during emergency situations."
    },
    {
      question: "Do you offer 24/7 battery replacement service?",
      answer: "Yes! Battery Australia operates 24 hours a day, 7 days a week, 365 days a year. Whether it's 3 AM on a Sunday or a public holiday, we're here to help. Our emergency roadside service is always available when you need it most."
    },
    {
      question: "What types of batteries do you replace?",
      answer: "We stock and install batteries for all vehicle types including car batteries, truck batteries, motorcycle batteries, marine batteries, golf cart batteries, and NBN backup batteries. All batteries are matched to OEM specifications and come with warranty documentation."
    },
    {
      question: "How much does a battery replacement cost?",
      answer: "We provide transparent, upfront pricing with no hidden fees. The cost depends on your vehicle type and battery specifications. Contact us for a free quote online or call +61 492 979 067. We accept all major payment methods including VISA, Mastercard, PayPal, Afterpay, and Zip."
    },
    {
      question: "Do I need to bring my vehicle to a workshop?",
      answer: "No! That's the beauty of our mobile service. We come directly to you - whether you're at home, at work, in a shopping center, or stranded on the roadside. Our fully equipped vans carry everything needed to test, diagnose, and replace your battery on the spot."
    },
    {
      question: "What's included in your battery service?",
      answer: "Our service includes free battery testing and diagnostics, jumpstart if needed, complete battery replacement with professional installation, voltage checks, charging system tests, warranty paperwork, and expert advice. We ensure your vehicle is safe and ready to drive before we leave."
    },
    {
      question: "Which areas do you service?",
      answer: "We provide comprehensive coverage across Brisbane and the Gold Coast. Our service areas include Seventeen Mile Rocks, Burleigh Heads, and all surrounding suburbs. If you're unsure whether we cover your location, give us a call - we'll do our best to help you regardless of where you are."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 text-lg pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <ChevronDown className="w-6 h-6 text-blue-600" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Battery className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Battery Australia</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Battery Australia Roadside Rescue – Emergency roadside Fuel Topup – Emergency roadside Battery replacement – Emergency Roadside Spare tyre installation – Emergency Roadside basic tyre puncture repair – Emergency Roadside jumpstart.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/batteryaustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/batteryaustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/batteryaustralia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Battery Replacement", href: "/#battery-replacement" },
                { label: "Service Area", href: "/service-area" },
                { label: "Blog", href: "#blog" },
                { label: "Contact Us", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm">5/17 Benronalds Street, Seventeen Mile Rocks, 4073, Brisbane, Australia</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm">74 Township Drive, Burleigh Head, Gold Coast, Australia</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="tel:+61492979067" className="hover:text-blue-400 transition-colors duration-200">
                  +61 492 979 067
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:info@batteryaustralia.com.au" className="hover:text-blue-400 transition-colors duration-200">
                  info@batteryaustralia.com.au
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Service Hours</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
                <Clock className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-white font-semibold text-sm">24 Hours / 7 Days</p>
                  <p className="text-gray-400 text-xs">Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
                <Zap className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold text-sm">60 Min Response</p>
                  <p className="text-gray-400 text-xs">Fast Service Guarantee</p>
                </div>
              </div>
              <div className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 text-white text-center">
                <p className="font-bold text-sm">Brisbane & Gold Coast</p>
                <p className="text-xs mt-1">Wide Delivery Coverage</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 mb-6"
        >
          <p className="text-gray-400 text-sm text-center italic">
            Battery Australia acknowledges the Traditional Custodians of the Land and pays respects to Elders past, present and future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>© 2025 Battery Australia. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
