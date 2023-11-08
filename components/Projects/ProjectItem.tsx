import Link from 'next/link';
import { ProjectModal } from './types';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ProjectItem({ index, title, url, role, setModal }: ProjectProps) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <>
      {breakpoint === 'mobile' ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setModal({ active: true, index });
          }}
          className="group flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16"
        >
          <h2 className="text-2xl text-left text-black/80 transition-all dark:text-slate-200 sm:text-4xl">
            {title}
          </h2>
          <p className="text-sm font-light text-black/80 transition-all dark:text-slate-200 sm:text-lg">
            {role}
          </p>
        </button>
      ) : (
        <Link
          href={url}
          target="_blank"
          onMouseEnter={() => {
            setModal({ active: true, index });
          }}
          onMouseLeave={() => {
            setModal({ active: false, index });
          }}
          className="group flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16"
          rel="noreferrer"
        >
          <h2 className="text-2xl font-normal text-black/80 transition-all group-hover:-translate-x-3 group-hover:scale-110 dark:text-slate-200 sm:text-6xl xl:px-2">
            {title}
          </h2>
          <p className="text-sm font-light  text-black/80 transition-all group-hover:translate-x-3 group-hover:scale-110 dark:text-slate-200 sm:text-lg">
            {role}
          </p>
        </Link>
      )}
    </>
  );
}
