import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { app_title } from '@/assets/utilities';

/**
 * A composable to manage the document title for a specific page.
 * It sets the title on mount and updates it if the route changes
 * while the component is still active.
 *
 * @param pageName The specific name of the page (e.g., "About", "Home").
 */
export function setPageTitle(pageName: string) {
  const route = useRoute();

  const updateDocumentTitle = () => {
    document.title = `${app_title} - ${pageName}`;
  };

  onMounted(() => {
    updateDocumentTitle();
  });

  // Watch for changes in the route to update the title if the component remains mounted
  watch(() => route.fullPath, () => {
    updateDocumentTitle();
  });
}
