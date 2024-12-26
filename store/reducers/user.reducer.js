import { userService } from "../../services/user.service.js";


export const SET_USER = 'SET_USER'
export const SET_USER_BALANCE = 'SET_USER_BALANCE'

const initialState = {
    loggedInUser: userService.getLoggedInUser()
}

export function userReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {

        //+ User cases 
        case SET_USER:
            return{
                ...state,
                loggedInUser: cmd.user
            }
        case SET_USER_BALANCE:
            const loggedInUser = {...state.loggedInUser, score:cmd.score}
            return { ...state,loggedInUser}
            
        default:
            return state
    }
}