import { useMainStore } from "~/store";

const useAuth = async function (user: string, pass: string) {
  const config = useRuntimeConfig();
  const mainStore = useMainStore();

  const apiBase: string | undefined = config.public.ENDPOINT_URL;
  const options: any = reactive({
    baseURL: apiBase,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user,
      password: pass,
    }),
  });
  const { data, error } = await useFetch("home", options);

  if (error.value) {
    mainStore.snackbarData.title = "เข้าสู่ระบบไม่สำเร็จ";
    mainStore.snackbarData.content = `ชื่อผู้ใช้หรือรหัสผ่านผิด`;
    mainStore.snackbar = true;
  }
  return { data, error };
};
export { useAuth };
