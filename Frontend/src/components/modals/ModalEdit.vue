<template>
    <dialog id="editModal" class="modal">
        <form class="modal-box flex flex-col" @submit.prevent="handleEdit()">
            <h1 class="text-3xl mb-9">
                Edit <span class="text-primary font-medium">existing</span> user
            </h1>
            <div class="flex flex-col gap-2">
                <div>
                    <label class="input validator w-full">
                        <IconPerson />
                        <input
                            v-model="name"
                            type="input"
                            required
                            placeholder="Name"
                            maxlength="30"
                        />
                    </label>
                    <p class="validator-hint">This field is required</p>
                </div>
                <div class="flex gap-2">
                    <div class="w-full">
                        <label class="input validator w-full">
                            <IconMail />
                            <input
                                v-model="email"
                                type="email"
                                required
                                placeholder="Email"
                            />
                        </label>
                        <p class="validator-hint">Enter valid email address</p>
                    </div>
                    <div class="flex flex-col w-52">
                        <label class="input validator">
                            <input
                                v-model="age"
                                type="number"
                                placeholder="Age"
                                min="0"
                                max="120"
                            />
                        </label>
                        <p class="validator-hint">Enter a valid age</p>
                    </div>
                </div>
            </div>
            <div class="w-full mt-3">
                <button
                    class="btn btn-primary"
                    type="submit"
                    :disabled="!isValid"
                >
                    <span
                        v-if="userStore.state.isEditing"
                        class="loading loading-spinner loading-md"
                    ></span>
                    <p v-else>Edit</p>
                </button>
            </div>
        </form>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
    <Toast
        v-if="showToast"
        :error="userStore.state.error"
        message="User edited successfully!"
    />
</template>
<script setup lang="ts">
import IconPerson from '../icons/IconPerson.vue'
import IconMail from '../icons/IconMail.vue'
import Toast from '../ui/Toast.vue'

import type { User } from '../../interfaces/types'
import { useUserStore } from '../../stores/userStore'
import { ref, computed, watchEffect } from 'vue'
import { useUserModal } from '../../composables/useUserModal'

const userStore = useUserStore()

const name = ref('')
const email = ref('')
const age = ref(0)

watchEffect(() => {
    const selectedUser = userStore.user.selected
    if (selectedUser) {
        name.value = selectedUser.nombre
        email.value = selectedUser.correo
        age.value = selectedUser.edad ?? 0
    }
})

const emailRegex = /^[^@]+@[^@.]+(\.[a-zA-Z]{2,})?$/

const isValid = computed(() => {
    return (
        name.value.trim() !== '' &&
        emailRegex.test(email.value) &&
        age.value >= 0
    )
})

const { showToast, handleAction } = useUserModal()

const handleEdit = async () => {
    const modifiedUser: Partial<User> = {
        nombre: name.value,
        correo: email.value,
        edad: age.value
    }
    await handleAction('edit', modifiedUser)
}
</script>
