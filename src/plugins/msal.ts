import { PublicClientApplication } from "@azure/msal-browser";

export default defineNuxtPlugin((nuxtApp) => {
  const msalConfig = {
    auth: {
      clientId: nuxtApp.$config.public.clientId,
      authority: `https://login.microsoftonline.com/${nuxtApp.$config.public.tenantId}`,
      redirectUri: "http://localhost:3000/",
      navigateToLoginRequestUrl: true,
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false,
    },
    system: {
      iframeHashTimeout: 35000,
    },
  };

  const msal = new PublicClientApplication(msalConfig);

  return {
    provide: {
      msal,
    },
  };
});
