import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header  = (props)=>{
    return <header className={s.header}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Spb_metro_logo.svg/2560px-Spb_metro_logo.svg.png" alt='ХУЙ' id='header-logo'/>
    <div className={s.authBlock}>
        {props.isAuthorized ? props.login : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}
export default Header;