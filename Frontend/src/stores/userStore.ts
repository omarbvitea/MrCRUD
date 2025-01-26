import { defineStore } from 'pinia'
import type { User } from '../interfaces/types'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        users: [] as User[],
        isLoading: false,
        showToast: false,
        error: ''
    }),
    actions: {
        setUser(user: User) {
            this.user = user
        },

        async deleteUser() {
            this.isLoading = true
            try {
                await axios.delete(
                    `http://localhost:4000/usuarios/${this.user?.id}`
                )
                this.users = this.users.filter((u) => u.id !== this.user?.id)
                return true
            } catch (error) {
                this.error = 'Failed to delete user'
                throw error
            } finally {
                this.user = null
                this.showToast = true
                this.isLoading = false
                setTimeout(() => {
                    this.showToast = false
                }, 3000)
            }
        }
    }
})
