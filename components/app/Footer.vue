<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<template>
  <footer class="mt-20 py-8 px-6 border-t border-gray-200">
    <div class="max-w-6xl mx-auto flex flex-col items-center gap-4 text-sm text-gray-600">
      <div class="text-center">
        <div class="flex items-center justify-center gap-6 mb-4">
          <router-link to="/terms" class="hover:text-gray-900 transition-colors underline">
            {{ t('gcu') }}
          </router-link>
          <router-link to="/privacy" class="hover:text-gray-900 transition-colors underline">
            {{ t('privacy') }}
          </router-link>
          <router-link to="/contact" class="hover:text-gray-900 transition-colors underline">
            {{ t('contact') }}
          </router-link>
        </div>
        <div class="mb-2">
          {{ new Date().getFullYear() }} Okorp. {{ t('rights') }}
        </div>
        <div class="text-xs text-gray-400">
          Carolane Lefebvre
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
