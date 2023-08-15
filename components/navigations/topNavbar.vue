<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'
const { smAndUp, mdAndDown, mdAndUp, lgAndUp, platform } = useDisplay()
const { nuxtApp } = useNuxtApp()

function logOut() {
  navigateTo('/login')
}
function stream() {
  navigateTo('/home')
}
</script>

<template lang="pug">
v-card.bg-primary-lighten-1(width="100%").ma-0.pa-0.v-sheet
  v-row.text-end.pr-4 
    v-col(cols='6')
      v-img(src="/logo.png" width="64px").ml-4
    v-col(cols='6').align-self-center  
      v-btn(color="primary" @click='stream()' rounded).ml-12.bg-primary console 
            
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