<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="max-w-4xl mx-auto text-center">
      <!-- App Icon with glow -->
      <div class="relative inline-block mb-8 opacity-0 animate-scale-in" style="animation-delay: 0.1s;">
        <div class="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-2xl scale-150" />
        <nuxt-img
          src="/icon.png"
          alt="Keepio App Icon"
          class="relative w-24 h-24 md:w-28 md:h-28 rounded-[28px] shadow-xl"
        />
      </div>

      <!-- Title -->
      <h1
        class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 opacity-0 animate-slide-up"
        style="animation-delay: 0.2s;"
      >
        {{ t('app') }}
      </h1>

      <!-- Subtitle -->
      <p
        class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up"
        style="animation-delay: 0.3s;"
      >
        {{ t('appSubtitle') }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-slide-up"
        style="animation-delay: 0.4s;"
      >
        <a
          href="https://apps.apple.com/fr/app/keepio/id6746096493?l=en-GB"
          class="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs opacity-80">{{ t('availableSoon') }}</div>
            <div class="text-sm font-semibold">App Store</div>
          </div>
        </a>

        <a
          href="#features"
          class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-6 py-3 font-medium transition-colors"
        >
          {{ t('features') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <!-- App Preview -->
      <div
        class="relative inline-block opacity-0 animate-slide-up"
        style="animation-delay: 0.5s;"
      >
        <!-- Blue glow behind -->
        <div class="absolute inset-0 bg-indigo-500/20 rounded-[40px] blur-3xl scale-110" />
        <nuxt-img
          src="/preview.png"
          alt="Keepio App Preview"
          class="relative max-w-[280px] md:max-w-[320px] mx-auto"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-scale-in {
  animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
