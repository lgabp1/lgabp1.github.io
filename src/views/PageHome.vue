<script setup lang="ts">
import { setPageTitle } from '@/composables/setPageTitle'; // Updated import path and function name
setPageTitle('Home'); /* Set title */

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
    <h1 v-if="cl === 'en'">Welcome to my home page!</h1>
    <h1 v-if="cl === 'fr'">Bienvenue sur ma page d'accueil !</h1>

    <h2 v-if="cl === 'en'">Overview</h2>
    <h2 v-if="cl === 'fr'">Aperçu</h2>
    
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
    <p>
      <span v-if="cl === 'en'">
        You may also check out my GitHub repositories
        <a href="https://github.com/lgabp1?tab=repositories" target="_blank" rel="noopener noreferrer">here</a>
        .
      </span>
      <span v-if="cl === 'fr'">
        Vous pouvez également consulter mes dépôts GitHub
        <a href="https://github.com/lgabp1?tab=repositories" target="_blank" rel="noopener noreferrer">ici</a>
        .
      </span>
    </p>
  </div>
</template>
