<script setup lang="ts">
import Camera from "simple-vue-camera";
export interface Props {
  loading: boolean
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  show: false,
})
const requiredCheckout = ref<boolean>();
const camera_cap = ref<any>()
const cameraInputList = ref<any[]>([])
const cameraInput = ref<any>()
const cameraImages = ref<any>([])
const files = ref([])
const loading = ref(false)
const emit = defineEmits(['cancel', 'save'])
const dialog = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const maxSnapShot = ref<number>(10)
function cancel () {
  emit('cancel')
  dialog.value = false
}
onMounted(() => {
  getSelectCustomer()
  // getCameraInput()
});
async function getSelectCustomer() {
  if (!loading) {
    setPayment()
  }
  
}
function uploadImage() {
  console.log('cameraImages',cameraImages.value);
}
function setPayment() {
  // requiredCheckout.value = true
  // getCameraInput()
}
// function getCameraInput() {
//   cameraInputList.value = []
//   setTimeout(() => {
//     if (requiredCheckout.value) {
//       const devices = camera_cap.value?.devices(["videoinput"]);
//       devices.then((value: any) => {
//         value.map((item: any) => {
//           cameraInputList.value.push(item)
//         })
//         if (value.length > 0) {
//           cameraInput.value = value[0]
//         }
//       });
//     }
//   }, 1000);
// }
function onChangeCamera() {
  camera_cap.value?.changeCamera(cameraInput.value.deviceId);
}
async function snapshot() {
  const blob = await camera_cap.value.snapshot()
  const url = URL.createObjectURL(blob)
  cameraImages.value.push({
    blob: blob,
    preview: url,
  })
}

function removeImage(data: any) {
  const index = cameraImages.value.findIndex((item: any) => {
    return item.preview === data
  })
  if (index !== -1) {
    cameraImages.value.splice(index, 1)
  }
}

// isLoading.value = true
watch (() => props.show, (value) => {
  dialog.value = true
  // loading.value = true
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
                    v-col(cols='12' md='7').pr-0.pb-0
                      v-card.bg-primary-lighten-1(style="minHeight:550px").v-sheet
                        v-card-title(style="maxWidth:65%").ml-4
                          v-select(
                            single-line	
                            v-model="cameraInput"
                            :items="cameraInputList"
                            return-object
                            label="เลือกกล้อง"
                            variant="underlined"
                            hide-details
                            item-title="label"
                            @update:modelValue="onChangeCamera()").mt-4
                        v-card.bg-primary-lighten-3.d-flex.mx-8.mb-8(style="minHeight:250px").mt-4
                          v-row 
                            v-col(cols='12').align-self-center.pb-0
                              camera(:resolution="{ width: 400, height: 300 }" ref="camera_cap" autoplay)
                        v-btn.bg-primary(:loading='loading' @click="snapshot()" :disabled="cameraImages.length === maxSnapShot") ถ่ายรูป                            
                    v-col(cols='12' md='5').pl-0
                      v-row 
                        v-col(cols='12')
                          v-card.v-sheet
                            v-card-title
                              v-card-text ตัวอย่างรูปภาพ ({{ cameraImages.length }} / {{ maxSnapShot }})
                            widgets-boxImages(:cameraImages='cameraImages' @deleteImage='removeImage')
                    v-col(cols='0' lg='7' md='7').bg-primary-lighten-1.pa-0.ma-0      
                    v-col(cols='12' lg='5' md='5')    
                      v-btn.mb-5.bg-success(@click='uploadImage').mt-4 อัพโหลด      
                                    
  </template>
  <style>
  .container {
    width: 1000px;
  }
  </style>