<script setup>
import { ref, computed, onMounted } from 'vue';
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '~/composables/projects.js';

const projectsData = ref(projects);
const projectsHeading = ref('Projects Portfolio');
const selectedCategory = ref('');
const searchProject = ref('');

// Computed property for filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return projectsData.value;
});

// Method to filter projects by category
function filterProjectsByCategory() {
  return projectsData.value.filter((item) => {
    const category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectedCategory.value);
  });
}

// Method to filter projects by search term
function filterProjectsBySearch() {
  const project = new RegExp(searchProject.value, 'i');
  return projectsData.value.filter((el) => el.title.match(project));
}

// Replace icons on client side
onMounted(() => {
  if (process.client) {
    feather.replace();
  }
});
</script>

<template>
  <!-- Projects grid -->
  <section class="">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular
          text-center text-secondary-dark
          dark:text-ternary-light
          text-md
          sm:text-xl
          font-normal
          mb-4
        "
      >
        Search projects by title or filter by category
      </h3>
      <div
        class="
          flex
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-3
          gap-2
        "
      >
        <div class="flex justify-between gap-2">
          <span
            class="
              hidden
              sm:block
              bg-primary-light
              dark:bg-ternary-dark
              p-2.5
              shadow-sm
              rounded-xl
              cursor-pointer
              "
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium
            pl-3
            pr-1
            sm:px-4
            py-2
            border-1 border-gray-200
            dark:border-secondary-dark
            rounded-lg
            text-sm
            sm:text-md
            bg-secondary-light
            dark:bg-ternary-dark
            text-primary-dark
            dark:text-ternary-light
            "
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @filter="selectedCategory = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
    >
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
