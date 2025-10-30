<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
  summary: string;
  date?: string;
}>();

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="timeline-item">
    <div v-if="date" class="timeline-date">{{ date }}</div>
    <div class="timeline-dot"></div>
    <div class="timeline-content" :class="{ 'is-expanded': isExpanded }" @click="toggleExpand">
      <h3>{{ title }}</h3>
      <p>{{ summary }}</p>
      <transition name="expand">
        <div v-if="isExpanded" class="expanded-content">
          <div class="expanded-content-inner">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/base.css';
.timeline-date {
  position: absolute;
  left: -2.5em;
  top: 0;
  height: 1.25em;
  line-height: 1.25em;
  transform: translateX(-100%);
  text-align: right;
  white-space: nowrap;
  color: var(--timeline-date);
  font-weight: bold;
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -1.25em;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  background: var(--timeline-dot);
  border: 0.125rem solid var(--timeline-line);
  border-radius: 50%;
  transform: translateX(-50%);
}

.timeline-content {
  color: var(--timeline-entry);
  background: var(--timeline-entry-bg);
  border-radius: 0.375rem;
  padding: 1.25em;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  max-width: 25vw;
}

.timeline-content.is-expanded {
  max-width: 100%;
}

.timeline-content h3 {
  margin-top: 0;
}

.expanded-content {
  margin-top: 0em;
  border-top: 0.0625rem solid var(--timeline-expanded-separator);
  padding-top: 0em;
}

.expanded-content-inner {
  width: calc(80vw - 5rem); /* Prevents text reflow during animation */
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
  overflow: hidden;
}

.expand-leave-active {
  border-top-color: transparent; /* Hide border immediately on collapse */
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 32rem; /* Adjust if content is taller */
  opacity: 1;
}


.timeline-item h3 {
  color: var(--timeline-entry-title);
}
</style>
