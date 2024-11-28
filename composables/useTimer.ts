import { useIntervalFn } from '@vueuse/core'

interface UseTimer {
  seconds: Ref<number>
  minutes: Ref<number>
  hours: Ref<number>
  days: Ref<number>
  pause(): void
  resume(): void
}

export const useCountDown = (targetDate: string | Date): UseTimer => {
  const target = new Date(targetDate).getTime()
  const now = ref(Date.now())

  const timeLeft = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = () => {
    const diff = target - now.value

    if (diff <= 0) {
      timeLeft.days = 0
      timeLeft.hours = 0
      timeLeft.minutes = 0
      timeLeft.seconds = 0
      return false
    }

    timeLeft.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    timeLeft.hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    timeLeft.minutes = Math.floor((diff / (1000 * 60)) % 60)
    timeLeft.seconds = Math.floor((diff / 1000) % 60)

    return true
  }

  const { pause, resume } = useIntervalFn(() => {
    now.value = Date.now()
    if (!calculateTimeLeft()) {
      pause()
    }
  }, 1000)

  calculateTimeLeft()

  return {
    ...toRefs(timeLeft),
    pause,
    resume,
  }
}
