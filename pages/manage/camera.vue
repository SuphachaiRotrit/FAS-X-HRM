<script setup lang="ts">
import Camera from "simple-vue-camera";
const requiredCheckout = ref<boolean>();
const camera_cap = ref<any>();
const cameraInputList = ref<any[]>([]);
const cameraInput = ref<any>();
const cameraImages = ref<any>([]);
const files = ref([]);
const loading = ref(false);
const emit = defineEmits(["cancel", "save"]);
const dialog = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const maxSnapShot = ref<number>(10);
function cancel() {
  emit("cancel");
  navigateTo("/manage/upload");
}
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000);
  getCameraInput()
});
function uploadImage() {
  console.log("cameraImages", cameraImages.value);
}
function getCameraInput() {
  cameraInputList.value = [];
  setTimeout(() => {
    const devices = camera_cap.value?.devices(["videoinput"]);
    devices?.then((value: any) => {
      value?.map((item: any) => {
        cameraInputList.value.push(item);
      });
      if (value.length > 0) {
        cameraInput.value = value[0];
      }
    });
  }, 1000);
}
function onChangeCamera() {
  camera_cap.value?.changeCamera(cameraInput.value.deviceId);
  cameraInput.value = cameraInput.value.label
  
}
async function snapshot() {
  const blob = await camera_cap.value.snapshot();
  const url = URL.createObjectURL(blob);
  cameraImages.value.push({
    blob: blob,
    preview: url,
  });
}

function removeImage(data: any) {
  const index = cameraImages.value.findIndex((item: any) => {
    return item.preview === data;
  });
  if (index !== -1) {
    cameraImages.value.splice(index, 1);
  }
}

// isLoading.value = true
</script>
<template lang="pug">
.page-wrapper  
  v-card.align-center.pa-3(height="100%" color="#E7F4FF" elevation="0")
    v-row(no-gutters)
      v-col(cols='12' style="text-align: -webkit-center;")
          .pt-4.d-flex.justify-center
            v-btn(
                  elevation="2"
                  variant="text"
                  :loading="isLoading || loading"
                  @click='cancel').bg-primary 
              span ย้อนกลับ      
          .header.d-flex.justify-center.text-center
            v-card(width="100%").mt-8
              v-form  
                v-row
                  v-col(cols='12' md='7').pr-0.pb-0
                    v-card.bg-primary-lighten-1(style="minHeight:550px").v-sheet
                      v-card.bg-primary-lighten-1.d-flex.mx-8.mb-8.mt-4(style="minHeight:340px")
                        v-row 
                          v-col(cols='12').align-self-center.pb-0
                            .loadingg(v-if="loading")
                              widgets-skeletonLoader(:height="353" :width="100" :type='`image, image, image, image`')  
                            .camearaa(v-else)
                              camera(:resolution="{ width: 400, height:   300 }" ref="camera_cap" autoplay)
                      v-card-title(style="maxWidth:94%").ml-4
                        v-select(
                              v-model="cameraInput"
                              :items="cameraInputList"
                              return-object
                              label="เลือกกล้อง"
                              variant="outlined"
                              hide-details
                              item-title="label"
                              color="primary"
                              @update:modelValue="onChangeCamera()").mt-4.text-primary-darken-1      
                      v-btn.bg-warning.text-white.mt-4.mb-2(:loading='loading' @click="snapshot()" :disabled="cameraImages.length === maxSnapShot") ถ่ายรูป                                                  
                  v-col(cols='12' md='5').pl-0
                    v-row 
                      v-col(cols='12')
                        v-card.v-sheet
                          v-card-title
                            v-card-text ตัวอย่างรูปภาพ ({{ cameraImages.length }} / {{ maxSnapShot }})
                          widgets-boxImages(:cameraImages='cameraImages' @deleteImage='removeImage')
                  v-col(cols='0' lg='7' md='7').bg-primary-lighten-1.pa-0.ma-0      
                  v-col(cols='12' lg='5' md='5')    
                    v-btn.mb-4.bg-success(:loading='loading' @click='uploadImage').mt-4 อัพโหลด          
                                    
  </template>
