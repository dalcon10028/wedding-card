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
