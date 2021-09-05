import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let state = props.store.getState()
    return (
        <Posts
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
            updateNewPostText={updateNewPostText}
            addPost={addPost}/>
    )
}
export default PostsContainer;
