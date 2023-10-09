"use client";

import headerNavLinks from "@/data/headerNavLinks";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CommandPalette from "./CommandPalette/CommandPalette";
import MobileNav from "./MobileNav";
import SectionContainer from "./SectionContainer";
import ThemeSwitch from "./ThemeSwitch";
import { almarena } from "app/fonts/localFont";

export default function Header() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className={`z-40 bg-transparent py-5 md:py-10 ${almarena.className}`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className="font-cabinet flex items-center justify-between text-4xl"
              aria-label="Home"
            >
              <div
                className={classNames("horizontal-underline hidden font-bold sm:block", {
                  "horizontal-underline-active": pathName === "/",
                })}
              >
                g.
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {headerNavLinks.map(({ title, href }) => {
                const active = pathName?.includes(href);
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={classNames("horizontal-underline", {
                      "horizontal-underline-active": active,
                    })}
                    aria-label={title}
                  >
                    <span className="font-bold tracking-wide text-slate-800 dark:text-slate-200">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center">
              <CommandPalette />
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
