import React from "react";
import ServiceTemplate from "../../../components/ServiceTemplate";
import { Battery } from 'lucide-react';
import { Clock, Shield, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "Golf Cart & Mobility Battery Replacement | Battery Australia",
  description: "We stock 6V, 8V & 12V deep-cycle batteries for all major golf cart brands (Club Car, EZ-GO, Yamaha). Delivered and installed at your home or club.",
};

export default function Page() {
  const features = [{'title': 'Full Sets Installed', 'desc': 'We replace complete 36V and 48V banks (6x 6V, 6x 8V, or 4x 12V configurations).'}, {'title': 'Heavy-Duty Deep Cycle', 'desc': 'Premium flooded lead-acid and lithium options available for maximum range and longevity.'}, {'title': 'On-Site Installation', 'desc': 'We come to your golf course, retirement village, or private residence to do the heavy lifting.'}];
const faqs = [{'q': 'Do you take the old batteries away?', 'a': 'Yes, golf cart batteries are extremely heavy. We safely remove and recycle the entire old battery bank for free.'}, {'q': 'Can you upgrade my cart to Lithium?', 'a': 'Yes, we offer lithium drop-in replacements that reduce weight and increase range. Call us for a quote.'}];

  return (
    <ServiceTemplate 
      heroSubtitle="Golf Cart Batteries"
      title="Golf Cart & Mobility Battery Replacement"
      description="We stock 6V, 8V & 12V deep-cycle batteries for all major golf cart brands (Club Car, EZ-GO, Yamaha). Delivered and installed at your home or club."
      features={features}
      
      faqs={faqs}
      heroIcon={<Battery className="w-5 h-5 text-blue-600" />}
    />
  );
}
