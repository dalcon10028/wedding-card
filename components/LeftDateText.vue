<script lang="ts" setup>
import { defineProps } from 'vue'
import { differenceInDays, parseISO } from 'date-fns'

const {
  isBrideFirst,
  weddingDate,
  bride,
  groom,
} = defineProps<{
  isBrideFirst: boolean
  weddingDate: string
  bride: { name: string }
  groom: { name: string }
}>()

const leftDate = computed(() => differenceInDays(parseISO(weddingDate), new Date()))
</script>

<template>
  <p class="my-2 text-base">
    {{ isBrideFirst ? bride.name : groom.name }}, {{ isBrideFirst ? groom.name : bride.name }}의 결혼식이
    <span>{{ leftDate === 0 ? '오늘' : `${leftDate}일` }}</span>
    <template v-if="leftDate > 0">
      남았습니다.
    </template>
    <template v-else-if="leftDate === 0">
      입니다.
    </template>
    <template v-else>
      지났습니다.
    </template>
  </p>
</template>
