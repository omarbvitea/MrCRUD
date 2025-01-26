import { defineStore } from 'pinia'
import type {
    PaginationState,
    State,
    User,
    UserState
} from '../interfaces/types'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: (): {
        user: UserState
        pagination: PaginationState
        state: State
    } => ({
        user: {
            selected: null,
            list: []
        },
        pagination: {
            total: 0,
            totalPages: 0,
            currentPage: 1
        },
        state: {
            isLoading: false,
            showToast: false,
            error: ''
        }
    }),
    actions: {
        setUser(user: User) {
            this.user.selected = user
        },

        async fetchUsers(page: number) {
            this.state.isLoading = true
            try {
                const response = await axios.get(
                    `http://localhost:4000/usuarios?page=${page}`
                )
                this.user.list = response.data.users
                this.pagination.total = response.data.total
                this.pagination.totalPages = response.data.totalPages
                this.pagination.currentPage = response.data.page
            } catch (err) {
                this.state.error = 'Error al obtener los usuarios'
            } finally {
                this.state.isLoading = false
            }
        },

        async deleteUser() {
            if (!this.user) return
            try {
                await axios.delete(
                    `http://localhost:4000/usuarios/${this.user.selected?.id}`
                )
            } catch (error) {
                this.state.error = 'Failed to delete user'
            } finally {
                this.user.selected = null
                this.state.showToast = true
                this.fetchUsers(this.pagination.currentPage)
            }
        }
    }
})
