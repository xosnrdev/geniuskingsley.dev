"use client";

import { almarena } from "app/fonts/localFont";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface IsMobileViewProps {
  src: string;
  title: string;
  url: string;
  github: string;
  isOpen: boolean;
  handleClose: () => void;
}

export default function IsMobileView({
  src,
  title,
  url,
  github,
  isOpen,
  handleClose,
}: IsMobileViewProps) {
  return (
    <>
      {isOpen && (
        <div className={`${almarena.className} transition ease-in sm:hidden`}>
          <div className="fixed inset-0 bg-slate-950 bg-opacity-50 transition duration-300">
            <div className="flex h-screen flex-col items-center justify-center px-2">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                <AiOutlineClose
                  onClick={handleClose}
                  size={30}
                  className="absolute right-2 top-2 z-50 cursor-pointer rounded-full bg-white p-1.5 text-slate-800 shadow-lg duration-100 hover:text-black"
                />

                <Image
                  src={`/static/images/project/${src}`}
                  alt={title}
                  height={200}
                  width={400}
                  className="pointer-events-none rounded-t-2xl object-contain hover:scale-110"
                />

                <div className="flex flex-col space-y-4 px-4 py-2">
                  <h1 className="text-center text-2xl font-bold text-slate-800">{title}</h1>
                  <div className="flex flex-row items-center justify-center space-x-4">
                    <Link
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="max-w-sm rounded-lg border bg-amber-500/90 px-3 py-2 text-lg font-light text-slate-200 shadow-xl"
                    >
                      View Live
                    </Link>
                    <Link
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="max-w-sm rounded-lg bg-slate-950 px-3 py-2 text-lg font-light text-white shadow-xl"
                    >
                      Github Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
