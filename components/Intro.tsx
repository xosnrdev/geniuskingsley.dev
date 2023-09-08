"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRef, useState } from "react";

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 text-clip bg-black text-white dark:bg-white  dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 font-cabinet text-4xl font-bold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">
        <div className="space-y-4 leading-[1.5] lg:space-y-0">
          <div className="introText" style={{ opacity: opacityForBlock(progress, 0) }}>
            I love the art of coding.
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I use my passion & self-driven skills to build digital products and experiences.
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I've found my passion in 'Refactoring UI'. Crafting experiences that not only look good
            but feel right is what I'm all about.
          </span>
        </div>
      </div>
    </div>
  );
}
