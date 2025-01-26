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
                        <input type="search" placeholder="Search" />
                    </label>
                    <button class="flex sm:hidden btn btn-circle btn-soft">
                        <IconSearch />
                    </button>
                    <button
                        class="btn btn-primary"
                        onclick="newUserModal.showModal()"
                    >
                        <IconPlus /> Add user
                    </button>
                    <DialogCreate />
                </div>
            </div>
            <Skeleton v-if="state.isLoading" class="mt-14" />
            <UsersTable v-else>
                <UserTableRow
                    v-for="user in user.list"
                    :key="user.id"
                    :user="user"
                />
            </UsersTable>
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

import IconSearch from '../Icons/IconSearch.vue'
import IconPlus from '../Icons/IconPlus.vue'
import DialogCreate from '../dialogs/DialogCreate.vue'
import Skeleton from '../Skeleton.vue'
import UserTableRow from './UserTableRow.vue'

import UsersPagination from './UsersPagination.vue'
import UsersTable from './UsersTable.vue'
import { onMounted } from 'vue'

const userStore = useUserStore()
const { user, pagination, state } = storeToRefs(userStore)

const changePage = (page: number) => {
    if (page > 0) {
        userStore.fetchUsers(page)
    }
}

onMounted(() => {
    userStore.fetchUsers(pagination.value.currentPage)
})
</script>
