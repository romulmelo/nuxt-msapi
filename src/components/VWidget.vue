<template>
  <div class="absolute bottom-8 right-8 w-72">
    <div class="p-4 bg-neutral-900 rounded">
      <form class="flex flex-col gap-y-4">
        <textarea
          v-model="feedback"
          class="w-full h-28 p-3 bg-neutral-800 text-neutral-200 rounded text-[.875rem] resize-none placeholder:text-neutral-500"
          placeholder="Leave your feedback..."
        />
        <fieldset class="flex items-center justify-between">
          <label v-for="i in 5" :key="i">
            <input
              v-model="rating"
              :value="i"
              :id="String(i)"
              type="radio"
              name="rating"
              class="hidden peer"
            />
            <span
              class="cursor-pointer w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-full peer-checked:bg-emerald-500 peer-checked:text-white"
            >
              {{ i }}
            </span>
          </label>
        </fieldset>
        <v-button type="submit" @click.prevent="handleSubmit">
          Submit your feedback
        </v-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Client } from "@microsoft/microsoft-graph-client";
import {
  AuthCodeMSALBrowserAuthenticationProvider,
  AuthCodeMSALBrowserAuthenticationProviderOptions,
} from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType } from "@azure/msal-browser";

const { $msal } = useNuxtApp();
const feedback = ref("");
const rating = ref(0);

function handleSubmit() {
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

    console.log(client.api("/me/messages").get());
  }
}
</script>
