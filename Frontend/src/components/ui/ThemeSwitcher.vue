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
import IconSun from '../icons/IconSun.vue'
import IconMoon from '../icons/IconMoon.vue'
</script>
