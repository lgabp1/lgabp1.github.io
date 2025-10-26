<script setup lang="ts">
import { setPageTitle } from '@/assets/setPageTitle';
setPageTitle('About'); /* Set title */

import Navigation from '@/components/Navigation.vue'
</script>

<style scoped>
@import "@/assets/main.css";
.about-page {
  padding: 2em;
  text-align: center;
}
</style>

<template>  
  <Navigation />

  <div class="div-content">
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <div class="about">
      <h1>This is an about page</h1>
    </div>

    <!-- <p> x 50 -->
    <p v-for="n in 50" :key="n">This is some filler text to demonstrate scrolling behavior.</p>
  </div>>
</template>
