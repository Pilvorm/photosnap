"use client";

import { ReactLenis } from "lenis/react";

const easeOutcubic = (x) => 1 - Math.pow(1 - x, 5);

export default function LenisWrapper({ children }) {
  return (
    <ReactLenis
      root
      options={{
        easing: easeOutcubic,
        duration: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
