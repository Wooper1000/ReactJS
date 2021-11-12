import React from 'react'
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {authApi} from "../../api/api";
import {login} from "../../redux/authReducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
let mapStateToProps = (state) =>{
    return {
        prevPage: state.auth.page,
        isAuthorized:state.auth.isAuthorized
    }
}
class LoginContainer extends React.Component {
    login = (values)=>{
        this.props.login({...values},this.props.prevPage)
    }


    render() {
        if(this.props.isAuthorized){
                return <Redirect to={this.props.prevPage}/>
        }
        return (<div>
                <h1>Login</h1>
                <LoginForm login={this.login}/>
            </div>
        )
    }
}



export default compose(connect(mapStateToProps,{login}))(LoginContainer)