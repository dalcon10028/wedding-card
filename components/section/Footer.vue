<script lang="ts" setup>
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import KakaoSvg from '~/assets/svg/kakao.svg?component'

const { public: { kakaoAppKey, wedding, share, groom, bride } } = useRuntimeConfig()
const img = useImage()
const route = useRoute()
const { copy, isSupported } = useClipboard()

const isBrideFirst = !!route.query.brideFirst

const { load } = useScriptTag(
  'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js',
  () => console.log('Kakao SDK loaded'),
  {
    manual: true,
    async: true,
    type: 'text/javascript',
    crossOrigin: 'anonymous',
  },
)

onMounted(async () => {
  await load()
  Kakao.init(kakaoAppKey)
})

const onShareKakao = () => {
  Kakao.Share.sendDefault({
    objectType: 'location',
    address: wedding.address,
    addressTitle: wedding.place,
    content: {
      title: `${isBrideFirst ? bride.name.slice(1) : groom.name.slice(1)} ❤ ${isBrideFirst ? groom.name.slice(1) : bride.name.slice(1)} 결혼식에 초대합니다.`,
      description: `${format(wedding.date, 'yyyy년 M월 d일 EEEE a h시 mm분', { locale: ko })}\n${wedding.place}`,
      imageUrl: img(share.thumbnail, { width: 526, height: 528 }),
      link: {
        mobileWebUrl: document.URL,
        webUrl: document.URL,
      },
    },
    buttons: [
      {
        title: '모바일청첩장',
        link: {
          mobileWebUrl: document.URL,
          webUrl: document.URL,
        },
      },
    ],
  })
}

const onClickCopy = () => {
  if (!isSupported) {
    toast.error('복사 기능을 지원하지 않는 브라우저입니다.', {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
    })
    return
  }
  copy(document.URL)
  toast.info('주소가 복사되었습니다.', {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
  })
}
</script>

<template>
  <footer class="mt-14 py-8 text-xs bg-[#f6f5f5] flex flex-col items-center">
    <Button
      variant="text"
      class="text-[#434343] w-60"
      label="카카오톡 공유하기"
      size="small"
      @click="onShareKakao"
    >
      <template #icon>
        <KakaoSvg class="w-4 h-4" />
      </template>
    </Button>
    <Button
      variant="text"
      icon="pi pi-link"
      size="small"
      class="text-[#434343] w-60"
      label="링크주소 복사하기"
      @click="onClickCopy"
    />
    <p class="mt-5 font-serif">
      &copy; 2024 <a
        class="font-medium"
        href="https://github.com/y-mango"
        target="_blank"
        rel="noopener noreferrer"
      >y-mango</a>. All rights reserved.
    </p>
  </footer>
</template>

<style>

</style>
