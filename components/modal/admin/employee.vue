<script setup lang="ts">
const loading = ref(false)
const showModal = ref<boolean>(false)
const showDeleteModal = ref<boolean>(false)
function manageModal() {
  navigateTo('/manage/upload')
}
</script>
<template lang="pug"> 
.table.mt-6.d-flex.justify-center.text-center
  v-card(color="white" mx-auto width="90%").mt-6
    v-card-title.bg-primary-lighten-1.text-start 
      .text-h6.pl-4 ข้อมูลพนักงาน
    v-card-text.text-start.pt-4.d-flex
      v-row
        v-col(cols='3')
          .text-subtitle-1.pl-4 
            span ID :
            span  6304101368
        v-col(cols='9')
          .text-subtitle-1.pl-4 
            span รหัสพนักงาน :
            span  6304101368
        v-col(cols='12')
          .text-subtitle-1.pl-4 
            span ชื่อ-นามสกุล :
            span  นายศุภชัย รอดฤทธิ์
        v-col(cols='3')
          .text-subtitle-1.pl-4 
            span แผนก :
            span  FrontEnd
        v-col(cols='9')
          .text-subtitle-1.pl-4 
            span ตำแหน่ง :
            span  Intern    
    v-card-title.bg-primary-lighten-1.text-start 
      .text-h6.pl-4 ข้อมูลติดต่อ
    v-card-text.text-start.pt-4.d-flex
      v-row
        v-col(cols='12')
          .text-subtitle-1.pl-4 
            span Tel :
            span  0952058894
        v-col(cols='12')
          .text-subtitle-1.pl-4 
            span Email :
            span  suphachairitrit@gmail.com      
    v-card-title.bg-primary-lighten-1.text-start 
      .text-h6.pl-4 รูปภาพ
    v-card-text.text-start.pt-4.d-flex
      v-row
        v-col(cols='6')
          .text-subtitle-1.pl-4 ตัวอย่างรูปภาพ
        v-col(cols='6').text-end.pr-6
          v-btn(color="warning" @click="manageModal()").text-white
            span เพิ่มรูป
        v-col(cols='12')
          widgets-boxImages(fullHeight )         
  </template>