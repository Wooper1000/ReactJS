import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";


class ProfileContainer extends React.Component{
componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId;
   profileApi.getProfile(userId).then(
        data=>{this.props.setProfile(data)}
    )
}
    render(){
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }}

let mapStateToProps = (state)=>({
        profile: state.profilePage.profile,
        auth:state.auth
    })
let ContainerComponentWithRouter = withRouter(ProfileContainer)
ProfileContainer = connect(mapStateToProps,{setProfile})(ContainerComponentWithRouter)
export default ProfileContainer;