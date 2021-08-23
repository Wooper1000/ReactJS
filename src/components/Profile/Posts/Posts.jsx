import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './Posts.module.css'
const Posts = ()=>{
    return(
<div className={s.Posts}>
<NewPost />
<Post LikeCount='ДОХУЯ'/> 
<Post LikeCount='100500'/> 
<Post LikeCount='0'/> 
<Post LikeCount='10000000000'/> 
</div>
    )
}
export default Posts;