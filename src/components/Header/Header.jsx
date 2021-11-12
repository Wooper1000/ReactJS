import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
// const authBlock = (props)=>{
//     return
//     <div>
//         <div>{props.login}</div>
//         <button>Log out</button>
//     </div>
// }
const Header = (props) => {
    return <header className={s.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Spb_metro_logo.svg/2560px-Spb_metro_logo.svg.png"
            alt='ХУЙ' id='header-logo'/>
        <div className={s.authBlock}>
            {props.isAuthorized ? <div>
                <div>{props.login}</div>
                <button onClick={props.logout}>Log out</button>
            </div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}


export default Header;