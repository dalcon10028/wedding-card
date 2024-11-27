declare global {
  interface Window {
    kakao: {
      maps: {
        StaticMap: any
        LatLng: any
        load: (callback: () => void) => void
      }
    }
  }
}

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    public: {
      amplitudeApiKey: string
    }
  }
  interface PublicRuntimeConfig {
    public: {
      amplitudeApiKey: string
    }
  }
}

export {}
