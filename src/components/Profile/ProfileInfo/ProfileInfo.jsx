import s from './ProfileInfo.module.css'
import * as React from "react";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

class ProfileInfo extends React.Component {

    render() {
        if (!this.props.profile) return <Preloader/>
        return <div className={s.profileInfo}>
            {/*<div className={s.profileLogo}>*/}
            {/*    <img src='https://a.cdn-hotels.com/gdcs/production180/d1647/96f1181c-6751-4d1b-926d-e39039f30d66.jpg' alt='хуй2' />*/}
            {/*</div>*/}
            <div>
                <div> {this.props.profile.fullName}</div>
                <img src={this.props.profile.photos.large} alt=""/>
            </div>
           <ProfileStatus status={this.props.status} changeStatus={this.props.changeStatus}/>

        </div>

    }
}

export default ProfileInfo;