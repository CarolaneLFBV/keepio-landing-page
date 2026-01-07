<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from '#imports'

const { t } = useI18n()

type FormState = 'idle' | 'loading' | 'success' | 'error'

const formState = ref<FormState>('idle')
const visible = ref(false)
const errors = reactive<Record<string, string>>({})

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

onMounted(() => {
  setTimeout(() => (visible.value = true), 100)
})

const validateField = (field: keyof typeof formData, value: string) => {
  errors[field] = ''

  switch (field) {
    case 'name':
      if (value.length < 2) errors[field] = t('form.errors.nameRequired')
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) errors[field] = t('form.errors.emailInvalid')
      break
    case 'subject':
      if (value.length < 3) errors[field] = t('form.errors.subjectRequired')
      break
    case 'message':
      if (value.length < 10) errors[field] = t('form.errors.messageRequired')
      break
  }
}

const clearForm = () => {
  Object.assign(formData, { name: '', email: '', subject: '', message: '' })
  Object.keys(errors).forEach((key) => (errors[key] = ''))
}

async function onSubmit(event: Event) {
  event.preventDefault()

  // Validate all fields
  Object.keys(formData).forEach((key) =>
    validateField(key as keyof typeof formData, formData[key as keyof typeof formData])
  )

  if (Object.values(errors).some((error) => error)) return

  formState.value = 'loading'

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      formState.value = 'success'
      clearForm()
      setTimeout(() => (formState.value = 'idle'), 4000)
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    formState.value = 'error'
    setTimeout(() => (formState.value = 'idle'), 4000)
  }
}
</script>

<template>
  <section class="py-20 md:py-32 px-6">
    <div class="max-w-xl mx-auto">
      <!-- Section Header -->
      <div
        class="text-center mb-12 opacity-0 animate-slide-up"
        style="animation-delay: 0.1s"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('form.title') }}
        </h2>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          {{ t('form.subtitle') }}
        </p>
      </div>

      <!-- Form Card -->
      <div
        class="bg-white dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 shadow-lg
               border border-gray-100 dark:border-gray-800
               transition-all duration-700 transform"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Status Messages -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="formState !== 'idle'" class="mb-6">
            <!-- Loading -->
            <div
              v-if="formState === 'loading'"
              class="flex items-center gap-3 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
            >
              <div class="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <span>{{ t('form.states.sending') }}</span>
            </div>

            <!-- Success -->
            <div
              v-if="formState === 'success'"
              class="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ t('form.states.success') }}</span>
            </div>

            <!-- Error -->
            <div
              v-if="formState === 'error'"
              class="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>{{ t('form.states.error') }}</span>
            </div>
          </div>
        </Transition>

        <!-- Form -->
        <form
          @submit="onSubmit"
          class="space-y-5"
          :class="{ 'pointer-events-none opacity-50': formState === 'loading' }"
        >
          <!-- Name -->
          <div class="space-y-1.5">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('form.name') }}
            </label>
            <input
              type="text"
              name="name"
              v-model="formData.name"
              :placeholder="t('form.name')"
              required
              @blur="validateField('name', formData.name)"
              @input="errors.name = ''"
              class="w-full rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-800
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-white placeholder-gray-400
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              :class="{ 'border-red-300 dark:border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-sm text-red-500 mt-1">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="space-y-1.5">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('form.email') }}
            </label>
            <input
              type="email"
              name="email"
              v-model="formData.email"
              :placeholder="t('form.email')"
              required
              @blur="validateField('email', formData.email)"
              @input="errors.email = ''"
              class="w-full rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-800
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-white placeholder-gray-400
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              :class="{ 'border-red-300 dark:border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="text-sm text-red-500 mt-1">{{ errors.email }}</p>
          </div>

          <!-- Subject -->
          <div class="space-y-1.5">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('form.subject') }}
            </label>
            <input
              type="text"
              name="subject"
              v-model="formData.subject"
              :placeholder="t('form.subject')"
              required
              @blur="validateField('subject', formData.subject)"
              @input="errors.subject = ''"
              class="w-full rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-800
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-white placeholder-gray-400
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              :class="{ 'border-red-300 dark:border-red-500': errors.subject }"
            />
            <p v-if="errors.subject" class="text-sm text-red-500 mt-1">{{ errors.subject }}</p>
          </div>

          <!-- Message -->
          <div class="space-y-1.5">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('form.message') }}
            </label>
            <textarea
              name="message"
              v-model="formData.message"
              :placeholder="t('form.message')"
              required
              rows="5"
              @blur="validateField('message', formData.message)"
              @input="errors.message = ''"
              class="w-full rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-800
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-white placeholder-gray-400
                     resize-none transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              :class="{ 'border-red-300 dark:border-red-500': errors.message }"
            />
            <p v-if="errors.message" class="text-sm text-red-500 mt-1">{{ errors.message }}</p>
          </div>

          <!-- Actions -->
          <div class="flex justify-end gap-3 pt-4">
            <button
              type="button"
              @click="clearForm"
              :disabled="formState === 'loading'"
              class="px-5 py-2.5 rounded-xl text-gray-600 dark:text-gray-400
                     hover:bg-gray-100 dark:hover:bg-gray-800
                     transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ t('form.clear') }}
            </button>
            <button
              type="submit"
              :disabled="formState === 'loading'"
              class="px-6 py-2.5 rounded-xl bg-gray-900 dark:bg-white
                     text-white dark:text-gray-900 font-medium
                     hover:bg-gray-800 dark:hover:bg-gray-100
                     hover:shadow-lg hover:scale-[1.02]
                     active:scale-[0.98]
                     transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span class="flex items-center gap-2">
                <div
                  v-if="formState === 'loading'"
                  class="w-4 h-4 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin"
                />
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {{ t('form.send') }}
              </span>
            </button>
          </div>
        </form>
      </div>

      <!-- Email direct link -->
      <p class="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
        {{ t('gcuSection.contactText')?.split(':')[0] || 'Or email us directly at' }}:
        <a
          href="mailto:contact@keepio.fr"
          class="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          contact@keepio.fr
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .animate-spin,
  .animate-slide-up {
    animation: none;
  }
}
</style>
