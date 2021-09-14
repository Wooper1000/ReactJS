const SWITCH_FOLLOW_STATUS = "SWITCH_FOLLOW_STATUS";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_FETCHING_STATUS = "TOGGLE_FETCHING_STATUS"
let initialState = {
    users: [],
    currentPage: 2,
    pagesCount : 50,
    totalUsersCount : 0,
    isFetching : false
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
            return{
                ...state,
                currentPage: action.currentPage
            }
        case "TOGGLE_FETCHING_STATUS" :
            return {
                ...state,
                isFetching: action.isFetching
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
export const toggleFetchingStatus = (isFetching) =>{
 return {
     type : TOGGLE_FETCHING_STATUS,
     isFetching
 }
}
export default usersReducer;