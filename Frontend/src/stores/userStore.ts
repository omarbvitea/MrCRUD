import { defineStore } from 'pinia'
import type {
    PaginationState,
    State,
    User,
    UserState
} from '../interfaces/types'
import axios from 'axios'
import { apiUrl } from '../services'

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
            isDeleting: false,
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
                const response = await axios.get(`${apiUrl}?page=${page}`)
                this.user.list = response.data.users
                this.pagination = response.data.pagination
            } catch (err) {
                this.state.error = 'Error al obtener los usuarios'
            } finally {
                this.state.isLoading = false
            }
        },

        async deleteUser() {
            this.state.isDeleting = true
            try {
                await axios.delete(`${apiUrl}/${this.user.selected?.id}`)
            } catch (error) {
                this.state.error = 'Failed to delete user'
            } finally {
                this.user.selected = null
                this.state.showToast = true
                this.state.isDeleting = false
                this.fetchUsers(this.pagination.currentPage)
            }
        },

        async createUser(user: User) {
            try {
                await axios.post(apiUrl, user)
            } catch (error) {
                this.state.error = 'Failed to create user'
            } finally {
                this.fetchUsers(this.pagination.currentPage)
            }
        }
    }
})
