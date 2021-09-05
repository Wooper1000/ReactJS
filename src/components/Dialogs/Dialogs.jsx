import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import React from 'react';


const Dialogs = (props) => {
    let newMessageText = React.createRef();
    let dialogsElements = props.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let onSendMessage = ()=>{
        props.sendMessage();
        props.updateNewMessageText('');
    }
    let onUpdateNewMessageText = ()=>{
        let text = newMessageText.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onUpdateNewMessageText} ref={newMessageText} value={props.newMessageText}></textarea>
                <button onClick={onSendMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;