import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import React from "react";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <HeaderContainer store={props.store}/>
                <Navbar/>
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/users' render={()=> <UsersContainer store={props.store}/>}/>
                    <Route path='/login' render={()=> <LoginContainer store={props.store}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
