<script lang="ts" setup>
import BouquetSvg from '~/assets/svg/bouquet.svg?component'

const route = useRoute()

const isBrideFirst = !!route.query.brideFirst

const { public: { groom, bride } } = useRuntimeConfig()
</script>

<template>
  <fade-in-section
    name="Invitation"
    title="소중한 분들을 초대합니다"
    class="px-6"
  >
    <div class="flex flex-col gap-5 my-8 text-center">
      <div class="flex justify-center">
        <BouquetSvg class="w-10 h-10 text-[#544f4f]" />
      </div>
      <p class="leading-8">
        꼭 맞잡은 두 손에 감사한 마음을 더해<br>
        평생을 사랑으로 살겠습니다.<br><br>
        저희 두 사람이 <span class="text-[#d28686] font-bold">사랑</span>의 이름으로<br>
        지켜나갈 수 있게 앞날을<br>
        <span class="text-[#d28686] font-bold">축복</span>해 주시면 감사하겠습니다.
      </p>
    </div>
    <div class="flex justify-center py-8">
      <img
        class="rounded-xl"
        src="https://picsum.photos/1280/852"
        alt="invitation"
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
        label="연락하기"
        icon="pi pi-phone"
      >
        <div class="mx-auto mt-12 overflow-y-visible max-w-96">
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
</template>
