<script setup lang="ts">

const auth = import.meta.client ? useAuthStore() : null

const isAuthenticated = computed(() => auth?.isAuthenticated || false)

</script>

<template>
  <ClientOnly>
    <div class="bg-army h-screen w-screen">
      <div v-if="!isAuthenticated" class="flex items-center justify-center">
      <layoutLoader></layoutLoader>
      </div>
      <div v-else>
        <layoutAppBar class='bg-red'><layoutLogOut class="ml-auto" /></layoutAppBar>
        <NuxtPage />
      </div>
    </div>
  </ClientOnly>
</template>
