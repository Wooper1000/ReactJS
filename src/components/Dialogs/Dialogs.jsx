import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/'
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.activeLink} to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogs = [
        {id: '1', name: 'Даня'},
        {id: '2', name: 'Маша'},
        {id: '3', name: 'Рома'},
        {id: '4', name: 'Макс'},
        {id: '5', name: 'Серега'},
        {id: '6', name: 'Узурбек'},
        {id: '7', name: 'Ашот'},
    ]
    let messages = [
        {id: 1, message: 'Хэллоу'},
        {id: 2, message: 'чо молчишь'},
        {id: 3, message: 'Бират'},
    ]


    let dialogsElements = dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)
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