<script lang="ts" setup>
import { Form, type FormSubmitEvent } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useToast } from 'primevue/usetoast'
import { z } from 'zod'
import { logEvent } from '@amplitude/analytics-browser'
import BrideSvg from '~/assets/svg/bride.svg?component'
import GroomSvg from '~/assets/svg/groom.svg?component'

type FormState = {
  rsvpSide: string
  rsvpName: string
  rsvpPersonnel: number
  rsvpAttendance: string
}

const visible = ref(false)

const toast = useToast()

const state = reactive<Partial<FormState>>({
  rsvpSide: '',
  rsvpName: '',
  rsvpPersonnel: 1,
  rsvpAttendance: '',
})

const resolver = zodResolver(
  z.object({
    rsvpSide: z.string({ invalid_type_error: '구분을 선택해주세요.' }).min(1, '구분을 선택해주세요.'),
    rsvpName: z.string().min(1, '성함을 입력해주세요.'),
    rsvpPersonnel: z.number().int().min(1, '참석인원을 선택해주세요.'),
    rsvpAttendance: z.string({ invalid_type_error: '식사여부를 선택해주세요.' }).min(1, '식사여부를 선택해주세요.'),
  }),
)

const onFormSubmit = (a: FormSubmitEvent) => {
  const { valid, errors } = a
  if (valid) {
    console.log(state)
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
    logEvent('rsvp', {
      rsvpSide: state.rsvpSide,
      rsvpName: state.rsvpName,
      rsvpPersonnel: state.rsvpPersonnel,
      rsvpAttendance: state.rsvpAttendance,
      submittedAt: Date.now(),
    }, {
      user_id: state.rsvpName,
    })
  }
  else {
    console.log(errors)
  }
}
</script>

<template>
  <fade-in-section
    name="notice"
    title="예식정보 및 안내사항"
  >
    <section class="flex flex-col gap-8 px-8">
      <Fieldset legend="식사안내">
        <div class="px-4 py-5 mt-0">
          <p class="break-keep">
            식사는 결혼식 및 사진 촬영이 끝난 후 웨딩홀 3층에서 뷔페식으로 진행됩니다. <br><br>
            부족함 없이 즐기실 수 있도록 <br>
            한식을 비롯해 중식, 양식, 일식 등 <br>
            다양한 메뉴가 준비되어 있습니다.
          </p>
        </div>
      </Fieldset>

      <Fieldset legend="주차안내">
        <div class="px-5 py-5 mt-0">
          <p class="break-keep">
            강변테크노마트 지하 주차장 <br>
            2시간 무료주차가 가능합니다. <br><br>

            입차 시 받은 주차권(2시간 제공)과 3층 안내 데스크에서 차량번호 등록 후 출차하시면 됩니다.
          </p>
        </div>
      </Fieldset>

      <Fieldset legend="참석 의사 전달">
        <div class="flex flex-col gap-6 p-5 mt-0">
          <div class="grow">
            <p class="break-keep">
              축하의 마음으로 참석해주시는
              모든 분들을 귀하게 모실 수 있도록
              참석 의사를 전달 부탁드립니다.
            </p>
          </div>
          <Button
            label="참석 의사 전달하기"
            icon="pi pi-check"
            severity="secondary"
            @click="visible = true"
          />
          <Dialog
            v-model:visible="visible"
            header="참석 의사 전달"
            position="bottom"
            :modal="true"
            :draggable="false"
            pt:content:class="pt-1"
          >
            <Form
              v-slot="$form"
              :initial-values="state"
              :resolver="resolver"
              @submit="onFormSubmit"
            >
              <div class="flex items-center gap-4">
                <label
                  for="rsvp-side"
                  class="w-24 font-semibold"
                >구분</label>

                <div class="w-full">
                  <SelectButton
                    id="rsvp-side"
                    v-model="state.rsvpSide"
                    name="rsvpSide"
                    :options="[
                      { icon: GroomSvg, label: '신랑측', value: 'groom' },
                      { icon: BrideSvg, label: '신부측', value: 'bride' },
                    ]"
                    option-label="label"
                    data-key="value"
                    :option-value="option => option.value"
                    aria-labelledby="custom"
                  >
                    <template #option="slotProps">
                      <component
                        :is="slotProps.option.icon"
                        class="w-6"
                      />
                      <span>{{ slotProps.option.label }}</span>
                    </template>
                  </SelectButton>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-24">
                  &nbsp;
                </div>
                <Message
                  v-if="$form.rsvpSide?.invalid"
                  class="w-full"
                  severity="error"
                  size="small"
                  variant="simple"
                >
                  {{ $form.rsvpSide.error.message }}
                </Message>
              </div>

              <div class="flex items-center gap-4">
                <label
                  class="w-24 font-semibold"
                >성함</label>
                <div class="w-full">
                  <InputText
                    v-model="state.rsvpName"
                    name="rsvpName"
                    placeholder="성함을 입력해주세요."
                    fluid
                  />
                </div>
              </div>
              <div
                class="flex items-center gap-4"
              >
                <div class="w-24">
                  &nbsp;
                </div>
                <Message
                  v-if="$form.rsvpName?.invalid"
                  class="w-full"
                  severity="error"
                  size="small"
                  variant="simple"
                >
                  {{ $form.rsvpName.error.message }}
                </Message>
              </div>

              <div class="flex items-center gap-4">
                <label
                  for="rsvp-personnel"
                  class="w-24 font-semibold"
                >참석인원</label>
                <InputNumber
                  id="rsvp-personnel"
                  v-model="state.rsvpPersonnel"
                  name="rsvpPersonnel"
                  class="flex-auto"
                  button-layout="horizontal"
                  show-buttons
                  :min="1"
                  fluid
                >
                  <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                  </template>
                  <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                  </template>
                </InputNumber>
              </div>

              <div class="flex items-center gap-4 mt-4">
                <label
                  for="rsvp-attendance"
                  class="w-24 font-semibold"
                >식사여부</label>
                <div class="w-full">
                  <SelectButton
                    id="rsvp-attendance"
                    v-model="state.rsvpAttendance"
                    name="rsvpAttendance"
                    :options="[
                      { label: '예정', value: 'scheduled' },
                      { label: '안함', value: 'none' },
                      { label: '미정', value: 'not-sure' },
                    ]"
                    option-label="label"
                    data-key="value"
                    :option-value="option => option.value"
                  >
                    <template #option="slotProps">
                      <component
                        :is="slotProps.option.icon"
                        class="w-6"
                      />
                      <span>{{ slotProps.option.label }}</span>
                    </template>
                  </SelectButton>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-24">
                  &nbsp;
                </div>
                <Message
                  v-if="$form.rsvpAttendance?.invalid"
                  class="w-full"
                  severity="error"
                  size="small"
                  variant="simple"
                >
                  {{ $form.rsvpAttendance.error.message }}
                </Message>
              </div>

              <div class="flex justify-end gap-2 mt-2">
                <Button
                  type="submit"
                  icon="pi pi-check"
                  class="w-full"
                  label="참석 의사 전달하기"
                />
              </div>
            </Form>
            <Toast position="center" />
          </Dialog>
        </div>
      </Fieldset>
    </section>
  </fade-in-section>
</template>

<style>

</style>
