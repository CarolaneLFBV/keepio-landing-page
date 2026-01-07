<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits<{
  click: []
}>()

const props = withDefaults(defineProps<{
  title: string
  text: string
  delay?: number
  isActive?: boolean
  clickable?: boolean
}>(), {
  delay: 0,
  isActive: false,
  clickable: false,
})

const visible = ref(false)
const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      if (el.value) observer?.unobserve(el.value)
    }
  }, { threshold: 0.15 })
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="el"
    class="group relative rounded-2xl p-5 sm:p-6
           bg-white dark:bg-gray-900/50
           border border-gray-100 dark:border-gray-800
           transition-all duration-300 will-change-transform
           focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20
           motion-reduce:transition-none"
    :class="[
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      clickable ? 'cursor-pointer' : '',
      isActive
        ? 'shadow-lg border-indigo-200 dark:border-indigo-500/30 bg-gradient-to-br from-white to-indigo-50/50 dark:from-gray-900 dark:to-indigo-950/30'
        : 'shadow-sm hover:shadow-md hover:-translate-y-1',
    ]"
    :style="visible ? `transition-delay:${delay}ms` : undefined"
    role="button"
    :aria-label="title"
    :aria-pressed="isActive"
    :tabindex="clickable ? 0 : undefined"
    @click="clickable ? emit('click') : undefined"
    @keydown.enter="clickable ? emit('click') : undefined"
    @keydown.space.prevent="clickable ? emit('click') : undefined"
  >
    <!-- Icon container -->
    <div
      class="mb-4 inline-flex size-10 items-center justify-center rounded-xl
             transition-all duration-300"
      :class="isActive
        ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/50 dark:group-hover:text-indigo-400'"
    >
      <slot name="icon">
        <span aria-hidden="true">✨</span>
      </slot>
    </div>

    <!-- Text content -->
    <h3
      class="text-base font-semibold transition-colors duration-300"
      :class="isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-900 dark:text-gray-100'"
    >
      {{ title }}
    </h3>
    <p class="mt-1.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
      {{ text }}
    </p>

  </div>
</template>
