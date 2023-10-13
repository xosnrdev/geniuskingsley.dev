"use client";

import type { Authors } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: Omit<Authors, "_id" | "_raw" | "body">;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, occupation, company, avatar } = content;

  return (
    <div className="pt-8">
      <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
        <div className="text-clip text-center sm:text-left">
          <h1 className="text-xl font-extrabold text-blue-600/90 md:text-3xl lg:text-4xl">
            {name || ""}
          </h1>
          <h2 className="my-1 text-base capitalize text-slate-600/90 dark:text-slate-200/90 md:text-lg">
            {occupation}{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200"> {company}</span>
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="text-slate-800 dark:text-slate-200">
              <Link
                href={"/resume/chidera.pdf"}
                rel="noreferrer noopener"
                target="_blank"
                className="css-1tzfalu text-center font-semibold"
              >
                View Resume{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-full border-4 border-blue-600/90">
          <Image
            src={avatar || ""}
            height={125}
            width={125}
            alt={name}
            className="pointer-events-none rounded-full object-scale-down grayscale"
          />
        </div>
      </div>
      <p className="prose text-slate-600/90 dark:prose-dark lg:prose-lg dark:text-slate-200/90 lg:min-w-full xl:col-span-2">
        I am a Software Engineer with a background in Mechanical Engineering. Over the years, I have
        shifted my focus to developing web applications, gaining proficiency in languages such as
        JavaScript and Python. In my recent role at World Wide Techies, my responsibilities
        encompassed enhancing Firebase functionalities through JavaScript and crafting user-centric
        components with React for live streaming platforms.
      </p>
      <div className="prose mt-6 space-y-6 text-slate-600/90 dark:prose-dark dark:text-slate-200/90 md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
