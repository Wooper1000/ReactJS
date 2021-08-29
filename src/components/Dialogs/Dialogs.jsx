import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import React from 'react'
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/State";
const Dialogs = (props) => {
    let newMessageText = React.createRef();
    let dialogsElements = props.dialogPage.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)

    let sendMessage = ()=>{
        props.dispatch(sendMessageActionCreator())
        props.dispatch(updateNewMessageActionCreator(''))
    }
    let updateNewMessageText = ()=>{
        let text = newMessageText.current.value;
        props.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={updateNewMessageText} ref={newMessageText} value={props.dialogPage.newMessageText}></textarea>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;