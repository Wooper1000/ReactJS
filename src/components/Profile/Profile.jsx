import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import PostsContainer from "./Posts/PostsContainer";
//import store from "../../redux/reduxStore";
let Profile = (props)=> {

    return(
    <div className={s.profile}>
        <ProfileInfo profile={props.profile}/>
        {/*<PostsContainer store={store}/>*/}

    </div>
)}
export default Profile;