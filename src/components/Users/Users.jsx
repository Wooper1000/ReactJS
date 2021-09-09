import s from "./Users.module.css";
import * as React from "react";
import * as axios from 'axios';
class Users extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        if(props.usersList.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
                props.setUsers(response.data.items)
                console.log(response)
            })
        }
    }

    render() {

        return (
            this.props.usersList.map(u => (
                    <div key={u.id} className={s.user}>
                        <div className={s.avaAndFollow}>
                            <img src={u.photos.large} alt='НЕТУ'/>
                            <button onClick={() => {
                                this.props.switchFollowStatus(this.props.id)
                            }}>{u.followed ? "Отписаться":"Подписаться"}</button>
                        </div>
                        <div className={s.userInfo}>
                            <h3>{u.name}</h3>
                            <div>{u.status}</div>
                            {/*<div>*/}
                            {/*    <h3>{this.props.location.country}</h3>*/}
                            {/*    <h2>{this.props.location.city}</h2>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                )
            )

        )

    }

}

export default Users;