import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const accessToken = ref<string | null | undefined>(undefined)
  const userInfo = ref<any>(undefined)

  function setAccessToken (data: any) {
    const token_cookie = useCookie<string>('access_token')
    token_cookie.value = data.accessToken
    accessToken.value = data.accessToken
    userInfo.value = data
    navigateTo('/home')
  }
  function resetAccessToken () {
    const token_cookie = useCookie<string>('access_token')
    accessToken.value = undefined
    token_cookie.value = ''
    navigateTo('/login')
  }

  return { userInfo, accessToken, setAccessToken, resetAccessToken }
}, {
  persist: true
})
