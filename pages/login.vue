
<script setup lang="ts">
function login(){
  navigateTo('/home')
}
</script>

<template lang="pug">
.login-page
  v-row(no-gutters justify="center")
    v-col.bg-login.d-none.d-md-block(cols="12" md="6")
      v-card.d-flex.justify-center.align-center(style="text-align: -webkit-center;" height="100%" color="primary-lighten-1" elevation="0")
        v-responsive(max-width="60%" min-width="300" max-watch="400" aspect-ratio="1").align-center
          v-img(src="logo.png" max-width="120")
    v-col.bg-white.d-flex.align-center.h-screen(cols="12" md="6")
      v-col(cols="12")
        .loginCard.pa-16
          v-card-text.loginCard.pb-0
            .text-secondary-darken-1.text-h6 Welcome To Fas
          v-card-text
            v-form
              v-row 
                v-col(cols="12")
                  v-text-field(
                      label="Username"  
                      persistent-hint
                      variant="outlined"       
                      )
                v-col(cols="12")  
                  v-text-field(
                      label="Password"
                      persistent-hint
                      variant="outlined"
                      )
                  v-btn.mt-6(
                      block
                      elevation="4"
                      variant="elevated"
                      color="primary"
                      @click='login()'
                      ) LOGIN  
                      //- type="submit"
                v-col.text-center(cols="12")
                  p  
                    span.text-secondary.text-decoration-none Dudee Indeed Corporation
                  p  
                    span.mr-2.text-secondary-lighten-2 Version
                    span.text-secondary.text-decoration-none 1.0.0 dev
                    
  </template>