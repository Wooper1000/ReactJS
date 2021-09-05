import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
        props.store.dispatch(updateNewMessageActionCreator(''));
    }
    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (
       <Dialogs sendMessage ={sendMessage}
                updateNewMessageText ={updateNewMessageText}
                dialogs = {state.dialogs}
                messages = {state.messages}
                newMessageText = {state.newMessageText}
       />

)
}
export default DialogsContainer;