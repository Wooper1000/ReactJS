import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
let mapStateToProps = (state)=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch)=>{

    return {
        sendMessage : ()=>{dispatch(sendMessageActionCreator())},
        updateNewMessageText : (text)=>{
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


// const DialogsContainer2 = (props) => {
//     let state = props.store.getState().dialogsPage;
//     let sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator());
//         props.store.dispatch(updateNewMessageActionCreator(''));
//     }
//     let updateNewMessageText = (text) => {
//         props.store.dispatch(updateNewMessageActionCreator(text));
//     }
//
//     return (
//        <Dialogs sendMessage ={sendMessage}
//                 updateNewMessageText ={updateNewMessageText}
//                 dialogs = {state.dialogs}
//                 messages = {state.messages}
//                 newMessageText = {state.newMessageText}
//        />
//
// )
// }
export default DialogsContainer;