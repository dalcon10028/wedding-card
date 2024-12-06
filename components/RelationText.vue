<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Person } from '~'

const props = defineProps<{
  target: 'bride' | 'groom'
  bride: Person & { father: Person, mother: Person }
  groom: Person & { father: Person, mother: Person }
}>()

const target = computed(() => {
  return props.target === 'bride' ? props.bride : props.groom
})
</script>

<template>
  <div class="text-[#8a857f] text-sm flex justify-center items-baseline gap-1">
    <div class="w-30 text-base leading-8 text-[#544f4f]">
      {{ `${target.father.name} · ${target.mother.name}` }}
    </div>
    의 <div class="w-7">
      {{ props.target === 'bride' ? '딸' : '아들' }}
    </div>
    <div class="w-8 text-base leading-8 text-[#544f4f]">
      {{ target.name.slice(1) }}
    </div>
  </div>
</template>

<style>

</style>
