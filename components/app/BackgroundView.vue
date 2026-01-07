<script setup lang="ts">
// Keepio-style minimal background
// Clean, subtle, professional
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <!-- Clean base background -->
    <div class="absolute inset-0 bg-[#FAFAFA] dark:bg-[#0A0A0A]" />

    <!-- Subtle accent glow - top right -->
    <div
      class="absolute -top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-[0.04] dark:opacity-[0.06]"
      style="background: #6366F1;"
    />

    <!-- Subtle accent glow - bottom left -->
    <div
      class="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-[0.03] dark:opacity-[0.05]"
      style="background: #818CF8;"
    />

    <!-- Very subtle grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
      style="background-image: linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px); background-size: 80px 80px;"
    />
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
