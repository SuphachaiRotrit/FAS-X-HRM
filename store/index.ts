import { defineStore } from 'pinia'
export interface Notify {
  title: string
  content?: string
  color?: string
  type?: 'success' | 'error' | 'info'
}
export const useMainStore = defineStore('main', () => {
  const drawer = ref<boolean>(true)
  const rail = ref<boolean>(false)
  const snackbar = ref<boolean>(false)
  const emptySnack = {
    title: ''
  }
  const snackbarData = reactive<Notify>({...emptySnack})
  function toggleSnackbar () {
    snackbar.value = !snackbar.value
  }
  function toggleDrawer () {
    drawer.value = !drawer.value
  }
  function toggleRail () {
    rail.value = !rail.value
  }
  function showSnackNotify (data:Object) {
    Object.assign(snackbarData, {...data})
    toggleSnackbar()
  }

  return { drawer, rail, snackbar, snackbarData, toggleDrawer, toggleRail, toggleSnackbar, showSnackNotify }
})
