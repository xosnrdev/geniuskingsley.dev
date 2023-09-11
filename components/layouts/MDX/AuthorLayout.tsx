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
          <h1 className="font-cabinet text-xl font-extrabold text-blue-500 md:text-3xl lg:text-4xl">
            {name}
          </h1>
          <h2 className="self-stretch text-sm font-normal capitalize tracking-normal md:text-base">
            {occupation} <span className="font-cabinet font-semibold"> {company}</span>
          </h2>
          <div className="my-2 flex flex-col gap-y-2 text-center">
            <div className=" flex items-center">
              <Link
                href="https://drive.google.com/file/d/1RuRj5rHM-Qg32oxeVKT9-C-ot3lpl3EM/view?usp=sharing"
                rel="noreferrer noopener"
                target="_blank"
                className="flex basis-[90%] items-center justify-center rounded-md border-2 border-blue-500 text-center font-cabinet text-lg font-semibold hover:bg-blue-500 hover:text-slate-100"
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
            </div>
          </div>
        </div>
        <div className="pointer-events-none rounded-full border-4 border-blue-500">
          <Image
            alt="Chidera Kingsley"
            height={130}
            width={130}
            src={avatar || ""}
            className="rounded-full object-scale-down grayscale"
          />
        </div>
      </div>
      <div className="prose max-w-none self-stretch pb-8 font-normal normal-case tracking-normal dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
