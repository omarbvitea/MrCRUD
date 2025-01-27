export interface User {
    id: number
    nombre: string
    correo: string
    edad: number
}

export interface UserState {
    selected: User | null
    list: User[]
}

export interface State {
    isLoading: boolean
    isDeleting: boolean
    showToast: boolean
    error: string
}

export interface PaginationState {
    total: number
    totalPages: number
    currentPage: number
}
