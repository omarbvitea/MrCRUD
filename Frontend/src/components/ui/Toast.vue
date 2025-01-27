<template>
    <div class="toast">
        <div v-if="error" class="alert alert-error">
            {{ error }}
        </div>
        <div v-else class="alert alert-success">{{ message }}</div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    message: string
    error: any
}>()
</script>
