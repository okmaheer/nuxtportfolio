<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';

// Theme state
const theme = ref(import.meta.client ? localStorage.getItem('theme') || 'light' : 'light');

// Function to handle feather icon replacement on client-side
const replaceIcons = () => {
  if (import.meta.client) {
    feather.replace();
  }
};
const skills = [
  { name: "Laravel", icon: "laravel.svg" },
  { name: "Node js", icon: "nodejs.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Vue", icon: "vue.svg" },
  { name: "Nuxt", icon: "nuxt.svg" },
  { name: "Javascript", icon: "javascript.svg" },
  { name: "Tailwind", icon: "tailwind.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "Supabase", icon: "supabase.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "Vites js", icon: "vitejs.svg" },

];
// Run on component mount and update
onMounted(replaceIcons);
onUpdated(replaceIcons);
</script>

<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row  ">
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 ">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I am Maheer
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A Full-Stack Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="Maheer-Resume.pdf"
          href="/maheer-full-stack.pdf"
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100">
            Download CV
          </span>
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/3 ">
      <!-- Skills Section -->
      <div class="flex flex-wrap items-center justify-center space-x-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
      <!-- Skill Item Template -->
       <h6>My Skills</h6><br/>
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="relative group flex flex-col items-center space-y-3 cursor-pointer transition-transform transform hover:scale-110"
      >
        <!-- Icon with Pulse and Spin Animation on Hover -->
        <div class="w-16 h-16 p-1 rounded-full  dark:bg-gray-700 transition-all duration-300 group-hover:animate-spin-slow group-hover:animate-pulse">
          <img :src="`/images/${skill.icon}`" :alt="skill.name" class="w-full h-full object-contain" />
        </div>

        <!-- Text Slide-in Effect -->
        <span class="text-lg font-medium text-gray-700 dark:text-gray-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {{ skill.name }}
        </span>
      </div>
    </div>
</div>
    <!-- Banner right illustration -->
    <div class="w-full md:w-1/3 text-right ">
      <img
       width="500"
       height="500"
        v-if="theme === 'light'"
        src="@/assets/images/developer.svg"
        alt="Developer"
      />
      <img
        v-else
        src="@/assets/images/developer-dark.svg"
        alt="Developer"
      />
    </div>
  </section>
</template>

<style scoped></style>
