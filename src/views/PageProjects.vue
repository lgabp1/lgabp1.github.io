<script setup lang="ts">
import { setPageTitle } from '@/composables/setPageTitle'; // Updated import path and function name
setPageTitle('Projects'); /* Set title */

import Navigation from '@/components/Navigation.vue'
import { useLanguage } from '@/composables/useLanguage';
import TimelineEntry from '@/components/TimelineEntry.vue';

// Destructure only currentLanguage and toggleLanguage
const { currentLanguage, toggleLanguage } = useLanguage();
const cl = currentLanguage; // Alias for easier access
</script>

<style scoped>
@import '@/assets/base.css';
.timeline {
  position: relative;
  max-width: 80vw;
  margin: 3rem auto;
  padding-left: 7.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6.2rem;
  top: 0;
  bottom: 0;
  width: 0.125rem;
  background: var(--timeline-line);
}

</style>

<template>  
  <Navigation />
  <div class="div-content">
    <h1>
      Projects
    </h1>
    
    <div class="timeline">
      <TimelineEntry
        title="Project Title 1"
        summary="A short description of Project 1."
        date="2023 - Present"
      >
        <p>This is a more detailed description of Project 1. It covers the challenges, solutions, and outcomes in depth.This is a more detailed description of Project 1. It covers the challenges, solutions, and outcomes in depth.This is a more detailed description of Project 1. It covers the challenges, solutions, and outcomes in depth.This is a more detailed description of Project 1. It covers the challenges, solutions, and outcomes in depth.This is a more detailed description of Project 1. It covers the challenges, solutions, and outcomes in depth.This is a more detailed description of Project 1. It covers the challenges, solutions, and outcomes in depth.</p>
      </TimelineEntry>
      <TimelineEntry
        title="Project Title 2"
        summary="A short description of Project 2."
        date="2022"
      >
        <p>This is a more detailed description of Project 2. It covers the challenges, solutions, and outcomes in depth.</p>
      </TimelineEntry>
      <TimelineEntry
        title="Project Title 3"
        summary="A short description of Project 3."
        date="2021"
      >
        <p>This is a more detailed description of Project 3. It covers the challenges, solutions, and outcomes in depth.</p>
      </TimelineEntry>
    </div>
  </div>
</template>
