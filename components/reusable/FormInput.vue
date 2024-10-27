<script setup>

// Define props
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  inputIdentifier: {
    type: String,
    default: '',
  },
  val: {
    type: [String, Number],
    default: '',
  },
  inputType: {
    type: String,
    default: 'text',
  },
});

// Emit event to update val
const emit = defineEmits(['update:val']);
</script>

<template>
  <div>
    <label
      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
      :for="props.label"
    >
      {{ props.label }}
    </label>
    <input
      class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
      :id="props.inputIdentifier"
      :name="props.inputIdentifier"
      :placeholder="props.label"
      :aria-label="props.inputIdentifier"
      :value="props.val"
      :type="props.inputType"
      v-bind="$attrs"
      @input="event => emit('update:val', event.target.value)"
      required
    />
  </div>
</template>

<style lang="scss" scoped></style>
