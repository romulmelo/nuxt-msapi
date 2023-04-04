<template>
  <div class="container py-4 flex justify-between px-8 mx-auto sm:px-0">
    <span v-if="isAuthenticated" class="font-medium text-white">
      Welcome, {{ firstName }}
    </span>
    <span v-else>Loading...</span>
    <v-button @click="logout">Log out</v-button>
  </div>
</template>

<script setup lang="ts">
const { $msal } = useNuxtApp();
const { isAuthenticated, logout } = useAuth();

const firstName = computed(() => {
  if (isAuthenticated.value) {
    return $msal.getAllAccounts()[0].name?.split(" ")[0];
  }
});
</script>
