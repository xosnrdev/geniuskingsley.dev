import { socialLinks } from "@/data/social";

export default function Social({ type }: { type: string }) {
  return (
    <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <a
              href={value.url}
              rel="noreferer noopener"
              target="_blank"
              className="group flex items-center border-b border-zinc-200 dark:border-b-zinc-800"
            >
              <value.icon
                className="h-5 w-5 flex-shrink-0 text-zinc-500 duration-300 group-hover:text-zinc-800 group-hover:dark:text-white"
                aria-hidden="true"
              />{" "}
              &nbsp;
              {value.name}
            </a>
          </li>
        ))}
    </ul>
  );
}
