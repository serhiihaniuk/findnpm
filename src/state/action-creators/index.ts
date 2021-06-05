import axios from 'axios'
import { Dispatch } from 'redux'
import {
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_ERROR,
    SEARCH_REPOSITORIES_SUCCESS,
} from './../action-types/index'
import { Action } from '../actions'

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: SEARCH_REPOSITORIES,
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
