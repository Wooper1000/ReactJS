import s from './ProfileInfo.module.css'
const ProfileInfo = (props) =>{
    return (
        <div className={s.profileInfo}>
            <div className={s.profileLogo}>
                <img src='https://a.cdn-hotels.com/gdcs/production180/d1647/96f1181c-6751-4d1b-926d-e39039f30d66.jpg' alt='хуй2' />
            </div>
            <div>
                <div> {props.profile ? props.profile.fullName:null}</div>
                <img src={props.profile ? props.profile.photos.large:null} alt=""/>
            </div>
        </div>
    )
}
export default ProfileInfo;