
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
// isLoading.value = true
watch (() => props.show, (value) => {
  dialog.value = true
}, { deep: true})
</script>
<template lang="pug">
v-row.pt-4(v-if="!loading || !isLoading" justify='end')
  v-dialog(v-model='dialog' fullscreen='' :scrim='false' transition='dialog-bottom-transition')
    v-card.align-center.pa-3(height="100%" color="#F2F2F2" elevation="0")
      v-row
        v-col(cols='12')
          .container
            .pt-4.d-flex.justify-end.mr-13
              v-btn.mx-2(
              elevation="2"
              variant="text"
              :loading="isLoading || loading"
              @click='cancel').bg-primary 
                span ย้อนกลับ      
          .container
            widgets-header(textHeader="แก้ไขข้อมูลพนักงาน" icon='fa:fas fa-pencil-alt')
            modal-admin-employee    
</template>
<style>
.container {
  width: 1200px;
}
</style>