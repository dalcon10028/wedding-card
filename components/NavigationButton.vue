<script lang="ts" setup>
import { defineProps } from 'vue'

type NavigationProvider = 'kakao' | 'naver' | 'tmap'

const { provider } = defineProps<{ provider: NavigationProvider }>()
const { public: { wedding } } = useRuntimeConfig()

const name = {
  kakao: '카카오내비',
  naver: '네이버지도',
  tmap: '티맵',
}

const onClick = (provider: NavigationProvider) => {
  switch (provider) {
    case 'kakao':
      Kakao.Navi.start({
        name: wedding.address,
        x: wedding.longitude,
        y: wedding.latitude,
        coordType: 'wgs84',
      })

      break
    case 'naver':
      location.href = `navermaps://?menu=location&pinType=place&lat=${wedding.latitude}&lng=${wedding.longitude}&title=${wedding.address}`
      break
    case 'tmap':
      location.href = `tmap://route?goalname=${wedding.address}&goalx=${wedding.longitude}&goaly=${wedding.latitude}`
      break
    default:
      console.warn('Invalid provider:', provider)
      break
  }
}
</script>

<template>
  <Button
    as="a"
    pt:root:class="bg-white border-[#eaeaea] text-black text-sm break-keep"
    variant="outlined"
    @click="onClick(provider)"
  >
    <Avatar
      :image="`/logo/navi/${provider}.webp`"
      class="w-4 h-4"
    />
    {{ name[provider] }}
  </Button>
</template>

<style>

</style>
