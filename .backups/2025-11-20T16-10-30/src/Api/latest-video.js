import axios from 'axios';

export default async function handler(req, res) {
  // Ensure this is a GET request
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const API_KEY = process.env.VITE_TUBE_API_KEY;
    const CHANNEL_ID = process.env.VITE_YOUTUBE_CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) {
      return res.status(500).json({ error: 'YouTube API Key or Channel ID is not configured on the server.' });
    }

    // Step 1: Get the 'uploads' playlist ID from the channel ID
    const channelRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );

    const items = channelRes.data.items;
    if (!items || items.length === 0) {
      return res.status(404).json({ error: 'YouTube channel not found.' });
    }

    const uploadsPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;

    // Step 2: Get the latest video from the 'uploads' playlist
    const playlistRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`
    );

    const videoId = playlistRes.data.items?.[0]?.snippet?.resourceId?.videoId || null;

    return res.status(200).json({ videoId });
  } catch (error) {
    console.error('Server-side YouTube fetch error:', error.message);
    return res.status(500).json({ error: 'Failed to fetch video data.' });
  }
}