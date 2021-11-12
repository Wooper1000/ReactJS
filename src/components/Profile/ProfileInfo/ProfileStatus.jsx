import s from './ProfileInfo.module.css'
import * as React from "react";

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status ? this.props.status : "--------------",
        isStatusEditing: false
    }
    onStatusChanging=(e)=>{
        debugger;
        this.setState({
            status:e.currentTarget.value
        })
    }
    toggleStatusEditMode=(value)=> {
        this.setState({
            isStatusEditing: value
        })
        if (value === false) {
            this.props.changeStatus(this.state.status)

        }
    }
componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
if(prevState.status!==this.state.status){
    this.setState({
        status:this.state.status
    })
}
}

    render() {

        return <>
            <div>
                <h1>Мой статус</h1>
                {this.state.isStatusEditing
                    ?
                    <div className={s.status}>
                        <input autoFocus={true} value={this.state.status}
                               onChange={this.onStatusChanging} onBlur={() => {
                            this.toggleStatusEditMode(false)
                        }}/>
                    </div>
                    :
                    <div className={s.status} onDoubleClick={() => this.toggleStatusEditMode(true)}>
                        {this.props.status}
                    </div>
                }
            </div>
        </>

    }
}

export default ProfileStatus;