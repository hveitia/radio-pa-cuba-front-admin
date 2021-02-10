import { types } from "../types/type";

const initialState = {
    loading: false,
    msgError: null
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiSetLoading:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
}