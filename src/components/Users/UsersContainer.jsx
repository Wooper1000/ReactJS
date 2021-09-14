import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    switchFollow,
    toggleFetchingStatus
} from "../../redux/usersReducer";
import Users from "./Users";
import * as React from "react";
import * as axios from "axios";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesCount}`).then(response => {
            this.props.toggleFetchingStatus(false);
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })


    }

    onPageChange = (pageNumber) => {
        this.props.toggleFetchingStatus(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesCount}`).then(response => {
            this.props.toggleFetchingStatus(false)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pagesCount={this.props.pagesCount}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   usersList={this.props.usersList}
                   switchFollowStatus={this.props.switchFollowStatus}
                   isFetching={this.props.isFetching}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        usersList: [...state.usersPage.users],
        pagesCount: state.usersPage.pagesCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         switchFollowStatus: (id) => {
//             dispatch(switchFollowAC(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         toggleFetchingStatus: (isFetching) => {
//             dispatch(toggleFetchingStatusAC(isFetching))
//         }
//     }
// }
const UsersContainer = connect(mapStateToProps, {
    switchFollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleFetchingStatus
})(UsersAPIComponent)
export default UsersContainer;