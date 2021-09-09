import {connect} from "react-redux";
import {setUsersAC, switchFollowAC} from "../../redux/usersReducer";
import Users from "./Users";
let mapStateToProps = (state)=> {
    debugger;
return {
        usersList: [...state.usersPage.users]
    }

}
let mapDispatchToProps = (dispatch)=>{
    return {
        switchFollowStatus: (id) => {
            dispatch(switchFollowAC(id))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default  UsersContainer;