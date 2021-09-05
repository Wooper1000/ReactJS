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
            let newPost = {id: 5, author: 'Мишаня', text:state.newPostText, likesCount: '0'};
            state.posts.push(newPost);
            return state;
        }
        case "UPDATE-NEW-POST-TEXT" :{
            state.newPostText = action.newText;                     
            return state;
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