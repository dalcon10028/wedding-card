<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core';

const mapRef = ref<HTMLDivElement>();

const { load } = useScriptTag(
  '//dapi.kakao.com/v2/maps/sdk.js?appkey=7fccb30eb56474d5ad73def74b62250a&autoload=false',
  () => console.log('Kakao Map SDK loaded'),
  { manual: true, async: true }
);

load().then(() => {
  kakao.maps.load(() => {
    new kakao.maps.StaticMap(mapRef.value, {
    center: new kakao.maps.LatLng(37.535819, 127.095704),
    level: 3,
    marker: { position: new kakao.maps.LatLng(37.535819, 127.095704) }
    });
  });
});
</script>

<template>
<div ref="mapRef" class="w-full h-full"></div>
</template>

<style>

</style>