<script lang="ts" setup>
import { parseISO, intlFormat, format } from 'date-fns'
import { ko } from 'date-fns/locale'

const route = useRoute()

const isBrideFirst = !!route.query.brideFirst

const { public: { groom, bride, wedding } } = useRuntimeConfig()
</script>

<template>
  <div class="flex flex-col text-center">
    <main class="flex flex-col min-h-screen">
      <div class="w-full p-5 text-center">
        <h2 class="text-3xl font-serif pb-1.5">
          {{ intlFormat(wedding.date, { locale: 'ko-KR' }) }}
        </h2>
        <p class="font-serif text-base uppercase">
          {{ format(wedding.date, 'EEEE') }}
        </p>
      </div>
      <div class="flex justify-center">
        <picture>
          <img
            src="https://picsum.photos/425/585"
            alt="main"
          >
        </picture>
      </div>
      <div class="flex flex-col gap-5 py-8 font-sans text-center">
        <div class="flex justify-center gap-2 mx-auto text-2xl">
          <span>{{ isBrideFirst ? bride.name : groom.name }}</span>
          <span>·</span>
          <span>{{ isBrideFirst ? groom.name : bride.name }}</span>
        </div>
        <div class="text-lg">
          <p>{{ format(wedding.date, 'yyyy년 M월 d일 EEEE a h시 mm분', { locale: ko }) }}</p>
          <p>{{ wedding.place }}</p>
        </div>
      </div>
    </main>

    <fade-in-section
      name="Invitation"
      title="소중한 분들을 초대합니다"
      class="h-screen px-8"
    >
      <div class="flex flex-col gap-5 my-8 text-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Atque nam cupiditate, laudantium sit vitae praesentium quis</p>
        <p>veritatis ratione reiciendis quam, tempora ab quae et assumenda aliquid, natus repellat.</p>
        <p>Corporis, error.</p>
      </div>
      <div class="flex justify-center py-8">
        <img
          class="rounded-xl"
          src="https://picsum.photos/360/240"
          alt="test"
        >
      </div>
      <div class="pb-5 text-center">
        <div>
          <relation-text
            :target="isBrideFirst ? 'bride' : 'groom'"
            :bride="bride"
            :groom="groom"
          />
        </div>
        <div>
          <relation-text
            :target="isBrideFirst ? 'groom' : 'bride'"
            :bride="bride"
            :groom="groom"
          />
        </div>
      </div>
      <div class="text-center">
        <drawer-button
          name="contact"
          title="연락하기"
        >
          <div class="mx-auto mt-12 w-96">
            <contact-box
              :target="isBrideFirst ? 'bride' : 'groom'"
              :bride="bride"
              :groom="groom"
            />
            <contact-box
              :target="isBrideFirst ? 'groom' : 'bride'"
              :bride="bride"
              :groom="groom"
            />
          </div>
        </drawer-button>
      </div>
    </fade-in-section>

    <section class="px-8">
      <h2>2025.3.29</h2>
      <p>토요일 오후 4시 50분</p>
      <DatePicker
        inline
        :readonly="true"
        :show-other-months="false"
        :model-value="new Date('2025-3-29')"
        :default-value="new Date('2025-3-29')"
        class="w-full p-8"
        pt:panel:class="bg-transparent border-l-0 border-r-0 border-t-1 border-b-1"
        pt:header:class="hidden"
        @click.stop
      />

      <div class="flex flex-col gap-2.5">
        <date-count-down :d-day="wedding.date" />
        <left-date-text
          :is-bride-first="isBrideFirst"
          :wedding-date="wedding.date"
          :bride="bride"
          :groom="groom"
        />
      </div>
    </section>

    <fade-in-section
      name="Location"
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

    <fade-in-section
      name="gallery"
      title="우리의 순간"
    >
      <Gallery />
    </fade-in-section>

    <fade-in-section
      name="account"
      title="마음 전하실 곳"
      class="px-8"
    >
      <div class="my-5">
        <p>참석이 어려우신 분들을 위해</p>
        <p>계좌번호를 기재하였습니다.</p>
        <p>너그러운 마음으로 양해 부탁드립니다.</p>
      </div>

      <Accordion
        value="0"
        class="mx-2"
      >
        <AccordionPanel value="0">
          <AccordionHeader pt:root:class="!bg-[rgb(243,243,243)]">
            신랑측 계좌번호
          </AccordionHeader>
          <AccordionContent pt:content:class="p-5">
            <div class="flex flex-col">
              <div class="flex justify-between">
                <span>토스뱅크 110-000-000000</span>
                <div>복사</div>
              </div>
              <div class="flex justify-between">
                <span>이연권</span>
                <div class="relative">
                  <div>pay</div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader pt:root:class="!bg-[rgb(243,243,243)]">
            신부측 계좌번호
          </AccordionHeader>
          <AccordionContent pt:content:class="p-5">
            <div class="flex flex-col gap-1">
              <div class="flex justify-between">
                <span>토스뱅크 110-000-000000</span>
                <div>
                  <Button
                    label="복사"
                    pt:root:class="w-[60px] h-6 text-xs px-1"
                    variant="outlined"
                    icon="pi pi-copy"
                    size="small"
                  />
                </div>
              </div>
              <div class="flex justify-between">
                <span>이연권</span>
                <div>
                  <Button
                    pt:root:class="w-[60px] h-6 bg-[#fbdf1d] border-none"
                    as="a"
                    size="small"
                  >
                    <img
                      src="~assets/icon/icon-kakaopay.png"
                      alt="icon-kakaopay"
                    >
                  </Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </fade-in-section>

    <footer class="mt-14 py-8 bg-[rgba(201,148,96,0.07)]">
      <div>카카오톡 공유하기</div>
      <div>링크주소 복사하기</div>
    </footer>
  </div>
</template>
