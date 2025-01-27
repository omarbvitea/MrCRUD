<template>
    <dialog id="createModal" class="modal">
        <form class="modal-box flex flex-col" @submit.prevent="handleCreate()">
            <h1 class="text-3xl mb-9">
                Create <span class="text-primary font-medium">new</span> user
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
                    :disabled="!isValid"
                    type="submit"
                >
                    <span
                        v-if="userStore.state.isCreating"
                        class="loading loading-spinner loading-md"
                    ></span>
                    <p v-else>Create</p>
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
        message="User created successfully!"
    />
</template>
<script setup lang="ts">
import IconPerson from '../icons/IconPerson.vue'
import IconMail from '../icons/IconMail.vue'
import Toast from '../ui/Toast.vue'

import { useUserStore } from '../../stores/userStore'
import { ref, computed } from 'vue'
import type { User } from '../../interfaces/types'
import { useUserModal } from '../../composables/useUserModal'

const userStore = useUserStore()

const name = ref('')
const email = ref('')
const age = ref(0)

const emailRegex = /^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/

const isValid = computed(() => {
    return (
        name.value.trim() !== '' &&
        emailRegex.test(email.value) &&
        age.value >= 0
    )
})

const { showToast, handleAction } = useUserModal()

const handleCreate = async () => {
    const newUser: Partial<User> = {
        nombre: name.value,
        correo: email.value,
        edad: age.value
    }
    await handleAction('create', newUser)
}
</script>
