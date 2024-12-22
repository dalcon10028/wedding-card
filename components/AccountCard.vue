<script lang="ts" setup>
import { defineProps } from 'vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import type { Person } from '~'
import KbankSvg from '~/assets/svg/banks/케이뱅크.svg?component'
import ShinhanSvg from '~/assets/svg/banks/신한.svg?component'
import KakaoBankSvg from '~/assets/svg/banks/카카오뱅크.svg?component'
import KbBankSvg from '~/assets/svg/banks/KB국민.svg?component'
import WooriBankSvg from '~/assets/svg/banks/우리.svg?component'

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

/**
 * assets/svg/banks/경남.svg assets/svg/banks/광주.svg assets/svg/banks/대구.svg assets/svg/banks/부산.svg assets/svg/banks/산림조합.svg assets/svg/banks/새마을.svg assets/svg/banks/수협.svg assets/svg/banks/신한.svg assets/svg/banks/신협.svg assets/svg/banks/씨티.svg assets/svg/banks/우리.svg assets/svg/banks/우체국.svg assets/svg/banks/저축은행.svg assets/svg/banks/전북.svg assets/svg/banks/제주.svg assets/svg/banks/카카오뱅크.svg assets/svg/banks/케이뱅크.svg assets/svg/banks/토스뱅크.svg assets/svg/banks/하나.svg assets/svg/banks/한국투자증권.svg assets/svg/banks/IBK기업.svg assets/svg/banks/KB국민.svg assets/svg/banks/KB증권.svg assets/svg/banks/KDB산업.svg assets/svg/banks/KEB외환.svg assets/svg/banks/NH농협.svg assets/svg/banks/NH투자증권.svg assets/svg/banks/SBI저축.svg assets/svg/banks/SC제일.svg
 */
const bankIcon = computed(() => {
  switch (person.account.bank) {
    case '케이뱅크':
      return KbankSvg
    case '신한은행':
      return ShinhanSvg
    case '카카오뱅크':
      return KakaoBankSvg
    case '국민은행':
      return KbBankSvg
    case '우리은행':
      return WooriBankSvg
    default:
      return ''
  }
})
</script>

<template>
  <div class="flex flex-col gap-0.5 border-b p-4 border-dashed">
    <div class="flex items-center justify-between leading-6">
      <div class="flex items-center gap-1">
        <component
          :is="bankIcon"
          class="w-4 h-4"
        />
        {{ person.account.bank }} <span class="text-[#e5e5e5]">|</span> {{ person.account.accountNumber }}
      </div>
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
