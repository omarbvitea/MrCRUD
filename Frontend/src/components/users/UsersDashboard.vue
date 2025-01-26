<template>
    <section
        class="flex flex-col justify-between bg-base-100 p-3 sm:p-8 rounded-xl sm:shadow-2xl h-full sm:h-[740px]"
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
                        state.total
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
                    v-for="user in state.users"
                    :key="user.id"
                    :user="user"
                />
            </UsersTable>
        </div>
        <div class="w-full flex justify-center">
            <UsersPagination
                :currentPage="state.currentPage"
                :totalPages="state.totalPages"
                @change-page="changePage"
            />
        </div>
    </section>
</template>
<script setup lang="ts">
import type { User } from '../../interfaces/types'
import IconSearch from '../Icons/IconSearch.vue'
import IconPlus from '../Icons/IconPlus.vue'
import DialogCreate from '../dialogs/DialogCreate.vue'
import Skeleton from '../Skeleton.vue'
import UserTableRow from './UserTableRow.vue'

import axios from 'axios'
import { onMounted, reactive } from 'vue'
import UsersPagination from './UsersPagination.vue'
import UsersTable from './UsersTable.vue'

const state = reactive({
    isLoading: false,
    users: [] as User[],
    total: 0,
    totalPages: 0,
    currentPage: 1,
    error: ''
})

const fetchUsers = async (page: number) => {
    state.isLoading = true
    try {
        const response = await axios.get(
            `http://localhost:4000/usuarios?page=${page}`
        )
        Object.assign(state, {
            users: response.data.users,
            total: response.data.total,
            totalPages: response.data.totalPages,
            currentPage: response.data.page
        })
    } catch (err) {
        state.error = 'Error al obtener los usuarios'
    } finally {
        state.isLoading = false
    }
}

const changePage = (page: number) => {
    if (page > 0 && state.users.length > 0) {
        fetchUsers(page)
    }
}

onMounted(() => {
    fetchUsers(state.currentPage)
})
</script>
