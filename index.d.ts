export type Person = {
  name: string
  account: {
    bank: string
    accountNumber: string
    kakaoPay?: string
  }
  phoneNumber: string
}

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

      groom: Person & {
        father: Person
        mother: Person
      }

      bride: Person & {
        father: Person
        mother: Person
      }

      wedding: {
        place: string
        date: string
      }
    }
  }
}

export {}
