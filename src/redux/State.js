const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const  UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
let store = {
    _state: {
        profilePage: {
            newPostText: 'IT',
            posts: [
                {id: 1, author: 'Макс', text: `Хуй`, likesCount: '12'},
                {id: 2, author: 'Рома', text: 'ты лох', likesCount: '100500'},
            ]
        },
        dialogPage: {
            newMessageText:'',
            dialogs: [
                {id: '1', name: 'Даня'},
                {id: '2', name: 'Маша'},
                {id: '3', name: 'Рома'},
                {id: '4', name: 'Макс'},
                {id: '5', name: 'Серега'},
                {id: '6', name: 'Узурбек'},
                {id: '7', name: 'Ашот'},
            ],
            messages: [
                {id: 1, message: 'Хэллоу'},
                {id: 2, message: 'чо молчишь'},
                {id: 3, message: 'Бират'},
            ]
        }
    },
    _callSubscriber() {
        console.log('There are no subscribers were added yet')
    },

    getState() {
        return this._state;
    },
    subscribe(observer){
        this.callSubscriber = observer;
    },

    dispatch(action) {
            if (action.type === "ADD-POST") {
                let newPost = {id: 5, author: 'Мишаня', text: this._state.profilePage.newPostText, likesCount: '0'};
                this._state.profilePage.posts.push(newPost);
                this.callSubscriber(this._state);
            }
            else if(action.type === "UPDATE-NEW-POST-TEXT"){
                this._state.profilePage.newPostText = action.newText;
                this.callSubscriber(this._state)
        }
            else if( action.type === "SEND-MESSAGE"){
                this._state.dialogPage.messages.push({id: 22, message: this._state.dialogPage.newMessageText})
                this._state.dialogPage.newMessageText = 'Введи текст'
            }
            else if(action.type === "UPDATE-NEW-MESSAGE"){
                this._state.dialogPage.newMessageText = action.textMessage;
                this.callSubscriber(this._state)
            }
    },

}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText:text
})
export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    textMessage:text
})

export default store;

// dialogs: [
//     {
//         id: '1', name: 'Даня', messages:
//             [
//                 {id: 1, message: 'Хэллоу'},
//                 {id: 2, message: 'чо молчишь'},
//                 {id: 3, message: 'Бират'},
//             ]
//     },
//     {id: '2', name: 'Маша',messages: []},
//     {id: '3', name: 'Рома',messages: []},
//     {id: '4', name: 'Макс',messages: []},
//     {id: '5', name: 'Серега',messages: []},
//     {id: '6', name: 'Узурбек',messages: []},
//     {id: '7', name: 'Ашот',messages: []},
// ],