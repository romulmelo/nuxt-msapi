<template>
  <button
    type="button"
    class="py-2 px-4 flex justify-center items-center rounded border-2 border-neutral-800"
    v-bind="$attrs"
  >
    <span class="text-white font-medium">
      <slot />
    </span>
  </button>
</template>
