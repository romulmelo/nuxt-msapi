export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated.value !== false) {
    return;
  } else {
    return navigateTo("/login");
  }
});
