import { combineReducers } from 'redux'
import alertReducer from './alertReducer'
import repositoriesReduser from './repositoriesReduser'


const reducers = combineReducers({
    repositories: repositoriesReduser,
    alert: alertReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
