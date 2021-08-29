import s from './NewPost.module.css'
import React from  'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/State";



const NewPost = (props)=>{

    let newPostElement = React.createRef();
    let addPost= ()=>{
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostActionCreator(''));
    }
    let onTextChange = ()=>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))

    }
    return(
<div className={s.NewPost}>
  <textarea ref={ newPostElement } value={props.newPostText} onChange={onTextChange}></textarea>
  <button onClick={addPost}>Add</button>
</div>
)
}
export default NewPost;