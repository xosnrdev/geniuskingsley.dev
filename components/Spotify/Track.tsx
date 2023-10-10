import Link from "next/link";
import { Song } from "./types";

interface TrackProps {
  ranking: number;
  track: Song;
}

export default function Track({ track, ranking }: TrackProps) {
  return (
    <div className="mt-8 flex w-full max-w-5xl flex-row items-baseline border-b border-slate-200 dark:border-slate-800">
      <p className="text-sm font-bold text-slate-500 dark:text-slate-600">{ranking}</p>
      <div className="flex flex-col pl-3">
        <Link
          className="w-60 truncate font-medium text-slate-900 dark:text-slate-100 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </Link>
        <p className="mb-4 w-60 truncate text-slate-500 dark:text-slate-400 sm:w-96 md:w-full">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
