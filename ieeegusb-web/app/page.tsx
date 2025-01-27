"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import FeaturesSectionDemo from "@/components/ui/feature";
import ScrollingBanner from "@/components/scrolling-banner";
import { ImagesSliderDemo } from "@/components/imageslider";

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center">
        <ImagesSliderDemo />
      </div>
      <ScrollingBanner />
      <FeaturesSectionDemo />
    </>
  );
}
