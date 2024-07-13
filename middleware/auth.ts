export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo("/signin");
  }
  if (user.value) {
    return navigateTo('admin/dashboard')
  }
});
