import axios from 'axios'
import { Dispatch } from 'redux'
import {
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_ERROR,
    SEARCH_REPOSITORIES_SUCCESS,
    FOUND_SUCESS,
    FOUND_NOTHING
} from './../action-types/index'
import { Action, FoundAction } from '../actions'

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action | FoundAction>) => {
        dispatch({
            type: SEARCH_REPOSITORIES,
        })
        dispatch({
            type: FOUND_SUCESS,
        })
        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term,
                    },
                }
            )
         
            const names = data.objects.map((result: any) => {
                
                
                return result.package
            })
            if(names.length) {
                dispatch({
                    type: FOUND_SUCESS,
                })
            } else {
                dispatch({
                    type: FOUND_NOTHING,
                }) 
            }
            dispatch({
                type: SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            })
        } catch (error) {
            dispatch({
                type: SEARCH_REPOSITORIES_ERROR,
                payload: error.message,
            })
        }
    }
}
