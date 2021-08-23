import s from "./Post.module.css"
const Post = (props)=>{
    return(
        <div className={s.Post}>
           <div className={s.PostAvatar}>
               <img src='https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png' alt='хуй'/>
               </div>
               <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, expedita.</text>
               <div>Like <strong>{props.LikeCount}</strong></div>
        </div>
    )
}
export default Post;