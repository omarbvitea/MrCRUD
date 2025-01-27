import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import type { User } from '../interfaces/types'

export const useUserModal = () => {
    const userStore = useUserStore()
    const showToast = ref(false)

    const handleAction = async (
        action: 'create' | 'edit' | 'delete',
        userData?: Partial<User>
    ) => {
        let modalId = ''
        let method = async () => {}

        switch (action) {
            case 'create':
                modalId = 'createModal'
                method = async () => {
                    if (userData) userStore.createUser(userData)
                }
                break
            case 'edit':
                modalId = 'editModal'
                method = async () => {
                    if (userData) userStore.editUser(userData)
                }
                break
            case 'delete':
                modalId = 'deleteModal'
                method = async () => await userStore.deleteUser()
                break
        }

        const modal = document.getElementById(modalId) as HTMLDialogElement

        try {
            await method()
        } finally {
            modal.close()
            showToast.value = true
            setTimeout(() => {
                showToast.value = false
            }, 3000)
        }
    }

    return { showToast, handleAction }
}
