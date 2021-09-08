const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";

let initialState = {
    newPostText: 'IT',
    posts: [
        {id: 1, author: 'Макс', text: `Хуй`, likesCount: '12'},
        {id: 2, author: 'Рома', text: 'ты лох', likesCount: '100500'},
    ]
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

export default profileReducer;