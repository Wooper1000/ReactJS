import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import React from 'react';

import {Form, Field} from "react-final-form";

class NewMessageForm extends React.Component {
    
    sendMessage(message) {
        debugger;
this.onSendMessage(message)
    }

    render() {
        return (
            <Form onSubmit={this.sendMessage} render={props => (
            <form onSubmit={props.handleSubmit}>
            <div><Field component={"textarea"} name={"newMessage"} placeholder={"Введите сообщение"}/></div>
            <div><button>Отправить</button></div>
            </form>
            )}/>
        )
    }

}

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let onSendMessage = () => {
        props.sendMessage();
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <NewMessageForm onSendMessage={onSendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;