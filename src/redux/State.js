import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";



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
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage,action);
       // console.log(this._state.profilePage,action)
        this._state.dialogPage = dialogsReduser(this._state.dialogPage,action);
        this._callSubscriber();

         },

}


export default store;
