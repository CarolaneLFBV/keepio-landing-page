<script setup lang="ts">
import { useI18n } from '#imports'
import BackgroundView from '~/components/app/BackgroundView.vue'
import Footer from '~/components/app/Footer.vue'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen">
    <BackgroundView />

    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      <div class="max-w-4xl mx-auto px-6 py-4">
        <div class="flex items-center gap-4">
          <router-link
            to="/"
            class="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </router-link>
          <router-link to="/" class="flex items-center gap-2 group">
            <img src="/icon.png" alt="Keepio" class="w-8 h-8 rounded-lg" />
            <span class="font-semibold text-gray-900 dark:text-white">{{ t('app') }}</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-6 pt-28 pb-16">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {{ t('privacySection.title') }}
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-12">
        {{ t('privacySection.lastUpdated') }}
      </p>

      <div class="space-y-10">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ t('privacySection.intro') }}
        </p>

        <!-- 1. Information We Collect -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.dataCollectedTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            {{ t('privacySection.dataCollectedIntro') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{{ t('privacySection.dataCollectedList[0]') }}</li>
            <li>{{ t('privacySection.dataCollectedList[1]') }}</li>
          </ul>
        </section>

        <!-- 2. Data Storage -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.storageTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.storageText') }}
          </p>
        </section>

        <!-- 3. Third-Party Services -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.thirdPartyTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            {{ t('privacySection.thirdPartyText') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-2">
            <li>{{ t('privacySection.thirdPartyList[0]') }}</li>
            <li>{{ t('privacySection.thirdPartyList[1]') }}</li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.thirdPartyNote') }}
          </p>
        </section>

        <!-- 4. Analytics -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.analyticsTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.analyticsText') }}
          </p>
        </section>

        <!-- 5. Your Rights (GDPR) -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.rightsTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            {{ t('privacySection.rightsText') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{{ t('privacySection.rightsList[0]') }}</li>
            <li>{{ t('privacySection.rightsList[1]') }}</li>
            <li>{{ t('privacySection.rightsList[2]') }}</li>
            <li>{{ t('privacySection.rightsList[3]') }}</li>
          </ul>
        </section>

        <!-- 6. Children's Privacy -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.childrenTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.childrenText') }}
          </p>
        </section>

        <!-- 7. Data Security -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.securityTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.securityText') }}
          </p>
        </section>

        <!-- 8. Changes to This Policy -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.changesTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.changesText') }}
          </p>
        </section>

        <!-- 9. Contact Us -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('privacySection.contactTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('privacySection.contactText') }}
          </p>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>
