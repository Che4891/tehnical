<script setup lang="ts">

const props = withDefaults(
  defineProps<{ logo?: string }>(),
  {
    logo: '/Logo.svg'
  }
)

</script>
<template>
  <header class="flex w-full py-3 px-5">
    <NuxtLink to="/">
        <NuxtImg width="70" height="70" :src='props.logo' />
    </NuxtLink>
   <slot/>
  </header>
</template>

<style>

</style>