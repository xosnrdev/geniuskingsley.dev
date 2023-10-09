import { socialLinks } from "@/data/social";
import Link from "next/link";

export default function Social({ type }: { type: string }) {
  return (
    <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4 text-lg font-normal">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <Link
              href={value.url}
              rel="noreferer noopener"
              target="_blank"
              className="group flex items-center border-b border-slate-200 dark:border-b-slate-800"
            >
              <value.icon
                className="h-5 w-5 flex-shrink-0 text-base text-slate-500 duration-300 group-hover:text-slate-800 group-hover:dark:text-slate-200"
                aria-hidden="true"
              />{" "}
              &nbsp;
              {value.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
