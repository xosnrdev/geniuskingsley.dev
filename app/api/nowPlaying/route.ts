import { getAccessToken } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const access_token = await getAccessToken();
    const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch currently playing song from Spotify" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("NOW_PLAYING_ENDPOINT :", error);
  }
}
