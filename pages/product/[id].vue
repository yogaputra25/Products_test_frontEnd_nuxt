<script setup lang="ts">
const route = useRoute();
import { useMyApiStore } from "@/stores/api";
const apiStore = useMyApiStore();
const { productId } = storeToRefs(apiStore);
const getProductsById = apiStore.getProductById;

onMounted(() => {
  getProductsById(route.params.id.toString());
});
</script>

<template>
  <div class="container mx-auto p-4">
    <div
      class="max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
    >
      <img
        class="w-full h-auto"
        :src="productId?.images[0]"
        :alt="productId?.title"
      />
      <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">{{ productId?.title }}</h1>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          {{ productId?.description }}
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          Category: {{ productId?.category }}
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          Price: ${{ productId?.price }}
        </p>
        <div class="flex items-center">
          <div
            class="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            {{ productId?.rating }} / 5
          </div>
          <span class="text-gray-700 dark:text-gray-300"
            >{{ productId?.reviews.length }} Reviews</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
