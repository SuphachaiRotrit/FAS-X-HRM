
<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { useBasicRule } from '~/composables/rules/useBasicRule'
import { useAuth } from "../api/factory/useAuth"

definePageMeta({
  layout: 'login'
})

const userStore = useUserStore()
const { setAccessToken } = userStore
const { isRequired, isBasicPassword } = useBasicRule()

const config = useRuntimeConfig()
const version = config.public.VERSION
const copyright = config.public.COPYRIGHT
const company_name = config.public.COMPANY_NAME
const form = ref<boolean>(false);
const loading = ref<boolean>(false);
const visible = ref<boolean>(false);
const username = ref<string>('')
const password = ref<string>('')

const onSubmit = async () => {
  if (!form.value) return
  if (username.value.length && password.value.length) {
    loading.value = true
    const { data } = await useAuth(username.value, password.value)
    if (data.value) {
      setAccessToken(data.value)   
    } else {
      password.value = ""
      loading.value = false
    }
  }
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
            v-form(v-model="form" @submit.prevent="onSubmit") 
              v-row 
                v-col(cols="12")
                  v-text-field(
                      v-model="username"
                      label="Username"  
                      persistent-hint
                      variant="outlined"
                      :readonly="loading"
                      :rules="[isRequired()]"      
                      )
                v-col(cols="12")  
                  v-text-field(
                      label="Password"
                      persistent-hint
                      variant="outlined"
                      v-model="password"
                      :readonly="loading"
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'",
                      placeholder="Password"
                      :rules="[isBasicPassword()]"
                      @click:append-inner="visible = !visible"
                      )
                  v-btn.mt-6(
                      :disabled="!form"
                      :loading="loading"
                      type="submit"
                      block
                      elevation="4"
                      variant="elevated"
                      color="primary"
                      ) LOGIN  
                v-col.text-center(cols="12")
                  p  
                    span.mr-2.text-secondary-lighten-2 {{ copyright }}
                    span.text-secondary.text-decoration-none {{ company_name }}
                  p  
                    span.mr-2.text-secondary-lighten-2 Version
                    span.text-secondary.text-decoration-none {{ version }}
                    
  </template>