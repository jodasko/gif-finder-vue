<template>
  <input
    v-model="searchInputRef"
    @keyup.enter="handleSearchTerm"
    placeholder="Type the gif that you are seeking and press Enter"
  />
  <h2>Gif: {{ title.toUpperCase() }}</h2>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchInputRef = ref<string>("");
let title = "";

const emit = defineEmits<{
  (event: "fetch-searchTerm", searchInputRef: string): void;
}>();

const handleSearchTerm = () => {
  if (searchInputRef.value.trim()) {
    emit("fetch-searchTerm", searchInputRef.value);
    title = searchInputRef.value;
    searchInputRef.value = "";
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>
