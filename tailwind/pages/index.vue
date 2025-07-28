<script setup lang='ts'>
const testEmit = ref(false)


function handleEmit(val: boolean) {
  testEmit.value = val
}
 
</script>


<template>
  <div>
    <h1>Welcome to the homepage {{testEmit}}</h1>
    <test @isEmit="handleEmit" class="ml-auto" />
  </div>
</template>
