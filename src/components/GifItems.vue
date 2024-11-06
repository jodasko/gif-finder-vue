<template>
  <div v-for="gif in gifsList" :key="gif.id" class="card">
    <img :src="gif.url" />
    <p>{{ gif.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Giphy } from "../types/Giphy";

defineProps<{ gifsList: Giphy[] }>();
</script>
