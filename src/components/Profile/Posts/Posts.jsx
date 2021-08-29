import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './Posts.module.css'
const Posts = (props)=>{
    debugger;
    let postsElements = props.profilePage.posts.map(p=>(<Post text={p.text} likesCount={p.likesCount} author={p.author}/>))
    return(
<div className={s.Posts}>
<NewPost  dispatch={props.dispatch}
          newPostText={props.profilePage.newPostText}/>
    { postsElements }
</div>
    )
}
export default Posts;
