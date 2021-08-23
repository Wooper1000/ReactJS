import s from './NewPost.module.css'
const NewPost = ()=>{
    return(
<div className={s.NewPost}>
  <textarea></textarea>
  <button>Add</button>
  <button>Remove</button>
</div>
)
}
export default NewPost;