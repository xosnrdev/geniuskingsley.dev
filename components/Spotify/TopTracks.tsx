import Track from "./Track";
import { Song, TrackInfo } from "./types";
import { almarena } from "app/fonts/localFont";
import { getTopTracks } from "@/lib/spotify";

async function fetchTopTracks(): Promise<Song[] | null> {
  try {
    const response = await getTopTracks();
    const { items } = await response.json();

    if (!items || !Array.isArray(items)) {
      console.error("Unexpected data format:", items);
      return null;
    }

    const tracks = items.slice(0, 6).map((track: TrackInfo) => ({
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));

    return tracks;
  } catch (error) {
    console.error("fetchTopTracks:", error);
    return null;
  }
}

export default async function TopTracks() {
  try {
    const topTracks = await fetchTopTracks();

    if (!topTracks) {
      return null;
    }

    return (
      <div className={`py-7 ${almarena.className}`}>
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          My <span className="text-green-700 dark:text-green-500">Spotify</span> Top Songs
        </h1>
        {topTracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} track={track} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return <div className="font-normal text-red-500/90">Error loading top tracks.</div>; // Provide an error message to the user
  }
}
