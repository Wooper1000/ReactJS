import Posts from './Posts/Posts'
import s from './Profile.module.css'
const Profile  = ()=>{
    return (
    <div className={s.Profile}>
    <div className={s.ProfileLogo}>
      <img src='https://a.cdn-hotels.com/gdcs/production180/d1647/96f1181c-6751-4d1b-926d-e39039f30d66.jpg' alt='хуй2' />
      </div>
    <div>ava + info</div>
    <Posts />
  </div>
  )
}
export default Profile;