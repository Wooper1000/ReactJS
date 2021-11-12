import React from "react";
import {connect} from "react-redux";
import {authMe, logout, setUserData} from "../../redux/authReducer";
import Header from "./Header";
import {compose} from "redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.authMe()
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

export default compose(connect(mapStateToProps, {setUserData,authMe,logout}))(HeaderContainer);