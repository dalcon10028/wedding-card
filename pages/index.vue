<script lang="ts" setup>
import { parseISO, intlFormat, format } from 'date-fns'
import { ko } from 'date-fns/locale'

const route = useRoute()

const isBrideFirst = !!route.query.brideFirst

const { public: { groom, bride, wedding } } = useRuntimeConfig()

const a = new Date(wedding.date)
</script>

<template>
  <div class="flex flex-col text-center">
    <main class="flex flex-col min-h-screen px-4">
      <div class="w-full py-8 text-center">
        <h2 class="text-3xl font-serif font-thin pb-1.5 flex items-center justify-center">
          <span>{{ format(wedding.date, 'yyyy') }}</span>
          <span class="mx-1.5 text-xl">/</span>
          <span>{{ format(wedding.date, 'M') }}</span>
          <span class="mx-1.5 text-xl">/</span>
          <span>{{ format(wedding.date, 'd') }}</span>
        </h2>
        <p class="font-serif text-base tracking-widest uppercase">
          {{ format(wedding.date, 'EEEE') }}
        </p>
      </div>
      <div class="flex justify-center">
        <picture class="w-full aspect-auto">
          <img
            fetchpriority="high"
            src="https://picsum.photos/1280/1762"
            alt="main"
          >
        </picture>
      </div>
      <div class="flex flex-col gap-5 font-sans text-center py-9">
        <div class="flex justify-center gap-3 mx-auto text-xl">
          <span>{{ isBrideFirst ? bride.name : groom.name }}</span>
          <span>·</span>
          <span>{{ isBrideFirst ? groom.name : bride.name }}</span>
        </div>
        <div class="font-light text-base leading-8 text-[#544f4f]">
          <p>{{ format(wedding.date, 'yyyy년 M월 d일 EEEE a h시 mm분', { locale: ko }) }}</p>
          <p>{{ wedding.place }}</p>
        </div>
      </div>
    </main>

    <section-invitation />

    <section class="px-8 py-16 bg-[#f6f5f5]">
      <p class="font-serif text-2xl text-[#524548] tracking-widest leading-8">
        {{ format(wedding.date, 'yyyy.M.d') }}
      </p>
      <p class="leading-8 tracking-wide">
        {{ format(wedding.date, 'EEEE a h시 mm분', { locale: ko }) }}
      </p>
      <DatePicker
        inline
        :show-other-months="false"
        :model-value="new Date(wedding.date)"
        class="w-full p-8 "
        pt:panel:class="bg-transparent border-l-0 border-r-0 border-t-1 border-b-1"
        pt:header:class="hidden"
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
