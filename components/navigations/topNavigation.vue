<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'
const { smAndUp, mdAndDown, mdAndUp, lgAndUp, platform } = useDisplay()
const { nuxtApp } = useNuxtApp()

function logOut() {
  navigateTo('/login')
}
function stream() {
  navigateTo('/scan/scanner')
}
</script>

<template lang="pug">
v-app  
  v-app-bar(
    :elevation="1"
    flat
    rounded
    color="primary-lighten-1"
  )
    v-btn(icon="mdi-monitor-multiple" color="white" @click='stream()').ml-12.bg-primary
    v-img(src="logo.png" width="64px")
    template(#append)
      v-card(elevation="0" color="transparent").mr-6
        v-card-text.pa-2.d-flex.align-center
          v-avatar#user-info.mr-2(color="primary")
            v-icon(color="white" icon="mdi-account")
        v-menu(activator="parent")
          v-list
            v-list-item
              .text-center.py-2
                .text-subtitle-1.font-weight-bold ข้อมูลโปรไฟล์
                .text-subtitle-1  Username : admin101
                .text-subtitle-1 ID : 1234568
              v-card( variant="outlined" color="error" @click="logOut()")
                v-btn.px-2( variant="text" color="error" block)
                  v-icon.mr-2( icon="mdi-logout")
                  span ออกจากระบบ
</template>

<style lang="scss">
.v-tab.v-tab {
  min-width: 40px;
}
#user-info {
  cursor: pointer;
}
.v-application__wrap {
    backface-visibility: hidden;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    max-width: 100%;
    min-height: 100vh;
    min-height: 10vh;
    position: relative;}
</style>