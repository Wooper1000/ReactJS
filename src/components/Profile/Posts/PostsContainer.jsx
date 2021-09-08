import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addPost:()=>{dispatch(addPostActionCreator())},
        updateNewPostText :(text)=>{dispatch(updateNewPostActionCreator(text))}
    }
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
// const PostsContainer2 = (props) => {
//     let updateNewPostText = (text) => {
//         props.store.dispatch(updateNewPostActionCreator(text))
//     }
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//     let state = props.store.getState()
//     return (
//         <Posts
//             newPostText={state.profilePage.newPostText}
//             posts={state.profilePage.posts}
//             updateNewPostText={updateNewPostText}
//             addPost={addPost}/>
//     )
// }
export default PostsContainer;
