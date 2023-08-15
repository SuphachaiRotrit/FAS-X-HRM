<script setup lang="ts">
import Camera from "simple-vue-camera";
const camera_cap = ref<any>();
const cameraInputList = ref<any[]>([]);
const cameraInput = ref<any>();
const cameraImages = ref<any>([]);
const loading = ref(false);
const timeMer = ref()
const checkStatus = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000);
  getCameraInput()
});
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
function currentTime() {
  let date = new Date(); 
  let hh: any = date.getHours();
  let mm: any = date.getMinutes();
  let ss: any = date.getSeconds();
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  let time: string = hh + ":" + mm + ":" + ss + " "
  const t = setTimeout(() => {
    currentTime();
  }, 1000);
  timeMer.value = time
  // console.log(time);

}

currentTime();

</script>
<template lang="pug">
.page-wrapper
  navigations-top-navbar
  v-card.ma-0.pa-0.bg-primary-lighten-2.v-sheet(height="100%")
    v-card-title
      v-row(no-gutters)
        v-col(cols='2').pt-2.pl-12
          v-img(src='/logoDudee.png' width="100px")
        v-col(cols='10').d-flex.justify-start.align-center  
          .text-white.nameLogo.pt-2 DUDEE INDEED Corporation
  v-card.v-sheet(height="100%")         
    v-row(no-gutters)
      v-col(cols='8').pr-0.bg-primary-lighten-2
        v-row(no-gutters)
          v-col(cols='12')
            v-card(maxheight="560px").bg-primary-lighten-2.v-sheet.pr-0          
              camera(:resolution="{ width: 1090, height: 603 }" ref="camera_cap" autoplay)
          v-col(cols='12')
            v-card.bg-primary-lighten-2.v-sheet.pr-0.text-center
              .text-center.d-flex.justify-center.align-center
                v-card.bg-secondary-darken-3(width="20%" height="50px").mb-2
                  .text-h3 {{ timeMer }}    
      v-col(cols='4').pl-0
        v-card(height="100%").bg-primary-lighten-2.v-sheet
          v-row(no-gutters) 
            v-col(cols='12').px-6
              v-card.bg-primary-lighten-1.mb-2
                v-row.pa-4 
                  v-col(cols='4')
                    v-img(src="/Group 52.png" width="100px")
                  v-col(cols='8')
                    .text-h6.mb-4 นายศุภชัย รอดฤทธิ์
                    v-row 
                      v-col(cols='12').pb-0
                        v-icon(class="fa-regular fa-clock")
                        span  เวลาเข้างาน 08:50 น. 
                        v-icon(icon='mdi-checkbox-marked-circle' color="success")
                      v-col(cols='12').pt-0
                        v-icon(class="fa-regular fa-clock")
                        span  เวลาออกงาน 18:04 น. 
                        v-icon(icon='mdi-checkbox-marked-circle' color="success")       
              v-card.bg-primary-lighten-1.mb-2
                v-row.pa-4 
                  v-col(cols='4')
                    v-img(src="/Group 52.png" width="100px")
                  v-col(cols='8')
                    .text-h6.mb-4 นายศุภชัย รอดฤทธิ์
                    v-row 
                      v-col(cols='12').pb-0
                        v-icon(class="fa-regular fa-clock")
                        span  เวลาเข้างาน 09:00 น. 
                        v-icon(icon='mdi-checkbox-marked-circle' color="success")
                      v-col(cols='12').pt-0
                        v-icon(class="fa-regular fa-clock")
                        span  เวลาออกงาน --:-- น. 
                        //- v-icon(icon='mdi-checkbox-marked-circle' color="error")
              v-card.bg-primary-lighten-1.mb-2
                v-row.pa-4 
                  v-col(cols='4')
                    v-img(src="/Group 52.png" width="100px")
                  v-col(cols='8')
                    .text-h6.mb-4 นายศุภชัย รอดฤทธิ์  
                    v-row 
                      v-col(cols='12').pb-0
                        v-icon(class="fa-regular fa-clock")
                        span  เวลาเข้างาน 09:05 น. 
                        v-icon(icon='mdi-checkbox-marked-circle' color="success")
                      v-col(cols='12').pt-0
                        v-icon(class="fa-regular fa-clock")
                        span  เวลาออกงาน 18:34 น. 
                        v-icon(icon='mdi-checkbox-marked-circle' color="success") 
              v-card.bg-warning.mb-2
                v-row.pa-4 
                  v-col(cols='4')
                    v-img(src="/noData.png" width="100px")
                  v-col(cols='8')
                    .text-h6.mb-4 นายศุภชัย รอดฤทธิ์
                    v-icon(class="fa-regular fa-clock")
                    span  16:24 น. 
                    v-icon(icon='mdi-close-circle' color="error")                      

</template>
<style>
.nameLogo {
  font-family: TH Sarabun New;
  font-size: 64px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
}
</style>
