import {authApi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
const REMEMBER_CURRENT_PAGE = "REMEMBER_CURRENT_PAGE";
const UPDATE_PAGE ="UPDATE_PAGE"
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthorized : false,
    page:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.payload,
            }
        }
        case "REMEMBER_CURRENT_PAGE" :{
            return{
                ...state,
                page:action.currentPage
            }
        }
        default : return state
    }
}
export const rememberCurrentPage = (currentPage) =>{
    return {
        type:REMEMBER_CURRENT_PAGE,
        currentPage
    }
}
export const setUserData = (email,id,login,isAuthorized) =>{
    return{
        type: SET_USER_DATA,
        payload: {
            email,id,login,isAuthorized
        }
    }

}

export const authMe = ()=>{
    return (dispatch)=>{
        authApi.authMe().then(
            data => {
                if(data.data.resultCode === 0){
                    let{email,id,login} = data.data.data
                    dispatch(setUserData(email,id,login,true))
                }
            }
        )
    }
}
export const login =({...values}) =>{
    return (dispatch)=>{
       authApi.login({...values}).then(response=>{
           if(response.data.resultCode === 0){
               dispatch(authMe())
           }
       })
    }

}
export const logout = ()=>{
    return(dispatch) =>{
        authApi.logout().then(response=>{
            if(response.data.resultCode === 0 ) {
                alert('Выход выполнен');
                dispatch(setUserData(null,null,null,false))
            }
        })
    }
}
export default authReducer;