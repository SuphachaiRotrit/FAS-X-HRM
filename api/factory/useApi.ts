import { nextTick } from "vue";
import { useUserStore } from "~/store/user";
import { useMainStore } from "~/store";

const useApi = async function (method: string, url: string, opt?: any) {
  const response = reactive<any>([]);
  const errorResponse = reactive<any>([]);

  const config = useRuntimeConfig();
  const apiBase: string | undefined = config.public.ENDPOINT_URL;
  const access_token = useCookie<string | undefined | null>("access_token");
  const mainStore = useMainStore();

  const options: object = {
    baseURL: apiBase,
    method: method,
    headers: {
      "authorization-token": `Bearer ${access_token.value}`,
    },
    server: false,
    ...opt,
  };
  await nextTick();
  const { data, error, pending } = await useFetch(url, options);

  if (data.value) {
    Object.assign(response, data.value);
  } else {
    const errorMethodName: any = {
      GET: "ดึง",
      POST: "เพิ่ม",
      PUT: "แก้ไข",
      DELETE: "ลบ",
    };
    mainStore.snackbarData.title = `${errorMethodName[method]}ข้อมูลไม่สำเร็จ`;
    mainStore.snackbarData.content = `Error ${error.value!.statusCode} ${error.value!.data ? error.value!.data.msg : ''}`;
    mainStore.snackbar = true;

    if (error.value?.statusCode === 401) {
      const userStore = useUserStore();
      const { resetAccessToken } = userStore;

      resetAccessToken();
    }
    errorResponse.message = error.value?.message;
  }
  return { response, errorResponse, pending };
};
export { useApi };
