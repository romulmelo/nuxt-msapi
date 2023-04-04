// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - Node + Microsoft API",
    },
  },
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/msal", mode: "client" }],
  runtimeConfig: {
    public: {
      clientId: process.env.MICROSOFT_CLIENT_ID,
      tenantId: process.env.MICROSOFT_TENANT_ID,
      authority: process.env.MICROSOFT_AUTHORITY,
    },
  },
});
