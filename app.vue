<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import AppHeader from '~/components/shared/AppHeader.vue';
import AppFooter from '~/components/shared/AppFooter.vue';
import feather from 'feather-icons';

// Manage theme and initialize feather icons
const appTheme = ref(import.meta.client ? localStorage.getItem('theme') : 'light');

onMounted(() => {
  import.meta.client ??  feather.replace();
  if (appTheme.value === 'dark') {
    document.body.classList.add('bg-primary-dark');
  } else {
    document.body.classList.add('bg-secondary-light');
}});

watchEffect(() => {
  import.meta.client ??  feather.replace();
});
</script>

<template>
  <div :class="appTheme" class="pt-0.5">
    <!-- App header -->
    <AppHeader />

    <!-- Render active component contents with vue transition -->
    <transition name="fade" mode="out-in">
      <NuxtPage />
    </transition>

    <!-- Scroll to top -->
    <!-- <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
      <i data-feather="chevron-up"></i>
    </back-to-top> -->

    <!-- App footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vue-back-to-top {
  @apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
    duration-500
    ease-in-out
    transform
    hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
