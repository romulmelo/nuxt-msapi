<template>
  <div class="h-full flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-extrabold">Log in to your account</h1>
    <v-button @click="login">Continue with SSO</v-button>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated, login } = useAuth();

useHead({
  title: "Log in",
});
</script>
