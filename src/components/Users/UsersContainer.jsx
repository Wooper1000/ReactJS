import {connect} from "react-redux";
import {
    getUsers,
    onPageChange,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    switchFollowStatus,
    switchingFollowUser,
} from "../../redux/usersReducer";
import Users from "./Users";
import * as React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
     this.props.getUsers(this.props.current,this.props.pagesCount)
    }
    render() {
        return (
            <Users {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {...state.usersPage,auth:state.auth}

}
export default compose (
    connect(mapStateToProps, {
        switchFollowStatus,
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        switchingFollowUser,
        getUsers,
        onPageChange
    })
)(UsersContainer)