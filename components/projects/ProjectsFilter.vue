<script setup>

// Define props
const props = defineProps({
  select: {
    type: String,
    default: 'projects',
    required: true,
  },
  selectOptions: {
    type: Array,
    default: () => ['Laravel', 'Vue js', 'React js','Nuxt js','Nodes js','Wordpress'
    ],
  },
});

// Define emit for 'filter' event
const emit = defineEmits(['filter']);
</script>

<template>
  <select
    @change="event => emit('filter', event.target.value)"
    :name="props.select"
    :id="props.select"
    class="font-general-medium
           px-4
           py-2
           border-1 border-gray-200
           dark:border-secondary-dark
           rounded-lg
           text-sm
           sm:text-md
           bg-secondary-light
           dark:bg-ternary-dark
           text-primary-dark
           dark:text-ternary-light"
  >
    <option value class="text-sm sm:text-md">All Projects</option>
    <option
      v-for="option in props.selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
