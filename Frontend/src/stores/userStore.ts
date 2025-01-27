import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { apiUrl } from '../services'
import type {
    PaginationState,
    State,
    User,
    UserState
} from '../interfaces/types'

export const useUserStore = defineStore('user', () => {
    const user = ref<UserState>({
        selected: null,
        list: []
    })

    const pagination = ref<PaginationState>({
        total: 0,
        totalPages: 0,
        currentPage: 1
    })

    const state = ref<State>({
        isLoading: false,
        isDeleting: false,
        isEditing: false,
        isCreating: false,
        showDeleteToast: false,
        showCreateToast: false,
        showEditToast: false,
        error: ''
    })

    const setUser = (selectedUser: User) => {
        user.value.selected = selectedUser
    }

    const fetchUsers = async (page: number) => {
        state.value.isLoading = true
        try {
            const response = await axios.get(`${apiUrl}?page=${page}`)
            user.value.list = response.data.users
            pagination.value = response.data.pagination
        } catch (error) {
            state.value.error = 'Error al obtener los usuarios'
        } finally {
            state.value.isLoading = false
        }
    }

    const deleteUser = async () => {
        state.value.isDeleting = true
        try {
            await axios.delete(`${apiUrl}/${user.value.selected?.id}`)
        } catch (error) {
            state.value.error = 'Failed to delete user'
        } finally {
            user.value.selected = null
            state.value.showDeleteToast = true
            state.value.isDeleting = false
            fetchUsers(pagination.value.currentPage)
        }
    }

    const createUser = async (newUser: Partial<User>) => {
        state.value.isCreating = true
        try {
            await axios.post(apiUrl, newUser)
        } catch (error: any) {
            state.value.error = error.response.data.message
        } finally {
            state.value.isCreating = false
            state.value.showCreateToast = true
            fetchUsers(pagination.value.currentPage)
        }
    }

    const editUser = async (modifiedUser: Partial<User>) => {
        state.value.isEditing = true
        try {
            await axios.put(
                `${apiUrl}/${user.value.selected?.id}`,
                modifiedUser
            )
        } catch (error: any) {
            state.value.error = error.response.data.message
        } finally {
            state.value.isEditing = false
            state.value.showEditToast = true
            fetchUsers(pagination.value.currentPage)
        }
    }

    return {
        user,
        pagination,
        state,
        setUser,
        fetchUsers,
        deleteUser,
        createUser,
        editUser
    }
})
