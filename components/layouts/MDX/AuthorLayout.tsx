import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company } = content;

  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-clip text-center sm:text-left">
          <h1 className="font-cabinet text-xl font-extrabold text-blue-600 md:text-3xl lg:text-4xl">
            Chidera Kingsley
          </h1>
          <h2 className="text-sm font-normal md:text-base">
            {occupation} <span className="font-semibold">{company}</span>
          </h2>
        </div>
        <div className="rounded-full border-4 border-blue-600">
          <Image
            alt="Chidera Kingsley"
            height={130}
            width={130}
            src={avatar || ''}
            className="rounded-full object-scale-down grayscale"
            draggable="false"
          />
        </div>
      </div>
      <div className="prose max-w-none pb-8 text-start text-base font-normal normal-case tracking-normal dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
