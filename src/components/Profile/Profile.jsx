
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/reduxStore";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <PostsContainer store={store}/>

        </div>
    )
}
export default Profile;