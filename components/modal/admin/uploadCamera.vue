<script setup lang="ts">

export interface Props {
  loading: boolean
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  show: false,
})
const files = ref([])
const loading = ref(false)
const emit = defineEmits(['cancel', 'save'])
const dialog = ref<boolean>(false)
const isLoading = ref<boolean>(false)
function cancel () {
  emit('cancel')
  dialog.value = false
}
function uploadImage() {
  console.log('files',files.value);
}
// isLoading.value = true
watch (() => props.show, (value) => {
  dialog.value = true
}, { deep: true})
</script>
<template lang="pug">
v-row.pt-4(v-if="!loading" justify='end')
  v-dialog(v-model='dialog' fullscreen='' :scrim='false' transition='dialog-bottom-transition')
    v-card.align-center.pa-3(height="100%" color="#E7F4FF" elevation="0")
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
            .header.d-flex.justify-center.text-center
              v-card(width="90%").mt-8
                v-form  
                  v-row
                    v-col(cols='7').pr-0
                      v-card.bg-primary-lighten-1(style="minHeight:550px")
                        v-card-title
                          v-card-text 
                            .text-h6 ไฟล์อัพโหลด
                        v-card.bg-primary-lighten-3.d-flex.mx-8.mb-8(style="minHeight:250px")
                          v-row 
                            v-col(cols='12').align-self-center.pb-0
                              v-icon(class="fa-solid fa-file-upload fa-xl" style="color: #ffffff;")
                            v-col(cols='12' style="text-align-last: center;").px-8 
                              
                    v-col(cols='5').pl-0
                      v-card 
                        v-card-title
                          v-card-text ตัวอย่างรูปภาพ : 0/10
                        widgets-boxImages
                        v-btn.mb-5.bg-success(@click='uploadImage') อัพโหลด      
                   
                    
  </template>
  <style>
  .container {
    width: 1000px;
  }
  </style>