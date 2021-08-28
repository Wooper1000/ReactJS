import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/State'
import ReactDOM from "react-dom";
import App from "./App";
import Profile from "./components/Profile/Profile";


let rerenderEntireTree = (state)=>{
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.state}
                 addPost={store.addPost.bind(store)}
                 symboleChange={store.symboleChange.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
