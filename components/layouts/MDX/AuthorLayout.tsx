"use client";

import Image from "@/components/Image";
import type { Authors } from "contentlayer/generated";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: Omit<Authors, "_id" | "_raw" | "body">;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company } = content;

  return (
    <div className="m-auto pt-8">
      <div className="my-2 flex flex-col-reverse items-center justify-between sm:flex-row">
        <div className="text-clip text-center sm:text-left">
          <h1 className="font-cabinet text-xl font-extrabold text-blue-600 md:text-3xl lg:text-4xl">
            {name}
          </h1>
          <h2 className="self-stretch text-sm font-normal capitalize tracking-normal md:text-base">
            {occupation} <span className="font-cabinet font-semibold"> {company}</span>
          </h2>
          <div className="my-2 flex flex-col gap-y-2 text-center">
            <div className="flex items-center gap-x-3">
              <Link
                href="/"
                rel="noreferrer noopener"
                target="_blank"
                className="flex basis-[90%] items-center justify-center gap-x-2 rounded-md border border-transparent bg-zinc-100 py-2 text-center font-cabinet text-lg font-semibold hover:border-zinc-200 dark:hover:border-zinc-700"
              >
                View Resume{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="text-base"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </Link>
              <Link
                href="/"
                className="dark:text-primary-color text-secondary-color dark:bg-primary-bg flex basis-[10%] items-center justify-center rounded-md border border-transparent bg-zinc-100 py-3 text-center text-lg hover:border-zinc-200 hover:underline dark:hover:border-zinc-700"
                title="Download Resume"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="text-lg"
                  aria-label="Download Resume"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none rounded-full border-4 border-blue-600">
          <Image
            alt="Chidera Kingsley"
            height={130}
            width={130}
            src={avatar || ""}
            className="rounded-full object-scale-down grayscale"
          />
        </div>
      </div>
      <span className="my-2 flex items-center justify-center lg:hidden">
        <Link
          href="mailto:kharunaking@gmail.com"
          className="css-1tzfalu flex items-center justify-center gap-x-2"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="object-center text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
          </svg>
          Kharunaking@gmail.com
        </Link>
      </span>
      <div className="prose max-w-none self-stretch pb-8 font-normal normal-case tracking-normal dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
