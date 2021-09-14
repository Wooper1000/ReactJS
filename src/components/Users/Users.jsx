import s from "./Users.module.css";
import * as React from "react";
import Preloader from "../common/preloader/Preloader";
import no_avatar from '../../assets/no-avatar.jpg'
import {NavLink} from "react-router-dom";
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<span className={props.currentPage === i ? s.activePage : null} onClick={() => {
            props.onPageChange(i)
        }}> {i} </span>)
    }

    return  <>
       <div>{props.isFetching ? <Preloader /> : null}</div>
        <div>
            <span>{pages}</span>
        </div>
        {
            props.usersList.map(u => {
                debugger;
                return(
                    <div key={u.id} className={s.user}>
                        <div className={s.avaAndFollow}>
                            <NavLink to={'/profile/'+u.id}>
                            <img src={u.photos.small ? u.photos.small : no_avatar} alt='НЕТУ'/>
                            </NavLink>
                            <button onClick={() => {
                                props.switchFollowStatus(u.id)
                            }}>{u.followed ? "Отписаться" : "Подписаться"}</button>
                        </div>
                        <div className={s.userInfo}>
                            <h3>{u.name}</h3>
                            <div>{u.status}</div>
                        </div>
                    </div>
                )}
            )

        }
    </>


}

export default Users;