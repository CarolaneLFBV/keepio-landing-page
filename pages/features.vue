<script setup lang="ts">
import CardFeature from '~/components/item/FeatureCard.vue'
const { t } = useI18n()

type FeatureKey = 'projects' | 'tasks' | 'notes' | 'stats' | 'ui' | 'sync'

const features: Array<{
  title: string
  text: string
  icon: FeatureKey
}> = [
  { icon: 'projects', title: t('projectTitle'), text: t('projectText') },
  { icon: 'tasks', title: t('taskTitle'), text: t('taskText') },
  { icon: 'notes', title: t('noteTitle'), text: t('noteText') },
  { icon: 'stats', title: t('graphTitle'), text: t('graphText') },
  { icon: 'ui', title: t('styleTitle'), text: t('styleText') },
  { icon: 'sync', title: t('syncTitle'), text: t('syncText') },
]

const selectedFeature = ref<FeatureKey>('projects')

const featureImages: Record<FeatureKey, string> = {
  projects: '/project-overview.png',
  tasks: '/project-tasks.png',
  notes: '/project-templates.png',
  stats: '/stats.png',
  ui: '/preview.png',
  sync: '/image-devices.png',
}

const selectFeature = (featureIcon: FeatureKey) => {
  selectedFeature.value = featureIcon
}
</script>

<template>
  <section class="relative px-6 py-20 md:py-32">
    <div class="mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center mb-16 opacity-0 animate-slide-up" style="animation-delay: 0.1s">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('featuresTitle') || 'Everything you need' }}
        </h2>
        <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('featuresSubtitle') || 'Organize your projects, tasks, and notes in one beautiful place.' }}
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
        <!-- Feature Cards -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 order-2 lg:order-1">
          <CardFeature
            v-for="(f, i) in features"
            :key="f.icon"
            :title="f.title"
            :text="f.text"
            :delay="i * 60"
            :isActive="selectedFeature === f.icon"
            :clickable="true"
            @click="selectFeature(f.icon)"
          >
            <template #icon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5"
                aria-hidden="true"
              >
                <!-- Projects - Folder -->
                <template v-if="f.icon === 'projects'">
                  <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                </template>

                <!-- Tasks - Checklist -->
                <template v-else-if="f.icon === 'tasks'">
                  <path d="M9 6h11M9 12h11M9 18h11" />
                  <path d="M5 6l.5.5L7 5M5 12l.5.5L7 11M5 18l.5.5L7 17" />
                </template>

                <!-- Notes - Document -->
                <template v-else-if="f.icon === 'notes'">
                  <path d="M14 3v4a1 1 0 001 1h4" />
                  <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                  <path d="M9 13h6M9 17h3" />
                </template>

                <!-- Stats - Chart -->
                <template v-else-if="f.icon === 'stats'">
                  <path d="M3 3v18h18" />
                  <path d="M7 16l4-4 4 4 5-6" />
                </template>

                <!-- UI - Layout -->
                <template v-else-if="f.icon === 'ui'">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18M3 9h6" />
                </template>

                <!-- Sync - Cloud -->
                <template v-else-if="f.icon === 'sync'">
                  <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z" />
                </template>
              </svg>
            </template>
          </CardFeature>
        </div>

        <!-- Device Mockup -->
        <div class="flex justify-center order-1 lg:order-2">
          <div class="relative">
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-[40px] blur-3xl scale-110 transition-opacity duration-500"
              :class="selectedFeature ? 'opacity-100' : 'opacity-0'"
            />

            <!-- Phone frame -->
            <div class="relative">
              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <NuxtImg
                  :key="selectedFeature"
                  :src="featureImages[selectedFeature]"
                  :alt="`Keepio ${selectedFeature} feature`"
                  loading="lazy"
                  class="max-w-[280px] md:max-w-xs lg:max-w-sm"
                />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-opacity {
    transition: none !important;
  }
}
</style>
