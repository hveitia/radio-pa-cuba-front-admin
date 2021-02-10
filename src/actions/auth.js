import { types } from "../types/type";

export const login = (email, password) => {

    return async (dispatch) => {
        
        dispatch({
            type: types.uiSetLoading,
            payload: true
        });

        const url = 'https://radio-pa-cuba.herokuapp.com/api/auth';
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        const { data, status, message } = await response.json();
        
        if(status === "SUCCESS"){
            dispatch({
                type: types.login,
                payload: data.token
            });
            dispatch({
                type: types.uiSetError,
                payload: null
            });
        }else{
            dispatch({
                type: types.uiSetError,
                payload: 'Invalid user y/o password.'
            });
            dispatch({
                type: types.logout,
                payload: null
            });
        }
        dispatch({
            type: types.uiSetLoading,
            payload: false
        });
        
    }
}

export const logout = () =>{

    return (dispatch)=>{
        dispatch({
            type: types.logout,
            payload: null
        });
        dispatch({
            type: types.uiSetError,
            payload: null
        });
    }
    
}

