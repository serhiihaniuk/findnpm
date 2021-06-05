import { combineReducers } from 'redux'
import repositoriesReduser from './repositoriesReduser'

const reducers = combineReducers({
    repositories: repositoriesReduser,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
