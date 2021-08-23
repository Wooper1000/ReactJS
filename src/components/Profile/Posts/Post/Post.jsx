import s from "./Post.module.css"
const Post = (props)=>{
    return(
        <div className={s.Post}>
           <div className={s.PostAvatar}>
               <img src='https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png' alt='хуй'/>
               </div>
            <h3>{props.author} написал</h3>
               <text>{props.text}</text>
               <div>Like <strong>{props.likesCount}</strong></div>
        </div>
    )
}
export default Post;