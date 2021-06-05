import { FOUND_NOTHING, FOUND_SUCESS } from './../action-types/index'
import { FoundAction } from '../actions'

const initialState = {
    found: true,
}

type alertState =  typeof initialState

const alertReducer = (state = initialState, action: FoundAction): alertState => {
    switch (action.type) {
        case FOUND_SUCESS:
            return { found: true }
        case FOUND_NOTHING:
            return { found: false }
        default:
            return state
    }
}

export default alertReducer
