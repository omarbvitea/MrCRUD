<template>
    <div class="join">
        <button
            class="join-item btn"
            :class="{ 'btn-disabled': currentPage === 1 }"
            @click="changePage(currentPage - 1)"
        >
            «
        </button>
        <button class="join-item btn">Page {{ currentPage }}</button>
        <button
            class="join-item btn"
            :class="{
                'btn-disabled': currentPage === totalPages
            }"
            @click="changePage(currentPage + 1)"
        >
            »
        </button>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    currentPage: number
    totalPages: number
}>()

const emit = defineEmits(['change-page'])

const changePage = (page: number) => {
    emit('change-page', page)
}
</script>
