<script setup>

// Define props
const props = defineProps({
  projectImages: {
    type: Array,
    required: true,
  },
});
console.log(props.projectImages)
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
    <div
      class="mb-10 sm:mb-0"
      v-for="projectImage in props.projectImages"
      :key="projectImage.id"
    >
      <img
        :src="projectImage.img"
        :alt="projectImage.title"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      />
    </div>
  </div>
</template>

<style scoped></style>
