let store = {
    state: {
        profilePage :{
            newPostText:'IT',
            posts: [
                {id: 1, author: 'Макс', text: `Хуй`, likesCount: '12'},
                {id: 2, author: 'Рома', text: 'ты лох', likesCount: '100500'},
                {id: 3, author: 'Пашка', text: 'он пиздит ты красава', likesCount: '0'},
                {id: 4, author: 'Мама', text: 'Мальчики что тут происходит', likesCount: '100'},
            ]
        },
        dialogPage:{
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
    getState(){
      return this.state;
    },
    rerenderEntireTree(){
        console.log('There are no subscribers were added yet')
    },
    addPost(textPost){
debugger;
        let newPost = {id: 5, author: 'Мишаня', text: this.state.profilePage.newPostText, likesCount: '0'};
        this.state.profilePage.posts.push(newPost);
        this.rerenderEntireTree(this.state);

    },
    symboleChange(text){
        this.state.profilePage.newPostText=text;
        this.rerenderEntireTree(this.state)
    },
    subscriber(observer){
        this.rerenderEntireTree = observer;
    }
}

export default store;
