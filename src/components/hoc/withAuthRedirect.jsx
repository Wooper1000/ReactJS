import * as React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {rememberCurrentPage} from "../../redux/authReducer";



export const  withAuthRedirect = (Component)=>{
    let mapStateToProps = (state) => {
        return {
            isAuth:state.auth.isAuthorized,
            page:state.auth.page
        }
    }
    class Wrapper extends React.Component {
        componentDidMount() {
            this.props.rememberCurrentPage(this.props.match.url)
        }

        render(){
            if(!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

   return connect(mapStateToProps,{rememberCurrentPage})(Wrapper)

}
