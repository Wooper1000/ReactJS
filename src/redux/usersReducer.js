const SWITCH_FOLLOW_STATUS = "SWITCH_FOLLOW_STATUS"
let initialState = {
    users: [
        {id: 1, followStatus:false,fullName: 'Shabanskii D.', status: 'searching for a job', location: {city: 'SPB', country: 'RUSSIA'}},
        {id: 2, followStatus:true,fullName: 'Yakovlev R.', status: 'getting fat', location: {city: 'SPB', country: 'RUSSIA'}}
    ]
}
const usersReducer = (state=initialState, action) => {

switch (action.type) {
    case 'SWITCH_FOLLOW_STATUS':
        debugger;
        return {

            ...state,
            users: state.users.map(
                u=>{
                    if(u.id===action.id) return {...u,followStatus:!u.followStatus}
                    return u
                }
            )
        }
    default : return state

}
}
export const switchFollowAC = (id)=>{
    return {
        type : SWITCH_FOLLOW_STATUS,
        id
    }
}
export default  usersReducer;