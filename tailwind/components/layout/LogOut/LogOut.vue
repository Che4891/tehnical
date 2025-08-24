<script setup>
const auth = useAuthStore()
const logOut = () => {
  auth.logout()
  return navigateTo('/login')
}
</script>

<template>
    <div>
        <uiButton @click="logOut"><Icon name="line-md:log-out">Log-out</Icon></uiButton>
    </div>
</template>

<style lang="css" scoped>

</style>