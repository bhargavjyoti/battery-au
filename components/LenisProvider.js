"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  // Pass the exact same luxurious desktop scroll configurations and sync touch events uniformly
  const options = {
    lerp: 0.07,
    duration: 1.4,
    syncTouch: true, // Forces touch gestures to use the exact same smooth inertia scroll curves
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
