<script setup lang="ts">
const emit = defineEmits(['cancel', 'save'])
const dialog = ref<boolean>(false)
const loading = ref(false)
const showModal = ref<boolean>(false)
const showModal1 = ref<boolean>(false)
const showDeleteModal = ref<boolean>(false)
const isLoading = ref<boolean>(false)
function camera(){
  navigateTo('/manage/camera')
}
function cancel () {
  emit('cancel')
  navigateTo('/home')
}
function manageModal (item: any, type:string) {
  if (type === 'upload') {
    showModal.value = !showModal.value
  } if (type === 'webcam') {
    showModal1.value = !showModal1.value
  }
  else {
    showDeleteModal.value = !showDeleteModal.value
  }
}
// isLoading.value = true

</script>
<template lang="pug">
modal-admin-upload-image(:loading="loading" :show="showModal")
modal-admin-upload-camera(:loading="loading" :show="showModal1")
.login-page.mt-8
  v-row
    v-col(cols='12')
      .pt-4.d-flex.justify-center
        v-btn.mx-2(
                elevation="2"
                variant="text"
                :loading="isLoading || loading"
                @click='cancel').bg-primary 
          span ย้อนกลับ      
      widgets-header(textHeader="เพิ่มรูปภาพพนักงาน" icon='fa:fas fa-pencil-alt' width='50%')
      .header.d-flex.justify-center.text-center
        v-card(mx-auto width="50%" height="400px").mt-6.bg-primary-darken-1.d-flex.justify-center.align-center
          v-card-title.text-center
            v-row.mb-4
              v-col(cols="12")
                .text-subtitle-1.text-white เลือกรูปแบบการอัพโหลดรูป
              v-col(cols="12" md='6').d-flex.justify-center
                v-btn(color="primary-lighten-2" width="160px" height="100px" @click="camera()").d-flex.justify-center
                  v-row
                    v-col(cols="12")
                      v-icon(class="fa-solid fa-video fa-xl" style="color: #ffffff;")
                    v-col(cols="12")
                      p.text-white เว็บแคม   
              v-col(cols="12" md='6').d-flex.justify-center
                v-btn(color="primary-lighten-2" width="160px" height="100px" @click="manageModal({}, 'upload')").d-flex.justify-center
                  v-row
                    v-col(cols="12")
                      v-icon(class="fa-solid fa-file-image fa-xl" style="color: #ffffff;")
                    v-col(cols="12")
                      p.text-white อัพโหลด                     
  </template>
  <style>

  </style>