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
        Hello, I'm Success Kingsley, a dedicated Software Developer with a passion for web
        application development. I'm an active member of the Google Developer Group, where I
        continuously learn and share knowledge about the latest trends and best practices in the
        tech industry. My primary expertise lies in working with React, JavaScript, TypeScript, and
        NodeJS. I've contributed to a variety of projects, ranging from open source to personal
        initiatives. In these projects, my responsibilities have spanned enhancing user interfaces
        and experiences, building core functionalities for web applications, and writing
        comprehensive tests to ensure code quality and reliability. I'm well-versed in Agile
        methodologies and understand the value of iterative development. I appreciate how tasks and
        functionalities must be assigned in sprints to meet deadlines effectively. This approach
        promotes flexibility, fosters a team-based attitude, and ensures that the final product
        aligns with the client's requirements. In addition to my technical skills, I bring a strong
        commitment to clear and effective communication. I ensure that all stakeholders are kept
        informed about project progress and any issues that arise. I believe in creating a positive
        and inclusive work environment where everyone's contributions are valued. I'm always on the
        lookout for new challenges and opportunities to further hone my skills and make a positive
        impact in the field of software development. For me, it's not just about writing code, but
        about building solutions that make a difference.
      </p>
      <div className="prose max-w-none mx-auto text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
