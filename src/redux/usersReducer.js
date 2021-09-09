const SWITCH_FOLLOW_STATUS = "SWITCH_FOLLOW_STATUS";
const SET_USERS = "SET_USERS";
let initialState = {users:[]}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SWITCH_FOLLOW_STATUS':
            debugger;
            return {

                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.id) return {...u, followStatus: !u.followStatus}
                        return u
                    }
                )
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        default :
            return state

    }
}
export const switchFollowAC = (id) => {
    return {
        type: SWITCH_FOLLOW_STATUS,
        id
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export default usersReducer;