import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    switchFollowStatus,
    toggleFetchingStatus
} from "../../redux/usersReducer";
import Users from "./Users";
import * as React from "react";
import {usersApi} from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleFetchingStatus(true);
        usersApi.getUsers(this.props.currentPage, this.props.pagesCount).then(data => {
            this.props.toggleFetchingStatus(false);
            this.props.setTotalUsersCount(data.totalCount)
            let users = data.items.filter(i => true)
            this.props.setUsers(users)
        })


    }

    switchFollowStatus = (userId) => {
        usersApi.getFollowStatus(userId).then(
            data => {
                debugger;
                if (!data) {
                    usersApi.followUser(userId).then(data => {
                        if (data.resultCode === 0) this.props.switchFollowStatus(userId)
                        else alert('Ошибочка вышла')
                    })
                } else {
                    usersApi.unfollowUser(userId).then(data => {
                        if (data.resultCode === 0) {
                            this.props.switchFollowStatus(userId)
                        } else alert('Ошибочка вышла')
                    })

                }
            }
        )
    }
    onPageChange = (pageNumber) => {
        this.props.toggleFetchingStatus(true);
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber,this.props.pagesCount).then(data => {
            this.props.toggleFetchingStatus(false)
            this.props.setTotalUsersCount(data.totalCount)
            let users = data.items.filter(i => true)
            this.props.setUsers(users)
        })

    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pagesCount={this.props.pagesCount}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   usersList={this.props.usersList}
                   switchFollowStatus={this.switchFollowStatus}
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
    switchFollowStatus,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleFetchingStatus
})(UsersAPIComponent)
export default UsersContainer;