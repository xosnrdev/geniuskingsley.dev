'use client';

import type { Authors } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, occupation, company, avatar } = content;

  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left lg:space-y-1">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">{name}</h1>
          <h2 className="text-sm font-normal md:text-base">
            {occupation} <span className="font-semibold">{company}</span>
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="text-slate-800 dark:text-slate-200">
              <Link
                href={'/resume.pdf'}
                rel="noreferrer noopener"
                target="_blank"
                className="css-1tzfalu text-center font-semibold"
              >
                View Resume{' '}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={avatar || ''}
            height={125}
            width={125}
            alt={name}
            className="rounded-full object-scale-down grayscale select-none pointer-events-none"
          />
        </div>
      </div>
      <p className="prose max-w-none mx-auto pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2">
        I'm a Frontend Engineer with hands-on experience. I've improved user engagement and
        productivity at previous roles. Skilled in React, JavaScript, and AI. I'm open to new
        opportunities in tech. Let's connect and explore potential collaborations.
      </p>
      <div className="prose max-w-none mx-auto text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
