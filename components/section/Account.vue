<template>
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
</template>

<script lang="ts" setup>

</script>

<style>

</style>
