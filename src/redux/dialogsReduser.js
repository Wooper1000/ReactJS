const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
const dialogsReduser = (state, action) => {
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
export default dialogsReduser;