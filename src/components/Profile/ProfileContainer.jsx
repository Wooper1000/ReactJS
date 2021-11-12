import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeStatus, setProfile, setUserStatus, showProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


class ProfileContainer extends React.Component{
    componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : 19658;
        this.props.showProfile(userId);
        this.props.setUserStatus(userId);


}
    render(){
        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status}/>)
    }}

let mapStateToProps = (state)=>({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    })
export default compose(
    connect(mapStateToProps,{showProfile,setProfile,changeStatus,setUserStatus}),
    withRouter,withAuthRedirect
)(ProfileContainer)