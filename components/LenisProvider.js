"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.4, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
