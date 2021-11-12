import * as axios from 'axios';

const instance = axios.create({
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "580d330c-c099-4be2-9d6c-5ff5b24f0da8"
    },
    withCredentials:true,
})
export let usersApi = {
    getUsers(currentPage, pagesCount) {
        return instance.get(`users?page=${currentPage}&count=${pagesCount}`).then(response => response.data)
    },
    getFollowStatus(userId) {
        return instance.get('follow/' + userId).then(response => response.data)
    },
    followUser(userId) {
        return instance.post('follow/' + userId).then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete('follow/' + userId).then(response => response.data)
    }
}
export let profileApi = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId){
        return instance.get('profile/status/'+userId)
    },
    updateStatus(text){
        return instance.put('/profile/status/',{status:text})
    }
}
export let authApi = {
    login(values){
      return instance.post('auth/login',{...values})
    },
    logout(){
        return instance.delete('auth/login')
    },
    authMe() {
        return instance.get('auth/me')
    }
}