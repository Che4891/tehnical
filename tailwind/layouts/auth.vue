<script setup lang="ts">

const auth = import.meta.client ? useAuthStore() : null

console.log('TEST LOGIN', auth?.isAuthenticated )
const isAuthenticated = computed(() => auth?.isAuthenticated || false)

</script>

<template>
    <div v-if="!isAuthenticated" class="flex items-center justify-center">
      <layoutLoader></layoutLoader>
    </div>
    <div v-else class="bg-army h-screen w-screen">
      <layoutAppBar logo="/militarLogo.svg" />
      <NuxtPage />
    </div>
</template>
