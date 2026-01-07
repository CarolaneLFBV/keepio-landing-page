<script setup lang="ts">
import Features from "~/pages/features.vue";
import Hero from "~/pages/hero.vue";
import Contact from "~/pages/contact.vue";
import BackgroundView from "~/components/app/BackgroundView.vue";
import Footer from "~/components/app/Footer.vue";

import { useI18n } from "#imports";
import { ref, onMounted, onUnmounted } from 'vue';

const { t } = useI18n();
const showScrollTop = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500;
  isScrolled.value = window.scrollY > 50;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen">
    <BackgroundView />

    <!-- Clean Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="isScrolled
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/5'
        : 'bg-transparent'"
    >
      <div class="max-w-5xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a href="#" @click.prevent="scrollToTop" class="flex items-center gap-3 group">
            <img
              src="/Icon.png"
              alt="Keepio"
              class="w-9 h-9 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span class="font-semibold text-lg text-gray-900 dark:text-white">Keepio</span>
          </a>

          <!-- Nav Links -->
          <div class="flex items-center gap-8">
            <a
              href="#features"
              class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {{ t("features") }}
            </a>
            <a
              href="#contact"
              class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {{ t("contact") }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative">
      <!-- Hero Section -->
      <Hero />

      <!-- Features Section -->
      <section id="features" class="scroll-mt-20">
        <Features />
      </section>

      <!-- Contact Section -->
      <section id="contact" class="scroll-mt-20">
        <Contact />
      </section>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 z-50"
        aria-label="Scroll to top"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
