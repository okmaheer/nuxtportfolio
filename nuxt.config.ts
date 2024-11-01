// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
css: ['~/assets/css/app.css'],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }},
  devtools: { enabled: true },
  compatibilityDate: '2024-10-27'
})