import { defineNuxtPlugin } from '#app';
import feather from 'feather-icons';

export default defineNuxtPlugin(() => {
    import.meta.client ?? feather.replace();
});
