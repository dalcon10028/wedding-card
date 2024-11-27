import * as amplitude from '@amplitude/analytics-browser'
import { v4 as uuidv4 } from 'uuid'

export default defineNuxtPlugin({
  name: 'amplitude',
  parallel: true,
  async setup(_app) {
    const { public: { amplitudeApiKey } } = useRuntimeConfig()

    const isDev = import.meta.dev

    amplitude.init(amplitudeApiKey, {
      logLevel: isDev ? 4 : 2, // debug in dev, Warn in prod
      autocapture: {
        attribution: true,
        pageViews: true,
        sessions: false,
        formInteractions: true,
        fileDownloads: false,
        elementInteractions: false,
      },
    })

    amplitude.setSessionId(Date.now())
    amplitude.setDeviceId(uuidv4())

    console.info('Amplitude initialized')

    provide('amplitude', amplitude)
  },
})
