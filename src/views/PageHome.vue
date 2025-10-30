<script setup lang="ts">
import { setPageTitle } from '@/composables/setPageTitle'; // Updated import path and function name
setPageTitle('Home'); /* Set title */

import navigation from '@/components/navigation.vue'
import { useLanguage } from '@/composables/useLanguage';

// Destructure only currentLanguage and toggleLanguage
const { currentLanguage, toggleLanguage } = useLanguage();
const cl = currentLanguage; // Alias for easier access
</script>

<style scoped>
</style>

<template>  
  <navigation />

  <div class="div-content">
    <h1>
      <span v-if="cl === 'en'">Welcome to my home page!</span>
      <span v-if="cl === 'fr'">Bienvenue sur ma page d'accueil !</span>
    </h1>

    <h2>
      <span v-if="cl === 'en'">Overview</span>
      <span v-if="cl === 'fr'">Aperçu</span>
    </h2>
    
    <p>
      <span v-if="cl === 'en'">Please check out the
        <RouterLink to="/projects">Projects</RouterLink>
        page for information about my work and projects.
      </span>
      <span v-if="cl === 'fr'">Jetez un œil à la page
        <RouterLink to="/projects">Projets</RouterLink>
        pour une vue d'ensemble de mes travaux et projets.
      </span>
    </p>
  </div>
</template>
