import {profileApi} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";
const ON_CHANGE_STATUS = "ON_CHANGE_STATUS";
const SET_STATUS = "SET_STATUS"

let initialState = {
    newPostText: 'IT',
    posts: [
        {id: 1, author: 'Макс', text: `Хуй`, likesCount: '12'},
        {id: 2, author: 'Рома', text: 'ты лох', likesCount: '100500'},
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action)=>{
    switch (action.type){
        case "ADD-POST" :{
            return {
                ...state,
                posts: [...state.posts,{id: 5, author: 'Мишаня', text:state.newPostText, likesCount: '0'}]
            }
        }
        case "UPDATE-NEW-POST-TEXT" :{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET_PROFILE" :return {
            ...state,
                profile: action.profile
        }
        case "ON_CHANGE_STATUS" :{
            return{
                ...state,
                status:action.text
            }
        }
        case "SET_STATUS" :{
            return{
                ...state,
                status: action.status
            }
        }
        default:  return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText:text
})
export const setStatus = (status) =>{
    return {
        type: SET_STATUS,
        status
    }
}
export const onChangeStatus = (text) =>{
    return {
        type: ON_CHANGE_STATUS,
        text
    }
}

export const setProfile = (profile)=>({type:SET_PROFILE,profile});

export const showProfile = (userId)=>(dispatch)=>{

        profileApi.getProfile(userId).then(response=>{
                        dispatch(setProfile(response.data))
        })
    }

export const changeStatus = (text) => (dispatch)=>{
profileApi.updateStatus(text).then(response=>{
    if(response.data.resultCode === 0) {
        dispatch(onChangeStatus(text))
    }
})
}

export const setUserStatus = (userId)=>(dispatch)=>{
    profileApi.getStatus(userId).then(response=>{
        dispatch(setStatus(response.data))
    })
}


export default profileReducer;