import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;