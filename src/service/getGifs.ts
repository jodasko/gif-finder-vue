// const GIPHY_KEY = "E702g6ZOEJYPlNfPvKhHnsa5VvfGfjSQ";

import { Giphy } from "../types/Giphy";

export const fetchGifs = async (category: string, apiKey: string) => {
  if (category) {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    );
    const { data } = await resp.json();
    const gifs = data.map((img: Giphy) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifs;
  }
  return null;
};
