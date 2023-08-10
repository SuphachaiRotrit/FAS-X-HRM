<script setup lang="ts">
export interface Props {
  textHeader?: string
  icon?: string
  fullHeight?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  icon: '',
  textHeader: '',
  fullHeight: true,
})
</script>
<template lang="pug">
v-row 
  v-col(cols='12' :style="{ minHeight: fullHeight ? '450px' : 'auto' }").d-flex.align-center.justify-center
    .text-subtitle-1.text-center.text-secondary-lighten-2 ยังไม่มีข้อมูลแสดง
      
</template>