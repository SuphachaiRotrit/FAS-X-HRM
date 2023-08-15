<script setup lang="ts">
interface Props {
  height?: number,
  width?: number
  type?: string
  color?: string
  elevation?: string
  idName?: string
}
const props = withDefaults(defineProps<Props>(), {
  elevation: '0',
  type: undefined,
  color: '',
  height: 0,
  width: 0,
  idName: ''
})

const {idName} = props

</script>

<template lang="pug">
.skeleton-loading 
  v-skeleton-loader(:id="`${idName}_skeleton-loader`" :style="`height:${props.height}px; width:${props.width}%;`" :type='props.type' :color="color")
</template>
<style>
/* .v-input__details {
  display: none;
} */
</style>