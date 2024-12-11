<script lang="ts" setup>
const mapRef = ref<HTMLDivElement>()

const { load } = useScriptTag(
  'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fdvtct88qw',
  () => console.log('Kakao Map SDK loaded'),
  { manual: true, async: true, type: 'text/javascript' },
)

onMounted(async () => {
  await load()
  const map = new naver.maps.Map(mapRef.value, {
    center: new naver.maps.LatLng(37.535819, 127.095704),
    zoom: 14,
  })
  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.535819, 127.095704),
    map: map,
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
