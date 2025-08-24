<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: "user",
});
</script>

<template>
  <div class="bg-red-400">
    This IS ADMIN
  </div>
</template>

<style scoped></style>
