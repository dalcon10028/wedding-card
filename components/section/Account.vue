<script lang="ts" setup>
import type { Person } from '~'

const route = useRoute()

const isBrideFirst = !!route.query.brideFirst

const { public: { groom, bride } } = useRuntimeConfig()

const firstPerson = computed(() => isBrideFirst ? { side: '신부', ...bride } : { side: '신랑', ...groom })
const secondPerson = computed(() => isBrideFirst ? { side: '신랑', ...groom } : { side: '신부', ...bride })
</script>

<template>
  <fade-in-section
    name="account"
    title="마음 전하실 곳"
    class="px-8"
  >
    <div class="mb-10 leading-7">
      <p>참석이 어려우신 분들을 위해</p>
      <p>계좌번호를 기재하였습니다.</p>
      <p>너그러운 마음으로 양해 부탁드립니다.</p>
    </div>

    <Accordion
      value="0"
    >
      <AccordionPanel value="0">
        <AccordionHeader pt:root:class="!bg-[rgb(243,243,243)] text-sm">
          {{ firstPerson.side }}측 계좌번호
        </AccordionHeader>
        <AccordionContent pt:content:class="p-0 text-[0.815rem] font-account">
          <account-card :person="firstPerson" />
          <account-card :person="firstPerson.father" />
          <account-card :person="firstPerson.mother" />
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader pt:root:class="!bg-[rgb(243,243,243)] text-sm">
          {{ secondPerson.side }}측 계좌번호
        </AccordionHeader>
        <AccordionContent pt:content:class="p-0 text-[0.815rem] font-account">
          <account-card :person="secondPerson" />
          <account-card :person="secondPerson.father" />
          <account-card :person="secondPerson.mother" />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </fade-in-section>
</template>

<style>

</style>
