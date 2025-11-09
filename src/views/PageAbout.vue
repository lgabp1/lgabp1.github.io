<script setup lang="ts">
import { setPageTitle } from '@/composables/setPageTitle'; // Updated import path and function name
setPageTitle('About'); /* Set title */

import navigation from '@/components/Navigation.vue'
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
      <span v-if="cl === 'en'">About</span>
      <span v-if="cl === 'fr'">À propos</span>
    </h1>

    <p>
      <span v-if="cl === 'en'">
        This simple GitHub Pages site serves as my personal portfolio, showcasing some of my projects and skills.
      </span>
      <span v-if="cl === 'fr'">
        Ce site GitHub Pages assez rudimentaire sert de portfolio personnel, j'y présente certains de mes projets.
      </span>
    </p>

    <p>
      <span v-if="cl === 'en'">
        It was made using the
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
        framework and is almost entirely handcrafted.

        The source code is available
        <a href="https://github.com/lgabp1/lgabp1.github.io" target="_blank" rel="noopener">here</a>.
      </span>
      <span v-if="cl === 'fr'">
        Il a été réalisé avec le framework
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
        avec un code majoritairement fait maison.

        Le code source est disponible
        <a href="https://github.com/lgabp1/lgabp1.github.io" target="_blank" rel="noopener">ici</a>.
      </span>
    </p>

    <h3>
      <span v-if="cl === 'en'">Contact Me</span>
      <span v-if="cl === 'fr'">Contactez-moi</span>
    </h3>

    <p>
      <span v-if="cl === 'en'">
        Feel free to reach out to me with any questions or suggestions!
      </span>
      <span v-if="cl === 'fr'">
        N'hésitez pas à me contacter pour toute question ou suggestion !
      </span>
    </p>
    
  </div>
</template>
