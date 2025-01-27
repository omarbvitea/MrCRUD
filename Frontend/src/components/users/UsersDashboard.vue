<template>
    <section
        class="flex flex-col justify-between bg-base-100 p-3 sm:p-8 rounded-xl sm:shadow-2xl h-full sm:h-[750px]"
    >
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center w-full">
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-medium">All users</h1>
                    <span
                        v-if="state.isLoading"
                        class="loading loading-spinner text-primary loading-xs"
                    ></span>
                    <span v-else class="text-primary font-medium">{{
                        pagination.total
                    }}</span>
                </div>
                <div class="flex gap-4 items-center">
                    <label class="input hidden sm:flex">
                        <IconSearch />
                        <input
                            v-model="toSearch"
                            type="search"
                            placeholder="Search"
                        />
                    </label>
                    <button class="flex sm:hidden btn btn-circle btn-soft">
                        <IconSearch />
                    </button>
                    <button
                        class="btn btn-primary"
                        onclick="createModal.showModal()"
                    >
                        <IconPlus /> Add user
                    </button>
                    <ModalCreate />
                    <ModalEdit />
                    <ModalDelete />
                </div>
            </div>
            <Skeleton v-if="state.isLoading" class="mt-14" />
            <UsersTable v-else :users="filteredUsers" />
        </div>
        <div class="w-full flex justify-center">
            <UsersPagination
                :currentPage="pagination.currentPage"
                :totalPages="pagination.totalPages"
                @change-page="changePage"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/userStore'
import { storeToRefs } from 'pinia'
import { ref, computed, onMounted } from 'vue'

import Skeleton from '../ui/Skeleton.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconPlus from '../icons/IconPlus.vue'
import ModalCreate from '../modals/ModalCreate.vue'
import ModalEdit from '../modals/ModalEdit.vue'
import ModalDelete from '../modals/ModalDelete.vue'
import UsersPagination from './UsersPagination.vue'
import UsersTable from './UsersTable.vue'

const userStore = useUserStore()
const { user, pagination, state } = storeToRefs(userStore)

const toSearch = ref('')

const filteredUsers = computed(() => {
    if (toSearch.value.trim() === '') {
        return user.value.list
    }
    return user.value.list.filter(
        (user) =>
            user.nombre.toLowerCase().includes(toSearch.value.toLowerCase()) ||
            user.correo.toLowerCase().includes(toSearch.value.toLowerCase()) ||
            user.edad?.toString().includes(toSearch.value.toLowerCase())
    )
})

const changePage = (page: number) => {
    if (page > 0) {
        userStore.fetchUsers(page)
    }
}

onMounted(() => {
    userStore.fetchUsers(pagination.value.currentPage)
})
</script>
