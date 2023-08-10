<template lang="pug">
v-app(id="__default_layout" full-height)
  navigations-top-navigation
  v-main.pt-16.bg-background(id="main ")
    v-container.pa-8(id="main-container")
      slot
      //- v-card
  //-   v-layout
  //-     v-app-bar(color="primary-lighten-1" elevation='2')
  //-       v-btn(icon="mdi-monitor-multiple")
  //-       v-spacer
  //-       v-img(src="logo.png")
  //-       v-spacer
  //-       v-btn(icon="mdi-account-circle")

  </template>