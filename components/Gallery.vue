
<script lang="ts" setup>
const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const chunk = (arr: any[], size: number) => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
};

const images = ref(range(0, 11).map((index) => ({
  itemImageSrc: `https://picsum.photos/1280/1920?random=${index}`,
  thumbnailImageSrc: `https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image${index === 0 ? '' : `-${index}`}.jpg`,
  alt: `Image ${index}`
})));

const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);


const activeIndex = ref(0);

const displayCustom = ref(false);

const imageClick = (index: number) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
</script>


<template>
  <section>
    <Galleria 
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images" 
      :responsiveOptions="responsiveOptions" 
      :numVisible="7"
      containerClass="max-w-md"
      :circular="true" 
      :fullScreen="true" 
      :showItemNavigators="true" 
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
      </template>
    </Galleria>
    <div class="grid grid-flow-row auto-rows-max grid-cols-2 gap-2 w-full px-6">
      <div v-for="(imageGroup, index) of chunk(images, 3)" :key="index">
        <div class="grid gap-2">
          <img v-for="(image) of imageGroup" :key="image.alt" :src="image.thumbnailImageSrc" :alt="'alt'" class="cursor-pointer h-auto max-w-full rounded-lg" @click="imageClick(index)" />
        </div>
      </div>
    </div>
  </section>
</template>
<style>

</style>