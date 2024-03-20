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
        I am a dedicated Frontend Developer with 4 years of experience in designing and building
        intuitive web and mobile applications using React and React Native for startups, freelance
        and open source. My expertise includes developing frontend functionalities, integrating
        APIs, and optimizing performance with ReactJS and TypeScript. I have a strong understanding
        of REST APIs and have successfully used them in my projects. I am always eager to learn new
        technologies and methodologies to improve my skills.
      </p>
      <div className="prose max-w-none mx-auto text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
