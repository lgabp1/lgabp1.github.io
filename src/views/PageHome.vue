<script setup lang="ts">
import { setPageTitle } from '@/assets/setPageTitle';
setPageTitle('Home'); /* Set title */

import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <Navigation />

  <main>
    <h1>This is the home page</h1>
  </main>
</template>
