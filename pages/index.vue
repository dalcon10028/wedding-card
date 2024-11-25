<script lang="ts" setup>

</script>
<template>
  <div class="flex flex-col text-center">
    <main class="min-h-screen flex flex-col">
      <div class="w-full text-center p-5">
        <h2 class="text-3xl font-serif pb-1.5">2025/3/29</h2>
        <p class="text-base uppercase font-serif">saturday</p>
      </div>
      <div class="flex justify-center">
        <picture>
          <img src="https://picsum.photos/425/585" alt="main">
        </picture>
      </div>
      <div class="flex flex-col text-center font-sans py-8 gap-5">
        <div class="text-2xl flex gap-2 mx-auto justify-center">
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
    
    
    <fade-in-section name="Invitation" title="소중한 분들을 초대합니다" class="h-screen px-8">
      <div class="text-center my-8 flex flex-col gap-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
        <p>Atque nam cupiditate, laudantium sit vitae praesentium quis</p>
        <p>veritatis ratione reiciendis quam, tempora ab quae et assumenda aliquid, natus repellat.</p>
        <p>Corporis, error.</p>
      </div>
      <div class="py-8 flex justify-center">
        <img class="rounded-xl" src="https://picsum.photos/360/240" alt="test">
      </div>
      <div class="text-center pb-5">
        <div>
          <span>김김김·이이이</span>의 장남 <span>이연권</span>
        </div>
        <div>
          <span>김김김·이이이</span>의 장남 <span>이연권</span>
        </div>
      </div>
      <div class="text-center">
        <drawer-button name="contact" title="연락하기">
          <div class="w-96 mx-auto mt-12">
            <div class="mb-10 mx-4 text-sm">
              <div class="text-start text-[#ccc]">신랑측 <span class="uppercase text-xs tracking-widest text-[#999]">groom</span></div>
              <Divider type="dotted"/>
              <div class="grid grid-cols-3 gap-2.5 my-5 text-white leading-10">
                <div class="text-start text-[#ccc]">신랑</div>
                <div>이연권</div>
                <div>
                  <Button href="tel:0100000000" as="a" icon="pi pi-phone" class="p-button-rounded p-button-text p-button-sm" />
                  <Button href="sms:01000000000" as="a" icon="pi pi-envelope" class="p-button-rounded p-button-text p-button-sm" />
                </div>
                
                <div class="text-start text-[#ccc]">신랑 아버지</div>
                <div>이연권</div>
                <div>
                  <Button href="tel:0100000000" as="a" icon="pi pi-phone" class="p-button-rounded p-button-text p-button-sm" />
                  <Button href="sms:01000000000" as="a" icon="pi pi-envelope" class="p-button-rounded p-button-text p-button-sm" />
                </div>
                
                <div class="text-start text-[#ccc]">신랑 어머니</div>
                <div>이연권</div>
                <div>
                  <Button href="tel:0100000000" as="a" icon="pi pi-phone" class="p-button-rounded p-button-text p-button-sm" />
                  <Button href="sms:01000000000" as="a" icon="pi pi-envelope" class="p-button-rounded p-button-text p-button-sm" />
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
        :showOtherMonths="false"
        :modelValue="new Date('2025-3-29')"
        :defaultValue="new Date('2025-3-29')"
        class="w-full p-8" 
        pt:panel:class="bg-transparent border-t-1 border-b-1 border-r-0 border-l-0"
        pt:header:class="hidden"
        @click.stop
      />
      <p class="text-base">
        연권, 하얀의 결혼식이 34일 지났습니다.
      </p>
    </section>

    <fade-in-section name="Location" title="오시는 길" class="h-screen">
      <div class="mt-4 px-8">
        <div class="text-2xl">웨딩스퀘어 강변 3F, 무슨무슨홀</div>
        <div class="text-xl">서울 광진구 광나루로56길 85</div>
      </div>
      <div class="my-7 h-64">
        <Map />
      </div>
      <div class="text-start px-8">
        <div>
          <div class="text-base mb-3">네비게이션</div>
          <div class="text-base">원하시는 앱을 선택하시면 길안내가 시작됩니다.</div>
          <div class="flex gap-2 justify-center mt-3">
            <Button label="Profile" icon="pi pi-user" variant="outlined">
              <Avatar image="/logo/kakao-navi.webp" class="w-4 h-4" />
              카카오내비
            </Button>
            <Button label="Profile" icon="pi pi-user" variant="outlined">
              <Avatar image="/logo/tmap.webp" class="w-4 h-4" />
              <span class="text-base">티맵</span>
            </Button>
            <Button label="Profile" icon="pi pi-user" variant="outlined">
              <Avatar image="/logo/naver-map.webp" class="w-4 h-4" />
              네이버맵
            </Button>
          </div>
        </div>
        <Divider />
        <div>
          <div class="text-base mb-3">지하철</div>
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
          <div class="text-base mb-3">버스</div>
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
          <div class="text-base mb-3">자가용</div>
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

    <section>
      <h1>GALLERY</h1>

      <p>more...</p>
    </section>

    <section>
      <h1>location</h1>
      <h3>map</h3>
      <h3>약도 이미지 보기</h3>
      <h3>네비게이션</h3>
      <h3>지하철</h3>
      <h3>버스</h3>
      <h3>자가용</h3>
      <h3>주차장 안내</h3>
    </section>

    <section>
      <h1>Information</h1>
      <h3>피로연 안내</h3>
      <button>피로연 지도 보기</button>
    </section>

    <section>
      <h1>image</h1>
    </section>

    <section>
      <h1>guest book</h1>
    </section>

    <section>
      <h1>account</h1>
    </section>

    <footer>
      <h1>footer</h1>
      카카오톡으로 초대장 보내기
      copy right
    </footer>
  </div>
</template>