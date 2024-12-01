<script lang="ts" setup>
import BusSvg from '~/assets/svg/bus.svg?component'
import SubwaySvg from '~/assets/svg/subway.svg?component'
import CarSvg from '~/assets/svg/car.svg?component'

const { public: { wedding } } = useRuntimeConfig()
</script>

<template>
  <fade-in-section
    name="location"
    title="오시는 길"
  >
    <div class="px-8 mt-4">
      <div class="text-2xl">
        {{ wedding.place }}
      </div>
      <div class="text-xl">
        {{ wedding.address }}
      </div>
    </div>
    <div class="h-64 my-7">
      <Map />
    </div>
    <div class="px-8 text-start text-[#555]">
      <div>
        <div class="mb-3 text-base">
          네비게이션
        </div>
        <div class="text-base">
          원하시는 앱을 선택하시면 길안내가 시작됩니다.
        </div>
        <div class="flex justify-center gap-2 mt-3">
          <navigation-button provider="kakao" />
          <navigation-button provider="tmap" />
          <navigation-button provider="naver" />
        </div>
      </div>
      <Divider />
      <div>
        <div class="mb-3 text-base">
          <SubwaySvg class="inline-block w-6 h-6" />
          지하철
        </div>
        <div class="text-sm leading-7">
          <p>
            <span :class="`text-[#3b9f37]`">●</span> 강변역(2호선) 1, 2번 출구 지하통로
          </p>
          <p>&nbsp;&nbsp;&nbsp;· 강변 테크노마트 연결</p>
        </div>
      </div>
      <Divider />
      <div>
        <div class="mb-3 text-base">
          <BusSvg class="inline-block w-6 h-6" />
          버스
        </div>
        <div class="text-sm leading-7">
          <p>
            <span class="text-[#6fb26c]">●</span> 마을 : 강동01, 광진01, 광진03, 광진04
          </p>
          <p>
            <span class="text-[#3b9f37]">●</span> 지선 : 2224, 3214, 3212
          </p>
          <p>
            <span class="text-[#0d347f]">●</span> 경기(일반) : 1, 1-1. 1-2, 9, 9-1, 13, 13-2, 15, 91, 92, 93,  95, 96, 97, 112, 112-1, 2000-1, 2000-3,2000-4
          </p>
          <p>
            <span class="text-[#dd5c32]">●</span> 경기(직행) : 11, 112, 1113, 1113-1, 1113-2, 1117, 1650, 1660, 5600, 5700
          </p>
          <p>
            <span class="text-[#6ca8ce]">●</span> 시외 · 고속버스 : 동서울종합터미널 하차 후 강변역 통로 이용 (도보5분)
          </p>
        </div>
      </div>
      <Divider />
      <div>
        <div class="mb-3 text-base">
          <CarSvg class="inline-block w-6 h-6" />
          자가용
        </div>
        <div class="text-sm leading-7">
          <p>
            ● 네비게이션 : "강변테크노마트"(광진구 구의동) 또는 "강변역" 검색
          </p>
          <p>&nbsp;&nbsp;· 주소검색</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp; “서울 광진구 광나루로56길 85” 또는</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp; “구의동 546-4” 입력</p>

          <p>● 주차장 안내</p>
          <p>&nbsp;&nbsp;· 테크노마트 지하주차장 이용 (B3, B4)</p>
          <p>&nbsp;&nbsp;· 주차요원의 안내를 받으세요.</p>
        </div>
      </div>
    </div>
  </fade-in-section>
</template>

<style>

</style>
