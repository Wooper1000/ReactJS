import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        }).then(
            response => {
                 if(response.data.resultCode === 0){
                    let{id,email,login} = response.data.data
                    this.props.setUserData(id,email,login);
                }
            }
        )
    }

    render() {

        return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        login: state.auth.login
    }
}
HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderContainer)
export default HeaderContainer;