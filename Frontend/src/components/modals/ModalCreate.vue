<template>
    <dialog id="createModal" class="modal">
        <div class="modal-box flex flex-col">
            <h1 class="text-3xl mb-9">
                Create <span class="text-primary font-medium">new</span> user
            </h1>
            <form class="flex flex-col gap-2">
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
            </form>
            <div class="w-full mt-3">
                <button
                    class="btn btn-primary"
                    :disabled="!isValid"
                    @click="handleCreate()"
                >
                    <span
                        v-if="userStore.state.isCreating"
                        class="loading loading-spinner loading-md"
                    ></span>
                    <p v-else>Create</p>
                </button>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
    <div class="toast" v-if="userStore.state.showCreateToast">
        <div v-if="userStore.state.error !== ''" class="alert alert-error">
            {{ userStore.state.error }}
        </div>
        <div v-else class="alert alert-success">User created successfully!</div>
    </div>
</template>
<script setup lang="ts">
import IconPerson from '../Icons/IconPerson.vue'
import IconMail from '../Icons/IconMail.vue'

import { useUserStore } from '../../stores/userStore'
import { ref, computed } from 'vue'
import type { User } from '../../interfaces/types'

const userStore = useUserStore()

const name = ref('')
const email = ref('')
const age = ref(0)

const emailRegex = /^[^@]+@[^@.]+(\.[a-zA-Z]{2,})?$/

const isValid = computed(() => {
    return (
        name.value.trim() !== '' &&
        emailRegex.test(email.value) &&
        age.value >= 0
    )
})

const handleCreate = async () => {
    const createModal = document.getElementById(
        'createModal'
    ) as HTMLDialogElement

    try {
        const newUser: Partial<User> = {
            nombre: name.value,
            correo: email.value,
            edad: age.value
        }

        await userStore.createUser(newUser)
    } finally {
        createModal.close()
    }
}
</script>
