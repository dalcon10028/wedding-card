<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'

const mapRef = ref<HTMLDivElement>()

const { load } = useScriptTag(
  '//dapi.kakao.com/v2/maps/sdk.js?appkey=7fccb30eb56474d5ad73def74b62250a&libraries=services',
  () => console.log('Kakao Map SDK loaded'),
  { manual: true, async: true, type: 'text/javascript' },
)

onMounted(async () => {
  await load()
  console.log(kakao.maps)
  new kakao.maps.StaticMap(mapRef.value, {
    center: new kakao.maps.LatLng(37.535819, 127.095704),
    level: 3,
    marker: { position: new kakao.maps.LatLng(37.535819, 127.095704) },
  })
})
</script>

<template>
  <div
    ref="mapRef"
    class="w-full h-full"
  />
</template>

<style>

</style>
