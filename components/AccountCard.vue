<script lang="ts" setup>
import { defineProps } from 'vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import type { Person } from '~'

const { person } = defineProps<{
  person: Person
}>()

const { copy, isSupported } = useClipboard()

const onClickCopy = () => {
  if (!isSupported) {
    toast.error('복사 기능을 지원하지 않는 브라우저입니다.', {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
    })
    return
  }
  copy(person.account.accountNumber)
  toast.info('계좌번호가 복사되었습니다.', {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
  })
}
</script>

<template>
  <div class="flex flex-col gap-0.5 border-b p-4 border-dashed">
    <div class="flex items-center justify-between leading-6">
      <div>{{ person.account.bank }} <span class="text-[#e5e5e5]">|</span> {{ person.account.accountNumber }}</div>
      <div>
        <Button
          label="복사"
          pt:root:class="w-[60px] px-1 py-0.5 text-xs"
          variant="outlined"
          icon="pi pi-copy"
          size="small"
          @click="onClickCopy"
        />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>{{ person.name }}</span>
      <div>
        <Button
          v-if="person.account.kakaoPay"
          pt:root:class="w-[60px] h-6 bg-[#fbdf1d] border-none"
          as="a"
          size="small"
          target="_blank"
          rel="noopener"
          :href="person.account.kakaoPay"
        >
          <img
            src="~assets/icon/icon-kakaopay.png"
            alt="icon-kakaopay"
          >
        </Button>
      </div>
    </div>
  </div>
</template>

<style>

</style>
