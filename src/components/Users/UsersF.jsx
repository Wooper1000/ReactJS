import s from './Users.module.css'
import User from './User/User'
import React from "react";

const Users = (props) => {


    let url = 'https://sun9-70.userapi.com/s/v1/ig2/-5AcrDp3AtfHHJ9i-FZZSSzWQsVxh3Pr2PkG22QbdSYhwWPcBP71o1p_sW4dt3jt29FbqLGzHXrMGFwRv3bCr4Mc.jpg?size=50x50&quality=96&crop=0,235,966,966&ava=1';
    let switchFollow = (id) => {
        props.switchFollowStatus(id)
    }
    let usersList = props.usersList.users.map(u => {
            return (
                <User avaURL={url}
                      switchFollowStatus={switchFollow}
                      fullName={u.fullName}
                      followStatus={u.followStatus ? "Отписаться" : "Подписаться"}
                      status={u.status}
                      location={u.location}
                      id={u.id}
                />
            )
        }
    )

    return (
        <div className={s.users}>
            {usersList}
        </div>
    )
}
export default Users;