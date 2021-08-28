import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger;
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <Posts profilePage={props.profilePage}
                   addPost={props.addPost}
                   symboleChange={props.symboleChange}
            />

        </div>
    )
}
export default Profile;