<template>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th><p class="hidden sm:flex">Email address</p></th>
                    <th><p class="hidden sm:flex">Age</p></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <UserTableRow
                    v-for="user in users"
                    :key="user.id"
                    :user="user"
                />
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { User } from '../../interfaces/types'
import UserTableRow from './UserTableRow.vue'

defineProps<{ users: User[] }>()
</script>
