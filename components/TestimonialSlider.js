"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialSlider() {
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { id: 1, name: "Sheba Jacob", rating: 5.0, date: "3 months ago", message: "Sam was honest and reliable. He provided a great service after-hours and takes pride in his work. Will be in touch for all our battery replacement requirement in future too, thanks heaps Sam!", avatar: "SJ" },
    { id: 2, name: "Tana Pepa", rating: 5.0, date: "2 months ago", message: "Great value Fast paced really friendly. Amazing service. They came according to my convinience. Replaced the batery in 20 mins. Excelent service", avatar: "TP" },
    { id: 3, name: "TT AA", rating: 5.0, date: "2 months ago", message: "I needed a battery quite late at night. Service was precise, prompt, and well priced.", avatar: "TA" },
    { id: 4, name: "Altarium Ambient", rating: 5.0, date: "2 months ago", message: "Had a battery replacement sorted within hours of phoning up, super prompt response from Sam and was arranged at a great price.", avatar: "AA" },
    { id: 5, name: "Sharvani Padwal", rating: 5.0, date: "1 month ago", message: "Amazing service. They came according to my convinience. Replaced the batery in 20 mins. Excelent service", avatar: "SP" }
  ];

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto min-h-[750px] flex items-center justify-center cursor-pointer group py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full font-medium text-sm shadow-xl pointer-events-none"
          >
            Hover to expand all reviews
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:flex relative w-full h-full items-center justify-center">
        {testimonials.map((testimonial, index) => {
          const isTopRow = index < 3;
          const hoverX = isTopRow ? (index - 1) * 360 : (index - 3.5) * 360;
          const hoverY = isTopRow ? -180 : 180;

          return (
            <motion.div
              key={testimonial.id}
              className="absolute w-[340px] bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 "
              initial={false}
              animate={{
                x: isHovered ? hoverX : (index - 2) * 15,
                y: isHovered ? hoverY : (index - 2) * 8,
                rotate: isHovered ? 0 : (index - 2) * 6,
                scale: isHovered ? 1 : 1 - Math.abs(index - 2) * 0.05,
                zIndex: isHovered ? 10 : testimonials.length - Math.abs(index - 2),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <Quote className="w-10 h-10 text-blue-100 mb-4" />
              <p className="text-gray-700 text-base leading-relaxed italic mb-6 min-h-[140px]">
                "{testimonial.message}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br from-blue-600 to-red-600">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-700">{testimonial.rating}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <div className="lg:hidden flex flex-col gap-6 w-full max-w-[400px]">
        {testimonials.map((testimonial, index) => (
           <div key={testimonial.id} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <Quote className="w-8 h-8 text-blue-100 mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                "{testimonial.message}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs bg-gradient-to-br from-blue-600 to-red-600">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs">{testimonial.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-gray-700">{testimonial.rating}</span>
                </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
}
