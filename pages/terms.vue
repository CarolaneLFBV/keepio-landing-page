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
        <h1 class="text-3xl font-bold mb-4">{{ t("gcuTitle") }}</h1>

        <div class="space-y-8 text-gray-800">
          <div class="text-sm text-gray-500 mb-8">
            {{ t("gcuSection.lastUpdated") }}
          </div>

          <p class="text-gray-600">
            {{ t("gcuSection.intro") }}
          </p>

          <!-- 1. App Access -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.accessTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.accessText") }}
            </p>
          </section>

          <!-- 2. Premium Subscription -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.premiumTitle") }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t("gcuSection.premiumIntro") }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>{{ t("gcuSection.premiumFeatures[0]") }}</li>
              <li>{{ t("gcuSection.premiumFeatures[1]") }}</li>
            </ul>
            <p class="text-gray-600 font-medium mb-2">
              {{ t("gcuSection.premiumBilling") }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t("gcuSection.premiumBillingList[0]") }}</li>
              <li>{{ t("gcuSection.premiumBillingList[1]") }}</li>
              <li>{{ t("gcuSection.premiumBillingList[2]") }}</li>
              <li>{{ t("gcuSection.premiumBillingList[3]") }}</li>
              <li>{{ t("gcuSection.premiumBillingList[4]") }}</li>
            </ul>
          </section>

          <!-- 3. Intellectual Property -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.intellectualTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.intellectualText") }}
            </p>
          </section>

          <!-- 4. Prohibited Use -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.prohibitedTitle") }}</h2>
            <p class="text-gray-600 mb-2">
              {{ t("gcuSection.prohibitedText") }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t("gcuSection.prohibitedList[0]") }}</li>
              <li>{{ t("gcuSection.prohibitedList[1]") }}</li>
              <li>{{ t("gcuSection.prohibitedList[2]") }}</li>
            </ul>
          </section>

          <!-- 5. Limitation of Liability -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.liabilityTitle") }}</h2>
            <p class="text-gray-600 mb-2">
              {{ t("gcuSection.liabilityText") }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t("gcuSection.liabilityList[0]") }}</li>
              <li>{{ t("gcuSection.liabilityList[1]") }}</li>
              <li>{{ t("gcuSection.liabilityList[2]") }}</li>
            </ul>
          </section>

          <!-- 6. Modifications -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.modificationsTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.modificationsText") }}
            </p>
          </section>

          <!-- 7. Applicable Law -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.lawTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.lawText") }}
            </p>
          </section>

          <!-- 8. Contact -->
          <section>
            <h2 class="text-xl font-semibold mb-3">{{ t("gcuSection.contactTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.contactText") }}
            </p>
          </section>
        </div>
      </div>

      <Footer/>
    </section>
</template>
