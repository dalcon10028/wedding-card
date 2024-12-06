<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'
import { defineProps } from 'vue'

const {
  name,
  title,
  threshold = 0.2,
} = defineProps<{
  name: string
  title: string
  threshold?: number
}>()

const target = ref<HTMLElement | null>(null)
const targetIsVisible = ref(false)

useIntersectionObserver(
  target,
  ([entry], observerElement) => {
    targetIsVisible.value = entry?.isIntersecting || false
    if (entry?.isIntersecting) {
      observerElement.unobserve(entry.target)
    }
  }, { threshold },
)
</script>

<template>
  <section
    ref="target"
    class="flex flex-col py-10"
  >
    <transition name="fade">
      <div v-show="targetIsVisible">
        <div class="mb-8 text-center">
          <div class="text-xs tracking-widest uppercase text-[#c2b2b2]">
            {{ name }}
          </div>
          <div class="text-xl leading-10 text-[#89757a]">
            {{ title }}
          </div>
        </div>
        <slot />
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
