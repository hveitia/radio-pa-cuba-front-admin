import { types } from "../types/type"

export const setError = (err) =>{
    return {
        type: types.uiSetError,
        payload: err
    }
} 
export const removeError = () =>{
    return {
        type: types.uiRemoveError,
        payload: null
    }
} 