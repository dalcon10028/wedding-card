<script lang="ts" setup>
const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

const chunk = (arr: any[], size: number) => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
}

const images = ref(range(0, 11).map(index => ({
  itemImageSrc: `/images/gallery/gallery1.jpeg`,
  thumbnailImageSrc: `/images/gallery/gallery1.jpeg`,
  alt: `Image ${index}`,
})))

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
])

const activeIndex = ref(0)

const displayCustom = ref(false)

const imageClick = (index: number) => {
  activeIndex.value = index
  displayCustom.value = true
}
</script>

<template>
  <fade-in-section
    name="gallery"
    title="우리의 순간"
  >
    <Galleria
      v-model:active-index="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :responsive-options="responsiveOptions"
      :num-visible="7"
      container-class="max-w-md"
      :circular="true"
      :full-screen="true"
      :show-item-navigators="true"
      :show-thumbnails="false"
    >
      <template #item="slotProps">
        <NuxtImg
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <NuxtImg
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria>
    <div class="grid w-full grid-flow-row grid-cols-2 gap-2 px-6 auto-rows-max">
      <div
        v-for="(imageGroup, index) of chunk(images, 3)"
        :key="index"
      >
        <div class="grid gap-2">
          <NuxtImg
            v-for="(image) of imageGroup"
            :key="image.alt"
            :src="image.thumbnailImageSrc"
            :alt="'alt'"
            class="h-auto max-w-full rounded-lg cursor-pointer"
            @click="imageClick(index)"
          />
        </div>
      </div>
    </div>
  </fade-in-section>
</template>

<style>

</style>
