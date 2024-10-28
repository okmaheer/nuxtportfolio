<script setup>
import AppBanner from '~/components/shared/AppBanner.vue';
import ProjectsGrid from '~/components/projects/ProjectsGrid.vue';
import Button from '~/components/reusable/Button.vue';


</script>

<template>
  <div class="container mx-auto">
    <!-- Banner -->
  

    <AppBanner class=" sm:mb-8" />

 
    <!-- Projects -->
    <ProjectsGrid />

    <!-- Load more projects button -->
    <div class="mt-10 sm:mt-20 flex justify-center">
      <NuxtLink
        to="/projects"
        class="flex items-center px-8 py-4 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl transition duration-300"
        aria-label="More Projects"
      >
        <Button title="More Projects" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Animation for slow spin */
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Custom animation classes */
.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

/* Tailwind-like pulse effect */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* Custom pulse animation */
.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
