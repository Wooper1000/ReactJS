const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
let initialState = {
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
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            state.messages.push({ id: 22, message: state.newMessageText })
            state.newMessageText = 'Введи текст'
            return state;

        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.textMessage;    
            return state;
        default: return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    textMessage: text
})
export default dialogsReducer;