<template>
  <div>
    <h1>Gif Finder in Vue 3</h1>
    <SearchGifs @fetch-searchTerm="fetchSearchTerm" />
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError">{{ hasError }}</div>
    <div v-else class="card-grid">
      <GifItems :gifsList="gifs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { SearchGifs, GifItems } from "./components";
import useGiphy from "./composables/useGiphy";

const { getGifs, gifs, isLoading, hasError } = useGiphy();

const fetchSearchTerm = (text: string) => {
  getGifs(text);
};
</script>
