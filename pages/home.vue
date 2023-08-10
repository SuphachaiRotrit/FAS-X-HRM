<script setup lang="ts">
import type { ITableInfo } from '~/types/employee'
const idName = ref('home_page')
const loading = ref(false)
const checkStatus = ref(true)
const showModal = ref<boolean>(false)
const showDeleteModal = ref<boolean>(false)
const tableInfo: ITableInfo = reactive({
  header: [
    { title: "ID", key: "index", align: "center", sortable: false },
    { title: "รหัสพนักงาน", key: "code",align: "left", sortable: false },
    { title: "ชื่อพนักงาน", key: "name",align: "left", sortable: false },
    { title: "ติดต่อ", key: "contact",align: "left", sortable: false },
    { title: "สังกัด", key: "position",align: "left", sortable: false },
    { title: "สถานะ", key: "status",align: "center", sortable: false },
    { title: "จัดการ", key: "manege", align: "center", sortable: false },
  ],
  items: [
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'},
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'},
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'},
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'},
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'},   
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 
    {code:'6304101368',name:'นายศุภชัย รอดฤทธิ์'}, 

  ]
})

function manageModal (item: any, type:string) {
  if (type === 'manege') {
    showModal.value = !showModal.value
  } else {
    showDeleteModal.value = !showDeleteModal.value
  }
}
</script>

<template lang="pug">
#Deposition
  modal-admin-manege(
    :loading="loading"
    :show="showModal"
    )   
.page-wrapper
  navigations-top-navigation    
  .content-main
    widgets-header(textHeader="รายการข้อมูลพนักงาน" icon='mdi-account-multiple')
  .table.mt-6.d-flex.justify-center.text-center
    v-card(mx-auto width="90%").pa-2
      v-row.mt-2
        v-col(cols="4")
          v-text-field(
            color="primary"
            label="ค้นหาด้วยชื่อพนักงาน"  
            persistent-hint
            variant="outlined")
        v-col(cols="4")
          v-text-field(
            color="primary"
            label="ค้นหาด้วยรหัสพนักงาน"  
            persistent-hint
            variant="outlined")
      widgets-table(
      :idName="idName"
      :fullHeight='false'
      :loading='loading' 
      :headers="tableInfo.header"
      :items="tableInfo.items"
      :item-per-page="10")
        template(#item.contact="{ item, index }")
          .d-flex
            p(id='contact_value') 
              span เบอร์โทร: 0952058894 <br> 
              span อีเมล: example@gmail.com
        template(#item.position="{ item, index }")
          .d-flex
            p(id='contact_value') 
              span แผนก: FrontEnd <br> 
              span ตำแหน่ง: Intern
        template(#item.status="{ item, index }")
          .d-flex.justify-center.align-center
            v-icon(
              :icon='`${checkStatus === true ? `mdi-checkbox-marked-circle` : `mdi-close-circle`}`' 
              :color='`${checkStatus === true ? `success` : `error`}`' 
              size="x-large")
        template(#item.manege="{ item, index }")
          .d-flex.justify-center.align-center
            v-btn(
              icon="fa:fas fa-pencil-alt" 
              size="small" 
              color="primary" 
              width="34px" 
              height="34px"
              @click="manageModal({}, 'manege')")   
</template>