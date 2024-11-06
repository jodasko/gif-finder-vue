import { ref } from "vue";
import { fetchGifs } from "../service/getGifs";
import { Giphy } from "../types/Giphy";

const GIPHY_KEY = "E702g6ZOEJYPlNfPvKhHnsa5VvfGfjSQ";

const useGiphy = () => {
  const gifs = ref<Giphy[]>([]);
  const isLoading = ref(false);
  const hasError = ref<string | null>(null);

  const getGifs = async (category: string) => {
    isLoading.value = true;
    hasError.value = null;

    try {
      gifs.value = await fetchGifs(category, GIPHY_KEY);
    } catch (err) {
      hasError.value = "Failed to fetch GIFs";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return { gifs, isLoading, hasError, getGifs };
};

export default useGiphy;
