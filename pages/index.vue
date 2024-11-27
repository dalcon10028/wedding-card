<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col text-center">
    <main class="flex flex-col min-h-screen">
      <div class="w-full p-5 text-center">
        <h2 class="text-3xl font-serif pb-1.5">
          2025/3/29
        </h2>
        <p class="font-serif text-base uppercase">
          saturday
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
          <span>이연권</span>
          <span>·</span>
          <span>유하얀</span>
        </div>
        <div class="text-lg">
          <p>2025년 3월 29일 토요일 오후 4시 30분</p>
          <p>웨딩시티 신도림 7F, 아스타 홀</p>
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
          <span>김김김·이이이</span>의 장남 <span>이연권</span>
        </div>
        <div>
          <span>김김김·이이이</span>의 장남 <span>이연권</span>
        </div>
      </div>
      <div class="text-center">
        <drawer-button
          name="contact"
          title="연락하기"
        >
          <div class="mx-auto mt-12 w-96">
            <div class="mx-4 mb-10 text-sm">
              <div class="text-start text-[#ccc]">
                신랑측 <span class="uppercase text-xs tracking-widest text-[#999]">groom</span>
              </div>
              <Divider type="dotted" />
              <div class="grid grid-cols-3 gap-2.5 my-5 text-white leading-10">
                <div class="text-start text-[#ccc]">
                  신랑
                </div>
                <div>이연권</div>
                <div>
                  <Button
                    href="tel:0100000000"
                    as="a"
                    icon="pi pi-phone"
                    class="p-button-rounded p-button-text p-button-sm"
                  />
                  <Button
                    href="sms:01000000000"
                    as="a"
                    icon="pi pi-envelope"
                    class="p-button-rounded p-button-text p-button-sm"
                  />
                </div>

                <div class="text-start text-[#ccc]">
                  신랑 아버지
                </div>
                <div>이연권</div>
                <div>
                  <Button
                    href="tel:0100000000"
                    as="a"
                    icon="pi pi-phone"
                    class="p-button-rounded p-button-text p-button-sm"
                  />
                  <Button
                    href="sms:01000000000"
                    as="a"
                    icon="pi pi-envelope"
                    class="p-button-rounded p-button-text p-button-sm"
                  />
                </div>

                <div class="text-start text-[#ccc]">
                  신랑 어머니
                </div>
                <div>이연권</div>
                <div>
                  <Button
                    href="tel:0100000000"
                    as="a"
                    icon="pi pi-phone"
                    class="p-button-rounded p-button-text p-button-sm"
                  />
                  <Button
                    href="sms:01000000000"
                    as="a"
                    icon="pi pi-envelope"
                    class="p-button-rounded p-button-text p-button-sm"
                  />
                </div>
              </div>
            </div>
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
      <p class="text-base">
        연권, 하얀의 결혼식이 34일 지났습니다.
      </p>
    </section>

    <fade-in-section
      name="Location"
      title="오시는 길"
      class="h-screen"
    >
      <div class="px-8 mt-4">
        <div class="text-2xl">
          웨딩스퀘어 강변 3F, 무슨무슨홀
        </div>
        <div class="text-xl">
          서울 광진구 광나루로56길 85
        </div>
      </div>
      <div class="h-64 my-7">
        <Map />
      </div>
      <div class="px-8 text-start">
        <div>
          <div class="mb-3 text-base">
            네비게이션
          </div>
          <div class="text-base">
            원하시는 앱을 선택하시면 길안내가 시작됩니다.
          </div>
          <div class="flex justify-center gap-2 mt-3">
            <Button
              label="Profile"
              icon="pi pi-user"
              variant="outlined"
            >
              <Avatar
                image="/logo/kakao-navi.webp"
                class="w-4 h-4"
              />
              카카오내비
            </Button>
            <Button
              label="Profile"
              icon="pi pi-user"
              variant="outlined"
            >
              <Avatar
                image="/logo/tmap.webp"
                class="w-4 h-4"
              />
              <span class="text-base">티맵</span>
            </Button>
            <Button
              label="Profile"
              icon="pi pi-user"
              variant="outlined"
            >
              <Avatar
                image="/logo/naver-map.webp"
                class="w-4 h-4"
              />
              네이버맵
            </Button>
          </div>
        </div>
        <Divider />
        <div>
          <div class="mb-3 text-base">
            지하철
          </div>
          <div>
            <p>
              <span class="text-[#0d347f]">●</span> 1호선,
              <span class="text-[#0d347f]">●</span> 2호선 강변역 3번 출구
            </p>
            <p>&nbsp;&nbsp;· 테크노마트판매동 지하1층과 연결</p>
          </div>
        </div>
        <Divider />
        <div>
          <div class="mb-3 text-base">
            버스
          </div>
          <div>
            <p>
              <span class="text-[#0d347f]">●</span> 1호선,
              <span class="text-[#0d347f]">●</span> 2호선 강변역 3번 출구
            </p>
            <p>&nbsp;&nbsp;· 테크노마트판매동 지하1층과 연결</p>
          </div>
        </div>
        <Divider />
        <div>
          <div class="mb-3 text-base">
            자가용
          </div>
          <div>
            <p>
              <span class="text-[#0d347f]">●</span> 1호선,
              <span class="text-[#0d347f]">●</span> 2호선 강변역 3번 출구
            </p>
            <p>&nbsp;&nbsp;· 테크노마트판매동 지하1층과 연결</p>
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
          <AccordionHeader pt:root:class="bg-[rgb(243,243,243)]">
            신부측 계좌번호
          </AccordionHeader>
          <AccordionContent>
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
