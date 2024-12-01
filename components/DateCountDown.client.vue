<script lang="ts" setup>
import { parseISO } from 'date-fns'
import { defineProps } from 'vue'

const props = defineProps<{
  dDay: string
}>()

const countDown = useCountDown(parseISO(props.dDay))

const days = computed(() => `${countDown.days.value}`.padStart(2, '0'))
const hours = computed(() => `${countDown.hours.value}`.padStart(2, '0'))
const minutes = computed(() => `${countDown.minutes.value}`.padStart(2, '0'))
const seconds = computed(() => `${countDown.seconds.value}`.padStart(2, '0'))
</script>

<template>
  <div class="flex flex-row justify-center gap-2">
    <div class="flex flex-col gap-1">
      <div class="text-xs uppercase">
        days
      </div>
      <div class="text-xl">
        {{ days }}
      </div>
    </div>

    <div>
      <div class="text-xs">
&nbsp;
      </div>
      <div>:</div>
    </div>

    <div class="flex flex-col gap-1">
      <div class="text-xs uppercase">
        hour
      </div>
      <div class="text-xl">
        {{ hours }}
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <div class="text-xs">
&nbsp;
      </div>
      <div>:</div>
    </div>

    <div class="flex flex-col gap-1 ">
      <div class="text-xs uppercase">
        min
      </div>
      <div class="text-xl">
        {{ minutes }}
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <div class="text-xs">
&nbsp;
      </div>
      <div>:</div>
    </div>

    <div class="flex flex-col gap-1">
      <div class="text-xs uppercase">
        sec
      </div>
      <div class="text-xl">
        {{ seconds }}
      </div>
    </div>
  </div>
</template>

<style>

</style>
