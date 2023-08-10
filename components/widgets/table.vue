
<script setup lang="ts">
export interface Props {
  headers?: any[],
  items?: any[],
  loading?: boolean,
  itemPerPage?: number,
  fullHeight?: boolean,
  hidePagination?: boolean
  idName?: string
}
const props = withDefaults(defineProps<Props>(), {
  itemPerPage: 10,
  fullHeight: true,
  hidePagination: false,
  idName: ''
})

const page = ref(1)
const itemsPerPage = computed(() => {
  if (props.items) {
    const totalPage = Math.ceil(props.items.length / props.itemPerPage)
    const item = []
    if (totalPage > 1) {
      for (let i = 0; i < totalPage; i++) {
        const start = ((page.value - 1) * props.itemPerPage)
        const end = start + props.itemPerPage
        const setItem = props.items.slice(start, end)
        item.push(setItem)
      }
      return item[(page.value - 1)]
    } else {
      return props.items
    }
  }
})

</script>

<template lang="pug">
v-row(no-gutters)
  v-col(cols="12" :style="{ minHeight: fullHeight ? '650px' : 'auto' }")
    v-card
      v-table(fixed-header fixed-footer)
        thead
          tr
            template(v-for="(header, hIndex) in headers" :key="header")
              th(:id="`${idName}_tableHead_${header.title}_${hIndex+1}`" :style="`width: ${header.width}; height: 60px;`").bg-secondary-lighten-6
                slot(:name="'header.' + header.key" :index="hIndex" :item="header")
                  .text-header(:id="`${idName}_text_${header.title}_${hIndex+1}`" :class="`text-${header.align}`") {{ header.title }}
        tbody(v-if="!loading")
          slot(name="rowAction")
          tr(v-for="(item, index) in itemsPerPage" :key="item")
            template(v-for="(headerItem, headerIndex) in headers")
              td(:id="`${idName}_tableBody_${headerItem.key}_${index+1}`" :style="`width: ${headerItem.width}; height: 60px;`" :class="`text-${headerItem.align}`")
                slot(:name="'item.' + headerItem.key" :index="index" :item="item")
                  span.text-center(:id="`${idName}_text_tableData_${headerItem.title}_${index+1}`" v-if="headerItem.key === 'index'" ) {{ ((page-1) * itemPerPage) + index+1 }} 
                  .text-value(:id="`${idName}_text_tableData_${headerItem.title}_no_value_${index+1}`" v-else ) {{ item[headerItem.key] ? item[headerItem.key] : '-' }}
      widgets-loader(:id="`${idName}`" :loading="loading")
      .text-center.pa-4(:id="`${idName}_text_loading_data`" v-if="loading") กำลังโหลดข้อมูล...
      .text-center.pa-4(:id="`${idName}_text_loading_no_data`" v-if="!(items && items.length) && !loading") ไม่พบข้อมูล
  v-col(cols="12" v-if="!hidePagination")
    v-pagination.pt-2(
      :id="`${idName}_pagination`"
      v-if="(items && items.length)"
      active-color="primary"
      density="comfortable"
      v-model="page"
      :length="Math.ceil(((items && items.length)) / itemPerPage)"
      )
</template>
<style></style>
