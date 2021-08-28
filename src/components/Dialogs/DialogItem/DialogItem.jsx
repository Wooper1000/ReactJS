import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css';

const Dialog = (props) => {
    let path = '/dialogs/'
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.activeLink} to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}
export  default  Dialog;