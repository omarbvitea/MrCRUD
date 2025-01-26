<template>
    <div class="flex min-h-screen w-full sm:items-center sm:bg-base-300">
        <main class="max-w-5xl mx-auto w-full p-3">
            <ThemeSwitcher />
            <UsersDashboard />
        </main>
    </div>
</template>
<script setup lang="ts">
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import UsersDashboard from './components/users/UsersDashboard.vue'
</script>
