<template>
    <div class="flex h-full w-full flex-col items-center justify-center">
        <div class="flex flex-col gap-12 items-center justify-center h-full">
            <img
                class="w-64"
                src="../../assets/error.svg"
                alt="No users preview"
            />
            <div class="flex flex-col items-center gap-2">
                <h1 class="text-lg font-medium text-primary">{{ message }}</h1>
                <p class="text-sm opacity-60 w-64 text-center">
                    We'll be working to fix it as soon as possible
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ message: string }>()
</script>
