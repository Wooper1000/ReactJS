import s from './NewPost.module.css'
import React from  'react'
const NewPost = (props)=>{

    let newPostElement = React.createRef();
    let addPost= ()=>{
        props.addPost();
        props.symboleChange('');
    }
    let onTextChange = ()=>{
        let text = newPostElement.current.value;
        props.symboleChange(text)

    }
    return(
<div className={s.NewPost}>
  <textarea ref={ newPostElement } value={props.newPostText} onChange={onTextChange}></textarea>
  <button onClick={addPost}>Add</button>
</div>
)
}
export default NewPost;