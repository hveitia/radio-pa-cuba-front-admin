import { types } from "../types/type";

const initialState = {
    token: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                token: action.payload
            }
        case types.logout:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}