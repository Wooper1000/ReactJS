const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
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
        case "SEND-MESSAGE": {
          return {
              ...state,
              messages: [...state.messages, {id: 22, message: action.message}]
          }
        }
        default:
            return state;
        }

}

export const sendMessage = (message) => ({
    message,
    type: SEND_MESSAGE
})

export default dialogsReducer;