<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>

<template>
  <footer class="py-12 px-6 border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo & Copyright -->
        <div class="flex items-center gap-3">
          <img
            src="/Icon.png"
            alt="Keepio"
            class="w-8 h-8 rounded-lg"
          />
          <div class="text-sm text-gray-500 dark:text-gray-400">
            © {{ new Date().getFullYear() }} Keepio. {{ t('rights') }}
          </div>
        </div>

        <!-- Links -->
        <nav class="flex items-center gap-6 text-sm">
          <router-link
            to="/terms"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ t('gcu') }}
          </router-link>
          <router-link
            to="/privacy"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ t('privacy') }}
          </router-link>
          <a
            href="mailto:contact@keepio.fr"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ t('contact') }}
          </a>
        </nav>
      </div>

      <!-- Credit -->
      <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
        <p class="text-xs text-gray-400 dark:text-gray-500">
          Made with
          <span class="text-red-400">♥</span>
          by
          <a
            href="https://okorp.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-indigo-500 transition-colors"
          >
            Carolane Lefebvre
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
