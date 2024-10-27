<script setup>
import { onMounted, onUpdated } from 'vue';
import { useRouter } from 'vue-router';
import feather from 'feather-icons';

// Define props
const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});

// Define emit
const emit = defineEmits(['theme-changed']);

// Use router for navigation
const router = useRouter();

// Toggle theme
const toggleTheme = () => {
  const newTheme = props.theme === 'light' ? 'dark' : 'light';
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newTheme);
  }
  emit('theme-changed', newTheme);
  router.go(); // Reload the page
};

// Replace icons
const replaceIcons = () => {
  if (typeof window !== 'undefined') {
    feather.replace();
  }
};

onMounted(replaceIcons);
onUpdated(replaceIcons);
</script>

<template>
  <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
    <i
      v-if="props.theme === 'light'"
      data-feather="moon"
      class="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light w-5"
    ></i>
    <i
      v-else
      data-feather="sun"
      class="text-gray-200 hover:text-gray-50 w-5"
    ></i>
  </a>
</template>
