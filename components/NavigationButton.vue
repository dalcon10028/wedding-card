<script lang="ts" setup>
import { defineProps } from 'vue'

type NavigationProvider = 'kakao' | 'naver' | 'tmap'

const { provider } = defineProps<{ provider: NavigationProvider }>()

const name = {
  kakao: '카카오내비',
  naver: '네이버맵',
  tmap: '티맵',
}
</script>

<template>
  <Button
    as="a"
    label="Profile"
    icon="pi pi-user"
    variant="outlined"
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
