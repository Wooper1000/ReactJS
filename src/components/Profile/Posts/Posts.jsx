import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './Posts.module.css'
const Posts = ()=>{
    let posts = [
        {id:1,author:'Макс',text:`Хуй`,likesCount:'12'},
        {id:2,author:'Рома',text:'ты лох',likesCount:'100500'},
        {id:3,author:'Пашка',text:'он пиздит ты красава',likesCount:'0'},
        {id:4,author:'Мама',text:'Мальчики что тут происходит',likesCount:'100'},
    ]
    let postsElements = posts.map(p=>(<Post text={p.text} likesCount={p.likesCount} author={p.author}/>))
    return(
<div className={s.Posts}>
<NewPost />
    { postsElements }
</div>
    )
}
export default Posts;
