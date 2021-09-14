import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component{
componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(
        response=>this.props.setProfile(response.data)
    )
}


    render(){
        return (<Profile {...this.props}/>)
    }}

let mapStateToProps = (state)=>({
        profile: state.profilePage.profile
    })
ProfileContainer = connect(mapStateToProps,{setProfile})(ProfileContainer)
export default ProfileContainer;