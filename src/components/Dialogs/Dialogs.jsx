import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/'
    return (
        <div className={s.dialog}>
            <NavLink to={ path + props.Id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props)=>{
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name="Даня" Id="1"/>
                <Dialog name="Маша" Id="2"/>
                <Dialog name="Рома" Id="3"/>
                <Dialog name="Макс" Id="4"/>

            </div>
            <div className={s.messages}>
                <Message message={'Хэллоу'}/>
                <Message message={'чо молчишь'}/>
                <Message message={'Бират'}/>
            </div>
        </div>
    )
}
export default Dialogs;