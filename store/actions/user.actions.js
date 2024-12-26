import { userService } from "../../services/user.service.js";
import { SET_USER, SET_USER_BALANCE } from "../reducers/user.reducer.js";
import { store } from "../store.js";


export function login(cred){
    return userService.login(cred)
        .then(user => {
            store.dispatch({type: SET_USER, user})
        })
        .catch(err => {
            console.log('User actions -> Cannot login', err)
            throw err
            
        })
}


export function signUp(cred){
    return userService.signup(cred)
        .then(user => {
            store.dispatch({type: SET_USER, user})
        })
        .catch(err => {
            console.log('User actions -> Cannot Signup', err)
            throw err
            
        })
}

export function logout() {
    return userService.logout()
        .then( () => {
            store.dispatch({type: SET_USER, user:null})
        })
        .catch(err => {
            console.log('User actions -> Cannot logout', err)
            throw err
            
        })
}