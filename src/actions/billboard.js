import { types } from "../types/type";
import { loadBillboard, } from '../helpers/loadBillboard';
import { addEditBillboard, } from '../helpers/upsertBillboard';

export const startDeleteActiveProgram = () => {
    return async (dispatch) => {
        dispatch({
            type: types.billboardSetActiveProgram,
            payload: null
        });
    }
}

export const startAddNewProgram = (day) => {
    return async (dispatch) => {

        const activeProgram = {
            id: null,
            name: "",
            image: "",
            start: "",
            finish: "",
            day: day
        }

        dispatch({
            type: types.billboardSetActiveProgram,
            payload: activeProgram
        });
    }
}

export const startEditProgram = (id, name, image, start, finish, day) => {
    return async (dispatch) => {
        const activeProgram = {
            id,
            name,
            image,
            start,
            finish,
            day,
        }

        dispatch({
            type: types.billboardSetActiveProgram,
            payload: activeProgram
        });
    }
}

export const handleEditProgram = (activeProgram) => {
    return async (dispatch) => {

        dispatch({
            type: types.billboardSetActiveProgram,
            payload: activeProgram
        });
    }
}

export const getBillboard = () => {
    return async (dispatch) => {

        dispatch({
            type: types.uiSetLoading,
            payload: true
        });
        const result = await loadBillboard();
        dispatch({
            type: types.billboardSetBillboard,
            payload: result
        });
        dispatch({
            type: types.uiSetLoading,
            payload: false
        });

    }
}

export const upsertBillboard = () => {
    return async (dispatch, getState) => {
        const { billboard } = getState();
        const xtoken = getState().auth.token;
        const { activeProgram } = getState().billboard;
        if (activeProgram.id == null) {
            billboard[activeProgram.day].push(activeProgram);
        } else {
            billboard[activeProgram.day].forEach(element => {
                if (element._id === activeProgram.id) {
                    const { name, image, start, finish } = activeProgram;
                    element.name = name;
                    element.image = image;
                    element.start = start;
                    element.finish = finish;
                }
            });
        }

        dispatch({
            type: types.uiSetLoading,
            payload: true
        });
        const result = await addEditBillboard(billboard.monday, billboard.tuesday, billboard.wednesday,
            billboard.thursday, billboard.friday, billboard.saturday, billboard.sunday, xtoken);
        const { status } = result;
        if (status !== "SUCCESS") {
            dispatch({
                type: types.uiSetError,
                payload: 'Error al actualizar la lista de programas por favor intente más tarde.'
            });
        } else {
            dispatch({
                type: types.billboardSetBillboard,
                payload: {
                    monday: billboard.monday,
                    tuesday: billboard.tuesday,
                    wednesday: billboard.wednesday,
                    thursday: billboard.thursday,
                    friday: billboard.friday,
                    saturday: billboard.saturday,
                    sunday: billboard.sunday,
                    activeProgram: null
                }
            });
        }
        dispatch({
            type: types.uiSetLoading,
            payload: false
        });
    }
}

export const deleteProgram = (id, day) => {
    return async (dispatch, getState) => {
        const { billboard } = getState();
        const xtoken = getState().auth.token;
   
        billboard[day].forEach((element, i) => {
            if (element._id === id) {
                billboard[day].splice(i, 1); 
                return;
            }      
        });

        dispatch({
            type: types.uiSetLoading,
            payload: true
        });
        const result = await addEditBillboard(billboard.monday, billboard.tuesday, billboard.wednesday,
            billboard.thursday, billboard.friday, billboard.saturday, billboard.sunday, xtoken);
        const { status } = result;
        if (status !== "SUCCESS") {
            dispatch({
                type: types.uiSetError,
                payload: 'Error al actualizar la lista de programas por favor intente más tarde.'
            });
        } else {
            dispatch({
                type: types.billboardSetBillboard,
                payload: {
                    monday: billboard.monday,
                    tuesday: billboard.tuesday,
                    wednesday: billboard.wednesday,
                    thursday: billboard.thursday,
                    friday: billboard.friday,
                    saturday: billboard.saturday,
                    sunday: billboard.sunday,
                    activeProgram: null
                }
            });
        }
        dispatch({
            type: types.uiSetLoading,
            payload: false
        });
    }
}

export const setEnableDisableProgram = (id, day, active) => {
    return async (dispatch, getState) => {
        const { billboard } = getState();
        const xtoken = getState().auth.token;
  
        billboard[day].forEach((element, i) => {
            if (element._id === id) {
                element.active = active
                return;
            }      
        });

        dispatch({
            type: types.uiSetLoading,
            payload: true
        });
        const result = await addEditBillboard(billboard.monday, billboard.tuesday, billboard.wednesday,
            billboard.thursday, billboard.friday, billboard.saturday, billboard.sunday, xtoken);
        const { status } = result;
        if (status !== "SUCCESS") {
            dispatch({
                type: types.uiSetError,
                payload: 'Error al actualizar la lista de programas por favor intente más tarde.'
            });
        } else {
            dispatch({
                type: types.billboardSetBillboard,
                payload: {
                    monday: billboard.monday,
                    tuesday: billboard.tuesday,
                    wednesday: billboard.wednesday,
                    thursday: billboard.thursday,
                    friday: billboard.friday,
                    saturday: billboard.saturday,
                    sunday: billboard.sunday,
                    activeProgram: null
                }
            });
        }
        dispatch({
            type: types.uiSetLoading,
            payload: false
        });
    }
}

