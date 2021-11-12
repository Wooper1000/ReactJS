import {usersApi} from "../api/api";

const SWITCH_FOLLOW_STATUS = "SWITCH_FOLLOW_STATUS";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_FETCHING_STATUS = "TOGGLE_FETCHING_STATUS"
const SWITCHING_FOLLOW_STATUS = "SWITCHING_FOLLOW_STATUS"
let initialState = {
    users: [],
    currentPage: 1,
    pagesCount: 50,
    totalUsersCount: 0,
    isFetching: false,
    isSwitchingFollowStatus: false,
    switchingFollowUsers: [],
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SWITCH_FOLLOW_STATUS':

            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.id) return {...u, followed: !u.followed}
                        return u
                    }
                )
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_TOTAL_USERS_COUNT":
            return{
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "TOGGLE_FETCHING_STATUS" :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SWITCHING_FOLLOW_STATUS":
            return {
                ...state,
                switchingFollowUsers: action.isFetching ? [...state.switchingFollowUsers, action.userId] : [...state.switchingFollowUsers.filter(u => !u)]
            }
        default :
            return state

    }
}
export const switchFollow = (id) => {
    return {
        type: SWITCH_FOLLOW_STATUS,
        id
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const setCurrentPage = (currentPage) =>{
 return {
     type : SET_CURRENT_PAGE,
     currentPage
 }
}
export const toggleFetchingStatus = (isFetching) => {
    return {
        type: TOGGLE_FETCHING_STATUS,
        isFetching
    }
}
export const switchingFollowUser = (userId, isFetching) => {
    return {
        type: SWITCHING_FOLLOW_STATUS,
        userId,
        isFetching
    }
}
export const getUsers = (currentPage, pagesCount) => {
    return (dispatch) =>{
        dispatch(toggleFetchingStatus(true));
        usersApi.getUsers(currentPage, pagesCount).then(data => {
            dispatch(toggleFetchingStatus(false))
            dispatch(setTotalUsersCount(data.totalCount))
            let users = data.items.filter(i => true)
            dispatch(setUsers(users))
        })
    }
}

export const switchFollowStatus = (userId)=>{
    return (dispatch)=>{
        dispatch(switchingFollowUser(userId,true));
        usersApi.getFollowStatus(userId).then(
            data => {
                if (!data) {
                    usersApi.followUser(userId).then(data => {
                        if (data.resultCode === 0) {
                            dispatch(switchFollow(userId))
                            dispatch(switchingFollowUser(userId,false))
                        } else alert('Ошибочка вышла')
                    })
                } else {
                    usersApi.unfollowUser(userId).then(data => {
                        if (data.resultCode === 0) {
                            dispatch(switchFollow(userId))
                            dispatch(switchingFollowUser(userId,false))
                        } else alert('Ошибочка вышла')
                    })

                }

            }
        )
    }
}

export const onPageChange = (pageNumber,pagesCount)=>{
    return (dispatch)=>{
        dispatch(toggleFetchingStatus(true))
        dispatch(setCurrentPage(pageNumber))
        usersApi.getUsers(pageNumber,pagesCount).then(data => {
            dispatch(toggleFetchingStatus(false))
            dispatch(setTotalUsersCount(data.totalCount))
            let users = data.items.filter(i => true)
            dispatch(setUsers(users))
        })

    }
}

export default usersReducer;