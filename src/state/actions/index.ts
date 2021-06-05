import {
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_ERROR,
    SEARCH_REPOSITORIES_SUCCESS,
    FOUND_SUCESS,
    FOUND_NOTHING,
} from './../action-types/index'

export interface IRepository {
    name: string
    scope: string
    version: string
    description: string
    links: ILinksRepository
    [key: string]: any
}

interface ILinksRepository {
    npm?: string
    homepage?: string
    repository?: string
    bugs?: string
}
export interface RepositoriesState {
    loading: boolean
    error: string | null
    data: IRepository[]
}

interface SearchRepositoriesAction {
    type: typeof SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
    type: typeof SEARCH_REPOSITORIES_SUCCESS
    payload: IRepository[]
}

interface SearchRepositoriesErrorAction {
    type: typeof SEARCH_REPOSITORIES_ERROR
    payload: string
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction

interface FoundRePositoriesSuccess {
    type: typeof FOUND_SUCESS
}
interface FoundRePositoriesError {
    type: typeof FOUND_NOTHING
}

export type FoundAction = FoundRePositoriesError | FoundRePositoriesSuccess
