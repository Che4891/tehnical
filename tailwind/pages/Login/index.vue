<script setup>
definePageMeta({
  middleware: 'auth',
  layout: "auth",
});

const auth = useAuthStore()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  const success = await auth.login({ email: email.value, password: password.value })
  loading.value = false

  if (!success) {
    errorMessage.value = "This is error message"
  } else {
    return navigateTo('/admin')
  }
}

</script>

<template>

  <div class="w-96 m-auto">

    <div class="text-center ">TIS IS LOGIN PAGE</div>
    <br>
    <form @submit.prevent="handleLogin" class="grid w-full max-w-sm items-center gap-3">
      <uiLabel for="email">Email</uiLabel>
      <uiInput v-model="email" type="email" id="email" placeholder="Email" autocomplete="email"/>
      <uiLabel for="pass">Password</uiLabel>
      <uiInput v-model="password" type="password" id="pass" placeholder="Password" autocomplete="current-password"/>
      <br>
      <uiButton type="primary" :disabled="loading" >{{ loading ? "Logging in..." : "Login" }}</uiButton>

      <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
    </form>
  </div>



</template>

<style lang="css" scoped></style>
