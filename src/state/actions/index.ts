import { SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_ERROR, SEARCH_REPOSITORIES_SUCCESS } from './../action-types/index';


export interface RepositoriesState {
    loading: boolean
    error: string | null
    data: string[]
}

interface SearchRepositoriesAction {
    type: typeof SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
    type: typeof SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: typeof SEARCH_REPOSITORIES_ERROR
    payload: string
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction