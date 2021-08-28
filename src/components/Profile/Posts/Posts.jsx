import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './Posts.module.css'
const Posts = (props)=>{
    let postsElements = props.profilePage.posts.map(p=>(<Post text={p.text} likesCount={p.likesCount} author={p.author}/>))
    return(
<div className={s.Posts}>
<NewPost  addPost={props.addPost}
          symboleChange={props.symboleChange}
          newPostText={props.profilePage.newPostText}/>
    { postsElements }
</div>
    )
}
export default Posts;
