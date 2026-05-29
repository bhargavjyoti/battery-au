import React from "react";
import ServiceTemplate from "../../../components/ServiceTemplate";
import { Ship } from 'lucide-react';
import { Clock, Shield, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "Marine Battery Supply & Installation | Battery Australia",
  description: "Reliable marine batteries for boats, jet skis, and watercraft. We supply deep-cycle and AGM batteries to marinas and boat ramps across Brisbane, often within 1 hour.",
};

export default function Page() {
  const features = [{'title': 'Deep-Cycle & Dual Purpose', 'desc': 'We carry specialized marine batteries designed to withstand pounding vibration and provide reliable starting power.'}, {'title': 'Marina Delivery', 'desc': 'We deliver and install directly to your boat ramp, marina berth, or driveway.'}, {'title': '100% Maintenance Free', 'desc': 'Sealed, spill-proof AGM marine batteries that are safe for enclosed hulls.'}];
const faqs = [{'q': 'Can you install at the marina?', 'a': 'Absolutely. We regularly deliver and install batteries at all major marinas and boat ramps across Brisbane and the Gold Coast.'}, {'q': 'Do you test marine charging systems?', 'a': 'Yes, we can test your outboard or inboard charging system to ensure your new battery will stay charged.'}];

  return (
    <ServiceTemplate 
      heroSubtitle="Marine Batteries"
      title="Marine Battery Supply & Installation"
      description="Reliable marine batteries for boats, jet skis, and watercraft. We supply deep-cycle and AGM batteries to marinas and boat ramps across Brisbane, often within 1 hour."
      features={features}
      
      faqs={faqs}
      heroIcon={<Ship className="w-5 h-5 text-blue-600" />}
    />
  );
}
