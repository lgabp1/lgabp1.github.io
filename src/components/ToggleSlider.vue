<script setup lang="ts">

const props = defineProps<{
  modelValue: boolean; // Generic state for the toggle
  title: string; // Title (tooltip)
}>();

const emit = defineEmits(['update:modelValue']); // Generic update event

const handleClick = () => {
  emit('update:modelValue', !props.modelValue); // Emit the new toggled state
};
</script>

<template>
  <div class="toggle-slider" @click="handleClick()" :title="props.title">
    <!-- Hidden checkbox for accessibility and state management -->
    <input type="checkbox" :checked="props.modelValue" class="sr-only" aria-label="Toggle" />
    <div class="slider-track">
      <div class="slider-thumb">
        <!-- Slot for custom thumb content -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle-slider {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 2.8em; /* Width of the slider track */
  height: 1.4em; /* Height of the slider track */
}

/* Visually hide the checkbox but keep it accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Slider track */
.slider-track {
  width: 100%;
  height: 100%;
  background-color: var(--slider-track-bg);
  border-radius: 1em;
  position: relative;
  transition: background-color 0.3s ease;
}

/* Slider thumb (the round icon) */
.slider-thumb {
  position: absolute;
  top: 0.25em; /* Vertically center the thumb within the track */
  left: 0.25em; /* Initial position for 'off' state */
  width: 1.0em; /* Size of the thumb */
  height: 1.0em; /* Size of the thumb */
  background-color: var(--slider-thumb-bg);
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  
  /* Add flexbox properties to center the icon */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Move thumb to the right when 'on' state is active */
.toggle-slider input[type="checkbox"]:checked + .slider-track .slider-thumb {
  transform: translateX(1.3em); /* Moves the thumb to the right end of the track */
}
</style>
