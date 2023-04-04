<template>
  <div class="h-full">
    <v-header />
    <v-widget />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

useHead({
  title: "Feedback",
});
</script>
