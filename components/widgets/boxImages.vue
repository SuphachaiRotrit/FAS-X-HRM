<script setup lang="ts">
export interface Props {
  textHeader?: string
  icon?: string
  fullHeight?: boolean
  cameraImages?: any[]
}
const props = withDefaults(defineProps<Props>(), {
  cameraImages: undefined,
  icon: '',
  textHeader: '',
  fullHeight: true,
})

const emit = defineEmits(["deleteImage"]);
function removeImage(item: string) {
  emit("deleteImage", item);
}
</script>
<template lang="pug">
v-row
  v-col(v-if='cameraImages?.length > 0' cols="12" md="4" sm="6" v-for="(item, index) in cameraImages" :key="index" )
    v-img(:src="item.preview")
      .d-flex.justify-end.pa-1
        v-btn(icon="fa:fa fa-close" size="x-small" @click="removeImage(item.preview)" color="error")
  v-col(v-else cols='12' :style="{ minHeight: fullHeight ? '450px' : 'auto' }").d-flex.align-center.justify-center
    .text-subtitle-1.text-center.text-secondary-lighten-2 ยังไม่มีข้อมูลแสดง
      
</template>