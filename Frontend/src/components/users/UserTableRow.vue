<template>
    <tr>
        <td>
            <div class="flex items-center gap-3">
                <div class="mask mask-squircle h-12 w-12">
                    <img
                        :src="`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${user.id}`"
                        alt="Avatar User"
                    />
                </div>
                <p class="font-bold line-clamp-1">
                    {{ user.nombre }}
                </p>
            </div>
        </td>
        <td>
            <p class="line-clamp-1 hidden sm:flex">
                {{ user.correo }}
            </p>
        </td>
        <td>
            <p class="hidden sm:flex">
                {{ user.edad }}
            </p>
        </td>
        <td>
            <div class="flex w-full items-center gap-1 md:gap-2 justify-end">
                <button class="btn btn-ghost btn-circle">
                    <IconEdit class="text-info" />
                </button>
                <button
                    class="btn btn-ghost btn-circle"
                    onclick="deleteDialog.showModal()"
                    @click="userStore.setUser(user)"
                >
                    <IconTrash class="text-error" />
                </button>
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import type { User } from '../../interfaces/types'
import IconEdit from '../Icons/IconEdit.vue'
import IconTrash from '../Icons/IconTrash.vue'
import { useUserStore } from '../../stores/userStore'

defineProps<{ user: User }>()

const userStore = useUserStore()
</script>
