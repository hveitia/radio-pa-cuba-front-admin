import { types } from "../types/type";

const initialState = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
    activeProgram: null
}

export const billboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.billboardSetBillboard:
            const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, activeProgram } = action.payload;
            return {
                ...state,
                monday,
                tuesday,
                wednesday,
                thursday,
                friday,
                saturday,
                sunday,
                activeProgram
            }
        case types.billboardSetActiveProgram:
            return {
                ...state,
                activeProgram: action.payload
            }
        default:
            return state;
    }
}