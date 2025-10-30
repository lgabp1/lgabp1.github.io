import { ref, watch } from 'vue';

const LANGUAGE_STORAGE_KEY = 'app-language';

// Global state for the current language, initialized from localStorage or defaults to 'en'
const DEFAULT_LANGUAGE = 'en';
const currentLanguage = ref(localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE);

// Watch for changes in currentLanguage and save to localStorage
watch(currentLanguage, (newValue) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, newValue);
});

/**
 * Composable for managing application language.
 * Provides the current language and a function to toggle it.
 */
export function useLanguage() {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'fr' : 'en';
  };

  /**
   * Sets the application language to the specified code.
   * @param lang The language code ('en' or 'fr').
   */
  const setLanguage = (lang: 'en' | 'fr') => {
    if (['en', 'fr'].includes(lang)) {
      currentLanguage.value = lang;
    } else {
      console.warn(`Attempted to set unsupported language: ${lang}`);
    }
  };

  return {
    currentLanguage,
    toggleLanguage, // Keep toggleLanguage for backward compatibility if needed
    setLanguage,    // New function for direct language setting
  };
}
