<script lang="ts" setup>
import { defineProps } from 'vue'

const { name, title, label, icon } = defineProps<{
  name: string
  title: string
  label: string
  icon: string
}>()

const visible = ref(false)
</script>

<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      pt:root:class="w-screen h-screen text-center bg-transparent border-0 shadow-none"
      pt:mask:class="backdrop-blur-sm !bg-[rgba(56,44,48,.84)]"
      pt:mask:style="display: block;"
      :close-button-props="{ icon: 'pi pi-times', variant: 'text', rounded: true }"
    >
      <template #header>
        <div />
      </template>
      <h3 class="uppercase text-xs text-[#999]">
        {{ name }}
      </h3>
      <div class="text-lg text-[#ccc]">
        {{ title }}
      </div>
      <slot />
    </Dialog>
    <Button
      :label="label"
      :icon="icon"
      @click="visible = true"
    />
  </div>
</template>

<style lang="scss">
/* .p-overlay-mask {
  display: block !important;
} */
</style>
