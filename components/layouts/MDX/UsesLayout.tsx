import Link from 'next/link';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

export default function UsesLayout({ children }: Props) {
  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col space-y-2 text-center">
        <h1 className="text-5xl font-bold leading-9 text-slate-800 dark:text-slate-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Tools I Use
        </h1>
        <span className="text-slate-700 dark:text-slate-300">
          Inspired by{' '}
          <Link
            href="https://wesbos.com/uses"
            className="underline-magical"
            target="_blank"
            rel="noreferrer"
          >
            Wes bos
          </Link>
        </span>
      </div>
      <div className="prose max-w-none mx-auto text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
