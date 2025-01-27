<template>
    <dialog id="deleteDialog" class="modal">
        <div class="modal-box flex flex-col max-w-96">
            <h1 class="flex flex-col gap-5 text-2xl mb-9">
                <p class="text-center">
                    Are you sure you want to delete
                    <span class="text-warning">
                        @{{ userStore.user.selected?.nombre }}
                    </span>
                    from the list?
                </p>
                <div
                    class="flex text-base text-gray-400 text-center justify-center"
                >
                    Please rethink your decision because you will not be able to
                    undo this action
                </div>
            </h1>
            <div class="w-full flex justify-center mt-3 gap-4">
                <form method="dialog">
                    <button class="btn btn-soft">Cancel</button>
                </form>
                <button class="btn btn-error" @click="handleDelete()">
                    <span
                        v-if="userStore.state.isDeleting"
                        class="loading loading-spinner loading-md"
                    ></span>
                    <p v-else>Delete</p>
                </button>
            </div>
        </div>
    </dialog>
    <div class="toast" v-if="userStore.state.showToast">
        <div v-if="userStore.state.error !== ''" class="alert alert-error">
            {{ userStore.state.error }}
        </div>
        <div v-else class="alert alert-success">User deleted successfully!</div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/userStore'

const userStore = useUserStore()

const handleDelete = async () => {
    const deleteDialog = document.getElementById(
        'deleteDialog'
    ) as HTMLDialogElement

    try {
        await userStore.deleteUser()
    } finally {
        deleteDialog.close()
    }
}
</script>
