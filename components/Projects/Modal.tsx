'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

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
        <div className="transition ease-in sm:hidden">
          <div className="fixed inset-0 z-50 bg-white/25 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-black/25">
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-sm translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white/80 dark:bg-black/80 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl">
              <AiOutlineClose
                onClick={handleClose}
                size={25}
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 text-black dark:text-white disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              />

              <Image
                style={{ width: 'auto', height: 'auto' }}
                src={`/static/images/project/${src}`}
                alt={title}
                height={196}
                width={350}
                priority
                className="pointer-events-none w-full rounded-t-xl object-contain"
              />

              <div className="flex flex-col space-y-4 px-4 py-2">
                <h1 className="text-center text-2xl font-bold text-black dark:text-white">
                  {title}
                </h1>
                <div className="flex flex-row items-center justify-center space-x-4">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="max-w-xs rounded-lg border bg-amber-500/90 px-3 py-2 text-lg font-light text-slate-200 shadow-xl"
                  >
                    View Live
                  </Link>
                  <Link
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="max-w-xs mx-auto rounded-lg bg-slate-950 dark:border-white border px-3 py-2 text-lg font-light text-white shadow-xl"
                  >
                    Github Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
