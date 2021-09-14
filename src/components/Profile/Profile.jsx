import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import store from "../../redux/reduxStore";
let Profile = (props)=> {
    debugger;
    return(
    <div className={s.profile}>
<div> {!props.profile.fullName?props.profile.fullName:<ProfileInfo/>}</div>
        {/*<ProfileInfo/>*/}
        {/*<PostsContainer store={store}/>*/}

    </div>
)}
export default Profile;