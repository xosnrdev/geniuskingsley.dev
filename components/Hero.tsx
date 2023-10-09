"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { ScrollContext } from "./Providers/ScrollProvider";
import Social from "./Social";
import { renderCanvas } from "./renderCanvas";
import { almarena } from "app/fonts/localFont";

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
    <div className={almarena.className}>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className=" bg-blue-600/90 bg-clip-text text-left text-5xl font-bold leading-normal tracking-normal text-transparent md:text-6xl xl:text-7xl xl:leading-relaxed">
                Chidera Kingsley
              </h1>
              <h2 className="text-4xl font-normal tracking-normal text-slate-800 dark:text-slate-200 md:text-5xl xl:text-5xl">
                "Crafting for the web",
                <br /> I blend tradition with digital trends.
              </h2>

              <Link
                href="/about"
                className="w-max animate-pulse cursor-pointer rounded-lg text-lg font-light leading-normal tracking-normal text-slate-800 transition-transform duration-300 hover:translate-y-2 hover:bg-slate-100 hover:px-3 hover:py-2 hover:text-slate-800 dark:text-slate-200 hover:dark:bg-inherit md:text-xl xl:text-xl"
              >
                Read more about me &rarr;
              </Link>
            </div>

            <span>
              {" "}
              <Social type="social" />
            </span>

            <div className="mt-8 hidden text-clip text-lg lg:block">
              <span className="text-sm">Press</span>{" "}
              <span className="rounded-md bg-gray-300 p-1 text-sm text-slate-800 dark:bg-gray-400">
                ⌘
              </span>{" "}
              <span className="text-sm">+ </span>
              <span className="rounded-md bg-gray-300 p-1 text-sm text-slate-800 dark:bg-gray-400">
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
