<script setup lang="ts">
import { setPageTitle } from '@/composables/setPageTitle'; // Updated import path and function name
setPageTitle('About'); /* Set title */

import Navigation from '@/components/Navigation.vue'
import { useLanguage } from '@/composables/useLanguage';

// Destructure only currentLanguage and toggleLanguage
const { currentLanguage, toggleLanguage } = useLanguage();
const cl = currentLanguage; // Alias for easier access
</script>

<style scoped>
</style>

<template>  
  <Navigation />

  <div class="div-content">
    About
  </div>
</template>
