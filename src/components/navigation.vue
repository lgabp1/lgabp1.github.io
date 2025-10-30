<script setup lang="ts">
import { ref } from 'vue'; // Import ref for dropdown state
import { useDark, useToggle } from "@vueuse/core";
import ToggleSlider from './ToggleSlider.vue';
import { useLanguage } from '@/composables/useLanguage'; // Import useLanguage composable

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "themedark",
  valueLight: "themelight",
});
const toggleDark = useToggle(isDark);

// Use the language composable
const { currentLanguage, setLanguage } = useLanguage();
const cl = currentLanguage; // Alias for easier access
const showLanguageDropdown = ref(false); // State for language dropdown visibility

const selectLanguage = (lang: 'en' | 'fr') => {
  setLanguage(lang);
  showLanguageDropdown.value = false; // Close dropdown after selection
};
</script>

<template>
  <nav>
    <span v-if="cl === 'en'">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </span>
    <span v-if="cl === 'fr'">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/projects">Projets</RouterLink>
      <RouterLink to="/about">À propos</RouterLink>
    </span>

    
    
    <!-- New wrapper div for right-aligned elements -->
    <div class="nav-right">
      <!-- Language Dropdown -->
      <div class="language-selector">
        <button @click="showLanguageDropdown = !showLanguageDropdown" class="language-display-button" 
        title="Select Language"
        >
          {{ cl.toUpperCase() }}
        </button>
        <div v-if="showLanguageDropdown" class="language-dropdown-menu">
          <button @click="selectLanguage('en')" :class="{ 'active-lang': cl === 'en' }"
          title="English">EN</button>
          <button @click="selectLanguage('fr')" :class="{ 'active-lang': cl === 'fr' }"
          title="Français">FR</button>
        </div>
      </div>

      <!-- Dark Mode Toggle -->
      <ToggleSlider @update:modelValue="toggleDark()" :modelValue="isDark" 
      :title="cl === 'en' ? 'Toggle Dark Mode' : 'Changer le thème'">
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
  padding-right: 0.5em;
  margin-left: auto; 
  display: flex; 
  align-items: center; 
  gap: 0.5em; /* Added gap for spacing between language dropdown and dark mode toggle */
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

/* Styles for the icons, now defined here as they are part of navigation.vue's template */
.icon-light,
.icon-dark {
  font-size: 0.8em; /* Adjusted size to fit better within the thumb */
  line-height: 1;
  /* color: var(--slider-icon-color); */
}

/* Language Selector Styles */
.language-selector {
  position: relative;
  display: inline-block;
}

.language-display-button {
  background-color: var(--nav-bg-color);
  color: var(--nav-button-color);
  padding: 0.5em 0.8em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  width: 3.5em; /* Set a fixed width for alignment */
  text-align: center; /* Center the text */
}

.language-display-button:hover {
  background-color: var(--nav-button-line-hover); /* Use a hover color */
}

.language-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--nav-bg-color);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 0.2em 0;
}

.language-dropdown-menu button {
  background: none;
  border: none;
  color: var(--nav-button-color);
  padding: 0.5em 1em;
  text-align: center; /* Center the text */
  cursor: pointer;
  font-size: 0.9em;
}

.language-dropdown-menu button:hover {
  background-color: var(--nav-button-line-hover);
}

.language-dropdown-menu button.active-lang {
  background-color: var(--nav-button-line-active); /* Highlight active language */
  color: var(--nav-bg-color); /* Text color for active language */
}
</style>