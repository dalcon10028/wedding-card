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

const targetName = computed(() => {
  return props.target === 'bride' ? '신부' : '신랑'
})
</script>

<template>
  <div class="mx-4 mb-10 text-sm">
    <div class="text-start text-[#ccc]">
      {{ targetName }}측
      <span class="uppercase text-xs tracking-widest text-[#999]">{{ props.target }}</span>
    </div>
    <Divider type="dotted" />
    <div class="grid grid-cols-3 gap-2.5 my-5 text-white leading-10">
      <div class="text-start text-[#ccc]">
        {{ targetName }}
      </div>
      <div>{{ target.name }}</div>
      <div>
        <Button
          :href="`tel:${target.phoneNumber}`"
          as="a"
          icon="pi pi-phone"
          class="p-button-rounded p-button-text p-button-sm"
        />
        <Button
          :href="`sms:${target.phoneNumber}`"
          as="a"
          icon="pi pi-envelope"
          class="p-button-rounded p-button-text p-button-sm"
        />
      </div>

      <div class="text-start text-[#ccc]">
        {{ targetName }} 아버지
      </div>
      <div>{{ target.father.name }}</div>
      <div>
        <Button
          :href="`tel:${target.father.phoneNumber}`"
          as="a"
          icon="pi pi-phone"
          class="p-button-rounded p-button-text p-button-sm"
        />
        <Button
          :href="`sms:${target.father.phoneNumber}`"
          as="a"
          icon="pi pi-envelope"
          class="p-button-rounded p-button-text p-button-sm"
        />
      </div>

      <div class="text-start text-[#ccc]">
        {{ targetName }} 어머니
      </div>
      <div>{{ target.mother.name }}</div>
      <div>
        <Button
          :href="`tel:${target.mother.phoneNumber}`"
          as="a"
          icon="pi pi-phone"
          class="p-button-rounded p-button-text p-button-sm"
        />
        <Button
          :href="`sms:${target.mother.phoneNumber}`"
          as="a"
          icon="pi pi-envelope"
          class="p-button-rounded p-button-text p-button-sm"
        />
      </div>
    </div>
  </div>
</template>
