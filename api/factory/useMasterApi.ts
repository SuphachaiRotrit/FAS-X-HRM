import { reactive } from 'vue'
const useMasterApi = async function (method: string, url: string) {
  const response = reactive<any>([])
  const errorResponse = reactive<any>([])

  const config = useRuntimeConfig()
  const access_token = useCookie<string | undefined | null>('access_token')

  const apiBase: string | undefined = config.public.ENDPOINT_URL

  const options: object = {
    baseURL: apiBase,
    method: method,
    headers: {
      'authorization-token':  `Bearer ${access_token.value}`
    },
  }
  const { data, error } = await useFetch(url, options)

  if (data.value) {
    Object.assign(response, data.value)
  } else {
    errorResponse.message = error.value?.message
  }

  return { response, errorResponse }
}

export { useMasterApi }
