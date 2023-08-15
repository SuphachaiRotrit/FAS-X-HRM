<script setup lang="ts">

export interface Props {
  loading: boolean
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  show: false,
})

const loading = ref(false)
const emit = defineEmits(['cancel', 'save'])
const dialog = ref<boolean>(false)
const isLoading = ref<boolean>(false)
function cancel () {
  emit('cancel')
  dialog.value = false
}
function save () {
  emit('save')
  console.log('save');
  dialog.value = false
}

// isLoading.value = true
watch (() => props.show, (value) => {
  dialog.value = true
}, { deep: true})
</script>
<template lang="pug">
v-row.pt-4(v-if="!loading" justify='end')
  v-dialog(v-model='dialog' transition='dialog-bottom-transition')
    v-card.align-center.pa-3(color="#E7F4FF" elevation="0" width="30%")
      v-row
        v-col(cols="12").text-center
          .text-h6 คุณยืนยันที่จะอัพโหลดรูปภาพหรือไม่ ?
        v-col(cols='12')
          .pt-4.d-flex.justify-center
            v-btn.mx-2(
                elevation="2"
                variant="text"
                :loading="isLoading || loading"
                @click='cancel').bg-error 
              span ยกเลิก
            v-btn.mx-2(
                elevation="2"
                variant="text"
                :loading="isLoading || loading"
                @click='save').bg-primary 
              span ตกลง          

</template>
<style>
.v-dialog>.v-overlay__content {
    align-items: center;
}
</style>