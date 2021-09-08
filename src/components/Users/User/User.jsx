import s from './User.module.css'
const User = (props)=>{

    return(
        <div className={s.user}>
            <div className={s.avaAndFollow}>
                <img src={props.avaURL}  alt='НЕТУ'/>
                <button onClick={()=>{props.switchFollowStatus(props.id)}}>{props.followStatus}</button>
            </div>
            <div className={s.userInfo}>
<h3>{props.fullName}</h3>
                <div>{props.status}</div>
                <div>
                    <h3>{props.location.country}</h3>
                    <h2>{props.location.city}</h2>
                </div>
            </div>
        </div>
    )
}
export default User;