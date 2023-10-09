const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN || "";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      next: {
        revalidate: 3600,
      },
    });

    return response.json();
  } catch (error) {
    console.log(`getAccessToken: ${error}`);
  }
};

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: {
        revalidate: 30,
      },
    });
  } catch (error) {
    console.log(`getNowPlaying: ${error}`);
  }
};

export const getTopTracks = async () => {
  try {
    const { access_token } = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    console.log(`getTopTracks: ${error}`);
  }
};
