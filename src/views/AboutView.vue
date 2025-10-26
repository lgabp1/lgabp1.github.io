<script setup lang="ts">
import Navigation from '@/components/navigation.vue'
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "themedark",
  valueLight: "themelight",
});
const toggleDark = useToggle(isDark);
</script>

<style scoped>
@import "@/assets/main.css";

/* h1 {
  background-color: var(--main-bg-color);
} */
</style>

<template>
  <Navigation />
  
  <p>Dark theme: {{isDark}}</p>
  <button @click="toggleDark()">
    Toggle Color Mode
  </button>


  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
