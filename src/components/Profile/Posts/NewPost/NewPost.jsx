import s from './NewPost.module.css'
import React from  'react'
const NewPost = (props)=>{

    let newPostElement = React.createRef();
    let addPost= ()=>{

        props.dispatch({type:"ADD-POST"});
        props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:''});
    }
    let onTextChange = ()=>{
        let text = newPostElement.current.value;
        props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:text})

    }
    return(
<div className={s.NewPost}>
  <textarea ref={ newPostElement } value={props.newPostText} onChange={onTextChange}></textarea>
  <button onClick={addPost}>Add</button>
</div>
)
}
export default NewPost;