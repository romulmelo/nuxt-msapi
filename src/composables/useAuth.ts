export const useAuth = () => {
  const router = useRouter();
  const { $msal } = useNuxtApp();

  const login = async () => {
    const { account } = await $msal.loginPopup({
      scopes: ["Mail.Read", "Mail.ReadBasic", "Mail.ReadWrite"],
    });

    if (account) {
      $msal.setActiveAccount(account);
      router.push("/");
    }
  };

  const logout = async () => {
    await $msal.logoutPopup();

    router.push("/login");
  };

  const isAuthenticated = computed(() => {
    if (process.client) {
      const account = $msal.getAllAccounts()[0];

      if (!account) {
        return false;
      }

      return true;
    }
  });

  return {
    isAuthenticated,
    login,
    logout,
  };
};
