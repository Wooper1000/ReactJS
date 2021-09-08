import {connect} from "react-redux";
import {switchFollowAC} from "../../redux/usersReducer";
import Users from "./Users";
let mapStateToProps = (state)=> {
return {
        usersList: state.users
    }

}
let mapDispatchToProps = (dispatch)=>{
    return {
        switchFollowStatus: (id) => {
            dispatch(switchFollowAC(id))
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default  UsersContainer;