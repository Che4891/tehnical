<script setup lang='ts'>

import { useUsersStore } from '~/stores/users.store'
import type { IsUser } from '~/stores/users.store'

const testEmit = ref(false)
const testProvaide = ref('testProvaide')
const userKey = useRuntimeConfig().public.usersObjectKey as string
provide('testProv', testProvaide)


function handleEmit(val: boolean) {
  testEmit.value = val
}

const usersStore = useUsersStore()

const { data: usersData } = await useFetch<IsUser[]>(userKey)

if (usersData.value) {
  usersStore.set(usersData.value)
}
 
</script>


<template>
  <div>
    <h1>Welcome to the homepage {{testEmit}}</h1>
    <test @isEmit="handleEmit"/>
  </div>
</template>
