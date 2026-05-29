import React from "react";
import ServiceTemplate from "../../../components/ServiceTemplate";
import { Truck } from 'lucide-react';
import { Clock, Shield, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "Heavy-Duty Truck Battery Replacement | Battery Australia",
  description: "Minimise your downtime with our heavy-duty commercial truck battery replacement service across Brisbane. On-the-spot testing and installation for all commercial vehicles.",
};

export default function Page() {
  const features = [{'title': 'Commercial Grade Power', 'desc': 'We stock high-CCA, vibration-resistant batteries specifically designed for heavy commercial use.'}, {'title': 'Minimise Downtime', 'desc': 'We know time is money. Our priority response for commercial vehicles ensures you get back on the road ASAP.'}, {'title': '12V & 24V Systems', 'desc': 'Expert installation for complex 24V dual-battery systems in prime movers and heavy rigid trucks.'}];
const faqs = [{'q': 'Do you service 24V systems?', 'a': 'Yes, our technicians are fully trained to safely test and replace dual-battery 24V systems in heavy trucks.'}, {'q': 'Do you offer fleet accounts?', 'a': 'Yes, we provide priority service and trade pricing for commercial fleets. Contact us to set up an account.'}];

  return (
    <ServiceTemplate 
      heroSubtitle="Truck Batteries"
      title="Heavy-Duty Truck Battery Replacement"
      description="Minimise your downtime with our heavy-duty commercial truck battery replacement service across Brisbane. On-the-spot testing and installation for all commercial vehicles."
      features={features}
      
      faqs={faqs}
      heroIcon={<Truck className="w-5 h-5 text-blue-600" />}
    />
  );
}
