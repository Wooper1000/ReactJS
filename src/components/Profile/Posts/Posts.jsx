import Post from './Post/Post';
import s from './Posts.module.css'
import React from 'react'
const Posts = (props)=>{
    let postsElements = props.posts.map(p => (
        <Post text={p.text} likesCount={p.likesCount} author={p.author}/>))

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
        props.updateNewPostText("");
    }
    let onTextChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.Posts}>
            <div className={s.NewPost}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onTextChange}></textarea>
                <button onClick={onAddPost}>Add</button>
            </div>
            {postsElements}
        </div>
    )
}
export default Posts;
