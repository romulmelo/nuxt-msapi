import { Client } from "@microsoft/microsoft-graph-client";
import {
  AuthCodeMSALBrowserAuthenticationProvider,
  AuthCodeMSALBrowserAuthenticationProviderOptions,
} from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType } from "@azure/msal-browser";

export const useGraph = () => {
  const { $msal } = useNuxtApp();
  if (process.client) {
    const account = $msal.getAllAccounts()[0];

    const options: AuthCodeMSALBrowserAuthenticationProviderOptions = {
      account,
      scopes: ["Mail.Read", "Mail.ReadBasic", "Mail.ReadWrite"],
      interactionType: InteractionType.Popup,
    };

    const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
      $msal,
      options
    );

    const client = Client.initWithMiddleware({ authProvider });

    return { client };
  }
};
