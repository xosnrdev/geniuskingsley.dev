import kebabCase from "@/lib/utils/kebabCase";
import Link from "next/link";

interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="rounded-md bg-blue-600/90 p-1 px-3 text-xs uppercase text-slate-200 duration-300 hover:bg-amber-500/90 active:bg-blue-600/90"
    >
      {text.split(" ").join("-")}
    </Link>
  );
}
