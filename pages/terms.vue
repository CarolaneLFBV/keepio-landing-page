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
        {{ t('gcuTitle') }}
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-12">
        {{ t('gcuSection.lastUpdated') }}
      </p>

      <div class="space-y-10">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ t('gcuSection.intro') }}
        </p>

        <!-- 1. App Access -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.accessTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('gcuSection.accessText') }}
          </p>
        </section>

        <!-- 2. Premium Subscription -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.premiumTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {{ t('gcuSection.premiumIntro') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>{{ t('gcuSection.premiumFeatures[0]') }}</li>
            <li>{{ t('gcuSection.premiumFeatures[1]') }}</li>
          </ul>
          <p class="text-gray-900 dark:text-white font-medium mb-2">
            {{ t('gcuSection.premiumBilling') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{{ t('gcuSection.premiumBillingList[0]') }}</li>
            <li>{{ t('gcuSection.premiumBillingList[1]') }}</li>
            <li>{{ t('gcuSection.premiumBillingList[2]') }}</li>
            <li>{{ t('gcuSection.premiumBillingList[3]') }}</li>
            <li>{{ t('gcuSection.premiumBillingList[4]') }}</li>
          </ul>
        </section>

        <!-- 3. Intellectual Property -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.intellectualTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('gcuSection.intellectualText') }}
          </p>
        </section>

        <!-- 4. Prohibited Use -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.prohibitedTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            {{ t('gcuSection.prohibitedText') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{{ t('gcuSection.prohibitedList[0]') }}</li>
            <li>{{ t('gcuSection.prohibitedList[1]') }}</li>
            <li>{{ t('gcuSection.prohibitedList[2]') }}</li>
          </ul>
        </section>

        <!-- 5. Limitation of Liability -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.liabilityTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            {{ t('gcuSection.liabilityText') }}
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{{ t('gcuSection.liabilityList[0]') }}</li>
            <li>{{ t('gcuSection.liabilityList[1]') }}</li>
            <li>{{ t('gcuSection.liabilityList[2]') }}</li>
          </ul>
        </section>

        <!-- 6. Modifications -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.modificationsTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('gcuSection.modificationsText') }}
          </p>
        </section>

        <!-- 7. Applicable Law -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.lawTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('gcuSection.lawText') }}
          </p>
        </section>

        <!-- 8. Contact -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ t('gcuSection.contactTitle') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('gcuSection.contactText') }}
          </p>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>
