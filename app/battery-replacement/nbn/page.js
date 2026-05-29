import React from "react";
import ServiceTemplate from "../../../components/ServiceTemplate";
import { RadioTower } from 'lucide-react';
import { Clock, Shield, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "NBN Battery Replacement Service | Battery Australia",
  description: "Keep your internet and phone connected during power outages. If your NBN box is beeping, we provide fast, same-day replacement across Brisbane.",
};

export default function Page() {
  const features = [{'title': 'Stop the Beeping', 'desc': "We'll silence that annoying low-battery alarm and restore your backup power supply immediately."}, {'title': 'Genuine SLA Batteries', 'desc': 'We use high-quality 12V 7Ah/9Ah Sealed Lead Acid batteries approved for NBN equipment.'}, {'title': 'Same-Day Service', 'desc': 'Working from home? We offer rapid response to keep your home office connected.'}];
const faqs = [{'q': 'Why is my NBN box beeping?', 'a': 'A beeping NBN power supply unit indicates the backup battery is failing and needs to be replaced. We can silence it and install a new one.'}, {'q': 'Do I need an NBN battery?', 'a': 'If you have an FTTP connection and rely on a landline for medical alarms or emergency calls during blackouts, a backup battery is essential.'}];

  return (
    <ServiceTemplate 
      heroSubtitle="NBN Backup Batteries"
      title="NBN Battery Replacement Service"
      description="Keep your internet and phone connected during power outages. If your NBN box is beeping, we provide fast, same-day replacement across Brisbane."
      features={features}
      
      faqs={faqs}
      heroIcon={<RadioTower className="w-5 h-5 text-blue-600" />}
    />
  );
}
