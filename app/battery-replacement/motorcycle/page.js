import React from "react";
import ServiceTemplate from "../../../components/ServiceTemplate";
import { Bike } from 'lucide-react';
import { Clock, Shield, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "Motorcycle Battery Replacement | Battery Australia",
  description: "Fast, reliable motorcycle battery replacement. We come to you — home, work, or roadside. We stock premium Yuasa, Motobatt, and more.",
};

export default function Page() {
  const features = [{'title': 'Premium AGM Brands', 'desc': 'We stock Yuasa and Motobatt, the leading brands for high-performance motorcycle batteries.'}, {'title': 'Ready to Ride', 'desc': 'All our motorcycle batteries come fully charged and activated so you can ride away instantly.'}, {'title': 'Expert Installation', 'desc': 'Safe removal of fairings and seats to access hard-to-reach battery compartments.'}];
const faqs = [{'q': 'Do you carry lithium motorcycle batteries?', 'a': 'Yes, we stock lightweight lithium options for performance and track bikes. Call us to check stock for your specific model.'}, {'q': 'Will you install it for me?', 'a': 'Yes, our technicians will carefully remove your seat or fairings, install the battery, and test the stator/charging system.'}];

  return (
    <ServiceTemplate 
      heroSubtitle="Motorcycle Batteries"
      title="Motorcycle Battery Replacement"
      description="Fast, reliable motorcycle battery replacement. We come to you — home, work, or roadside. We stock premium Yuasa, Motobatt, and more."
      features={features}
      
      faqs={faqs}
      heroIcon={<Bike className="w-5 h-5 text-blue-600" />}
    />
  );
}
