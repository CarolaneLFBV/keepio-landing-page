<script setup lang="ts">
import { useI18n } from '#imports';
import BackgroundView from '~/components/app/BackgroundView.vue';
import Footer from '~/components/app/Footer.vue';
const { t } = useI18n();
</script>

<template>
  <section class="relative scroll-smooth">
    <nav class="fixed top-0 z-20 left-0 w-full bg-white/30 backdrop-blur-md shadow-md p-4 flex items-center justify-between px-6">
      <div class="flex items-center gap-4">
        <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </router-link>
        <router-link to="/" class="text-xl font-bold text-gray-900">{{ t("app") }}</router-link>
      </div>
    </nav>

    <BackgroundView class="fixed top-0 left-0 w-full h-full z-[-1]"/>

    <div class="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <h1 class="text-3xl font-bold mb-4">{{ t('privacySection.title') }}</h1>

      <div class="space-y-8 text-gray-800">
        <div class="text-sm text-gray-500 mb-8">
          {{ t("privacySection.lastUpdated") }}
        </div>

        <p class="text-gray-600">
          {{ t('privacySection.intro') }}
        </p>

        <!-- 1. Information We Collect -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.dataCollectedTitle') }}</h2>
          <p class="text-gray-600 mb-2">{{ t('privacySection.dataCollectedIntro') }}</p>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>{{ t('privacySection.dataCollectedList[0]') }}</li>
            <li>{{ t('privacySection.dataCollectedList[1]') }}</li>
          </ul>
        </section>

        <!-- 2. Data Storage -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.storageTitle') }}</h2>
          <p class="text-gray-600">{{ t('privacySection.storageText') }}</p>
        </section>

        <!-- 3. Third-Party Services -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.thirdPartyTitle') }}</h2>
          <p class="text-gray-600 mb-2">{{ t('privacySection.thirdPartyText') }}</p>
          <ul class="list-disc pl-6 space-y-1 text-gray-600 mb-2">
            <li>{{ t('privacySection.thirdPartyList[0]') }}</li>
            <li>{{ t('privacySection.thirdPartyList[1]') }}</li>
          </ul>
          <p class="text-gray-600">{{ t('privacySection.thirdPartyNote') }}</p>
        </section>

        <!-- 4. Analytics -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.analyticsTitle') }}</h2>
          <p class="text-gray-600">{{ t('privacySection.analyticsText') }}</p>
        </section>

        <!-- 5. Your Rights (GDPR) -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.rightsTitle') }}</h2>
          <p class="text-gray-600 mb-2">{{ t('privacySection.rightsText') }}</p>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>{{ t('privacySection.rightsList[0]') }}</li>
            <li>{{ t('privacySection.rightsList[1]') }}</li>
            <li>{{ t('privacySection.rightsList[2]') }}</li>
            <li>{{ t('privacySection.rightsList[3]') }}</li>
          </ul>
        </section>

        <!-- 6. Children's Privacy -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.childrenTitle') }}</h2>
          <p class="text-gray-600">{{ t('privacySection.childrenText') }}</p>
        </section>

        <!-- 7. Data Security -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.securityTitle') }}</h2>
          <p class="text-gray-600">{{ t('privacySection.securityText') }}</p>
        </section>

        <!-- 8. Changes to This Policy -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.changesTitle') }}</h2>
          <p class="text-gray-600">{{ t('privacySection.changesText') }}</p>
        </section>

        <!-- 9. Contact Us -->
        <section>
          <h2 class="text-xl font-semibold mb-3">{{ t('privacySection.contactTitle') }}</h2>
          <p class="text-gray-600">{{ t('privacySection.contactText') }}</p>
        </section>
      </div>
    </div>

    <Footer/>
  </section>
</template>
