export default defineNuxtRouteMiddleware(() => {

    if (false === false) {
      return navigateTo('/login')
    }

  })



//   import { useUserStore } from "~/stores/userStore";

// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const authStore = useUserStore();
//   if (authStore.user) {
//     const sessionStatus = await authStore.checkSession(authStore.user.$id);
//     if (!sessionStatus) {
//       return navigateTo("/login");
//     }
//   } else {
//     return navigateTo("/login");
//   }
// });