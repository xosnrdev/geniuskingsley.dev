import Link from "next/link";
import { ProjectModal } from "./types";
import { almarena } from "app/fonts/localFont";

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ProjectItem({ index, title, url, role, setModal }: ProjectProps) {
  return (
    <Link
      href={url}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={`group flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16 ${almarena.className}`}
      rel="noreferrer"
    >
      <h2 className="text-2xl font-normal text-slate-800 transition-all group-hover:-translate-x-3 group-hover:scale-110 dark:text-slate-200 sm:text-6xl xl:px-2">
        {title}
      </h2>
      <p className="text-sm font-light  text-slate-800 transition-all group-hover:translate-x-3 group-hover:scale-110 dark:text-slate-200 sm:text-lg">
        {role}
      </p>
    </Link>
  );
}
