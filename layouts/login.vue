<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { smAndUp, platform } = useDisplay()

</script>

<template lang="pug">
v-app(id="__default_layout" full-height)
  v-main.bg-background(id="main")
    v-container(id="login-container" fluid )
      slot
    //- navigations-bottom-footer
</template>
<style>
#login-container {
  padding: 0;
  min-height: calc(100% - 24px);
  padding: 0px;
}
::-webkit-scrollbar {
  width: 0px !important;
  height: 0px !important;
}
</style>