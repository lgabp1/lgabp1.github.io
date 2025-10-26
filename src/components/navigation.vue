<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import ToggleSlider from './ToggleSlider.vue'; // Import the renamed generic component

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "themedark",
  valueLight: "themelight",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    
    <!-- New wrapper div for right-aligned elements -->
    <div class="nav-right">
      <ToggleSlider :modelValue="isDark" @update:modelValue="toggleDark()">
        <!-- Content for the slider thumb slot -->
        <span v-if="!isDark" class="icon-light">☀️</span>
        <span v-if="isDark" class="icon-dark">🌙</span>
      </ToggleSlider>
    </div>
  </nav>
</template>

<style>
@import "@/assets/main.css";

nav {
  position: sticky;
  margin: 0; 
  padding: 0.4em;
  background-color: var(--nav-bg-color);
  display: flex;
  align-items: center;
  z-index: 1000; /* Ensures it stays above other content */
  /* box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Optional: adds a subtle shadow */
}

/* Right aligned items */
.nav-right {
  margin-left: auto; 
  display: flex; 
  align-items: center; 
  /* gap: 1em;  */
}

nav a {
  color: var(--nav-button-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
}

/* Line definition */
nav a::after {
  content: '';
  position: absolute;
  bottom: 0.2em;
  left: 1em; /* Left margin for line */
  right: 1em; /* Right margin for line */
  height: 2px; /* Line thickness */
  background-color: transparent;
}

/* Style for the underline on hover */
nav a:hover::after {
  background-color: var(--nav-button-line-hover);
}

/* Style for the underline on the active link */
nav a.router-link-active::after {
  background-color: var(--nav-button-line-active);
}

/* Styles for the icons, now defined here as they are part of Navigation.vue's template */
.icon-light,
.icon-dark {
  font-size: 0.8em; /* Adjusted size to fit better within the thumb */
  line-height: 1;
  /* color: var(--slider-icon-color); */
}


</style>