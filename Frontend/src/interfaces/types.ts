export interface User {
    id: number
    nombre: string
    correo: string
    edad?: number
}

export interface UserState {
    selected: User | null
    list: User[]
}

export interface State {
    isLoading: boolean
    isCreating: boolean
    isDeleting: boolean
    isEditing: boolean
    showDeleteToast: boolean
    showCreateToast: boolean
    showEditToast: boolean
    error: string
}

export interface PaginationState {
    total: number
    totalPages: number
    currentPage: number
}
