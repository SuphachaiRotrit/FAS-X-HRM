import type { RouteLocationNormalized } from 'vue-router'

// https://nuxt.com/docs/api/utils/define-nuxt-route-middleware
export default defineNuxtRouteMiddleware(() => {
  const access_token = useCookie<string | undefined | null>('access_token')
  
  // if (!access_token.value) {
  //   return navigateTo(('/login'))
  // }
})