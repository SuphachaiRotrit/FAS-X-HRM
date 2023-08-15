<script setup lang="ts">
export interface Props {
  textHeader?: string
  icon?: string
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  width:'90%',
  icon: '',
  textHeader: ''
})
</script>
<template lang="pug">
.header.d-flex.justify-center.text-center
  v-card(color="primary" mx-auto :width="width" elevation="4").mt-6
    v-card-text
      v-icon(:icon="icon")
      .text-h6 {{ textHeader }}
      
</template>