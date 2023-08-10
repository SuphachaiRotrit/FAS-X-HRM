
<script setup lang="ts">
export interface Props {
  loading: boolean
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
})


</script>

<template lang="pug">
#loading
  v-progress-linear(v-if="loading" indeterminate color="primary" )
  .bg-white.pt-1(v-else)
  
</template>
<style>
/* .v-input__details {
  display: none;
} */
</style>
