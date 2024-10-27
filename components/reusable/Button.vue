<script setup>

// Define props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button>{{ props.title }}</button>
</template>

<style lang="scss" scoped></style>
