import {Field, Form} from "react-final-form";
import React from "react";

export const LoginForm = (props)=>{
    return (
         <Form onSubmit={props.login} render={
             props => (
                 <form onSubmit={props.handleSubmit}>
                     <div><Field component={"input"} name={"email"} placeholder={"Login"}/></div>
                     <div><Field component={"input"} name={"password"} placeholder={"Password"}/></div>
                     <div><Field component={"input"} name={"rememberMe"} placeholder={"Remember me"}
                                 type={"checkbox"}/>Remember me</div>
                     <button>Log In</button>
                 </form>
           )
            }
        />
    )
}


