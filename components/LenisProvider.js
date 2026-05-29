"use client";

import React, { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  const [options, setOptions] = useState({
    lerp: 0.07,
    duration: 1.4,
    syncTouch: true,
  });

  useEffect(() => {
    // Detect mobile viewport screens
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setOptions({
        lerp: 0.12,         // Snappier convergence (less intense inertia lag)
        duration: 0.8,      // Shorter glide timeframe
        syncTouch: false,   // Allow mobile native inertial swiping to take precedence
      });
    }
  }, []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
