"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { ScrollContext } from "./Providers/ScrollProvider";
import Social from "./Social";
import { renderCanvas } from "./renderCanvas";

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
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
      <h1 className="sr-only font-cabinet">
        Hello I'm Chidera, I'm a software developer, and I love building things for the web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2 text-clip">
              <h1 className=" bg-blue-500 bg-clip-text font-cabinet text-5xl font-extrabold leading-tight tracking-tighter text-transparent sm:text-center sm:text-5xl sm:text-[4rem] sm:leading-[4.75rem] md:text-6xl lg:text-left xl:text-8xl">
                Chidera Kingsley
              </h1>
              <h2 className="font-space text-2xl font-medium opacity-80 sm:text-4xl md:text-5xl xl:text-6xl">
                "Crafting for the web",
                <br /> I blend tradition with digital trends.
              </h2>

              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-xl"
              >
                Read more about me &rarr;
              </Link>
            </div>

            <span>
              {" "}
              <Social type="social" />
            </span>

            <div className="mt-8 hidden text-clip lg:block">
              <span className="text-sm">Press</span>{" "}
              <span className="rounded-md bg-gray-300 p-1 text-sm text-slate-900 dark:bg-gray-400">
                ⌘
              </span>{" "}
              <span className="text-sm">+ </span>
              <span className="rounded-md bg-gray-300 p-1 text-sm text-slate-900 dark:bg-gray-400">
                K
              </span>{" "}
              <span className="text-sm">to start</span>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector("#intro");

                  intro?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
