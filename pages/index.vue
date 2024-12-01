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
          label="연락하기"
          icon="pi pi-phone"
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

    <section-location />

    <section-notice />

    <section-gallery />

    <section-account />

    <section-footer />
  </div>
</template>
