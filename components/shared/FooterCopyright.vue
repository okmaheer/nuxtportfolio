<script setup>
import { ref } from 'vue';

// Reactive state for the footer data
const copyrightDate = ref(new Date().getFullYear());
const projectName = 'Vue.js & CSS Portfolio';
const author = 'Maheer Akbar';
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/okmaheer/my-portfolio"
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        {{ projectName }}
      </a>
      . Developed by
      <a
        href="https://www.linkedin.com/in/maheer-akbar-271b28200/"
        target="__blank"
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >{{ author }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
