<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import AboutMe from '~/components/about/AboutMe.vue';
// import AboutCounter from '~/components/about/AboutCounter.vue';
// import AboutClients from '~/components/about/AboutClients.vue';

onMounted(() => feather.replace());
onUpdated(() => feather.replace());
</script>

<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <!-- About counter -->
    <!-- <AboutCounter /> -->

    <!-- About clients -->
    <!-- <div class="container mx-auto">
      <AboutClients />
    </div> -->
  </div>
</template>

<style scoped></style>
