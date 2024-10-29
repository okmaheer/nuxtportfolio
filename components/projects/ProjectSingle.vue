<script setup>
import { NuxtLink } from '#components';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});
console.log(props.project);
const skills = [
  { name: "Laravel", icon: "laravel.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Vue", icon: "vue.svg" },
  { name: "Nuxt", icon: "nuxt.svg" },

];
</script>

<template>
  <NuxtLink
    :to=" project.orginal ? project.orginal : `/projects/project/${project.id}`"
    :target="project.orginal ? '_blank' : ''"
    class="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 cursor-pointer perspective"
    aria-label="Single Project"
  >
    <div class="relative w-full h-[250px] transform-style-preserve-3d transition-transform duration-700 flip-card">
      
      <!-- Front Side -->
      <div class="absolute inset-0 w-full h-full backface-hidden">
        <!-- Image with overlay gradient -->
        <img
          :src="project.img"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-75"></div>
        
        <!-- Project Information (Front) -->
        <div class="absolute bottom-4 left-4 text-white z-10">
          <h3 class="text-lg font-semibold">{{ project.title }}</h3>
          <p class="text-sm opacity-80">{{ project.category }}</p>
        </div>
      </div>
      
      <!-- Back Side with Custom Background Color and Styled Project Details -->
      <div class="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-white transform rotate-y-180 backface-hidden bg-indigo-custom">
        <div class="text-center px-6 py-4">
          <h3 class="text-xl font-bold tracking-wide mb-2">{{ project.title }}</h3>
          <p class="text-base text-gray-200 mb-4">Skills use in this project</p>
          <div class="flex flex-wrap items-center justify-center space-x-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
      <!-- Skill Item Template -->
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="relative group flex flex-col items-center space-y-3 cursor-pointer transition-transform transform hover:scale-110"
      >
        <!-- Icon with Pulse and Spin Animation on Hover -->
        <div class="w-10 h-10 p-3 rounded-full bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover:animate-spin-slow group-hover:animate-pulse">
          <img :src="`/images/${skill.icon}`" :alt="skill.name" class="w-full h-full object-contain" />
        </div>

      
      </div>
    </div>
          <button class="mt-4 px-6 py-2 text-sm font-semibold text-indigo-900 bg-white rounded-lg hover:bg-gray-100 transition-colors">
            View Project
          </button>
        </div>
      </div>
      
    </div>
  </NuxtLink>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
}

.flip-card {
  transition: transform 0.7s;
  transform-style: preserve-3d;
}

.flip-card:hover {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

/* Custom Background Color for Back Side */
.bg-indigo-custom {
  background-color: rgb(79, 70, 229);
  color: white;
}
</style>
