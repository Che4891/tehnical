<script setup lang="ts">
import { MENU_DATA } from './menu.data'

</script>
<template>
    <div class='flex'>
        <NuxtLink v-for="item in MENU_DATA" :key="item.name" :to="item.url" class="flex items-center rounded-lg hover:bg-slate-400 h-fit w-fit transition-all py-1 px-3 mr-2">
            <Icon :name="item.icon" class="mr-2"/>
            <span>
                {{item.name}}
            </span>
        </NuxtLink>
    </div>
</template>