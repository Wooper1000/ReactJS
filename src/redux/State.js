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
    },

}

export default store;
