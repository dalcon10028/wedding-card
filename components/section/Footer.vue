<script lang="ts" setup>
import KakaoSvg from '~/assets/svg/kakao.svg?component'
</script>

<template>
  <footer class="mt-14 py-8 text-xs bg-[#f6f5f5] flex flex-col items-center">
    <Button
      variant="text"
      class="text-[#434343] w-60"
      label="카카오톡 공유하기"
      size="small"
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
