'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import Social from './Social';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm Success Kingsley, I'm a Software Developer, I love crafting for the web.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36" ref={ref}>
            <div className="flex cursor-default flex-col space-y-2">
              <h1 className="text-2xl font-bold sm:text-xl md:text-5xl xl:text-6xl">
                Success Kingsley
              </h1>
              <p className="text-xl opacity-80 sm:text-lg md:text-2xl xl:text-3xl">
                I'm a software developer, I love crafting for the web.
              </p>
              <Link
                href="/about"
                aria-label="About Success Kingsley"
                className="mt-4 underline underline-magical text-base w-max cursor-pointer sm:text-sm md:text-lg xl:text-xl"
              >
                Read more about me &rarr;
              </Link>
            </div>
            <Social type="social" />
            <div className="mt-8 hidden text-clip text-lg lg:block">
              <span className="text-base">Press</span>
              <span className="rounded-md bg-gray-300 p-1 text-sm text-slate-800 dark:bg-gray-400">
                ⌘
              </span>
              <span className="text-base">+ </span>
              <span className="rounded-md bg-gray-300 p-1 text-sm text-slate-800 dark:bg-gray-400">
                K
              </span>
              <span className="text-base">to start</span>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');
                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} className="animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
