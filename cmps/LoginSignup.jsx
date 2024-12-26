import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { login , signUp } from '../store/actions/user.actions.js'
import { LoginForm } from './LoginForm.jsx'

const { useState } = React

export function LoginSignup() {

    const [isSignup, setIsSignUp] = useState(false)

    function onLogin(cred){
        isSignup ? _signup(cred) : _login(cred)
    }


    function _login(cred) {
        login(cred)
            .then(() => { showSuccessMsg('Welcome')})
            .catch((err) => {showErrorMsg('Something went wrong')})
    }

   

    function _signup(cred) {
       signUp(cred)
            .then(() => { showSuccessMsg('Signed in successfully') })
            .catch((err) => { showErrorMsg('Oops try again') })
    }

    return (
        <div className="login-page">
            <LoginForm
                onLogin={onLogin}
                isSignup={isSignup}
            />
            <div className="btns">
                <a href="#" onClick={() => setIsSignUp(!isSignup)}>
                    {isSignup ?
                        'Already a member? Login' :
                        'New user? Signup here'
                    }
                </a >
            </div>
        </div >
    )
}
