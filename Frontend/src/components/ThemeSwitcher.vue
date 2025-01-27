<template>
    <div class="absolute top-8 right-8 hidden xl:block">
        <label class="swap swap-rotate">
            <input type="checkbox" class="theme-controller" value="light" />
            <IconMoon />
            <IconSun />
        </label>
    </div>
</template>
<script setup lang="ts">
import IconSun from './Icons/IconSun.vue'
import IconMoon from './Icons/IconMoon.vue'
</script>
