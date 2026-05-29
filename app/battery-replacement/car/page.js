import React from "react";
import ServiceTemplate from "../../../components/ServiceTemplate";
import { Car } from 'lucide-react';
import { Clock, Shield, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "Has Your Car Battery Died or Gone Flat? | Battery Australia",
  description: "Our mobile battery service comes directly to you, saving the hassle of towing or waiting at a workshop. We aim to arrive within 60 minutes. No call-out fees, no hidden charges — just fast, professional service.",
};

export default function Page() {
  const features = [{'title': 'All Makes & All Models', 'desc': 'We carry batteries compatible with every car brand sold in Australia, including European, Japanese, Korean, and American vehicles.'}, {'title': 'Full Diagnostics', 'desc': 'Free charging system diagnostic on the spot to ensure your alternator is functioning correctly.'}, {'title': 'Premium Batteries', 'desc': 'Century, Varta, Exide, Optima and more in stock. All matched to your OEM specifications.'}];
const faqs = [{'q': 'Do I need to bring my car to a workshop?', 'a': 'No! Our mobile vans are fully equipped to come to your home, office, or roadside to test, diagnose, and replace your battery on the spot.'}, {'q': 'Will my radio code be lost?', 'a': 'We use memory-saver devices during the replacement to ensure your radio codes and engine management systems remain intact.'}, {'q': 'What happens to my old battery?', 'a': "We offer free recycling of your old battery, ensuring it's disposed of in an environmentally friendly manner."}];

  return (
    <ServiceTemplate 
      heroSubtitle="Car Battery Replacement"
      title="Has Your Car Battery Died or Gone Flat?"
      description="Our mobile battery service comes directly to you, saving the hassle of towing or waiting at a workshop. We aim to arrive within 60 minutes. No call-out fees, no hidden charges — just fast, professional service."
      features={features}
      
      faqs={faqs}
      heroIcon={<Car className="w-5 h-5 text-blue-600" />}
    />
  );
}
