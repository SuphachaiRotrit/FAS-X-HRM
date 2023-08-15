<script setup lang="ts">

export interface Props {
  loading: boolean
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  show: false,
})
const files = ref()
const cameraImages = ref<any>([])
const loading = ref(false)
const emit = defineEmits(['cancel', 'save'])
const dialog = ref<boolean>(false)
const isLoading = ref<boolean>(false)
function cancel () {
  emit('cancel')
  dialog.value = false
}
async function snapshot() {
  const file = new File(['hoge'], 'sample.txt', { type: 'text/plain' })
  const blob = new Blob([file], { type: file.type })
  // const blob = await files.value
  // // const url = URL.createObjectURL(blob)
  cameraImages.value.push({
    blob: blob,
    // preview: url,
  })
  
}
function removeImage(data: any) {
  const index = cameraImages.value.findIndex((item: any) => {
    return item.preview === data;
  });
  if (index !== -1) {
    cameraImages.value.splice(index, 1);
  }
}
function uploadImage() {
  console.log('files',files.value);
  snapshot()
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
            .pt-4.d-flex.justify-center
              v-btn.mx-2(
                elevation="2"
                variant="text"
                :loading="isLoading || loading"
                @click='cancel').bg-primary 
                span ย้อนกลับ      
            .header.d-flex.justify-center.text-center
              v-card(width="90%").mt-8
                v-form  
                  v-row
                    v-col(cols='12' md='7').pr-0
                      v-card.bg-primary-lighten-1(style="minHeight:550px")
                        v-card-title
                          v-card-text 
                            .text-h6 ไฟล์อัพโหลด
                        v-card.bg-primary-lighten-3.d-flex.mx-8.mb-8(style="minHeight:250px")
                          v-row 
                            v-col(cols='12').align-self-center.pb-0
                              v-icon(class="fa-solid fa-file-upload fa-xl" style="color: #ffffff;")
                              p.text-white.pt-2 เลือกรูปภาพจากไฟล์ หรือลากและวางที่นี่
                            v-col(cols='12' style="text-align-last: center;").px-8 
                              v-file-input(
                                  v-model="files"
                                  accept="image/png, image/jpeg"
                                  color="white"
                                  counter
                                  label="ไฟล์รูปภาพที่อัพโหลด"
                                  multiple
                                  placeholder="เลือกรูปภาพที่จะอัพโหลด"
                                  prepend-icon=""
                                  prepend-inner-icon="mdi-image"
                                  variant="outlined"
                                  :show-size="1000").text-white               
                                template( v-slot:selection="{ fileNames }")
                                  template( v-for="(fileName, index) in fileNames" :key="fileName")
                                    v-chip(v-if="index < 2" color="white" label size="small" class="me-2") {{ fileName }}
                                    span(v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2") +{{ files.length - 2 }} ไฟล์
                    v-col(cols='12' md='5').pl-0
                      v-card 
                        v-card-title
                          v-card-text ตัวอย่างรูปภาพ : 0/10
                          .img-pp(v-for='item in cameraImages')
                            p {{ item }}
                            v-img(:src="item.preview")
                        widgets-boxImages(:cameraImages='cameraImages' @deleteImage='removeImage')
                        v-btn.mb-5.bg-success(@click='uploadImage') อัพโหลด      
                   
                    
  </template>
  <style>
  .container {
    width: 1000px;
  }
  </style>