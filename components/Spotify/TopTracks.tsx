// import Track from "./Track";
// import { Song, TrackInfo } from "./types";
// import { almarena } from "app/fonts/localFont";

// async function fetchTopTracks(): Promise<Song[] | null> {
//   try {
//     const response = await fetch("http://localhost:3000/api/topTracks");

//     // console log response body
//     console.log(response);
//   } catch (e) {
//     if (e instanceof Error) {
//       console.error(e.message);
//     }
//   }
// }

// export default async function TopTracks() {
//   try {
//     const topTracks = await fetchTopTracks();

//     if (!topTracks) {
//       return null;
//     }

//     return (
//       <div className={`py-7 ${almarena.className}`}>
//         <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
//           My <span className="text-green-700 dark:text-green-500">Spotify</span> Top Songs
//         </h1>
//         {topTracks.map((track, index) => (
//           <Track ranking={index + 1} key={track.songUrl} track={track} />
//         ))}
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching top tracks:", error);
//     return <div>Error loading top tracks.</div>; // Provide an error message to the user
//   }
// }
