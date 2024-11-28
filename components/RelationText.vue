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
  <div>
    <span>{{ `${target.father.name}·${target.mother.name}` }}</span>의 {{ props.target === 'bride' ? '딸' : '아들' }} <span>{{ target.name }}</span>
  </div>
</template>

<style>

</style>
